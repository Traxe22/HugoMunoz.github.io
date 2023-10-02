function validarContacto() {
    var nombre = document.getElementById("nombre").value;
    var telefono = document.getElementById("telefono").value;
    var gmail = document.getElementById("gmail").value;
    var mensaje = document.getElementById("mensaje").value;
    var datosUsuario = document.getElementById("datosUsuario");

    //Validar el formato de gmail.
    var valemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!valemail.test(gmail)){
        errorMe
    }
    if (nombre == "" || telefono == "" || gmail == "" || mensaje == "") {
        alert("Completar todos los campos");
    } else {
        alert("Formulario enviado.");
        var mensajeCompleto = "Datos Enviados:\n" +
        "Nombre: " + nombre + "\n" +
        "Telefono: " + telefono + "\n" +
        "Gmail: " + gmail + "\n" +
        "Comentario: " + mensaje + "\n";
        document.getElementById("mensajeUsuario").innerHTML = mensajeCompleto;
}
}