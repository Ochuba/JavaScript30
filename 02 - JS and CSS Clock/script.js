const secCol = document.querySelector('.second-hand');
const minCol = document.querySelector('.min-hand');
const hourCol = document.querySelector('.hour-hand');
function dateSet(){
 const current = new Date();
 const seconds = current.getSeconds();
 const degSeconds = ((seconds/60) * 360) + 90;
 const minutes = current.getMinutes();
 const mindeg = ((minutes/60) * 360) + 90;
 const hour = current.getHours();
 const hourdeg = ((hour/12) * 360) + 90;
 secCol.style.transform =`rotate(${degSeconds}deg)`;
 minCol.style.transform =`rotate(${mindeg}deg)`;
 hourCol.style.transform =`rotate(${hourdeg}deg)`;

 console.log(seconds);
 console.log(minutes);
 
 
    
}

setInterval(dateSet, 1000);