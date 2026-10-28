# Mini portafolio

Este es mi portafolio personal, hecho para la Evaluación N°3 de Desarrollo de Frontend (Ingeniería Civil Informática, Universidad Catolica de Temuco). Lo construí con React, Vite, JavaScript y React Router.

El sitio tiene cinco páginas: Inicio, Sobre mí, Habilidades, Proyectos y Contacto. Todas comparten el encabezado con el menú y el pie de página con mi nombre y el año.

# Requisitos

- Node.js 18 o superior
- Git

# Instalación

git clone https://github.com/dmanquicoy/evaluacion-3.git
cd evaluacion-3
npm install

# Cómo ejecutarlo

npm run dev


Después abre en el navegador la dirección que aparece en la terminal, que normalmente es http://localhost:5173.

# Estructura de carpetas


public/
    mi-foto.jpg
src/
    components/
        Header.jsx
        Footer.jsx
        Layout.jsx
        TarjetaProyecto.jsx
        FormularioContacto.jsx
    pages/
        Inicio.jsx
        SobreMi.jsx
        Habilidades.jsx
        Proyectos.jsx
        Contacto.jsx
    App.jsx
    main.jsx
    styles.css
index.html
package.json
README.md
uso_ia.md


Qué hace cada archivo principal:

- main.jsx: es el punto de entrada. Envuelve la aplicación en BrowserRouter y carga los estilos.
- App.jsx: define las cinco rutas, todas dentro de Layout.
- Layout.jsx: junta el Header, el contenido de la página que corresponda (con Outlet) y el Footer.
- Header.jsx: muestra mi nombre y el menú con NavLink. La página en la que estoy queda marcada con la clase active.
- Footer.jsx: muestra mi nombre y el año actual.
- TarjetaProyecto.jsx: tarjeta que recibe por props el título, la descripción y el enlace de un proyecto. Si no hay enlace, muestra "Repositorio pendiente de publicar".
- FormularioContacto.jsx: formulario con useState para los campos y los errores. Valida que no haya campos vacíos y que el correo tenga formato válido, y muestra una confirmación al enviar.
- pages: un archivo por cada página del sitio.
- styles.css: todos los estilos, hechos con CSS normal.
- public/mi-foto.jpg: la foto que aparece en Inicio y en Sobre mí.

# Rutas

| Ruta | Página | Qué muestra |
| --- | --- | --- |
| / | Inicio | Mi nombre, mi rol y una invitación a recorrer el sitio |
| /sobre-mi | Sobre mí | Una presentación breve de lo que estudio y me interesa |
| /habilidades | Habilidades | Lenguajes y herramientas con mi nivel en cada una |
| /proyectos | Proyectos | Mis proyectos con título, descripción y enlace |
| /contacto | Contacto | Formulario con nombre, correo y mensaje |

# Formulario de contacto

El formulario valida los datos en el navegador y los envía a Formspree, un servicio externo que me reenvía el mensaje a mi correo. Así no necesité crear un servidor propio.

# Dificultades encontradas

- No sabia como hacer funcionar el formulario de contacto pero con ayuda de claude pude lograr hacerlo funcionar con formspree.

- Tenia un error de que al colocar los enlaces del repositorio de los proyectos se caia la pagina, pero lo solucione colocando los links entre comillas "" ya que por eso no funcionaban.

- Estructuracion del proyecto al principio no sabia como se estructuraba el proyecto pero con ayuda de claude supe como tenian que ir organizados los archivos.