const loadcountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displaycountries(data));
}

loadcountries();

const displaycountries = counties => {
    /**
     *  for (const country of counties) {
         console.log(country);
        }
    */
    const div = document.getElementById('show-country');
    const mainDiv = document.getElementById('show-country');
    counties.forEach(country => {

        const div = document.createElement('div');
        div.classList.add('country-details');

        // div.innerHTML = `
        //     <h3>Country :${country.name.common}</h3>
        //     <p>Capital city :${country.capital}v</p>
        //     <button onclick = loadcountry('${country.name.common}')> show Details </button>
        //     `

        
        const h3 = document.createElement('h3');
        h3.innerText= `Country :${country.name.common}`;
        const p = document.createElement('p');
        p.innerText = `Capital city :${country.capital}`
        const btn = document.createElement('button');
        btn.innerText = 'Show Details';
        
        btn.setAttribute("onclick", `loadcountry('${country.name.common}')`);
        
        div.appendChild(h3);
        div.appendChild(p);
        div.appendChild(btn);
        

        mainDiv.appendChild(div);
    });

}


function loadcountry(countryName) {
    const url = `https://restcountries.com/v3.1/name/${countryName}`
    fetch(url)
        .then(res => res.json())
        .then(data => desplayCountryDetails(data[0]))
}

function desplayCountryDetails(country) {
    const divCountryDetails = document.getElementById('country-details');
    console.log(country);

    divCountryDetails.innerHTML= `
            <h4>Country Name : ${country.name}</h4>
            <p>Population Name : ${country.population}</p>
            <img width='250px' src= "${country.flags.png}">
            `


}