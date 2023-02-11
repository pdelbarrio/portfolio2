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
      "GET OUT BCN is a collaborative database of cool spots in Barcelona. It is divided into different categories. The user has to register to browse or to add spots to the database. The spots are moderated and will not appear until validated by the administrator. Regarding the more technical part one of my purposes with this project was to get into the TypeScript world with React. And although at the beginning it was complicated, as the project progressed I got used to it and it even made some tasks easier if the types were well defined, thus adding an extra layer of security to the application.Another of my purposes was to do testing, and I did TDD with Jest on the backend routes, and I discovered how rewarding the feeling you get when you see all the tests go green ✅ 😏 👌🏻",
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
      "E-commerce mobile frienldy site for sale of vhs with shopping cart, social login, possibility to pay by credit card with Stripe integration. PWA has also been implemented so it can be installed on the mobile phone improving the user experience being similar to a native app.",
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
    name: "QUIZR",
    description:
      "Mobile friendly app made to practice with asynchronous JavaScript, CSS, Express, MongoDB and PWA. It is a simple quiz app with questions about Web Development that can be installed on the cell phone.",
    image:
      "https://res.cloudinary.com/getoutbcn/image/upload/v1675939793/portfolio/projects/quizr_dwh3or.png",
    techUsed: ["HTML", "CSS", "JavaScript", "Express", "MongoDB", "PWA"],
    linkGithub: "https://github.com/pdelbarrio/quizapp",
    linkDeploy: "https://quizr.netlify.app/",
    longDescription: "",
    linkVideodemo: "",
    status:
      "Constant evolution, adding questions and answers using chatGPT. Highscores section still to be fixed and future improvements on the way",
    moreInfo: false,
  },
  {
    name: "Frequencies Game",
    description:
      "Play catch game done in vanilla JavaScript (only for desktop). You are the blue ball and you have to catch the red balls to lower their frequency using the arrow keys.",
    image:
      "https://res.cloudinary.com/getoutbcn/image/upload/v1675348882/portfolio/projects/proj3_qhrb4f.gif",
    techUsed: ["HTML", "CSS", "JavaScript"],
    linkGithub: "https://github.com/pdelbarrio/frequencies-game",
    linkDeploy: "https://pdelbarrio.github.io/frequencies-game/",
    longDescription: "",
    linkVideodemo: "",
    status: "Online",
    moreInfo: false,
  },
];

export default projects;
