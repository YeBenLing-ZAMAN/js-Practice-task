

const search=()=>{
    const inputField = document.getElementById('input-field').value;
    // console.log(inputField);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputField}`;

    fetch(url)
    .then(res => res.json())
    .then(data => display(data))
}

const display =(data)=>{
    console.log(data.meals);
}
