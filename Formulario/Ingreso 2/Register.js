function prueba() {
    document.getElementById('f1').addEventListener('submit', function (e) {
        e.preventDefault();
        Validar();
    });
}
function Validar() {
    var Nom = document.getElementById('nombres').value;
    var A = document.getElementById('apellidos').value;
    var C = document.getElementById('correo').value;
    var Ca = document.getElementById('clave').value;
    var Ca2 = document.getElementById('clave2').value;
    var ID = document.getElementById('ID').value;
    var Ac = document.getElementById('aceptar').checked;
    var Genero = document.getAnimations('ElGenero');
    var Selection = false;
    var SN = /^-?\d+(\.\d+)?$/;

    if (Nom.length === 0) {
        Swal.fire({
            icon: 'error',
            title: 'Pendiente',
            text: 'Falta escribir los Nombre',
        }); return;
    } else
        if (A.length === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Pendiente',
                text: 'Falta escribir los Apellidos',
            }); return;
        } else {
            if (ID.length === 0) {
                Swal.fire({
                    icon: 'error',
                    title: 'Pendiente',
                    text: 'Falta ingresar una Identificación',
                }); return;
            } else {
                if (C.length === 0) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Pendiente',
                        text: 'Falta escribir un Correo',
                    }); return;
                } else {
                    if (Ca.length === 0) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Pendiente',
                            text: 'Falta ingresar una Contraseña',
                        }); return;
                    } else {
                        if (SN.test(Ca) == false) {
                            Swal.fire({
                                icon: 'question',
                                title: 'Pendiente',
                                text: 'Solo se admiten caracteres numéricos',
                            });
                        } else {
                            if (Ca.length < 7 || Ca.length > 10) {
                                swal.fire({
                                    icon: 'question',
                                    title: 'La contraseña',
                                    text: 'debe contener entre 7 a 10 dígitos',
                                }); return;
                            } else {
                                if (Ca2.length === 0) {
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Pendiente',
                                        text: 'Falta confirmar una Contraseña',
                                    }); return;
                                } else {
                                    if (Ca !== Ca2) {
                                        Swal.fire({
                                            icon: 'question',
                                            title: 'Revisa',
                                            text: 'Las contraseñas no coinciden',
                                        }); return;
                                    } else {
                                        if (Ac == false) {
                                            Swal.fire({
                                                icon: 'error',
                                                title: 'Pendiente',
                                                text: 'Falta aceptar los TyC',
                                            }); return;
                                        } else {
                                            Swal.fire({
                                                title: "Bien hecho!",
                                                text: "Te has registrado correctamente!",
                                                icon: "success",
                                                confirmButtonText: '<a href="ingreso.html">Iniciar</a>'
                                            })
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
}