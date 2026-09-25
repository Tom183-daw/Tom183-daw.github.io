// Esperamos a que el DOM esté listo (redundante con "defer", pero es buena práctica
// si algún día quitas el atributo defer)
document.addEventListener("DOMContentLoaded", inicializarCarrusel);

function inicializarCarrusel() {
    const anillo = document.getElementById("carruselAnillo");
    const tarjetas = Array.from(document.querySelectorAll(".tarjeta"));
    const btnSiguiente = document.getElementById("btnSiguiente");
    const btnAnterior = document.getElementById("btnAnterior");

    const total = tarjetas.length;
    const anguloEntreTarjetas = 360 / total;

    // Radio del círculo: cuanto más grande, más "abierto" se ve el giro.
    // Lo calculamos a partir del ancho de la tarjeta para que no se solapen.
    const anchoTarjeta = 500;
    const radio = Math.round((anchoTarjeta / 2) / Math.tan(Math.PI / total));

    let indiceActivo = 0;

    // Coloca cada tarjeta en su posición fija dentro del círculo 3D
    function colocarTarjetasEnCirculo() {
        tarjetas.forEach((tarjeta, i) => {
            const angulo = anguloEntreTarjetas * i;
            tarjeta.style.transform =
                `rotateY(${angulo}deg) translateZ(${radio}px)`;
        });
    }

    // Gira el anillo entero para que la tarjeta activa quede de frente
    function actualizarCarrusel() {
        const anguloRotacion = -indiceActivo * anguloEntreTarjetas;
        anillo.style.transform = `rotateY(${anguloRotacion}deg)`;
    }

    function irSiguiente() {
        indiceActivo = (indiceActivo + 1) % total;
        actualizarCarrusel();
    }

    function irAnterior() {
        indiceActivo = (indiceActivo - 1 + total) % total;
        actualizarCarrusel();
    }

    btnSiguiente.addEventListener("click", irSiguiente);
    btnAnterior.addEventListener("click", irAnterior);

    tarjetas.forEach((tarjeta, i) => {
        tarjeta.addEventListener("click", () => {
            indiceActivo = i;
            actualizarCarrusel();
        });
    });

    // Estado inicial
    colocarTarjetasEnCirculo();
    actualizarCarrusel();
}