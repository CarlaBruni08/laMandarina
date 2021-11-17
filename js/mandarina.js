/*Animacion sobre el Logo de la Empresa*/ 
let logo = document.getElementById("logo");
logo.addEventListener("mouseover",agrandar);
logo.addEventListener("mouseout",volverAtras);

function agrandar(e){
    let logo = e.target;
    logo.setAttribute("style","transform:scale(1.2)");
}

function volverAtras(e){
    let logo = e.target;
    logo.removeAttribute("style");
}