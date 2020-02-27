window.onscroll = () => {
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop> 50){
        document.getElementById("navbar").style.background = 'lightblue'
        document.getElementById("navbar").style.boxShadow = '0px 10px 5px 0px rgba(0,0,0,0.75)'
        document.querySelector("svg").style.display='none'
    } else {
        document.getElementById("navbar").style.background = 'rgb(255,222,155)' 
        document.getElementById("navbar").style.boxShadow = 'none'
        document.querySelector("svg").style.display='block'
    }
}