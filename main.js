const name = document.getElementById('firstname');
const lastname=document.getElementById('lastname');
const birthdate = document.getElementById('birthdate');
const form = document.getElementById('form');

function setLS() {
    localStorage.setItem('name', name.value)
    localStorage.setItem('lastname', lastname.value)
    localStorage.setItem('birthdate', birthdate.value)
}

form.addEventListener('submit',function(e){
    e.preventDefault();
    setLS();

    let datos = {
        name: localStorage.getItem('name'),
        lastname: localStorage.getItem('lastname'),
        birthdate: localStorage.getItem('birthdate')
    }
    alert(`Datos a enviar Nombre: ${datos.name}, Apellido: ${datos.lastname}, Fecha de nacimiento: ${datos.birthdate}`);
    
    fetch('https://jsonplaceholder.typicode.com/users',{
        method:"POST",
        body: JSON.stringify(datos),
        headers: {"Content-type":"application/json; charset=UTF-8"}
    })
        .then(response=>response.json())
        .then(json=>console.log(json))
        .catch(err=>console.log(err))
})

