let hr = mn = sg = ms = "0"+ 0, iniciarTiempo;

//Creamos los botones que tendrán acciones
const btnIniciar = document.querySelector(".iniciar");
const btnDetener = document.querySelector(".detener");
const btnPause = document.querySelector(".reiniciar");

//creamos una función para cada vez que haga click, se llama a mi constante iniciar:
btnIniciar.addEventListener("click",iniciar);
btnDetener.addEventListener("click",detener);
btnPause.addEventListener("click",reiniciar);

//Que al darle click me intercambie la clase por el on del css, o sea, me la habilite
function iniciar(){
    btnIniciar.classList.add("on");

    iniciarTiempo = setInterval(()=>{
        ms++;
        ms = ms < 10 ? "0" + ms : ms;

        if(ms===100){
            sg++;
            sg = sg  < 10 ? "0" + sg : sg;
            ms = "0" + 0;
        }

        if(sg===60){
            mn++;
            mn = mn < 10 ? "0" + mn : mn;
            sg = "0" + 0;
        }

        if(mn===60){
            hr++;
            hr = hr < 10 ? "0" + hr : hr;
            mn = "0" + 0;
        }

        //es lo que me va a permitir reiniciar el cronómetro: mostrar tiempo
        ingresarValor();

    },10);
}

//cada vez que se le de click al boton removerá la clase on, la que hace avanzar el reloj
//deja de refrescar, entonces la variable está en iniciar tiempo y eso detendrá el refresco de la pantalla
function detener(){
    btnIniciar.classList.remove("on");
    // este metodo DETIENE el refresco automatico del tiempo
    // la de iniciar Tiempo
    clearInterval(iniciarTiempo)
}

//reinicia en el boton, con el crearInterval
function reiniciar(){
    btnIniciar.classList.remove("on");
    clearInterval(iniciarTiempo);
    hr = mn = sg = ms = "0" + 0 ;
    // establece los valores en cero
    ingresarValor();
}

// Ver en el html que esté seguro que todo inicie en 0 en el html, las ultimas clases deben llamarse igual
function ingresarValor(){
    document.querySelector('.milisegundo').innerHTML = ms;
    document.querySelector('.segundo').innerHTML = sg;
    document.querySelector('.minuto').innerHTML = mn;
    document.querySelector('hora').innerHTML = hr;
}