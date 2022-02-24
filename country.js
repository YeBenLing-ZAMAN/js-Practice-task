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
        const h3 = document.createElement('h3');
        h3.innerText= `Country :${country.name.common}`;
        const p = document.createElement('p');
        p.innerText = `Capital city :${country.capital}`
        div.appendChild(h3);
        div.appendChild(p);
        mainDiv.appendChild(div);
    });

}