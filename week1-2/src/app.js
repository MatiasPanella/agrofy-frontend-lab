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

const arrPoke= []
const url = 'https://pokeapi.co/api/v2/pokemon/'
for (i =1 ; i <= 150; i++) {
  fetch(url + i)
    .then(res => res.json())
    .then(data => {
      const arrayPoke = {
        name: data.name,
        id:data.id,
        type:data.types[0].type.name,
        img:data.sprites.front_default
      }
      arrPoke.push(arrayPoke)
      
      const divPoke=document.getElementById('pokemones')
      const div = document.createElement('div')
      div.classList.add("col-md-2")
      for (i=0; i<=arrPoke.length; i++){
        div.innerHTML=`<img src='${arrPoke[i].img}'/>
        <h3>${arrPoke[i].name}</h3>
        <p>Type: ${arrPoke[i].type}</p>
        <button id='btnaggfav'>Add to favs</button>`
        divPoke.appendChild(div)
      }
      
    })
    .catch(err => console.log(err))
  }  
      

