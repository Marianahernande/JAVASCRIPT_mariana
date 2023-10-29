const deg = 6;
const horas = document.querySelector('.hora');
const minutos= document.querySelector('.minuto');
const segundos = document.querySelector('.segundo');
let horaDia="";

function calcularTiempo (){
    let tiempo= new Date ();
    let hora = tiempo.getHours();
    let minuto = tiempo.getMinutes();
    let segundo = tiempo.getSeconds();

    if (hora>12) {
        horaDia = "PM"
        hora = hora -12;

    } else {
        horaDia = "AM";
    }
    
    let pantallaReloj = hora + ":" + minuto + ":" + segundo + " " + horaDia;
    let relojDigital = document.querySelector(".Analogo");
    relojDigital.innerHTML = pantallaReloj;
}

setInterval(()=>{
    let tiempo = new Date();

    let hora= tiempo.getHours() * 30;
    let min = tiempo.getMinutes() * deg;
    let seg = tiempo.getSeconds() * deg;

    

    hora = hora < 10 ? "0" +hora : hora;
    min = min < 10 ? "0" +min : min;
    seg = seg < 10 ? "0" +seg : seg;

    horas.style.transform = `rotate(${(hora)+(min/12)}deg)`;
    minutos.style.transform = `rotate(${min}deg)`;
    segundos.style.transform = `rotate(${seg}deg)`; 
})

setInterval(calcularTiempo, 500);