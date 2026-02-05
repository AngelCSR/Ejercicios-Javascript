Resumen ampliado de los ejemplos en la carpeta tema7y8

Objetivo
- Proporcionar una explicación ampliada y organizada de los programas HTML/JS incluidos en la carpeta, para entender su propósito, funcionamiento y técnicas clave.

Cómo usar
- Abre cada archivo HTML en tu navegador (doble clic o `Abrir con > navegador`).
- Los ejemplos son independientes; no requieren servidor.

### Métodos y ejemplos de uso

A continuación se describen los métodos principales utilizados en los ejemplos, junto con una breve explicación y un ejemplo corto de uso.

#### 1. Temporizadores

- **setTimeout(función, ms)**
  - Ejecuta una función una vez después de un retardo.
  - Ejemplo:
    ```js
    setTimeout(() => alert('Hola después de 1 segundo'), 1000);
    ```
- **setInterval(función, ms)**
  - Ejecuta una función repetidamente cada cierto tiempo.
  - Ejemplo:
    ```js
    let id = setInterval(() => console.log('Cada segundo'), 1000);
    ```
- **clearTimeout(id) / clearInterval(id)**
  - Cancela un temporizador.
  - Ejemplo:
    ```js
    let id = setTimeout(() => {}, 1000);
    clearTimeout(id);
    ```

#### 2. Manipulación del DOM

- **document.createElement('tag')**
  - Crea un nuevo elemento.
  - Ejemplo:
    ```js
    let div = document.createElement('div');
    ```
- **appendChild(elemento) / insertBefore(nuevo, ref)**
  - Añade un elemento al DOM.
  - Ejemplo:
    ```js
    document.body.appendChild(div);
    ```
- **remove() / removeChild(elemento)**
  - Elimina un elemento.
  - Ejemplo:
    ```js
    div.remove();
    ```
- **replaceChild(nuevo, viejo)**
  - Reemplaza un elemento.
  - Ejemplo:
    ```js
    parent.replaceChild(nuevo, viejo);
    ```
- **textContent / innerText / innerHTML**
  - Modifican el contenido de un elemento.
  - Ejemplo:
    ```js
    div.textContent = 'Texto';
    div.innerHTML = '<b>Negrita</b>';
    ```

#### 3. Selección y colecciones

- **getElementsByClassName('clase')**
  - Devuelve colección viva de elementos.
- **querySelectorAll('selector')**
  - Devuelve NodeList estática.
- Ejemplo:
  ```js
  let vivos = document.getElementsByClassName('item');
  let estaticos = document.querySelectorAll('.item');
  ```

#### 4. Atributos y `data-*`

- **getAttribute('attr') / setAttribute('attr', valor)**
  - Lee o modifica atributos.
  - Ejemplo:
    ```js
    img.setAttribute('alt', 'Descripción');
    ```
- **element.dataset.nombre**
  - Accede a atributos `data-*`.
  - Ejemplo:
    ```js
    div.dataset.userId = '123';
    ```

#### 5. Clases CSS y estilos

- **classList.add/remove/toggle/contains**
  - Manipula clases CSS.
  - Ejemplo:
    ```js
    div.classList.add('activo');
    ```
- **element.style.propiedad**
  - Cambia estilos en línea.
  - Ejemplo:
    ```js
    div.style.color = 'red';
    ```
- **getComputedStyle(elemento)**
  - Obtiene estilos calculados.
  - Ejemplo:
    ```js
    let estilos = getComputedStyle(div);
    ```

#### 6. Eventos

- **addEventListener('evento', función)**
  - Asocia un manejador de eventos.
  - Ejemplo:
    ```js
    btn.addEventListener('click', () => alert('Click!'));
    ```
- **stopPropagation() / preventDefault()**
  - Detiene propagación o acción por defecto.
  - Ejemplo:
    ```js
    enlace.addEventListener('click', e => e.preventDefault());
    ```

#### 7. Formularios

- **submit / reset / focusin / focusout**
  - Eventos de formularios.
  - Ejemplo:
    ```js
    form.addEventListener('submit', e => e.preventDefault());
    ```

#### 8. Cookies y almacenamiento

- **document.cookie**
  - Lee o escribe cookies.
  - Ejemplo:
    ```js
    document.cookie = "usuario=Juan; path=/";
    ```
- **Funciones helper: setCookie/getCookie**
  - Facilitan el manejo de cookies.

#### 9. Objetos del navegador

- **location.href / location.reload()**
  - Redirección o recarga.
  - Ejemplo:
    ```js
    location.href = 'https://ejemplo.com';
    ```
- **history.pushState() / onpopstate**
  - Manipula historial.
- **screen.width / screen.height**
  - Dimensiones de pantalla.
- **window.alert(), confirm(), prompt()**
  - Diálogos nativos.

#### 10. Multimedia

- **Eventos: play, pause, timeupdate, ended**
  - Controlan reproducción de video/audio.
  - Ejemplo:
    ```js
    video.addEventListener('play', () => console.log('Reproduciendo'));
    ```

#### 11. Drag & Drop

- **draggable, dragstart, dragover, drop, dataTransfer**
  - Permiten arrastrar y soltar elementos.
  - Ejemplo:
    ```js
    elem.draggable = true;
    elem.addEventListener('dragstart', e => e.dataTransfer.setData('text', 'info'));
    ```

