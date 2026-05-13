let pantalla = document.getElementById("pantalla");

function agregar(valor){

    pantalla.value += valor;
}

function limpiar(){

    pantalla.value = "";
}

function borrar(){

    pantalla.value = pantalla.value.slice(0, -1);
}

function calcular(){

    try{

        pantalla.value = eval(pantalla.value);

    }catch(error){

        pantalla.value = "Error";
    }
}


document.addEventListener("keydown", function(event){

    let tecla = event.key;

      if(!isNaN(tecla)){

        agregar(tecla);
    }

    else if(tecla === "+"){

        agregar("+");
    }

    else if(tecla === "-"){

        agregar("-");
    }

    else if(tecla === "*"){

        agregar("*");
    }

    else if(tecla === "/"){

        agregar("/");
    }

    else if(tecla === "."){

        agregar(".");
    }

    else if(tecla === "%"){

        agregar("%");
    }

    else if(tecla === "Enter"){

        event.preventDefault();

        calcular();
    }

    else if(tecla === "Backspace"){

        borrar();
    }

    else if(tecla === "Escape"){

        limpiar();
    }

});