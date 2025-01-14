// // setTimeout - ejecuta una función DESPUËS de cierto timepo
// function saludo(nombre){
//     console.log(`Hola ${nombre}, buenos días`);
// }

// let temporizadorID = setTimeout(saludo, 2000, 'Wilmer');

// clearTimeout(temporizadorID);

// // setInterval - ejecuta una función repetidamente cada cierto tiempo

// // let numero = 5;
// // function conteo(){
//     //     console.log(`lanzamiento en ${numero} segundos`);
// //     numero--;
// //     if (numero == 0){
//     //         clearInterval(lanzamineto);
//     //     } 
//     // }
    
// // let numero = 5;
// // let lanzamineto = setInterval(()=>{
// //         console.log(`lanzamiento en ${numero} segundos`);
// //         numero--;
// //         if (numero == 0){
// //             clearInterval(lanzamineto);
// //         } 
// // }, 1000); 

// // // // // // setTimeout anidado
// let numero = 0;

// let incrementoID = setTimeout(function incremento(){
//     console.log(numero);
//     numero++;
//     incrementoID = setTimeout(incremento, 1000);
// }, 1000);


// CREACIÓN DEL RELOJ 
// EJERCICIO - Imprimir en pantalla la hora actualizada cada segundo.

let mostrarFecha = document.getElementById('fecha');
let mostrarReloj = document.getElementById('reloj');

let fecha = new Date();

let diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

let mesAño = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

mostrarFecha.innerHTML = `${diaSemana[fecha.getDay()]}, ${fecha.getDate()} de ${mesAño[fecha.getMonth()]} de ${fecha.getFullYear()}`;

setInterval(() => {
    let hora = new Date();
    mostrarReloj.innerHTML = hora.toLocaleTimeString();
}, 1000);