/*Inicializo Modal Pack
Seteo todos los valores vacios
*/ 
function armarPedido(){
    $("input").each(function(){
        $(this).val(null);
    });
    let modalPedido = $("#modalPedido");
    modalPedido.modal("show");
}

/*Valido y Confirmo que los Datos estan correctos y listos para armar el Pedido*/ 
function validarPedido(){
    if(validarDatos() == true){
        if(window.confirm("confirme que desea enviar el pedido?")){
            generarPedido();
        }
    }
}
/*Valido que los Datos esten completos y sean Numericos*/ 
function validarDatos(){
    $("#alertaPack").hide();
    let resultado = true;
    $("input").each(function(){
        if($(this).val() == ''){
            $("#textoPack").html("Faltan Datos para Cargar");
            $("#alertaPack").show();
            resultado = false;
            return;
        }
    });
    if(!resultado){
        return resultado;
    }
    $("input").each(function(){
        if(!($.isNumeric($(this).val()))){
            $("#textoPack").html("Los Datos deben ser Numericos");
            $("#alertaPack").show();
            resultado = false;
            return;
        }
    });
    return resultado;
}

/*Una vez confirmado por el usuario guardo en el Session Storage los datos del Pedido
y Armo el Modal que contiene el calculo del nuevo presupuesto
*/ 
function generarPedido(){
    let modalPedido = $("#modalPedido");
    modalPedido.modal("hide");
    sessionStorage.setItem("flyers", $("#flyers").val());
    sessionStorage.setItem("fotos", $("#fotos").val());
    sessionStorage.setItem("retoquesfx", $("#retoquesfx").val());
    sessionStorage.setItem("videos", $("#videos").val());
    sessionStorage.setItem("videosEfectos", $("#videosEfectos").val());    
    armarModal();
}

/*Calculo el Presupuesto del Pedido*/ 
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

/*Una vez calculado el Presupuesto armo el Modal y lo muestro en Pantalla*/ 
function armarModal(){
    let modalpack4 = $("#modalPack4");
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

/*Agrego contenido el Body del Pack del Pedido*/ 
function agregarAlBody(valor,texto){
    let p = document.createElement("p");
    p.textContent = valor + " " + texto;
    $("#modalPack4Body").append(p);
}