function validarContacto(){
    var nombre = document.getElementById("nombre").value;
    var telefono = document.getElementById("telefono").value;
    var gmail = document.getElementById("gmail").value;
    var mensaje= document.getElementById("mensaje").value;
    if(nombre==""|| telefono==""|| gmail==""|| mensaje==""){
        alert("Completar todos los campos");
    }else{
        alert("Formulario enviado.");
    }
}