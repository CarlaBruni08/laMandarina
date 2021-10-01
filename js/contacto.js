let formulario = document.getElementById("formulario");
formulario.onsubmit = enviarContacto;

function enviarContacto(e){
     e.preventDefault();
     let nombre = document.getElementById("nombreContacto");
     let email = document.getElementById("emailContacto");
     let cuerpo = document.getElementById("cuerpoMensajeContacto");
     let mensaje = `Hola : ${nombre.value} . Gracias por contactarnos, te contestaremos a la brevedad a la casilla : ${email.value}`; 
     alert(mensaje);
}