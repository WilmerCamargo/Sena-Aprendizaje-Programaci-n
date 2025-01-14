function prueba() {
    document.getElementById('f2').addEventListener('submit', function (e) {
        e.preventDefault();
        Validar();
    });
}
function Validar() {
    var C = document.getElementById('correo').value;
    var Ca = document.getElementById('clave').value;

    if (C.length === 0) {
        Swal.fire({
            icon: 'error',
            title: 'Pendiente',
            text: 'Falta escribir el Correo',
        }); return;
    } else {
        if (Ca.length === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Pendiente',
                text: 'Falta ingresar una Contraseña',
            }); return;
        } else {
            if (Ca.length < 7 || Ca.length > 10) {
                swal.fire({
                    icon: 'question',
                    title: 'La contraseña',
                    text: 'debe contener entre 7 a 10 dígitos',
                }); return;
            } else {
                Swal.fire({
                    title: "Bien hecho!",
                    text: "Te has registrado correctamente!",
                    icon: "success",
                    confirmButtonText: '<a href="Register.html">Iniciar</a>'
                })
            }
        }
    }
}