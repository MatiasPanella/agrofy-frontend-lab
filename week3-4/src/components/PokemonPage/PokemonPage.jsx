import React, { useEffect, useState } from 'react';
import './PokemonPage.css'
import PokeCard from '../PokeCard/PokeCard'

const PokemonCard = () => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(async () => {
        await setPokemonFunction()
    }, []);

    const setPokemonFunction = async () => {
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
        <div className='pokemones'>
            {pokemon.length > 0 ?
                pokemon.map(pok => {
                    return (<PokeCard
                    id={pok.id}
                    name={pok.name}
                    type={pok.type}
                    img={pok.urlImg}/>
                    )
                }
                )
                :
                <p>Cargando pokemones...</p>
            }
        </div>
    )
}
export default PokemonCard