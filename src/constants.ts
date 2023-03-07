export const staticUrl = process.env.PUBLIC_URL;

export const fullName = "Alexey Demianenko";
export const avatarPath = staticUrl + "avatar.png";
export const since = 2017;
export const age = 31;
export const location = "Dnipro/Ukraine";

export const summaryHeader = `A framework agnostic full stack developer with experience in
REST APIs development, data processing, performance
challenges, and third-party integration.`;

export const summary = [
  "Worked in a team (both Ukrainian and international) and as a standalone developer and researcher.",
  "Dealt with legacy projects and have experience with challenging performance issues on both frontend and backend.",
  "Until the russian invasion was a mentor to a lot of junior developers at a big (~2k members ) Django Telegram community.",
  "In addition, a long time ago had experience with deep audio processing (numpy, Fast Fourier Transform, Goertzel algorithm).",
];
export const skills = [
  {
    caption: "Languages",
    stack: ["Python", "Typescript/Javascript"],
  },
  {
    caption: "NodeJS backend",
    stack: [
      "NodeJS",
      "GraphQL/Apollo Server",
      "Node cron",
      "BullMQ",
      "Express*",
      "NestJs*",
    ],
  },
  {
    caption: "Python backend",
    stack: ["Django", "DRF", "Celery"],
  },
  {
    caption: "Frontend",
    stack: [
      "ReactJS",
      "GraphQL/Apollo client",
      "MUI",
      "CSS",
      "Webpack",
      "Formik",
      "Yup",
      "Styled Components",
      "Akita *",
    ],
  },
  {
    caption: "Testing",
    stack: ["Selenium Webdriver", "Pytest*"],
  },
  {
    caption: "Protocols",
    stack: ["HTTP", "Server-Sent Event", "Websocket*", "MQTT*"],
  },
  {
    caption: "SQL & ORMs",
    stack: ["Raw SQL", "Django ORM", "Prisma ORM"],
  },
  {
    caption: "Databases",
    stack: ["Postgres", "SQLite", "RedisDB", "MongoDB*"],
  },
  {
    caption: "Server environment",
    stack: ["Linux", "Nginx", "Docker", "Supervisor"],
  },
  {
    caption: "Cloud: Digital Ocean",
    stack: ["Apps", "Spaces", "Droplets", "Databases"],
  },
  {
    caption: "Project-specific skills",
    stack: ["Audio processing basics*", "Asterisk (VoIP)*", "FFMpeg*"],
  },
];

export const socialLinks = [
  { title: "Github", url: "https://github.com/AlexDemian" },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/alex-demianenko-ua-dp/",
  },
  {
    title: "Telegram",
    url: "https://t.me/AlexDemDp",
  },
  {
    title: "Djinni",
    url: "https://djinni.co/q/8834c3c41f",
  },
  {
    title: "a.demianenko92@gmail.com",
    url: "mailto:a.demianenko92@gmail.com",
  },
];

export const companies = [
  {
    period: "2019-2023",
    name: "Gearheart",
    url: "https://gearheart.io/",
    position: "Python/NodeJS full-stack developer",
  },
  {
    period: "2017-2019",
    name: "XOtel",
    url: "https://xotel.com/",
    position: "Python backend developer",
  },
  {
    period: "2016",
    name: "freelancer.com",
    url: "https://www.freelancer.com/",
    position: "First project",
  },
  {
    period: "2012-2016",
    name: "XOtel",
    url: "https://xotel.com/",
    position: "Engineer support",
  },
];

export const acticles = [
  {
    title: "Gearheart: how to create timelapse video from frames",
    url: "https://gearheart.io/articles/how-to-create-a-timelapse-video-from-frames/",
  },
  {
    title: "Gearheart: Forge viewer: how to render 3D models in browser",
    url: "https://gearheart.io/articles/forge-viewer-our-experience-with-an-unusual-project/",
  },
  {
    title: "Gearheart: how to optimize Django ORM queries",
    url: "https://gearheart.io/articles/how-optimize-django-orm-queries/",
  },
];

export const projects = [
  {
    name: "Gearheart: Ocilex",
    url: "https://gearheart.io/articles/forge-viewer-our-experience-with-an-unusual-project/",
    description: "Construction cameras app",
    period: "2022",
    stack: [
      "NodeJs",
      "GraphQL/Apollo",
      "Linux",
      "FFMpeg",
      "Prisma ORM",
      "ReactJS",
      "MUI",
      "Formik",
      "Yup",
      "Styled Components",
    ],
    role: "Full-Stack Developer",
    resps:
      "full-stack development, working with IP cameras, generating timelapse playlists from images, integration with Autodesk Construction Cloud.",
  },
  {
    name: "Gearheart: Olivia",
    url: "https://gearheart.io/projects/olivia/",
    description: "Broker-dealer platform",
    period: "2019 - 2022",
    stack: [
      "Django",
      "Django REST Framework",
      "Celery",
      "Angular JS",
      "Angular 2",
      "ReactJS",
      "Webpack",
      "Coffeescript",
      "Typescript",
      "RxJS",
      "Styled Components",
    ],
    role: "Full-Stack Developer",
    resps: "development, performance optimization, technical core upgrade.",
  },
  {
    name: "Gearheart: Smartsuite",
    url: "https://gearheart.io/projects/smartsuite/",
    description: "No-code platform",
    period: "2020",
    stack: ["Typescript", "ReactJS", "Toast UI"],
    role: "Full-Stack Developer",
    resps:
      "development of a chart-view with a lot of chart types (such as donut, stacked bar, heatmap, and others) and a bunch of SQL-like aggregations using Typescript.",
  },

  {
    name: "XOtel: Pinkerton (damn, I love it!)",
    url: "https://xotel.com/en/",
    description: "VoIP anti-fraud solution and monitoring system",
    period: "2017 - 2019",
    stack: [
      "Python",
      "Cython",
      "Numpy",
      "Pandas",
      "Asterisk",
      "Django",
      "Django REST Framework",
      "JQuery",
      "Linux",
    ],
    role: "Project founder, Team lead, Full-stack developer",
    resps:
      "scientific research; founding, development and maintaining an anti-fraud system over VoIP routes based on audio analysis.",
  },
];
