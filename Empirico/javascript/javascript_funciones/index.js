function saludoinicial(name = "David") {
    document.write(`Hola , mi nombre es ${name} <br>`);
}

saludoinicial("Stive");
saludoinicial("jessy");
saludoinicial();

let c = 10;

function sumarNumeros(a, b) {
    let c = 1;
    let suma = a + b+ c;
    return suma;
    document.write("Hola");
}

let resultado = sumarNumeros(8, 30);
document.write(resultado);