let Datos = [
    ["51662369","Sandra Milena Castellanos Marín","Medicina","VI","3.5","1.1","0.4","1.6"],
    ["80223220","Luis Andrés Montoya Montoya","Ingeniería de Telecomunicaciones","IV","3.0","3.3","4.2","4.5"],
    ["79444555","Francisco Martínez Marin","Ingeniería de Alimentos","III","3.4","4.5","4.4","3.0"],
    ["79001003","Luis Francisco Castañeda Roa","Ingeniería de Sistemas","VIII","3.3","3.4","4.5","4.4"],
    ["79003003","Pedro José Pineda Pineda","Odontología","VI","4.0","4.1","3.9","4.5"],
    ["52900901","Ruth Paola Mahecha Mahecha","Odontología","VII","3.6","3.6","3.8","3.9"],
    ["26900345","Lucia Valderrama Pineda","Fisioterapia","VIII","4.4","4.5","4.1","3.1"],
    ["35676900","Mariela Lucia Olguín Ramírez","Medicina","V","3.0","3.1","4.6","3.7"],
    ["27101234","Lucila Peñaranda Peñaranda","Enfermería","II","2.5","4.6","3.4","4.6" ],
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
    ["1030617979","Luis Alberto Jaime Hernández","Ingeniería  de Sistemas","II","4.0","4.1","3.9","4.5"],
    ["1019066342","Zabala Pereira Nercy Aleidys","Ingeniería Mecánica","V","3.0","3.3","4.2","4.5"],
    ["1014249436","Fabian Raul Duarte Serrano","Medicina","IV","3.6","3.6","3.8","3.9"],
    ["1022380843","Jhonatan Mauricio Rodríguez  C.","Ingeniería de Petróleos","I","3.4","4.5","4.4","3.0"],
    ["1012353083","German Dario González  Riaño","Ingeniería de Petróleos","III","3.4","4.5","4.4","3.0"],
    ["96040605441","Michael Duvan Beltran Salcedo","Medicina","IV","3.0","3.3","4.2","4.5"],
    ["1013641467","Romero Piña Dylan David","Fisioterapia","II","3.6","3.6","3.8","3.9"],
    ["1030632107","Ruben Dario Fuquene C.","Ingeniería Mecánica","V","3.0","3.3","4.2","4.5"],
    ["53072770","Maryory Cuesta Rodríguez","Ingeniería de Telecomunicaciones","IV","3.0","3.3","4.2","4.5"],
    ["1014245401","Cristian Camilo Ortiz Ortiz","Ingeniería de Telecomunicaciones","VI","2.0","3.1","4.8","1.5"],
    ["95070115361","Yuly Katherine Sierra","Ingeniería Mecánica","V","2.7","3.9","4.7","4.5"],
    ["1020796896","Daniel Andres Zapata Bello","Ingeniería Mecánica","IV","3.0","3.3","4.2","4.5"],
    ["1003819124","José Eitner Montiel  Aldana","Medicina","IV","3.0","3.3","4.2","4.5"],
    ["1031131906","Luis Guillermo Andrade Cifuentes","Medicina","VIII","3.9","3.8","2.6","4.5"],
    ["1019018284","Jairo Joel Noguera melo","Medicina","VIII","3.7","3.7","4.7","4.0"],
    ["1014218719","Bryan Andrés Ortegón","Medicina","IV","3.0","3.3","4.2","4.5"],
    ["1030611565","Mónica Andrea Plaza Bernal","Medicina","IV","3.6","3.8","4.8","4.0"]
];
document.write("El valor de los datos "+ Datos [9]); 




// Inicializamos variables para calcular el promedio global
let totalSum = 0;
let count = 0;

// Inicializamos el índice para iterar sobre el array
let i = 0;

// Usamos un bucle while para recorrer cada fila
while (i < Datos.length) {
    // Inicializamos variables para la suma de notas y el número de notas
    let sum = 0;
    let numGrades = 0;
    
    // Índice para las últimas 4 columnas de la fila actual
    let index = Datos[i].length - 4;
    
    // Convertir las últimas 4 columnas de cadena a números reales y calcular la suma
    while (index < Datos[i].length) {
        let grade = parseFloat(Datos[i][index]);
        sum += grade;
        numGrades++;
        index++;
    }
    
    // Calcular el promedio para la fila actual
    let average = sum / numGrades;
    
    // Acumulamos el total para el promedio global
    totalSum += sum;
    count += numGrades;

    // Imprimir el promedio para la fila actual (opcional)
    console.log(`Promedio para estudiante ${Datos[i][1]}: ${average}`);

    // Incrementar el índice para pasar a la siguiente fila
    i++;
}

// Calcular el promedio global
let globalAverage = totalSum / count;

// Imprimir el promedio global
console.log(`Promedio global de todas las notas: ${globalAverage}`);

let colIndex = Datos[36].length - 4;
let sumatoria = 0;
let contador = 0;
while (colIndex < Datos[36].length) {
sumatoria += parseFloat(Datos[36][colIndex]);
contador++;
colIndex++; 
}
let promedio = sumatoria / contador;
document.write("<br>" + "Promedio notas: " + promedio);