document.getElementById('calcular').addEventListener('click', calculadora);
document.getElementById('limpio').addEventListener('click', Limpiar);

function Limpiar() {
    document.getElementById('Num1').value = '';
    document.getElementById('Num2').value = '';
    document.getElementById('Resul').value = '';
    document.querySelectorAll('input[name="Operaciones"]').forEach(radio => radio.checked = false);
}

function calculadora() {
    var num1 = parseFloat(document.getElementById('Num1').value);
    var num2 = parseFloat(document.getElementById('Num2').value);
    var operaciones_elementos = document.querySelectorAll('input[name="Operaciones"]');
    var result;

    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor ingresa números válidos.');
        return;
    }

    for (var i = 0; i < operaciones_elementos.length; i++) {
        if (operaciones_elementos[i].checked) {
            switch (operaciones_elementos[i].id) {
                case 'sum':
                    result = num1 + num2;
                    break;
                case 'mult':
                    result = num1 * num2;
                    break;
                case 'res':
                    result = num1 - num2;
                    break;
                case 'div':
                    if (num2 === 0 || num1 === 0) {
                        alert('No se puede dividir entre cero.');
                        return;
                    }
                    result = num1 / num2;
                    break;
                default:
                    alert('Operación no válida.');
                    return;
            }
            document.getElementById('Resul').value = result;
            return;
        }
    }
    alert('Selecciona una operación.');
}

