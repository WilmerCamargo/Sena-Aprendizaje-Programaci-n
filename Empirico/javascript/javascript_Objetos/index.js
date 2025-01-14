// OBJETOS - JAVASCRIPT

// let = fruta = 'manzana'; // Esta es una variable
// let = fruta = ['manzana', 'pera']; // Esta es un arreglo "array"

// // Esta es un objeto
// let frutas = {
//     familia: 'citricos',
//     cantidad: 200,
//     tipo: ['limon', 'naranja', 'mandarina']
// }

let usuario = {
    nombre: 'Maria',
    edad: 20,
    estudiante: true
}
console.log(usuario); // {nombre: 'Maria', edad: 20, estudiante: ''}
console.log(usuario.nombre); // Maria
console.log(usuario.edad); // 20
// document.write(usuario.nombre);
// document.write(usuario.estudiante);
// document.write(usuario.edad);


// Agregar una nueva propiedad al objeto
usuario.carrera = 'contabilidad';
console.log(usuario.carrera); // contabilidad


// Eliminar una propiedad al objeto
delete usuario.edad;
console.log(usuario); // {nombre: 'Maria', estudiante: '', carrera: 'contabilidad'}


// Consultar una propiedad al objeto
console.log(usuario.hasOwnProperty('nombre')); // true
console.log(usuario.hasOwnProperty('estudiante')); // true



// // // // // Metodo de corchetes

let otroUsuario = {
    nombre: 'Pedro',
    edad: 25,
    estudiante: true,
    'tiene pasaporte': true,
    idiomas: {
        nativo: 'español',
        extranjero: {
            ingles: 'avanzado',
            frances: 'medio',
            alemán: 'bajo'

        }
    }
}
console.log(otroUsuario['estudiante']); // true
console.log(otroUsuario['tiene pasaporte']); // true


// // // // Constructores de objetos

let disco1 = {
    artista: 'artista',
    titulo: 'Título',
    genero: 'genero'
}

function Disco(artista, album, año){
    this.artista = artista;
    this.album = album;
    this.año = año;
}

let disco2 = new Disco('wilmer', 'lokos', 2001);
console.log(disco2); // Disco {artista: 'wilmer', album: 'lokos', año: 2001

let disco3 = new Disco('Jazmin', 'lokas', 2000);
console.log(disco3); // Disco {artista: 'jazmin', album: 'lokas', año: 2000
