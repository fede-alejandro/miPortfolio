import { proyecto, agenda, blackjack, galeriaImagenes, carrito, quizApp, portfolio } from '../img';


export const dataProyectos = [

    {
        id: 1,
        title: 'SHOPPING CART',
        description: 'Tienda con carrito de compra donde se puede filtrar por precio y categorias, agregar al carrito, cambiar la cantidad del producto y/o eliminarlo. Tecnologías: HTML5 - CSS3 - JavaScript - React - Vite',
        image: carrito,
        repositorio: 'https://github.com/fede-alejandro/shopping-cart',

    },
    {
        id: 2,
        title: 'COMO LO RECICLO',
        description: 'Una aplicación para que los usuarios donen artículos que ya no utilizan y les den una segunda vida. Al registrarse pueden realizar publicaciones, recibir mensajes de interesados y decidir a quién donarlos.También contiene información sobre reciclaje y un podcasts de Spotify. Tecnologías: HTML5 - CSS3 - JavaScript - React - Node Js - Express Mongo - Mongoose - Tailwind',
        image: proyecto,
        repositorio: 'https://github.com/fede-alejandro/como-lo-reciclo',

    },
    {
        id: 3,
        title: 'AGENDA DE TAREAS',
        description: 'Desarrollo de un organizador de tareas. Contiene un página de registro, login y settings de perfil.Las tareas se pueden crear, editar, eliminar y categorizar por estados o progreso. Tecnologías: HTML5 - CSS3 - JavaScript - React - Tailwind',
        image: agenda,
        repositorio: 'https://github.com/fede-alejandro/Agenda-tareas',
    },
    {
        id: 4,
        title: 'BLACKJACK',
        description: 'Juego de naipes en el que gana quien hace veintiún puntos o se queda más cerca de ellos sin sobrepasarlos. Tecnologías: HTML5 - CSS3 - JavaScript',
        image: blackjack,
        repositorio: 'https://github.com/fede-alejandro/Blackjack',
    },
    {
        id: 5,
        title: 'GALERIA DE IMAGENES',
        description: 'Mini proyecto, galeria de imagenes. Tecnologías: HTML5 - CSS - JavaScript',
        image: galeriaImagenes,
        repositorio: 'https://github.com/fede-alejandro/Galeria-de-imagenes',
    },
    {
        id: 6,
        title: 'Quiz App',
        description: 'Juego de preguntas y respuestas sobre el espacio exterior. Tecnologías: HTML5, CSS3, JavaScript',
        image: quizApp,
        repositorio: 'https://github.com/fede-alejandro/quiz-app'
    },
    {
        id: 7,
        title: 'PORTFOLIO',
        description: 'Portfolio contando más acerca de mí, mis proyectos, experiencia. Tecnologías: HTML5 - CSS3 - JavaScript - React - Node Js - Tailwind',
        image: portfolio,
        repositorio: 'https://github.com/fede-alejandro/portfolio',

    },
]

