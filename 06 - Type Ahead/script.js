
const citiesArray = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
fetch(citiesArray)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

                   
  console.log(cities);
  function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
      // here we need to figure out if the city or state matches what was searched
      const regex = new RegExp(wordToMatch, 'gi');
      return place.city.match(regex) || place.state.match(regex)
    });
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function displayValue(){
     const matched = findMatches(this.value, cities);
     const html = matched.map( item =>{
         const regss = RegExp(this.value, 'gi');
         const cityName = item.city.replace(regss, `<span class="hl">${this.value}</span>`);
         const stateName = item.city.replace(regss, `<span class="hl">${this.value}</span>`);
        return `
        <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(item.population)}</span>
        </li>
        `;


     }).join('');

     suggesting.innerHTML = html;
     
  }

  let input = document.querySelector('.search');
  let suggesting = document.querySelector('.suggestions');
  
  input.addEventListener('change', displayValue);
  input.addEventListener('keyup', displayValue);
  
