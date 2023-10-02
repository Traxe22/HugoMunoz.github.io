function validarContacto() {
    var nombre = document.getElementById("nombre").value;
    var telefono = document.getElementById("telefono").value;
    var gmail = document.getElementById("gmail").value;
    var mensaje = document.getElementById("mensaje").value;
    var datosUsuario = document.getElementById("mensajeUsuario");

    // Validar el formato de gmail.
    var valemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!valemail.test(gmail)) {
        alert("El correo electrónico no es válido");
    } else if (nombre == "" || telefono == "" || gmail == "" || mensaje == "") {
        alert("Completar todos los campos");
    } else {
        alert("Formulario enviado.");
        var mensajeCompleto = "Datos Enviados:\n" +
            "Nombre: " + nombre + "\n" +
            "Telefono: " + telefono + "\n" +
            "Gmail: " + gmail + "\n" +
            "Comentario: " + mensaje + "\n";
        datosUsuario.innerHTML = mensajeCompleto;

        // Limpiar los campos
        document.getElementById("nombre").value = "";
        document.getElementById("telefono").value = "";
        document.getElementById("gmail").value = "";
        document.getElementById("mensaje").value = "";
    }
}