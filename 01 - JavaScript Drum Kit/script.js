
 let removetransition = k =>{
    k.target.classList.remove("playing");
}
let playsound = k =>{

    let audio = document.querySelector(`audio[data-key="${k.keyCode}"]`);
    let key = document.querySelector(`.key[data-key="${k.keyCode}"]`);

    if (!audio) return ;
    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();

} 
const keys = document.querySelectorAll(".key");

keys.forEach( k =>{
    k.addEventListener('transitionend', removetransition);
})

window.addEventListener('keydown', playsound);