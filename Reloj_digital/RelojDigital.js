function calcularTiempo (){

    let tiempo= new Date ();

    let hora = tiempo.getHours();
    let minuto = tiempo.getMinutes();
    let segundo = tiempo.getSeconds();


    let pantallaReloj = hora + ":" + minuto + ":" + segundo;
    let relojDigital = document.querySelector(".Reloj");
    relojDigital.innerHTML = pantallaReloj;
}

setInterval(calcularTiempo, 1000);