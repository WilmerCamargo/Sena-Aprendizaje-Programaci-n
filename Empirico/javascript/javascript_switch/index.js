let nummeroDia = prompt('Ingrese el día de la semana: ');

switch (nummeroDia) {
    case '1' :
        document.write('<h1>El día de la hoy es <br> LUNES </h1>');
        break;
    case '2' :
        document.write('<h1>El día de la semana es <br> MARTES </h1>');
        break;
    case '3' :
        document.write('<h1>El día de la semana es <br> MIERCOLES </h1>');
        break;
    case '4' :
        document.write('<h1>El día de la semana es <br> JUEVES </h1>');
        break;
    case '5' :
        document.write('<h1>El día de la semana es <br> VIERNES </h1>');
        break;
    case '6' :
        document.write('<h1>El día de la semana es <br> SABADO </h1>');
        break;
    case '7' :
        document.write('<h1>El día de la semana es <br> DOMINGO </h1>');
        break;
    default :
    document.write('<h1>Número de día inválido. Por favor ingrese un número entre 1 y 7.</h1>');
}