const projects = [
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
    linkDeploy: "https://www.getoutbcn.com/",
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
  {
    name: "@bcn",
    description:
      "Collaborative agenda of cultural events in Barcelona. (UNDER CONSTRUCTION)",
    image:
      "https://res.cloudinary.com/getoutbcn/image/upload/v1679991257/portfolio/projects/mocked_fqbaho.png",
    techUsed: ["HTML", "Tailwind", "JavaScript", "NextJs", "PWA", "Supabase"],
    linkGithub: "https://github.com/pdelbarrio/atbcn",
    linkDeploy: "",
    longDescription:
      "At first it was planned to be made in React Native, but it has been decided to make a first version with Nextjs in which the PWA functionality will be implemented, taking advantage of the progressive cache of its latest version, to make it as accessible as possible and have a UX/UI very similar to a native app. The idea of the app is to be able to see all these events in a comfortable way to try to have the cultural activity in a single app and not depend on having all the information scattered in many other sites. It will be the users themselves who can enter events that will later be validated to appear in the agenda",
    linkVideodemo: "",
    status: "Under construction",
    moreInfo: false,
  },
];

export default projects;
