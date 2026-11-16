# tom-daw.github.io

# Enlace a la web

https://tom183-daw.github.io/

# Grid vs Flexbox: dónde he usado cada uno

La idea que he seguido es sencilla: Flexbox cuando solo tengo que colocar cosas en una fila o en una columna, y Grid cuando necesito filas y columnas a la vez (una rejilla de verdad).

# Portada (index.html)

- Carrusel: el contenedor usa Flexbox con justify-content y align-item en center para que la tarjeta quede centrada en horizontal y en vertical dentro de los 2/3 de arriba de la pantalla. El giro de las tarjetas no es ni Grid ni Flex, son transformaciones 3D que se calculan con JavaScript.
- Bloques de información (Diseño adaptable, Usabilidad, Prototipado): Grid con grid-template-columns: 1fr 1fr 1fr. Son 3 columnas iguales y con Grid es lo más fácil, porque solo pones el número de columnas y se reparten el ancho solas.
- Dentro de cada bloque: Flexbox en columna, porque solo es poner el texto encima de la imagen con un hueco entre ellos(gap).
- Barra de navegación del móvil: Flexbox en fila, para alinear el texto "Navegación" con el botón ☰.

# Páginas de las unidades (unidad1.html, unidad2.html)

- Barra de arriba (Volver a temas | Tema 1 · Detalle | 1 de 6): Flexbox con justify-content: space-between, que manda un elemento a cada lado y deja el otro en el medio.
- Contenido principal: Grid de 2 columnas. La izquierda (título, imagen, competencias) es el doble de ancha que la derecha (siguiente tema y botones). La sección de "Conceptos clave" ocupa las dos columnas con grid-column: 1 / 3, y eso con Flexbox sería bastante más tedioso.
- Competencias: Grid con grid-template-rows: repeat(3, auto) y grid-auto-flow: column. Así la lista pone 3 competencias como mucho por columna y, si hay más, las siguientes pasan solas a una columna nueva a la derecha.
- Columna derecha: Flexbox en columna, porque la tarjeta del siguiente tema y los botones van uno debajo de otro.
- Botones: Flexbox en fila para alinear el icono con el texto.
- Conceptos clave: Grid de 2 x 2, porque son 4 botones que quería en dos filas y dos columnas iguales.

# Versión móvil (breakpoints)

He usado dos puntos de ruptura:

- 768px para la portada .
- 800px para las unidades. Lo subí un poco porque las unidades tienen dos columnas con bastante contenido y a 768px la columna de la derecha ya se veía muy estrecha.

# Qué cambia en la portada (por debajo de 768px)

- El título se hace más pequeño (de 50px a 36px) y se le pone una línea debajo.
- El carrusel deja de ocupar los 2/3 de la pantalla. La tarjeta pasa de 40vw a 65vw de ancho y la letra se hace más grande en proporción para que se pueda leer en el móvil.
- Los bloques de información pasan de 3 columnas a 1 sola columna. Además, cada bloque se divide en 2 columnas (imagen | texto) y van en zigzag: en el 1 y el 3 la imagen está a la izquierda y en el 2 a la    derecha. En el centro hay una línea morada vertical.
- Desaparecen las líneas que separaban las columnas en el ordenador.
- Aparece la *arra de navegación fija abajo a la derecha, que en el ordenador está oculta.

# Qué cambia en las unidades (por debajo de 800px)

- El contenido pasa de 2 columnas a 1: la columna de la derecha (siguiente tema y botones) se va debajo del contenido principal.
- Los conceptos clave pasan de una rejilla de 2 x 2 a 1 sola columna.
- Las competencias dejan de repartirse en varias columnas y vuelven a ir todas en una sola lista.