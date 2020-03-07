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
      muestraPokemones(arrayPoke, true);
      arrPoke.push(arrayPoke);
    })
    .catch(err => console.log(err))
}


function busquedaPokemones() {
  const inputpokemon = document.getElementById('inputpokemon')
  let b = 0;
  const res = document.getElementById('pokemones');
  res.innerHTML = '';
  if (inputpokemon.value != "") {
    for (i = 0; i < arrPoke.length; i++) {
      if (arrPoke[i].name.includes(inputpokemon.value)) {
        b = 1;
        muestraPokemones({
          name: arrPoke[i].name,
          id: arrPoke[i].id,
          type: arrPoke[i].type,
          img: arrPoke[i].img
        }, false);
      }
    }
  }
  if (b == 0 || inputpokemon.value == "") {
    for (i = 0; i < arrPoke.length; i++) {
      muestraPokemones(arrPoke[i], false);
    }
  }

}

function muestraPokemones(pokemon, firstSearch) {
  const divpokemon = document.getElementById('pokemones')
  if (typeof (divpokemon) != undefined && divpokemon != null) {
    const div = document.createElement('div')
    div.classList.add("col-md-2")
    div.innerHTML = `<img src='${pokemon.img}'>
           <h3>${pokemon.name}</h3>
           <p>Type: ${pokemon.type}</p>
           <button class="pokemon noactive" id=${pokemon.id}>Add to favs</button>`

    divpokemon.appendChild(div)
    if(!firstSearch){
      const pok = document.getElementById(pokemon.id);
      if(pok != null){
        pok.addEventListener('click', () => {
          eventClick(pokemon.id)});
  
      }else{
        console.log('No existe');
        
      }
    }
    
  } else {
    const divPoke = document.createElement('div')
    div.setAttribute('id', 'pokemones')
    const div = document.createElement('div')
    div.classList.add("col-md-2")
    div.innerHTML = `<img src='${pokemon.img}'>
           <h3>${pokemon.name}</h3>
           <p>Type: ${pokemon.type}</p>
           <button class="pokemon noactive" id=${pokemon.id}>Add to favs</button>`
    divPoke.appendChild(div);
    const pok = document.getElementById(pokemon.id);
    if(!firstSearch){
      if(pok != null){
        pok.addEventListener('click',  () => {
          eventClick(pokemon.id)});
  
      }else{
        console.log('No existe');
        
      }
    }
    
  }
}


window.onload = () => {

  const poke = document.getElementsByClassName('pokemon');
  for (var i = 0; i < poke.length; i++) {
    const id = poke[i].id;
    poke[i].addEventListener('click',  ()=> {
      eventClick(id);
    })
  }
}

const eventClick = (id) => {
  const found = arrPoke.find(element => element.id == id)
    const pokemonFound = {
      name: found.name,
      id: found.id,
      type: found.type,
      img: found.img
    }
    const verifyClass = document.getElementById(id)
    if (verifyClass.classList.contains('noactive')) {
      verifyClass.classList.remove('noactive')
      verifyClass.classList.add('activefav')
      verifyClass.innerHTML = 'Remove'
      localStorage.setItem(found.id, JSON.stringify(pokemonFound))  
    } else {
      verifyClass.classList.remove('activefav')
      verifyClass.classList.add('noactive')
      verifyClass.innerHTML = 'Add to favs'
      localStorage.removeItem(found.id)
    }
     
}