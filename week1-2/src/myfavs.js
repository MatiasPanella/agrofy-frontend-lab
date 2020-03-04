window.onload = () => {
    if (localStorage.length > 0) {
        const local = localStorage
        for(i=0; i<Object.keys(local).length; i++){
            const pokemonLocal=localStorage.getItem(Object.keys(local)[i])
            const jsonPokemon = JSON.parse(pokemonLocal) 
            const divPokFavs = document.createElement('div')
            divPokFavs.classList.add("col-md-2")
            divPokFavs.innerHTML=`<img src='${jsonPokemon.img}'>
            <h3>${jsonPokemon.name}</h3>
            <p>Type: ${jsonPokemon.type}</p>
            <button class="pokemon activeFav" id=${jsonPokemon.id}>Remove</button>`
        document.getElementById('pokemones').appendChild(divPokFavs)
        }
       
    }
}