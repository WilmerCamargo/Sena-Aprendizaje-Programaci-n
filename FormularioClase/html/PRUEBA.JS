document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('Enviar').addEventListener('click', iniciar);
  });
  
  function iniciar() {
    const id = document.getElementById("ID").value;
    const N_A = document.getElementById("N_A").value;
    const S_L = /^[A-Za-z\s]+$/;
    const Nacionalidad = document.querySelector('input[name="Nacionalidad"]:checked');
    const países = document.querySelectorAll('input[name="países"]:checked');
    const Color = document.getElementById("Color").value;
    const departamento = document.getElementById('departamento').value;
  
    if (!validateID(id)) return;
    if (!validateName(N_A, S_L)) return;
    if (!validateNacionalidad(Nacionalidad)) return;
    if (!validatePaises(países)) return;
    if (!validateColor(Color)) return;
    if (!validateDepartamento(departamento)) return;
  
    saveData(N_A, Color, departamento);
    showSuccessMessage();
  }
  
  function validateID(id) {
    if (id.length === 0) {
      showAlert("question", "Pendiente", "Falta completar la identificación");
      return false;
    }
    if (isNaN(id)) {
      showAlert("error", "Alerta", "Solo se aceptan números");
      return false;
    }
    return true;
  }
  
  function validateName(N_A, S_L) {
    if (N_A.length === 0) {
      showAlert("question", "Pendiente", "Falta completar el nombre");
      return false;
    }
    if (!S_L.test(N_A)) {
      showAlert("error", "Alerta", "El nombre solo debe contener letras y espacios");
      return false;
    }
    return true;
  }
  
  function validateNacionalidad(Nacionalidad) {
    if (!Nacionalidad) {
      showAlert("question", "Pendiente", "Debes seleccionar una nacionalidad");
      return false;
    }
    return true;
  }
  
  function validatePaises(países) {
    if (países.length === 0) {
      showAlert("question", "Pendiente", "Debes seleccionar al menos un país");
      return false;
    }
    return true;
  }
  
  function validateColor(Color) {
    if (!Color) {
      showAlert("question", "Pendiente", "Falta completar un color");
      return false;
    }
    return true;
  }
  
  function validateDepartamento(departamento) {
    if (!departamento) {
      showAlert("question", "Pendiente", "Debes seleccionar un departamento");
      return false;
    }
    return true;
  }
  
  function showAlert(icon, title, text) {
    Swal.fire({ icon, title, text });
  }
  
  function saveData(N_A, Color, departamento) {
    localStorage.setItem("N_A", N_A);
    localStorage.setItem("Color", Color);
    localStorage.setItem("departamento", departamento);
  }
  
  function showSuccessMessage() {
    Swal.fire({
      icon: "success",
      title: "Registro Exitoso",
      text: "Formulario completado correctamente",
    }).then(() => {
      window.location.href = "index2.html";
    });
  }  