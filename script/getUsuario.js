 const formulario = document.getElementById('formulario')
 const btnGuardar = document.getElementById('btnGuardar')










 formulario.addEventListener('submit',(e) =>{
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email');

    fetch(' http://localhost:4003/usuario', {
        method: 'POST',
        body: JSON.stringify({
            nombre: name,
            apellido: lastName,
            email: email
        }),
        headers: {
            "Content-Type": ""
        }
    })
 })