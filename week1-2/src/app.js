

const arrPoke = []

const url = 'https://pokeapi.co/api/v2/pokemon/'
for (i = 1; i <= 150; i++) {
  fetch(url + i)
    .then(res => res.json())
    .then(data => {
      const arrayPoke = {
        name: data.name,
        id: data.id,
        type: data.types[0].type.name,
        img: data.sprites.front_default
      }
      muestraPokemones(arrayPoke);
      arrPoke.push(arrayPoke);
    })

    .catch(err => console.log(err))
}


function busquedaPokemones() {
  const inputpokemon = document.getElementById('inputpokemon')
  let b = 0;
  document.getElementById('pokemones').remove();
  if (inputpokemon.value != "") {
    for (i = 0; i < arrPoke.length; i++) {
      if (arrPoke[i].name.includes(inputpokemon.value)) {
        b = 1;
        muestraPokemones({
          name: arrPoke[i].name,
          id: arrPoke[i].id,
          type: arrPoke[i].type,
          img: arrPoke[i].img
        });
      }
    }
  }
  if (b == 0 || inputpokemon.value == "") {
    for (i = 0; i < arrPoke.length; i++) {
      muestraPokemones(arrPoke[i]);
    }
  }

}

function muestraPokemones(pokemon) {
  const divpokemon = document.getElementById('pokemones')
  if (typeof (divpokemon) != undefined && divpokemon != null) {
    const div = document.createElement('div')
    div.classList.add("col-md-2")
    div.innerHTML = `<img src='${pokemon.img}'>
           <h3>${pokemon.name}</h3>
           <p>Type: ${pokemon.type}</p>
           <button class="pokemon" id="${pokemon.id}">Add to favs</button>`
    divpokemon.appendChild(div)
  } else {
  const divPoke = document.createElement('div')
  div.setAttribute('id', 'pokemones')
  const div = document.createElement('div')
  div.classList.add("col-md-2")
  div.innerHTML = `<img src='${pokemon.img}'>
           <h3>${pokemon.name}</h3>
           <p>Type: ${pokemon.type}</p>
           <button class="pokemon" id="${pokemon.id}">Add to favs</button>`
  divPoke.appendChild(div)
}
}

$(document).on('click', '.pokemon', () => {
  const id = $(this).attr('id')
  const found = arrPoke.find(element => element.id == id)
  const pokemonFound = {
    name: found.name,
    id: found.id,
    type: found.type,
    img: found.img
  }
  const verifyClass = document.getElementById(id)
  if (verifyClass.classList.contains('pokemon')) {
    verifyClass.classList.remove('pokemon')
    verifyClass.classList.add('activeFav')
    verifyClass.innerHTML = 'Remove'
  }
  localStorage.setItem(found.id, JSON.stringify(pokemonFound))
})
$(document).on('click', '.activeFav', function () {
  const id = $(this).attr('id')
  localStorage.removeItem(id)
  const verifyClass = document.getElementById(id)
  if (verifyClass.classList.contains('activeFav')) {
    verifyClass.classList.remove('activeFav')
    verifyClass.classList.add('pokemon')
    verifyClass.innerHTML = 'Add to favs'
  }
})

window.onload = () => {
  const localPokemon = []
  localPokemon.push()
}






