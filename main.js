const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton =>{
    boton.addEventListener("click", ()=>{/* toma la info del boton al hacer click */
        const botonApretado = boton.textContent;

        if(boton.id === "c"){
            pantalla.textContent = "0";
            return;
        }

        if(boton.id === "borrar"){
            if(pantalla.textContent.length === 1 || pantalla.textContent === "Error!"){
                pantalla.textContent = "0";
            }else{
                pantalla.textContent = pantalla.textContent.slice(0,-1); /* 1° nro: pos de arranque. 2° cuando tiene que terminar */
            }
            return;
        }

        if(boton.id === "igual"){
            try {
                pantalla.textContent = eval(pantalla.textContent);/* eval: evalua un conjunto de strings q tenga operaciones matematicas en un solo string */
            } catch {
                pantalla.textContent = "Error!"
            }
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "Error!"){
            pantalla.textContent = botonApretado;
        }else{
            pantalla.textContent += botonApretado;/* muestra el numero apretado en pantalla */
        }
    })
})