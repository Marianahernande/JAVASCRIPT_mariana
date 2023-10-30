const pantalla = document.querySelector(".pantalla");
const boton = document.querySelectorAll(".boton");

let operadores = ["+", "-", "*", "/"];

boton.forEach(boton => {
    boton.addEventListener("click", () => {
        const On = boton.textContent;

        if (boton.id === "delete") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "Error";
            }
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "Error") {
            pantalla.textContent = On;
        } else {
            const ultimoCaracter = pantalla.textContent.slice(-1);
            if (operadores.includes(ultimoCaracter) && operadores.includes(On)) {
                return;
            }
            pantalla.textContent += On;
        }

        
        if (boton.id === "clean") {
            pantalla.textContent = "0";
            return;
        }
    });
});
