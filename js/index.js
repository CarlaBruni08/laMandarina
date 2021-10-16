/*let fotoA  = document.getElementById("foto");
fotoA.innerText = 'dasdas';
let claseVieja = fotoA.getAttribute('class');
fotoA.setAttribute('class',claseVieja + ' nuevo asdsa asdasd');

let clases = document.getElementsByClassName("nav-link");
for(const clase of clases){
    //clase.innerText = "cambio el texto";
}

let elementosA = document.getElementsByTagName("a");
for(const elementoA of elementosA){
    //elementoA.innerText = "sadasdsa";
}

let elementoLi = document.createElement("li");
elementoLi.setAttribute("class","nav-item");

let elementoA = document.createElement("a");
elementoA.innerText = "nuevoA";
elementoA.setAttribute("class","nav-link");
elementoA.setAttribute("href","www.google.com");
elementoLi.appendChild(elementoA);

let ulNav  = document.getElementById("ulNavegador");
ulNav.appendChild(elementoLi);

fotoA.parentNode.parentNode.removeChild(fotoA.parentNode);

let clasess = document.getElementsByClassName("nav-link");
for(const clase of clasess){
    clase.parentNode.parentNode.removeChild(clase.parentNode);
}*/

$("li.nav-item").on("mouseover",function(){
    $(this).fadeOut("slow",function(){
        $(this).fadeIn("slow");
    });
    /*$(this).slideUp("slow",function(){
        $(this).slideDown("slow");
    });*/    
});

$("#tituloMandarina").on("change",animar());
$("#tituloMandarina").trigger("change")
function animar(){
    $("#tituloMandarina").animate({opacity:'0.2'}, //1er parámetro propiedades
    "slow",            //2do parámetro duración 
    function(){        //3er parámetro callback
        console.log("final de animación");
        $(this).animate({opacity:'0.9'}, //1er parámetro propiedades
        "slow",function(){
            animar();
        });
    });
}

/*$("body").append(`<div>
                        <a id="irAContacto">Ir a contacto</a>
                        <p style="height: 800px"></p>
                        <section id="seccionContacto">
                           <h4>¡Somos Coders!</h4>
                        </section>
                        <a id="IrArriba">Prueba</a>
                   </div>`);
// Asociamos la animación al click en un elemento <a>
$('#irAContacto').click( function(e) { 
    e.preventDefault();
    //Animamos sus propiedades CSS con animate
    $('html, body').animate({
        scrollTop: $("#seccionContacto").offset().top  
    }, 2000);
} );

$("#IrArriba").click( function(e) { 
    e.preventDefault();
    //Animamos sus propiedades CSS con animate
    $('html, body').animate({
        scrollTop: $("#tituloMandarina").offset().top  
    }, 2000);
} );*/


