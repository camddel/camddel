// const btnEmpezar = document.getElementById('btnEmpezar');

// cargarEventos();

// function cargarEventos(){
//     btnEmpezar.addEventListener('click', verificar);

// }

// function verificar(){
//     e.preventDefault();

//     let nombre = document.getElementById('nombre');
//     let email = document.getElementById('email');
//     let number = document.getElementById('number');

//     console.log(nombre);
// }



// const formulario = document.querySelector(".formulario");

// // console.log(formulario)

// // Crear el evento


// formulario.addEventListener("submit", validarformulario)

// // mis funciones
// function validarformulario(e){
//     e.preventDefault();
//     const name = document.querySelector("#name").value
//     const email = document.querySelector("#email").value
//     const number = document.querySelector("#number").value

//     console.log(name, email, number)
//     const boton = document.getElementsByClassName("boton");
//     boton.textContent = `Hola ${name} tu email es ${email} y tu telefono es ${number}`
// }


// const formulario = document.getElementById('formulario');
// const inputs = document.querySelectorAll('#formulario input');

// const validarformulario = (e) => {
//     // console.log('se ejecuto');
//     switch (e.target.name) {
//         case "nombre":
//             validarCampo(e.target, 'nombre');
//         break;
//         case "email":
//             validarCampo();
//         break;
//         case "telefono":
//             validarCampo();
//         break;
//     }
// }

// const validarCampo = (input,campo) => {
//     if(input.test(campo)){

//     }
// }

// inputs.forEach((input) => {
//     input.addEventListener('keyup', validarformulario);
//     input.addEventListener('blur', validarformulario);

// })

// formulario.addEventListener('submit', (e) =>{
//     e.preventDefault();
// });

const nombre = document.getElementById("nombre")
const email = document.getElementById("email")
const telefono = document.getElementById("telefono")
const form = document.getElementById("formulario")

form.addEventListener("submit", e=>{
    
} )