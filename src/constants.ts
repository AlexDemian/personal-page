export const staticUrl = process.env.PUBLIC_URL;

export const fullName = "Oleksiy Demianenko";
export const avatarPath = staticUrl + "avatar.jpg";
export const since = 2017;
export const age = 31;
export const location = "Dnipro/Ukraine";

export const summaryHeader = [
  `A framework agnostic full stack developer experienced in
REST APIs development, data processing, performance
challenges, and third-party integration.`,
  `Cannot work without passion, therefore always not just an implementer, but dive deep into the product in general.`,
];

export const summary = [
  "Worked in a team (both of, Ukrainian and international) and as a standalone developer and researcher as well.",
  "Dealt with legacy projects and challenged complex performance issues on frontend and backend.",
  "Have been a mentor to many junior developers at a large Django Telegram community with around 2,000 members until the Russian invasion.",
  "Worked under various domains, including broker-dealer, no-code, VoIP, and audio/video processing.",
];

export const resps = [
  "Infrastructure prototyping",
  "Feature planning, estimation, and development",
  "Working on technical debt",
  "Problem-solving research",
  "Technical communication with customers",
  "Writing technical articles",
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
      "Akita*",
    ],
  },
  {
    caption: "Testing",
    stack: ["Selenium Webdriver", "Pytest*"],
  },
  {
    caption: "Protocols",
    stack: [
      "HTTP",
      "Server-Sent Event",
      "GraphQL",
      "Websocket*",
      "MQTT*",
      "FTP*",
    ],
  },
  {
    caption: "SQL & ORMs",
    stack: ["Raw SQL", "Django ORM", "Prisma ORM"],
  },
  {
    caption: "Databases",
    stack: ["Postgres", "MySQL", "SQLite", "RedisDB", "MongoDB*"],
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
    title: "a.demianenko92@gmail.com",
    url: "mailto:a.demianenko92@gmail.com",
  },
];

export const companies = [
  {
    period: "2024",
    name: "MINT",
    url: "https://www.mint.ai/",
    position: "BE Dev Lead",
  },
  {
    period: "2023",
    name: "MINT",
    url: "https://www.mint.ai/",
    position: "Python FS developer",
  },
  {
    period: "2019-2023",
    name: "Gearheart",
    url: "https://gearheart.io/",
    position: "Python/NodeJS FS developer",
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
    description: "MVP of construction cameras SPA",
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
    resps: "infrastructure prototyping, development.",
    features: [
      "Continuous timelapse generation from images",
      "Interactive 3D models rendering",
      "Third party integrations: Procore, Autodesk Construction Cloud",
      "FTP Server (vsftpd)",
      "Snapshots transfer: IP camera -> FTP -> S3 storage",
      "Distributed cloud architecture",
    ],
  },
  {
    name: "Gearheart: Olivia",
    url: "https://gearheart.io/projects/olivia/",
    description: "Broker-dealer platform: 8-year legacy project",
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
    features: [
      "2-10 times performance increase of slowest endpoints and pages",
      "Integration of Typescript and ReactJS",
      "Replacement of django-assets by Webpack",
      "Painful migration: python2/django1 -> python3/django2",
      "Chunked file upload",
      "Virtual scroll",
      "Email 2FA",
      "Autologout on idle",
    ],
  },
  {
    name: "Gearheart: Smartsuite",
    url: "https://gearheart.io/projects/smartsuite/",
    description: "No-code platform",
    period: "2020",
    stack: ["Typescript", "ReactJS", "Toast UI"],
    role: "Full-Stack Developer",
    resps: "development of chart visualization for user data",
    features: [
      "Typescript implementation of SQL-like functions: sum, avg, group by, etc",
      "Integration of Toast UI charts: bubble, stacked bar, heatmap, and others",
    ],
  },

  {
    name: "XOtel: Pinkerton",
    url: "https://xotel.com/en/",
    description: "VoIP anti-fraud solution and monitoring system from scratch",
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
      "scientific research, founding, development and maintaining an anti-fraud system over VoIP routes based on audio analysis.",
    features: [
      "Web app over Asterisk software",
      "Algorithm for detecting noise, beeps, and pre-recorded audio",
      "Bot-finder of the most profitable VoIP routes",
      "Integration with internal CMS",
    ],
  },
];
