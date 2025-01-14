function iniciar() {
  var id = document.getElementById("ID").value;
  var N_A = document.getElementById("N_A").value;
  var S_L = /^[A-Za-z\s]+$/;
  var Nacionalidad = document.querySelector('input[name="Nacionalidad"]:checked');
  var países = document.querySelectorAll('input[name="países"]:checked');
  var Color = document.getElementById("Color").value;
  var departamento = document.getElementById('departamento').value;

  if (id.length == 0) {
    Swal.fire({
      icon: "question",
      title: "Pendiente",
      text: "Falta completar la identificación",
    });
    return;
  } else if (isNaN(id)) {
    Swal.fire({
      icon: "error",
      title: "Alerta",
      text: "Solo se aceptan números",
    });
    return;
  } else if (N_A.length == 0) {
    Swal.fire({
      icon: "question",
      title: "Pendiente",
      text: "Falta completar el nombre",
    });
    return;
  } else if (!S_L.test(N_A)) {
    Swal.fire({
      icon: "error",
      title: "Alerta",
      text: "El nombre solo debe contener letras y espacios",
    });
    return;
  } else if (!Nacionalidad) {
    Swal.fire({
      icon: "question",
      title: "Pendiente",
      text: "Debes seleccionar una nacionalidad",
    });
    return;
  } else if (países.length == 0) {
    Swal.fire({
      icon: "question",
      title: "Pendiente",
      text: "Debes seleccionar al menos un país",
    });
    return;
  } else if (!Color) {
    Swal.fire({
      icon: "question",
      title: "Pendiente",
      text: "Falta completar un color",
    });
    return;
  } else if (!departamento) {
    Swal.fire({
      icon: "question",
      title: "Pendiente",
      text: "Debes seleccionar un departamento",
    });
    return;
  }  else {
    // Almacena el nombre completo en localStorage
    localStorage.setItem("N_A", N_A);
    localStorage.setItem("Color", Color);
    localStorage.setItem("departamento", departamento);

    Swal.fire({
      icon: "success",
      title: "Registro Exitoso",
      text: "Formulario completado correctamente",
    }).then(() => {
      window.location.href = "index2.html";
    });
    return false;
  }
}

