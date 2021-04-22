var intentos = 2;
var contadorpositivos = 0;
window.addEventListener('load', inicio, false);

function inicio() {
    /*
    Creacion y habilitacion del grag a cada elemento
    */
    document.getElementById('palabra1').addEventListener('dragstart', dragInicio, false);
    document.getElementById('palabra2').addEventListener('dragstart', dragInicio, false);
    document.getElementById('palabra3').addEventListener('dragstart', dragInicio, false);
    document.getElementById('palabra4').addEventListener('dragstart', dragInicio, false);
    document.getElementById('palabra5').addEventListener('dragstart', dragInicio, false);
    document.getElementById('palabra6').addEventListener('dragstart', dragInicio, false);

    document.getElementById('recuadro6').addEventListener('dragover', permitirDrop, false);
    document.getElementById('recuadro6').addEventListener('drop', drop, false);

    document.getElementById('recuadro1').addEventListener('dragover', permitirDrop, false);
    document.getElementById('recuadro1').addEventListener('drop', drop, false);

    document.getElementById('recuadro3').addEventListener('dragover', permitirDrop, false);
    document.getElementById('recuadro3').addEventListener('drop', drop, false);

    document.getElementById('recuadro5').addEventListener('dragover', permitirDrop, false);
    document.getElementById('recuadro5').addEventListener('drop', drop, false);

    document.getElementById('recuadro2').addEventListener('dragover', permitirDrop, false);
    document.getElementById('recuadro2').addEventListener('drop', drop, false);

    document.getElementById('recuadro4').addEventListener('dragover', permitirDrop, false);
    document.getElementById('recuadro4').addEventListener('drop', drop, false);
}
//Funcion que habilita el grag de los elementos
function dragInicio(ev) {
    ev.dataTransfer.setData("Text", ev.target.id);
}
//Funcion que valida el drop dentro de la seccion y los campos de la misma
function drop(ev) {
    ev.preventDefault();
    var dato = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(dato));
    document.getElementById(dato);
    ev.target.style.background = "rgb(229, 229, 255)";
    validarCampos(ev)
}

function permitirDrop(ev) {
    ev.preventDefault();
}

function renovar(ev) {}
//Funcion que valida los campos y el grag para lograr el efecto
function validarCampos(ev) {
    var contador = 0

    for (let i = 1; i <= 6; i++) {
        let auxRecuadro = "recuadro" + i;

        for (let j = 1; j <= 6; j++) {
            let auxPalabra = "palabra" + j;
            if (document.getElementById(auxPalabra).parentNode.id == auxRecuadro) {
                contador = contador + 1;
            }
        }
    }
    if (contador == 6) {
        document.getElementById("boton").style.display = "unset";
        alert("Ha llenado todos los campos");

    }
}
//Funcion que colorea el fondo despendiendo el resultado
function validarColor(ev) {
    if (intentos == 0) {
        if (contadorpositivos >= 6) {
            alert("¡Felicitaciones!Haz logrado organizar correctamente cada uno de los términos y así recordar la definición de la arquitectura multiprocesador.Sigue estudiando para ser cada vez mejor.");
        } else {
            alert("Estudia una vez más la arquitectura procesador e inténtalo de nuevo.");
        }
    }
    if (intentos > 0) {

        var divPalabras = document.getElementById("palabras");
        for (let index = 1; index <= 6; index++) {
            let auxPalabra = "palabra" + index;
            let auxRecuadro = "recuadro" + index;
            checkElement(auxPalabra, auxRecuadro);
            if (document.getElementById(auxPalabra).parentNode.id == auxRecuadro) {
                contadorpositivos = contadorpositivos + 1;
            } else {
                var palabraMal = document.getElementById(auxPalabra);
                divPalabras.appendChild(palabraMal);
                this.inicio();
            }
        }
        if (intentos == 0) {
            if (contadorpositivos >= 6) {
                alert("¡Felicitaciones!Haz logrado organizar correctamente cada uno de los términos y así recordar la definición de la arquitectura multiprocesador.Sigue estudiando para ser cada vez mejor.");
            } else {
                alert("Estudia una vez más la arquitectura procesador e inténtalo de nuevo.");
            }
        }
        intentos = intentos - 1
        alert("Quedan " + intentos + " Intentos");

    } else {
        document.getElementById("boton").style.display = "none";
        document.getElementById("botonreiniciar").style.display = "unset";
    }
}
//Funcion que colorea
function checkElement(id, recuadro) {
    let color = "rgb(255, 153, 153)";
    if (document.getElementById(id).parentNode.id == recuadro) {
        color = "rgb(153, 255, 153)";
    } else {}
    document.getElementById(recuadro).style.background = color;
}
//Funcion que cierra el mensaje emergente
function cerramensaje() {
    document.getElementById("window-notice").style.display = 'none';

}
//Recargar la pagina
function reiniciar() {
    location.reload();
}