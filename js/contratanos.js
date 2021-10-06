function armarPedido() {
    pedirDato("Ingrese Cantidad Flyers", "flyers");
    pedirDato("Ingrese Cantidad Fotos", "fotos");
    pedirDato("Ingrese Cantidad RetoquesFX", "retoquesfx");
    pedirDato("Ingrese Cantidad Videos Animados", "videos");
    pedirDato("Ingrese Cantidad Videos con Efectos", "videosEfectos");
    armarModal();
}

function pedirDato(texto, clave) {
    let valor = "";
    while (valor == "") {
        valor = prompt(texto);
    }
    sessionStorage.setItem(clave, valor);

}

function calcularPedido() {
    let precioFinal = 0;
    for (var i = 0; i < sessionStorage.length; i++) {
        let clave = sessionStorage.key(i);
        let valor = sessionStorage[clave];
        switch (clave) {
            case "flyers":
                precioFinal += valor * 500;
                break;
            case "fotos":
                precioFinal += valor * 750;
                break;
            case "retoquesfx":
                precioFinal += valor * 300;
                break;
            case "videos":
                precioFinal += valor * 4500;
                break;
            case "videosEfectos":
                precioFinal += valor * 4500;
                break;

            default:
                precioFinal += 0;
                break;
        }

    }
    return precioFinal;
}

function armarModal(){
    /*<h3>$37.000</h3>
    <p>8 Flyers para redes sociales.</p>
    <p>20 Fotos para tu página web.</p>
    <p>10 Retoques FX de las fotos que vos elijas.</p>
    <p>6 Videos animados realizados en After Effects para tus historias.</p>
    <p>4 Videos animados realizados en After Effects para tus reels.</p>
    <p>Asesoramiento integral para el diseño de tu página web.</p>*/
    let modalpack4 = $("#modalPack4");
    let modalpack4Body = document.getElementById("modalPack4Body");
    let precio = document.createElement("h3");
    precio.textContent = "$"+calcularPedido();
    modalpack4Body.textContent = '';

    modalpack4Body.appendChild(precio);    
    agregarAlBody(modalpack4Body,sessionStorage['flyers'],"Flyers para redes sociales.");
    agregarAlBody(modalpack4Body,sessionStorage['fotos'],"Fotos para tu página web.");
    agregarAlBody(modalpack4Body,sessionStorage['retoquesfx'],"Retoques FX de las fotos que vos elijas.");
    agregarAlBody(modalpack4Body,sessionStorage['videos'],"Videos animados realizados en After Effects para tus historias.");
    agregarAlBody(modalpack4Body,sessionStorage['videosEfectos'],"Videos animados realizados en After Effects para tus reels.");
    modalpack4.modal("show");
}

function agregarAlBody(modalBody,valor,texto){
    let p = document.createElement("p");
    p.textContent = valor + " " + texto;
    modalBody.appendChild(p);
}