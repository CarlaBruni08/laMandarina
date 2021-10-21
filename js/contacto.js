let formulario = document.getElementById("formulario");
formulario.onsubmit = enviarContacto;

const URLGET = "https://jsonplaceholder.typicode.com/posts"
//Agregamos un botón con jQuery
$("body").prepend('<button id="btn1">GET</button>');
//Escuchamos el evento click del botón agregado
$("#btn1").click(() => { 
    /*$.get(URLGET, function (respuesta, estado) {
          if(estado === "success"){
            let misDatos = respuesta;
            for (const dato of misDatos) {
              $("body").prepend(`<div>
                                   <h3>${dato.title}</h3>
                                   <p> ${dato.body}</p>
                                  </div>`);
            }  
          }
    });*/

    $.ajax({
     url: 'http://hp-api.herokuapp.com/api/characters',
     method: "GET",//GET
     //data : $("#formulario").serialize(),//SOLO SI ES POST
     beforeSend : function(){//ANTES DE LLAMAR
          alert('envio formulario');
     },
     success: function(respuesta){//POST LLAMADA
          let misDatos = respuesta;
          for (const dato of misDatos) {
            $("body").prepend(`<div>
                                 <h3>${dato.actor}</h3>
                                 <p> ${dato.yearOfBirth}</p>
                                </div>`);
          }           
     }         
     });
});


function enviarContacto(e){
     e.preventDefault();
     let nombre = document.getElementById("nombreContacto");
     let email = document.getElementById("emailContacto");
     let cuerpo = document.getElementById("cuerpoMensajeContacto");
     let mensaje = `Hola : ${nombre.value} . Gracias por contactarnos, te contestaremos a la brevedad a la casilla : ${email.value}`; 
     //alert(mensaje);
}

$(document).ready(function(){
     $("#pais").on("change",function(){
          $("#provincia").trigger("change");
     })

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