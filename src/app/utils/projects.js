const projects = [
  {
    name: "@bcn.info",
    descriptions: {
      es: "Agenda colaborativa de eventos culturales de Barcelona",
      en: "Collaborative agenda of cultural events in Barcelona",
    },
    image:
      "https://res.cloudinary.com/getoutbcn/image/upload/v1692969003/portfolio/atbcnmockedv3_cdmzbe.png",
    techUsed: [
      "NextJs",
      "HTML",
      "JavaScript",
      "React Server Components",
      "TypeScript",
      "Supabase",
      "Tailwind",
      "Figma",
    ],
    linkGithub: "https://github.com/pdelbarrio/atbcn",
    linkDeploy: "https://www.atbcn.info/",
    longDescription: {
      es: `La aplicación para estar al día de los eventos locales.     

      Características clave:    
     
        ▶️Explora eventos: Accede a una lista organizada de eventos de tu ciudad en la semana actual y posteriores y desplázate fácilmente para descubrir lo que está sucediendo en tu área.
        ▶️Interfaz intuitiva: Navega por la aplicación de manera sencilla e intuitiva. Los eventos se presentan de forma apilada, lo que te permite desplazarte y explorar rápidamente la información relevante.
        ▶️Detalles esenciales: Cada evento muestra información clave, como el nombre, la fecha y hora, la ubicación, el precio y etiquetas descriptivas que brindan una idea general del evento.
        ▶️Visualización completa: Si un evento atrae tu interés, puedes hacer clic en él para acceder a una vista detallada. Allí encontrarás una descripción completa, un póster y un enlace relevante relacionado con el evento (venta de entradas o información más completa).
        ▶️Registro simplificado: Únete a la comunidad registrándote con tu dirección de correo electrónico y una contraseña, o simplemente utiliza la función de inicio de sesión social con Gmail para agilizar el proceso.
        ▶️Añade tus propios eventos: Como usuario registrado, puedes contribuir a la agenda añadiendo tus propios eventos. Rellena un formulario completo con campos como nombre, ubicación, precio y fecha para proporcionar detalles precisos.
        ▶️Previsualización y edición: Antes de confirmar la inclusión de un evento, puedes previsualizarlo para asegurarte de que toda la información sea correcta. Si es necesario, podrás realizar modificaciones antes de hacerlo público.
        ▶️Protección contra mal uso: He implementado un sistema de baneo de usuarios para prevenir eventos inapropiados o engañosos. Cada evento se vincula al usuario responsable, lo que permite tomar medidas rápidas y eficaces.
        ▶️Privacidad y seguridad: bcn utiliza Supabase como backend, garantizando la protección de tus datos y eliminando la necesidad de configurar tu propio servidor.
        ▶️Modo oscuro: Ofrece una experiencia de visualización cómoda y personalizada al permitirte elegir entre el modo claro y oscuro.
          
        Con @bcn, he creado una herramienta práctica y eficiente para mantener a las personas informadas sobre los eventos locales, solventando el problema de tener toda la información dispersa en diferentes aplicaciones y webs. Además de ser una aplicación muy útil, este proyecto demuestra mi capacidad para moverme con documentación y aprender nuevas tecnologías experimentales, como la app folder de las versiones de Next.js posteriores a v13, los React Server Components y la integración con Supabase como BaaS.
         
        Este proyecto también destaca mi habilidad para crear una interfaz de usuario intuitiva y receptiva, así como mi enfoque en la calidad. @bcn es más que una simple agenda de eventos; es una muestra de mi capacidad para realizar proyectos funcionales y orientados al usuario en el desarrollo web.
      `,
      en: `The app to stay updated on local events

      Key Features:
      
      ▶️ Explore Events: Access an organized list of events in your city for the current and upcoming weeks. Scroll easily to discover what's happening in your area.
      ▶️ Intuitive Interface: Navigate the app seamlessly and intuitively. Events are presented in a stacked format, allowing you to scroll and quickly explore relevant information.
      ▶️ Essential Details: Each event showcases key information such as name, date and time, location, price, and descriptive tags that provide a general idea of the event.
      ▶️ Full View: If an event captures your interest, click on it to access a detailed view. There you'll find a complete description, a poster, and a relevant link related to the event (ticket sales or more comprehensive information).
      ▶️ Simplified Registration: Join the community by registering with your email address and password, or simply use the social login feature with Gmail to streamline the process.
      ▶️ Add Your Own Events: As a registered user, you can contribute to the calendar by adding your own events. Fill out a comprehensive form with fields like name, location, price, and date to provide accurate details.
      ▶️ Preview and Edit: Before confirming the inclusion of an event, you can preview it to ensure all information is correct. If necessary, you can make modifications before making it public.
      ▶️ Protection Against Misuse: I've implemented a user banning system to prevent inappropriate or misleading events. Each event is linked to the responsible user, allowing for quick and effective actions.
      ▶️ Privacy and Security: bcn uses Supabase as a backend, ensuring the protection of your data and eliminating the need to set up your own server.
      ▶️ Dark Mode: Offers a comfortable and personalized viewing experience by allowing you to choose between light and dark modes.
      
      With @bcn, I've created a practical and efficient tool to keep people informed about local events, solving the problem of scattered information across different apps and websites. Beyond being a highly useful app, this project showcases my ability to navigate documentation and learn new experimental technologies, such as Next.js app folder in versions later than v13, React Server Components, and integration with Supabase as a BaaS.
      
      This project also highlights my ability to create an intuitive and responsive user interface, as well as my emphasis on quality. @bcn is more than just an event calendar; it's a testament to my capacity to deliver functional, user-centric projects in web development.
      `,
    },

    linkVideodemo: "",
    status: "Online",
    moreInfo: true,
  },
  {
    name: "GetOut BCN",
    descriptions: {
      es: "GET OUT BCN es una base de datos colaborativa de lugares geniales en Barcelona...",
      en: "GET OUT BCN is a collaborative database of cool spots in Barcelona...",
    },
    image:
      "https://res.cloudinary.com/getoutbcn/image/upload/v1675715953/portfolio/projects/getout_j5jli1.png",
    techUsed: [
      "HTML",
      "JavaScript",
      "React",
      "TypeScript",
      "Styled Components",
      "Express",
      "MongoDB",
      "Jest",
      "Figma",
    ],
    linkGithub: "https://github.com/pdelbarrio/getout-front",
    linkDeploy: "https://getoutbcn.vercel.app/",
    longDescription: {
      es: "GET OUT BCN es una base de datos colaborativa de lugares chulos de Barcelona. Está dividida en diferentes categorías. El usuario tiene que registrarse para navegar o añadir spots a la base de datos. Los spots son moderados y no aparecerán hasta que sean validados por el administrador. En cuanto a la parte más técnica uno de mis propósitos con este proyecto era adentrarme en el mundo TypeScript con React. Y aunque al principio fue complicado, a medida que avanzaba el proyecto me fui acostumbrando e incluso facilitaba algunas tareas si los tipos estaban bien definidos, añadiendo así una capa extra de seguridad a la aplicación. Otro de mis propósitos era hacer pruebas, e hice TDD con Jest en las rutas del backend.",
      en: "GET OUT BCN is a collaborative database of cool spots in Barcelona. It is divided into different categories. The user has to register to browse or to add spots to the database. The spots are moderated and will not appear until validated by the administrator. Regarding the more technical part one of my purposes with this project was to get into the TypeScript world with React. And although at the beginning it was complicated, as the project progressed I got used to it and it even made some tasks easier if the types were well defined, thus adding an extra layer of security to the application. Another of my purposes was to do testing, and I did TDD with Jest on the backend routes.",
    },
    linkVideodemo: "https://vimeo.com/720203535",
    status: "Online",
    moreInfo: true,
  },
  {
    name: "intrathecapp web app (PRIALT)",
    descriptions: {
      es: "Frontend de una aplicación web que calcula dosis de medicamentos para uso farmacéutico. Haz clic en el botón de información para obtener más información o en el botón de play para ver una demostración.",
      en: "Frontend of a web application that calculates drug doses for pharmaceutical use. Click the info button for more info or in the play button for a demo.",
    },
    image:
      "https://res.cloudinary.com/getoutbcn/image/upload/v1676051276/portfolio/projects/prialt_qlgvbb.png",
    techUsed: ["HTML", "JavaScript", "CSS", "React"],
    linkGithub: "",
    linkDeploy: "",
    longDescription: {
      es: "Frontend de una aplicación web que calcula dosis de medicamentos de uso farmacéutico. Intrathecapp es una aplicación destinada a calcular las dosis de un medicamento para administrar a pacientes. El cliente nos proporcionó un archivo excel complejo con multitud de fórmulas que relacionaban diferentes campos excel en función de unos inputs. La parte lógica de la calculadora se hizo usando POO en Javascript. El backend se hizo con django y el frontend (mi parte) con React, usando Hooks y Context para gestionar el estado. La aplicación está en stand by y el repositorio es privado pero puedes ver una pequeña demo si pulsas el botón de play.",
      en: "Frontend of a web application that calculates drug doses for pharmaceutical use. Intrathecapp is an application intended to calculate the doses of a medication to be administered to patients. The client gave us a complex excel file with a multitude of formulas that related different excel fields according to some inputs. The logic part of the calculator was made using Javascript OOP. The backend was done with django and the frontend (my part) with React, using Hooks and Context to manage the state. The application is in stand by and the repository is private but you can see a small demo if you click the play button.",
    },
    linkVideodemo: "https://vimeo.com/720597336",
    status:
      "After developing the project the company decided to leave its release on standby, but you can see a demo.",
    moreInfo: true,
  },
  {
    name: "Videolol",
    descriptions: {
      es: "E-commerce mobile friendly app con carrito de la compra, login social, posibilidad de pagar con tarjeta de crédito con integración de Stripe. También se ha implementado PWA para que se pueda instalar en el móvil mejorando la experiencia de usuario siendo similar a una app nativa.",
      en: "E-commerce mobile friendly app with shopping cart, social login, possibility to pay by credit card with Stripe integration. PWA has also been implemented so it can be installed on the mobile phone improving the user experience being similar to a native app.",
    },
    image:
      "https://res.cloudinary.com/getoutbcn/image/upload/v1675939711/portfolio/projects/videolol_gixpjg.png",
    techUsed: ["HTML", "React", "Firebase", "Redux", "Stripe", "PWA"],
    linkGithub: "https://github.com/pdelbarrio/videolol",
    linkDeploy: "https://videolol.netlify.app/",
    longDescription: {
      es: "",
      en: "",
    },
    linkVideodemo: "",
    status: "Online",
    moreInfo: false,
  },
  {
    name: "Google Translator Clone",
    descriptions: {
      es: "Clon del Traductor de Google hecho con React y usando la API de OpenAI",
      en: "Google Translator clone made with React and using the OpenAI API",
    },
    image:
      "https://res.cloudinary.com/getoutbcn/image/upload/v1692969547/portfolio/translatemockedv2_hd4nur.png",
    techUsed: [
      "React",
      "OpenAI",
      "ChatGPT",
      "Custom Hooks",
      "React-Bootstrap",
      "TypeScript",
      "Vitest",
    ],
    linkGithub: "https://github.com/pdelbarrio/translator-clone",
    linkDeploy: "https://translator-clone.vercel.app/",
    longDescription: {
      es: "Clon de Google Translator hecho con React. La razón principal para hacer esta aplicación fue hacer mi primera aplicación utilizando la API de OpenAI. También para practicar con el hook useReducer y hacer hooks personalizados como useDebounce para afinar el proceso de traducción. Una vez visto el potencial de la IA y el uso de prompts puede que intente usar otra API gratuita para traducir (como la de DeepL) ya que esta API no es gratuita, aunque no es muy cara, he puesto un límite por si acaso. Si no funciona por este límite, puedes ver el funcionamiento básico de la app si pulsas play en la demo en video",
      en: "Google Translator clone made with React. The main reason to do this app was to make my first app using the OpenAI API. Also to practice with the hook useReducer and make custom hooks like useDebounce to fine tune the translation process. Once I saw the potential of the AI and the use of prompts I might try to use another free API to translate (like the one from DeepL) since this API is not free, even if it is not very expensive, I have put a limit just in case. If it doesn't work because of this limit, you can see the basic operation of the app if you click play on the video demo.",
    },
    linkVideodemo: "https://vimeo.com/815872902",
    status: "",
    moreInfo: false,
  },
  // {
  //   name: "QUIZR",
  //   description:
  //     "Mobile friendly app made to practice with asynchronous JavaScript, CSS, Express, MongoDB and PWA. It is a simple quiz app with questions about Web Development that can be installed on the cell phone. I am regularly adding questions. Highscores section still to be fixed and future improvements on the way including new frontend with React/Next",
  //   image:
  //     "https://res.cloudinary.com/getoutbcn/image/upload/v1675939793/portfolio/projects/quizr_dwh3or.png",
  //   techUsed: ["HTML", "CSS", "JavaScript", "Express", "MongoDB", "PWA"],
  //   linkGithub: "https://github.com/pdelbarrio/quizapp",
  //   linkDeploy: "https://quizr.netlify.app/",
  //   longDescription: "",
  //   linkVideodemo: "",
  //   status:
  //     "Constant evolution, adding questions and answers using chatGPT. Highscores section still to be fixed and future improvements on the way including new frontend with React/Next",
  //   moreInfo: false,
  // },
];

export default projects;
