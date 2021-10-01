let fotos = document.getElementsByClassName("galeria-container__img");
for(const foto of fotos){
    foto.addEventListener("mouseover",agrandar);
    foto.addEventListener("mouseout",volverAtras);
}

function agrandar(e){
    let foto = e.target;
    foto.setAttribute("style","transform:scale(1.2)");
}

function volverAtras(e){
    let foto = e.target;
    foto.removeAttribute("style");
}