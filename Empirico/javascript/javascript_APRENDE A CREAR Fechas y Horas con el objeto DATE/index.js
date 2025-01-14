
// Primera forma
// OBJETO DATE 

let fechaActual = new Date();
console.log(fechaActual);
console.log(fechaActual.getDate());
console.log(fechaActual.getMonth());
console.log(fechaActual.getFullYear());
console.log(fechaActual.getDay());

// Segunda forma
// TIMESTAMP 01 Enero 1970 -> Actualidad

console.log(fechaActual.getTime());
console.log(Date.now());
console.log(+fechaActual);  

let fechaConTimestamp = new Date(1730841341493);
console.log(fechaConTimestamp);

// Tercera forma
// STRING + Acepta cualquier formato

let fechaConString = new Date("05-11-2024");
console.log(fechaConString);


// Cuarta forma
// Ingrsando parametros Date(año, mes, fecha, horas, minutos, segundos, ms)

let fechaConParametros = new Date(2021,1,1)
console.log(fechaConParametros);

// SETTERS Modificar objetos 
fechaConParametros.setFullYear(2023);
console.log(fechaConParametros);

// EJERCICIO 1: Mostrar la fecha actual con los días de la semana en español con el siguiente formato: Martes 5 de Noviemnbre de 2024

let fecha = new Date();
console.log(fecha.getDay());
console.log(fecha.getDate());
console.log(fecha.getMonth());
console.log(fecha.getFullYear());

let diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Sabado'];
console.log(diaSemana[fecha.getDay()]);

let mesAño = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
console.log(mesAño[fecha.getMonth()]);

console.log(`${diaSemana[fecha.getDay()]}, ${fecha.getDate()} de ${mesAño[fecha.getMonth()]} de ${fecha.getFullYear()}`);
document.write(`${diaSemana[fecha.getDay()]}, ${fecha.getDate()} de ${mesAño[fecha.getMonth()]} de ${fecha.getFullYear()}`);

// EJERCICIO 2: Mostrar la hora actual en formato 03:15:15

let hora = new Date();
console.log(hora.toLocaleTimeString());
document.write('<br>' + hora.toLocaleTimeString());