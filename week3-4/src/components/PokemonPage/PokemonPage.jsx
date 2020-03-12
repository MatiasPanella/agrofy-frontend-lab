import React, { useEffect, useState } from 'react';
import './PokemonPage.css'
import PokeCard from '../PokeCard/PokeCard'
import SearchBar from '../SearchBar/SearchBar';

const PokemonCard = () => {
    const [pokemon, setPokemon] = useState([]);
    const [filtred, setFiltred] = useState([]);

    useEffect(() => {
        setPokemonFunction();
    }, [filtred]);

    const findPokemon = (namePokemon) => {
        if (namePokemon.name != '') {
            const arrayPokeFiltered = pokemon.filter(poke => {
                return poke.name.toLowerCase().includes(namePokemon.name);
            })
            setFiltred(arrayPokeFiltered);
        }
        else if(namePokemon.name == ''){
            const value = '';
            setFiltred(value);
        }
        setPokemonFunction();
    }


    const setPokemonFunction = () => {
        const promises = [];
        for (let i = 1; i <= 150; i++) {
            promises.push(fetch('https://pokeapi.co/api/v2/pokemon/' + i)
                .then(resp => {
                    return resp.json()
                }))
        }
        if (filtred.length == 0) {
            Promise.all(promises)
                .then(poke => {
                    const inter = poke.map(res => {
                        return {
                            name: res.name,
                            id: res.id,
                            type: res.types[0].type.name,
                            urlImg: res.sprites.front_default
                        }
                    });
                    setPokemon(inter)

                })
        } else if (filtred.length > 0) {
            Promise.all(promises)
                .then(int => {
                    int = filtred.map(filt => {
                        return {
                            name: filt.name,
                            id: filt.id,
                            type: filt.type,
                            urlImg: filt.urlImg
                        }
                    });
                    setPokemon(int)
                })
        
        }



    }

    return (
        <div>
            <SearchBar onSearch={findPokemon} />
            <div className='pokemones'>
                {pokemon.length > 0 ?
                    pokemon.map(pok => {
                        return (<PokeCard key={pok.id}
                            id={pok.id}
                            name={pok.name}
                            type={pok.type}
                            img={pok.urlImg}
                            fav={false} />
                        )
                    }
                    )
                    :
                    <p>Cargando pokemones...</p>
                }
            </div>
        </div>
    )
}
export default PokemonCard