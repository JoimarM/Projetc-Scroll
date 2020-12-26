let animado = document.querySelectorAll(".img_tree");
let movimiento = document.querySelectorAll(".text");


function showElements() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < animado.length; i++) {
        let alturaAnimado = animado[i].offsetTop;
        if (alturaAnimado - 400 < scrollTop) {
            if (i < 2) {
                animado[i].style.opacity = 1;
                animado[i].classList.add("mostrarTop");
            } else {
                animado[i].style.opacity = 1;
                animado[i].classList.add("mostrarBottom");
            }
        }
    }
}

let resultado = function(x) {
    if (resultado % 2 == 0) {
        return true;
    } else return false;
}

function showElementsP() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < movimiento.length; i++) {
        let alturaAnimado = movimiento[i].offsetTop;
        if (alturaAnimado - 600 < scrollTop) {
            if (i % 2 == 0) {
                movimiento[i].style.opacity = .8;
                movimiento[i].classList.add("mostrarIzq");
            } else {
                movimiento[i].style.opacity = .8;
                movimiento[i].classList.add("mostrarDer");
            }

        }
    }
}

window.addEventListener('scroll', showElements);
window.addEventListener('scroll', showElementsP);