import { proyecto, agenda, blackjack, galeriaImagenes, carrito, quizApp, portfolio, calendar, demoCalendar, demoBlackjack } from '../img';


export const dataProyectos = [

    {
        id: 1,
        title: 'Shopping cart',
        description: 'Tienda con carrito de compra donde se puede filtrar por precio y categorias, agregar al carrito, cambiar la cantidad del producto y/o eliminarlo. Tecnologías: HTML5 - CSS - JavaScript - React - Vite',
        image: carrito,
        repositorio: 'https://github.com/fede-alejandro/shopping-cart',

    },
    {
        id: 2,
        title: 'Como lo reciclo',
        description: 'Una aplicación para que los usuarios donen artículos que ya no utilizan y les den una segunda vida. Al registrarse pueden realizar publicaciones, recibir mensajes de interesados y decidir a quién donarlos.También contiene información sobre reciclaje y un podcasts de Spotify. Tecnologías: HTML5 - CSS - JavaScript - React - Node Js - Express Mongo - Mongoose - Tailwind',
        image: proyecto,
        repositorio: 'https://github.com/fede-alejandro/como-lo-reciclo',

    },
    {
        id: 3,
        title: 'Agenda de tareas',
        description: 'Desarrollo de un organizador de tareas. Contiene un página de registro, login y settings de perfil.Las tareas se pueden crear, editar, eliminar y categorizar por estados o progreso. Tecnologías: HTML5 - CSS - JavaScript - React - Tailwind',
        image: agenda,
        repositorio: 'https://github.com/fede-alejandro/Agenda-tareas',
    },
    {
        id: 4,
        title: 'Blackjack',
        description: 'Juego de naipes en el que gana quien hace veintiún puntos o se queda más cerca de ellos sin sobrepasarlos. Tecnologías: HTML5 - CSS - JavaScript',
        image: blackjack,
        repositorio: 'https://github.com/fede-alejandro/Blackjack',
        app: demoBlackjack
    },
    {
        id: 5,
        title: 'Galeeria de imágenes',
        description: 'Mini proyecto, galeria de imagenes. Tecnologías: HTML5 - CSS - JavaScript',
        image: galeriaImagenes,
        repositorio: 'https://github.com/fede-alejandro/Galeria-de-imagenes',
        app: 'https://galeria-de-imagenes-fedealejandro.vercel.app/'
    },
    {
        id: 6,
        title: 'Quiz App',
        description: 'Juego de preguntas y respuestas sobre el espacio exterior. Tecnologías: HTML5, CSS, JavaScript',
        image: quizApp,
        repositorio: 'https://github.com/fede-alejandro/quiz-app',
        app: 'https://quiz-app-fedealejandro.vercel.app/'
    },
    {
        id: 7,
        title: 'Portfolio',
        description: 'Portfolio contando más acerca de mí, mis proyectos, experiencia. Tecnologías: HTML5 - CSS - JavaScript - React - Node Js - Tailwind',
        image: portfolio,
        repositorio: 'https://github.com/fede-alejandro/portfolio',

    },
    {
        id: 8,
        title: 'Calendar',
        description: 'Calendario donde poder anotar como recordatorio eventos futuros, se pueden editar o borrar. Contiene un registro y login, se puede ver por días, semanas o meses. Tecnologías: HTML5 - CSS - JavaScript - React - Node Js - Vite - Bootstrap',
        image: calendar,
        repositorio: 'https://github.com/fede-alejandro/calendar',
    }
]

