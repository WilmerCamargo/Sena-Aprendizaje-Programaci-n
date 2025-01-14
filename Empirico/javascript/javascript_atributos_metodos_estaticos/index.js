// ATRIBUTOS Y MÉTODOS ESTÁTICOS
class Mascota {
    static cola = 'larga';
    pelaje = 'lacio';
    static contadorMascota = 0;
    constructor(nombre, edad){
    this._numero = ++Mascota.contadorMascota;
    this._nombre = nombre;
    this._edad = edad;
    }
    get numeroCreacion(){
        return this._numero;
    }
    static saludo(){
        return 'mover la cola';
    }
}

let mascota1 = new Mascota('Boby', 5);
let mascota2 = new Mascota('Max', 8);
let mascota3 = new Mascota('min', 4);

document.write(`Nombre: ${mascota1._nombre}, Cola: ${mascota1._edad}`);
console.log(Mascota.cola); // larga

document.write( `<br> Pelaje: ${mascota1.pelaje}`);
console.log(mascota1.pelaje); // cola

document.write('<br>', mascota1.numeroCreacion); // 1
console.log(mascota1.numeroCreacion); // 1
document.write('<br>', mascota2.numeroCreacion); // 2
console.log(mascota2.numeroCreacion); // 2
document.write('<br>', mascota3.numeroCreacion); // 3
console.log(mascota3.numeroCreacion); // 3

document.write(`<br> ${Mascota.saludo()}`);
console.log(Mascota.saludo()); // mover la cola

class Perro extends Mascota{
    constructor(nombre, edad, raza){
        super(nombre, edad);
        this._raza = raza;
    }
}

document.write(` <br> Nombre: ${Perro.cola}`);
console.log(Perro.cola); // larga
document.write(` <br> ${Perro.saludo()}`);
console.log(Perro.saludo()); // mover la cola
document.write(` <br>`, Perro.contadorMascota);
console.log(Perro.contadorMascota); // 3

let perro1 = new Perro('Rufus', 5, 'Dalmata');

document.write(` <br>`, Perro.contadorMascota); // 4
console.log(Perro.contadorMascota); // 4


// `<br> Nombre: ${mascota2.nombre}, Cola: ${mascota2._edad}`