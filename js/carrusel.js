// Esperamos a que el DOM esté listo (redundante con "defer", pero es buena práctica
// si algún día quitas el atributo defer)
document.addEventListener("DOMContentLoaded", inicializarCarrusel);

function inicializarCarrusel() {
    const anillo = document.getElementById("carruselAnillo");
    const tarjetas = Array.from(document.querySelectorAll(".tarjeta"));

    const total = tarjetas.length;
    const anguloEntreTarjetas = 360 / total;

    // Radio del círculo, calculado con el ancho real de la tarjeta
    // const anchoTarjeta = anillo.offsetWidth * 1.1;
    // const radio = Math.round((anchoTarjeta / 2) / Math.tan(Math.PI / total));

    // "let" porque el radio cambia cuando cambia el tamaño de la ventana
    let radio = 0;

    // Calcula el radio con el ancho que tiene la tarjeta en ese momento
    function calcularRadio() {
        const anchoTarjeta = anillo.offsetWidth * 1.1;
        radio = Math.round((anchoTarjeta / 2) / Math.tan(Math.PI / total));
    }

    let indiceActivo = 0;

    // Coloca cada tarjeta en su posición fija dentro del círculo 3D
    function colocarTarjetasEnCirculo() {
        tarjetas.forEach((tarjeta, i) => {
            const angulo = anguloEntreTarjetas * i;
            tarjeta.style.transform =
                `rotateY(${angulo}deg) translateZ(${radio}px)`;
        });
    }

    // Gira el anillo para que la tarjeta activa quede de frente
    function actualizarCarrusel() {
        const anguloRotacion = -indiceActivo * anguloEntreTarjetas;
        anillo.style.transform = `translateZ(${-radio}px) rotateY(${anguloRotacion}deg)`;
    }

   

        // Expande la tarjeta hasta ocupar toda la pantalla y después abre su página
    function expandirTarjeta(tarjeta) {
        const pagina = tarjeta.dataset.pagina;  // lee el atributo data-pagina
        if (!pagina) {
            return;  // si la tarjeta todavía no tiene página, no hace nada
        }

        // 1. Medimos dónde está la tarjeta en la pantalla
        const rect = tarjeta.getBoundingClientRect();

        // 2. Creamos una capa con el mismo tamaño y posición que la tarjeta
        const capa = document.createElement("div");
        capa.className = "capa-expansion";
        capa.style.top = rect.top + "px";
        capa.style.left = rect.left + "px";
        capa.style.width = rect.width + "px";
        capa.style.height = rect.height + "px";
        document.body.appendChild(capa);

        // 3. Obligamos al navegador a pintar la posición inicial
        //    (si no, saltaría directamente al tamaño final sin animación)
        capa.getBoundingClientRect();

        // 4. Le damos el tamaño final (toda la pantalla); el transition del CSS lo anima
        capa.classList.add("expandida");
        capa.style.top = "0px";
        capa.style.left = "0px";
        capa.style.width = "100vw";
        capa.style.height = "100vh";

        // 5. Cuando acaba la animación (0,6 s), abrimos la página
        setTimeout(() => {
            window.location.href = pagina;
        }, 600);
    }

    tarjetas.forEach((tarjeta, i) => {
        tarjeta.addEventListener("click", () => {
            if (i === indiceActivo) {
                // Ya está de frente: se expande y abre su unidad
                expandirTarjeta(tarjeta);
            } else {
                // Está a un lado: primero gira el carrusel para ponerla de frente
                indiceActivo = i;
                actualizarCarrusel();
            }
        });
    });

    window.addEventListener("resize", () => {
        calcularRadio();
        colocarTarjetasEnCirculo();
        actualizarCarrusel();
    });

    // Estado inicial
    calcularRadio();
    colocarTarjetasEnCirculo();
    actualizarCarrusel();


}