document.addEventListener("DOMContentLoaded", ()=>{

let btnadd = document.getElementById("btnadd");


btnadd.addEventListener("click", ()=>{
    fetch('https://jsonplaceholder.typicode.com/users', {
        headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'POST',
            body: JSON.stringify({
                name: document.getElementById("name").value,
                lastname: document.getElementById("lastname").value,
                birthday: document.getElementById("birthday").value
  })
})
.then(response => response.json())
.then(data => console.log(data))
});
});