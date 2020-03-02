var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: 'c2edLO4GxGs',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.stopVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}


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
  $('#pokemones').empty();
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
  const divPoke = document.getElementById('pokemones')
  const div = document.createElement('div')
  div.classList.add("col-md-2")
  div.innerHTML = `<img src='${pokemon.img}'>
           <h3>${pokemon.name}</h3>
           <p>Type: ${pokemon.type}</p>
           <button class="pokemon" id="${pokemon.id}">Add to favs</button>`
  divPoke.appendChild(div)
}

$(document).on('click', '.pokemon', function () {
  const id = $(this).attr('id')
  const found = arrPoke.find(element => element.id == id)
  const pokemonFound = {
    name: found.name,
    id: found.id,
    type: found.type,
    img: found.img
  }
  localStorage.setItem(found.id, JSON.stringify(pokemonFound))
  const verifyClass = document.getElementById(id)
  if (verifyClass.classList.contains('pokemon')) {
    verifyClass.classList.remove('pokemon')
    verifyClass.classList.add('activeFav')
    verifyClass.innerHTML = 'Remove'
  } 
})





