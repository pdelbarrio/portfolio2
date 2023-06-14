const projects = [
  {
    name: "@bcn.info",
    description: "Agenda de eventos culturales colaborativa de Barcelona.",
    image:
      "https://res.cloudinary.com/getoutbcn/image/upload/v1686765051/portfolio/projects/atbcnmockup_a4mi86.png",
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
    longDescription: `La aplicación para estar al día de los eventos locales.     
       
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
        
      Con @bcn, he creado una herramienta práctica y eficiente para mantener a las personas informadas sobre los eventos locales, solventando el problema de tener toda la información dispersa en diferentes aplicaciones y webs. Además de ser una aplicación muy útil, este proyecto demuestra mi capacidad para leer y aprender nuevas tecnologías experimentales, como la app folder de las versiones de Next.js posteriores a 13.2, los React Server Components y la integración con Supabase.
       
      Este proyecto también destaca mi habilidad para crear una interfaz de usuario intuitiva y receptiva, así como mi enfoque en la calidad y la seguridad de los datos. @bcn es más que una simple agenda de eventos; es un testimonio de mi experiencia en desarrollo web y mi capacidad para entregar proyectos funcionales y orientados al usuario.
    `,
    linkVideodemo: "",
    status: "Online",
    moreInfo: true,
  },
  {
    name: "GetOut BCN",
    description:
      "GET OUT BCN is a collaborative database of cool spots in Barcelona. Click the info button for more info or in the play button for a demo.",
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
    longDescription:
      "GET OUT BCN is a collaborative database of cool spots in Barcelona. It is divided into different categories. The user has to register to browse or to add spots to the database. The spots are moderated and will not appear until validated by the administrator. Regarding the more technical part one of my purposes with this project was to get into the TypeScript world with React. And although at the beginning it was complicated, as the project progressed I got used to it and it even made some tasks easier if the types were well defined, thus adding an extra layer of security to the application. Another of my purposes was to do testing, and I did TDD with Jest on the backend routes",
    linkVideodemo: "https://vimeo.com/720203535",
    status: "Online",
    moreInfo: true,
  },
  {
    name: "intrathecapp web app (PRIALT)",
    description:
      "Frontend of a web application that calculates drug doses for pharmaceutical use. Click the info button for more info  or in the play button for a demo.",
    image:
      "https://res.cloudinary.com/getoutbcn/image/upload/v1676051276/portfolio/projects/prialt_qlgvbb.png",
    techUsed: ["HTML", "JavaScript", "CSS", "React"],
    linkGithub: "",
    linkDeploy: "",
    longDescription:
      "Frontend of a web application that calculates drug doses for pharmaceutical use. Intrathecapp is an application intended to calculate the doses of a medication to be administered to patients. The client gave us a complex excel file with a multitude of formulas that related different excel fields according to some inputs. The logic part of the calculator was made using Javascript OOP. The backend was done with django and the frontend (my part) with React, using Hooks and Context to manage the state. The application is in stand by and the repository is private but you can see a small demo if you click the play button.",
    linkVideodemo: "https://vimeo.com/720597336",
    status:
      "After developing the project the company decided to leave its release on standby, but you can see a demo.",
    moreInfo: true,
  },
  {
    name: "Videolol",
    description:
      "E-commerce mobile friendly site for sale of vhs with shopping cart, social login, possibility to pay by credit card with Stripe integration. PWA has also been implemented so it can be installed on the mobile phone improving the user experience being similar to a native app.",
    image:
      "https://res.cloudinary.com/getoutbcn/image/upload/v1675939711/portfolio/projects/videolol_gixpjg.png",
    techUsed: ["HTML", "React", "Firebase", "Redux", "Stripe", "PWA"],
    linkGithub: "https://github.com/pdelbarrio/videolol",
    linkDeploy: "https://videolol.netlify.app/",
    longDescription: "",
    linkVideodemo: "",
    status: "Online",
    moreInfo: false,
  },
  {
    name: "Google Translator Clone",
    description:
      "Google Translator clone made with React and using the OpenAI API",
    image:
      "https://res.cloudinary.com/getoutbcn/image/upload/v1680980910/translate_eycnxh.png",
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
    longDescription:
      "Google Translator clone made with React. The main reason to do this app was to make my first app using the OpenAI API. Also to practice with the hook useReducer and make custom hooks like useDebounce to fine tune the translation process. Once I saw the potential of the AI and the use of prompts I might try to use another free API to translate (like the one from DeepL) since this API is not free, even if it is not very expensive, I have put a limit just in case. If it doesn't work because of this limit, you can see the basic operation of the app if you click play on the video demo.",
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
