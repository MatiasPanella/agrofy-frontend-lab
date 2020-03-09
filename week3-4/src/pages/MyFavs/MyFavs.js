import React from 'react'
import '../../components/PokemonPage/PokemonPage.css'
import PokeCard from '../../components/PokeCard/PokeCard'
const MyFavs = () =>{
   function traePokemones() {
        for (let i=0; i<Object.keys(localStorage).length; i++){
            const pokemonLocal =localStorage.getItem(Object.keys(localStorage)[i])
            console.log(JSON.parse(pokemonLocal) )
           
        }
    }
    return(
        <div>
            <button onClick={()=>traePokemones()}>HOla</button>
        </div>
    )
}
export default MyFavs