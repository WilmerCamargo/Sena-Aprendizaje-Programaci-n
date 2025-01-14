// Selencionando Elementos

// Por ID

let elementoPorId = document.getElementById('Parrafo1');
elementoPorId.innerHTML = 'HTML';

// Por nombre de la clase

let elementosPorClase = document.getElementsByClassName('parrafos');
document.write(elementosPorClase.length);
elementosPorClase[1].innerHTML = 'CSS';

// Por etiqueta

let elementosPorEtiqueta = document.getElementsByTagName('p');
document.write(`<br> ${elementosPorEtiqueta.length} <br>`);
elementosPorEtiqueta[2].innerHTML = 'Javascript';

// Modificando estilos

elementoPorId.style.background = "black";
elementoPorId.style.color = "white";
elementoPorId.style.borderRadius = "8px";
elementoPorId.style.width = "140px";
elementoPorId.style.textAlign = "center";