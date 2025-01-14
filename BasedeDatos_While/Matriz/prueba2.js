// Definición de los datos
var Datos = [
    ["51662369","Sandra Milena Castellanos Marín","Medicina","VI","3.5","1.1","0.4","1.6"],
    ["80223220","Luis Andrés Montoya Montoya","Ingeniería de Telecomunicaciones","IV","3.0","3.3","4.2","4.5"],
    ["79444555","Francisco Martínez Marin","Ingeniería de Alimentos","III","3.4","4.5","4.4","3.0"],
    ["79001003","Luis Francisco Castañeda Roa","Ingeniería de Sistemas","VIII","3.3","3.4","4.5","4.4"],
    ["79003003","Pedro José Pineda Pineda","Odontología","VI","4.0","4.1","3.9","4.5"],
    ["52900901","Ruth Paola Mahecha Mahecha","Odontología","VII","3.6","3.6","3.8","3.9"],
    ["26900345","Lucia Valderrama Pineda","Fisioterapia","VIII","4.4","4.5","4.1","3.1"],
    ["35676900","Mariela Lucia Olguín Ramírez","Medicina","V","3.0","3.1","4.6","3.7"],
    ["27101234","Lucila Peñaranda Peñaranda","Enfermería","II","2.5","4.6","3.4","4.6"],
    ["80231678","Milena Palacios Palacios","Ingeniería Mecánica","III","3.6","3.4","3.5","4.5"],
    ["1030617979","Luis Alberto Castellanos Frias","Odontología","VI","4.0","4.1","3.9","4.5"],
    ["1019066342","Nercy Aleidis Rengifo Rengifo","Fisioterapia","VII","3.6","3.6","3.8","3.9"],
    ["1014249436","Fabián Raúl Moreno Carvajal","Medicina","VIII","4.4","4.5","4.1","3.1"],
    ["1022380843","Jonathan Mauricio Baez Baez","Enfermería","V","3.0","3.1","4.6","3.7"],
    ["1012353083","Germán Dario Rodríguez Baez","Ingeniería Mecánica","II","2.5","4.6","3.4","4.6"],
    ["1030630231","Diego Fernando Giraldo Romero","Ingeniería de Petróleo","III","3.6","3.4","3.5","4.5"],
    ["1020765332","Luz Herminda Fonseca Daza","Psicología","VI","4.0","4.1","3.9","4.5"],
    ["1022357137","Rhonald Dahian Jiménez García","Ingeniería Civil","VI","3.5","4.0","3.3","3.5"],
    ["52263227","Edgar Andrés Bejarano Pérez","Ingeniería Civil","IV","3.0","3.3","4.2","4.5"],
    ["1013579638","Diego Fernando Bautista Gómez","Ingeniería Civil","III","3.4","4.5","4.4","3.0"],
    ["1030617979","Luis Alberto Jaime Hernández","Ingeniería de Sistemas","II","4.0","4.1","3.9","4.5"],
    ["1019066342","Zabala Pereira Nercy Aleidys","Ingeniería Mecánica","V","3.0","3.3","4.2","4.5"],
    ["1014249436","Fabian Raul Duarte Serrano","Medicina","IV","3.6","3.6","3.8","3.9"],
    ["1022380843","Jhonatan Mauricio Rodríguez C.","Ingeniería de Petróleos","I","3.4","4.5","4.4","3.0"],
    ["1012353083","German Dario González Riaño","Ingeniería de Petróleos","III","3.4","4.5","4.4","3.0"],
    ["96040605441","Michael Duvan Beltran Salcedo","Medicina","IV","3.0","3.3","4.2","4.5"],
    ["1013641467","Romero Piña Dylan David","Fisioterapia","II","3.6","3.6","3.8","3.9"],
    ["1030632107","Ruben Dario Fuquene C.","Ingeniería Mecánica","V","3.0","3.3","4.2","4.5"],
    ["53072770","Maryory Cuesta Rodríguez","Ingeniería de Telecomunicaciones","IV","3.0","3.3","4.2","4.5"],
    ["1014245401","Cristian Camilo Ortiz Ortiz","Ingeniería de Telecomunicaciones","VI","2.0","3.1","4.8","1.5"],
    ["95070115361","Yuly Katherine Sierra","Ingeniería Mecánica","V","2.7","3.9","4.7","4.5"],
    ["1020796896","Daniel Andres Zapata Bello","Ingeniería Mecánica","IV","3.0","3.3","4.2","4.5"],
    ["1003819124","José Eitner Montiel Aldana","Medicina","IV","3.0","3.3","4.2","4.5"],
    ["1031131906","Luis Guillermo Andrade Cifuentes","Medicina","VIII","3.9","3.8","2.6","4.5"],
    ["1019018284","Jairo Joel Noguera Melo","Medicina","VIII","3.7","3.7","4.7","4.0"],
    ["1014218719","Bryan Andrés Ortegón","Medicina","IV","3.0","3.3","4.2","4.5"],
    ["1030611565","Mónica Andrea Plaza Bernal","Medicina","IV","3.6","3.8","4.8","4.0"]
];

// Función para calcular el promedio de las notas usando while y mostrar en el formulario
function calcularPromedio(fila) {
    var sumaNotas = 0;
    var contador = 0;
    var i = 4; // Empezamos desde la posición de la primera nota
    
    // Usamos un bucle while para recorrer las notas
    while (i < 8) {
        sumaNotas += parseFloat(Datos[fila][i]);
        contador++;
        i++;
    }

    var promedio = sumaNotas / contador;

    // Mostrar los resultados en el formulario
    document.getElementById("nombre").value = Datos[fila][1];
    document.getElementById("semestre").value = Datos[fila][3];
    document.getElementById("asignatura").value = Datos[fila][2];
    
    // var notas = ""; // no ayuda para mostrar las notas en una sola casilla.
    // i = 4; // Resetear i para mostrar todas las notas
    // while (i < 8) {
    //     notas += Datos[fila][i] + " ";
    //     i++;
    // }   
    // document.getElementById("notas").value = notas.trim(), 

    // se realiza prceso para mostrar la nota unitariamente
    document.getElementById("notas1").value = Datos[fila][4];
    document.getElementById("notas2").value = Datos[fila][5];
    document.getElementById("notas3").value = Datos[fila][6];
    document.getElementById("notas4").value = Datos[fila][7];


    document.getElementById("promedio").value = promedio.toFixed(1);
}

// Función para buscar los datos de una cédula
// function buscarDatos() {
//     var cedula = document.getElementById("cedula").value;
//     var encontrada = false;

//     for (var i = 0; i < Datos.length; i++) {
//         if (Datos[i][0] === cedula) {
//             calcularPromedio(i);
//             encontrada = true;
//             break;
//         }
//     }

function buscarDatos() {
    var cedula = document.getElementById("cedula").value;
    var encontrada = false;
    var i = 0;

    do {
        if (Datos[i][0] === cedula) {
            calcularPromedio(i);
            encontrada = true;
            // break;
        }
        i++;
    } while (i < Datos.length);

// do while "hay que cambiar la funcion del for a un do while para la busqueda de datos"
    if (!encontrada) {
        alert("Cédula no encontrada");
        // Limpiar campos si la cédula no se encuentra
        document.getElementById("nombre").value = "";
        document.getElementById("semestre").value = "";
        document.getElementById("asignatura").value = "";
        document.getElementById("notas").value = "";
        document.getElementById("promedio").value = "";
    }
}
