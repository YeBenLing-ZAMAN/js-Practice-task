const showus = () =>{
    fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    .then(data => display(data))
}
function display(data){
    const ul = document.getElementById('buddy-list');
    const buddies = data.results;
    for(const buddy of buddies){
    const li = document.createElement('li');
    li.innerText =`Name : ${buddy.name.first}  Emails : ${buddy.email}` ;
    ul.appendChild(li);
    }
}