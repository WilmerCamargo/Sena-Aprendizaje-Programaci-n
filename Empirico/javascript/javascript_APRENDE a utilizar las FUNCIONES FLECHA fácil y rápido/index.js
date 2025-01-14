// Funcion clásica - Hoisting

function saludar(nombre){
    return 'Hola ' + nombre;
}

console.log(saludar('David'));

// Función anónima

let saludo = function(nombre){
    return 'Salidos ' + nombre;
}

console.log(saludo('David'));

// FUNCIONES FLECHA () => {} 
    // 1. Es una función anónima
    // 2. No necesita de la palbra reservada function
    // 3. Permite optimizar el código
    
let saludos2 = nombre => 'Saludos ' + nombre;

let suma = (a,b) => a + b;

let obj = () => ({nombre: 'Bob', edad: 20});