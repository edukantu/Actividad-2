# Actividad-2

INDEX.HTML
# Aplicación Web Interactiva

Este es un proyecto personal que desarrollé para gestionar la comunicación dentro de la comunidad universitaria. La aplicación utiliza componentes personalizados en JavaScript y permite navegar por diferentes secciones como información sobre nuestra red social, perfiles de usuario, una galería de imágenes y una tabla personalizada.

## Estructura del Proyecto

La aplicación está organizada de la siguiente manera:

- **index.html**: Es el archivo principal que se encarga de cargar todos los componentes personalizados necesarios.
- **componentes/**: Aquí están los módulos en JavaScript que diseñé:
  - `header.js`: Define el encabezado de la página.
  - `footer.js`: Agrega un pie de página con información adicional.
  - `main.js`: Gestiona el contenido principal.
  - `menu.js`: Un menú interactivo para navegar entre las secciones.
  - `social-profile.js`: Muestra perfiles de usuario personalizados.
  - `custom-table.js`: Genera tablas dinámicas personalizadas.
  - `gallery.js`: Crea una galería de imágenes con contenido dinámico.
- **styles.css**: El archivo donde definí los estilos de la aplicación.

## Descripción de la Aplicación

### Componente `app-header`
En este componente está el encabezado de la página. Aquí suelo incluir el título de la aplicación o algún mensaje importante.

### Componente `app-menu`
El menú interactivo que diseñé permite navegar entre las distintas secciones: inicio, perfil de usuario, galería y tabla.

### Componente `app-main`
Este es el corazón de la aplicación. El contenido principal se actualiza dinámicamente dependiendo de la sección que se elija en el menú.

### Componente `app-footer`
Aquí se encuentra el pie de página. Lo uso para incluir información como derechos de autor o enlaces adicionales.

## Funcionalidad

Cuando navego por la aplicación, los eventos del menú (`navigate`) me permiten actualizar dinámicamente el contenido dentro de `<app-main>`. Cada opción del menú tiene su propio propósito:

- **Inicio (home)**: Incluye una descripción sobre la importancia de nuestra red social universitaria.
- **Perfil (profile)**: Utiliza el componente `social-profile` para mostrar un perfil de usuario interactivo.
- **Galería (gallery)**: Carga una galería de imágenes usando el componente `gallery-slots`.
- **Tabla (table)**: Muestra una tabla personalizada con datos dinámicos gracias al componente `custom-table`.

## Requisitos

- Un navegador moderno que soporte módulos ES6.
- Tener todos los archivos organizados en la estructura adecuada.

## Instalación

1. Descarga o clona este proyecto en tu computadora.
2. Asegúrate de que todos los archivos estén en la misma carpeta raíz.
3. Abre el archivo `index.html` en tu navegador favorito y disfruta explorando.

## Licencia

Este proyecto es mío, pero está bajo la licencia MIT. Si te resulta útil, siéntete libre de usarlo, modificarlo o compartirlo respetando los términos de la licencia.


# Componente Personalizado: `HeaderComponent`

Quiero compartir un componente que diseñé como parte de mi proyecto. Este encabezado es simple pero funcional y está pensado para darle identidad a mi aplicación web. Utiliza Shadow DOM para encapsular los estilos, lo que asegura que se mantenga consistente y sin interferencias con otros elementos de la página.

## ¿Qué hace este componente?

Este componente genera un encabezado con las siguientes características:

- **Un título**: "Bienvenido a la Red Social de la ESPE".
- **Un logo**: Ubicado en la esquina superior derecha, representa la identidad visual de la universidad.
- **Un diseño centrado**: Utiliza `flexbox` para alinear el título en el centro del espacio disponible.

### Decisiones de diseño

- **Uso del Shadow DOM**: Quise que los estilos del encabezado fueran completamente independientes del resto de la página, para evitar conflictos.
- **Flexibilidad**: Elegí flexbox porque facilita centrar el contenido de manera horizontal y vertical, adaptándose bien a distintos tamaños de pantalla.
- **Logo flotante**: Decidí usar posicionamiento absoluto para que el logo siempre esté en la esquina derecha sin afectar el diseño del título.

## Cómo lo implementé

El componente está implementado como una clase que extiende `HTMLElement`. Aquí está el código:


