let formulario = document.getElementById("formulario");
formulario.onsubmit = enviarContacto;

function enviarContacto(e){
     /*Envia Correo Electronico al Cliente*/ 
     e.preventDefault();
     let nombre = document.getElementById("nombreContacto");
     let email = document.getElementById("emailContacto");
     let cuerpo = document.getElementById("cuerpoMensajeContacto");
     let mensaje = `Hola : ${nombre.value} . Gracias por contactarnos, te contestaremos a la brevedad a la casilla : ${email.value}`; 
     $("#textoContacto").html('Se Envio el Correo con Exito');
     $("#alertaContacto").show();
}

$(document).ready(function(){
     /*Cuando elijo un Pais, recargo Provincias*/ 
     $("#pais").on("change",function(){
          $("#provincia").trigger("change");
     })

     /*Cuando elijo una Provincia, recargo Ciudades*/ 
     $("#provincia").on("change",function(){
          $(this).html("");
          let pais = $("#pais").val();
          $(this).append("<option>SELECCIONE</option>")
          if(pais == "AR"){
               $(this).append("<option>BSAS</option><option>SANTA FE</option>");
          }else if(pais == "CH"){
               $(this).append("<option>VALPARAISO</option><option>SANTIUAGO</option>");
          }else if(pais == "UR"){
               $(this).append("<option>MONTEVIDEO</option><option>CABO</option>");
          } 
     })
});