

const alltabs = document.querySelectorAll('.panel');

function doAnimation(){
    console.log('clicked');
    this.classList.toggle("open");
}

function bringtext(event){
    console.log(event.propertyName);
    if (event.propertyName.includes('flex'))
    this.classList.toggle('open-active');
    
}
alltabs.forEach(tab => tab.addEventListener('click', doAnimation));
alltabs.forEach(tab => tab.addEventListener('transitionend', bringtext));


