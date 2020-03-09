import React, { useEffect, useState } from 'react';
import './PokemonPage.css'
import PokeCard from '../PokeCard/PokeCard'
import SearchBar from '../SearchBar/SearchBar';

const PokemonCard = () => {
    const [pokemon, setPokemon] = useState([]);
    const [inputValue, setInputValue]=('')

    function handleChange(newValue){
        setInputValue(newValue);
    }
    useEffect(async () => {
        await setPokemonFunction()
    }, []);

    const setPokemonFunction = async () => {
        setPokemon([])
        const arrayPokemones = []
        for (let i = 1; i <= 150; i++) {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + i)
            const res = await response.json()
            arrayPokemones.push({
                name: res.name,
                id: res.id,
                type: res.types[0].type.name,
                urlImg: res.sprites.front_default
            });
        }
        setPokemon(arrayPokemones)
        
    }
    return (
        <div>
            <SearchBar 
            value={inputValue} onChange={handleChange}/>
        <div className='pokemones'>
            {pokemon.length > 0 ?
                pokemon.map(pok => {
                    return (<PokeCard
                    id={pok.id}
                    name={pok.name}
                    type={pok.type}
                    img={pok.urlImg}
                    fav={false}/>
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