#### 12. Utilidades varias

- **sort, filter, map (arrays), regex**
  - Métodos de arrays y expresiones regulares.
  - Ejemplo:
    ```js
    let ordenado = arr.sort();
    let filtrado = arr.filter(x => x > 0);
    let palabras = texto.match(/\w+/g);
    ```


1) Temporizadores
- `Temporizadores.html`, `practica7-2.html`, `practica7-10.html`:
  - Uso de `setTimeout()` para ejecutar una acción una sola vez después de un retardo.
  - Uso de `setInterval()` para acciones repetidas cada N ms (por ejemplo, actualizar un contador o revelar párrafos progresivamente).
  - Importante: cancelar con `clearTimeout()` / `clearInterval()` para evitar ejecuciones no deseadas.

2) Manipulación del DOM (crear/insertar/eliminar/reemplazar)
- `AnadirElementos.html`, `EliminarElementos.html`, `ReemplazarElementos.html`, `ManipulacionContenido.html`:
  - Crear elementos con `document.createElement()` y agregarlos con `appendChild()` o `insertBefore()`.
  - Eliminar con `remove()` / `removeChild()` y reemplazar con `replaceChild()`.
  - Modificar contenido con `textContent`, `innerText` e `innerHTML` (atención a XSS si usas `innerHTML`).

3) Selección y colecciones
- `SeleccionElementos.html`, `ColeccionesVivas.html`:
  - Diferencia entre colecciones vivas (`getElementsByClassName`) y estáticas (`querySelectorAll`).
  - Iteración y actualización dinámica cuando el DOM cambia.

4) Atributos y `data-*`
- `ManipulacionAtributos.html`, `ManipulacionAtributos2.html`, `ObtenerAtributosData.html`:
  - Leer/modificar atributos con `getAttribute()` / `setAttribute()` y usar `dataset` para `data-*`.
  - Buen patrón para asociar datos a elementos sin mezclarlos con la lógica.

5) Clases CSS y estilos dinámicos
- `ManipulacionClasesCSS.html`, `ManipulacionCSS.html`, `ObtenerEstilosCSS.html`:
  - `element.classList.add/remove/toggle/contains` para manipular clases.
  - `element.style.propiedad` para estilos inline; `getComputedStyle()` para obtener estilos finales aplicados.

6) Eventos (click, mouse, teclado, formularios)
- `probandoEventos.html`, `probandoEventos2.html`, `prevenirAccion.html`, `probandoFormularios.html`, `practica8-3.html`, `practica8-4.html`, `practica8.2.html`:
  - Modelos de eventos: captura vs burbujeo; `stopPropagation()` para detener la burbuja.
  - `preventDefault()` para evitar comportamiento por defecto (envíos, links).
  - Manejo de teclado con `keydown` y de mouse con `mousemove`, `click`, `contextmenu`, etc.

7) Formularios y validación
- `probandoFormularios.html`:
  - Interceptar `submit` para validar datos (ej. regex) y `reset` con confirmación.
  - Usar `focusin`/`focusout` para mejorar UX.

8) Almacenamiento y cookies
- `Cookies.html`, `practica7-3.html`, `practica7-9.html`:
  - Lectura/escritura de `document.cookie` y creación de funciones helper `setCookie/getCookie`.
  - Guardar estado (visitas, scroll) y restaurarlo al recargar.

9) Objetos del navegador: `location`, `history`, `screen`, `window`
- `ObjetoLocation.html`, `ObjetoHistory.html`, `ObjetoScreen.html`, `PropiedadesYMetodosWindow.html`:
  - `location` para redirecciones y obtener partes de la URL.
  - `history.pushState()` para cambiar URL sin recargar y `onpopstate` para manejar navegación.
  - `screen` para detectar dimensiones y `window` para diálogos (`alert`, `confirm`, `prompt`) y scroll.

10) Multimedia y eventos de medios
- `message.html`:
  - Eventos de elementos `<video>`: `play`, `pause`, `timeupdate`, `ended`, `loadedmetadata`.
  - Registro y trazabilidad de eventos multimedia.

11) Drag & Drop
- `practica8.7.html`:
  - `draggable=true`, `dragstart`, `dragover`, `drop`, `dataTransfer`.
  - Uso típico: mover elementos entre contenedores y cambiar estilos durante el arrastre.

12) Prácticas y utilidades varias
- `Ordenación`, `resaltar palabras`, `contador de palabras`, `lista de palabras` (practica7-* y practica8-*): ejercicios que usan arrays, `sort`, `filter`, `map`, regex y manipulación del DOM para practicar conceptos.

Qué he añadido ya
- He insertado comentarios explicativos en la cabecera de cada archivo HTML (comentario en bloque) que resumen propósito, técnicas y métodos usados.

Siguientes pasos que puedo hacer (elige uno)
- Expandir los comentarios dentro de archivos concretos (funciones JS) para detallar línea a línea.
- Añadir ejemplos en cada archivo (sección `<!-- EJEMPLO -->`) con pequeños fragmentos demostrativos.
- Generar documentación HTML navegable (un índice con enlaces a cada archivo y su explicación).

Dime cuál prefieres y lo implemento. Si quieres que expanda archivos concretos, pásame la lista (por ejemplo: `Temporizadores.html`, `Cookies.html`).
