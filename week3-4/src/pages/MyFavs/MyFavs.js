import React, {useState, useEffect} from 'react'
import '../../components/PokemonPage/PokemonPage.css'
import PokeCard from '../../components/PokeCard/PokeCard'
const MyFavs = () => {
    const [pokemonInStorage, setPokemonInStorage]=useState([])
    const arrayPokemonLocal = []
    useEffect(async()=>{
        await traePokemones()
    },[])
    const  traePokemones =() =>{
        for (let i = 0; i < Object.keys(localStorage).length; i++) {
            const pokemonLocal = localStorage.getItem(Object.keys(localStorage)[i])
            console.log(JSON.parse(pokemonLocal))
            arrayPokemonLocal.push({
                name: JSON.parse(pokemonLocal).name,
                type: JSON.parse(pokemonLocal).type,
                imgLocal: JSON.parse(pokemonLocal).image,
                id: JSON.parse(pokemonLocal).id
            })
           
        }
        setPokemonInStorage(arrayPokemonLocal)
    }
   
    return (
        <div className='pokemones'>
             {pokemonInStorage.length > 0 ?
                pokemonInStorage.map(pok => {
                   return( <PokeCard
                    id={pok.id}
                    name={pok.name}
                    type={pok.type}
                    img={pok.imgLocal}
                    fav={false}/>
                    )
                   } 
                   )
                   : pokemonInStorage.length==0 ?
                   <h2>No hay pokemones en el LocalStorage</h2>
                   :
                   <h2>Cargando...</h2>
                } 
        </div>
    )
}
export default MyFavs