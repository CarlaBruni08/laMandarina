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
    for (let i = 0; i < sessionStorage.length; i++) {
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
    let modalpack4 = $("#modalPack4");
    //let modalpack4Body = document.getElementById("modalPack4Body");
    
    let precio = document.createElement("h3");
    precio.textContent = "$"+calcularPedido();
    $("#modalPack4Body").html('');
    $("#modalPack4Body").append(precio);
    agregarAlBody(sessionStorage['flyers'],"Flyers para redes sociales.");
    agregarAlBody(sessionStorage['fotos'],"Fotos para tu página web.");
    agregarAlBody(sessionStorage['retoquesfx'],"Retoques FX de las fotos que vos elijas.");
    agregarAlBody(sessionStorage['videos'],"Videos animados realizados en After Effects para tus historias.");
    agregarAlBody(sessionStorage['videosEfectos'],"Videos animados realizados en After Effects para tus reels.");
    modalpack4.modal("show");
}

function agregarAlBody(valor,texto){
    let p = document.createElement("p");
    p.textContent = valor + " " + texto;
    $("#modalPack4Body").append(p);
}