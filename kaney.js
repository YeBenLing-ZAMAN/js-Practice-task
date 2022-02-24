
const load = () => {
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(json => showText(json))
}

function showText(text) {
    const div = document.getElementById('text-show');
    div.innerText = '';
    const h3 = document.createElement('h3');
    h3.classList.add('text-field');
    h3.innerText = text.quote;
    div.appendChild(h3);
} 