export const METADATA = {
  author: "Elias Akry",
  title: "Portfolio | Elias Akry",
  description:
    "Elias Akry is a passionate Software engineer, dedicated to crafting aesthetic and modern apps that captivate and engage users.",
  siteUrl: "https://www.akryelias.me/",
  twitterHandle: "@Iliasse16170429",
  keywords: [
    "Elias Akry",
    "Software Engineer",
    "Frontend Engineer",
    "backend Engineer",
    "full-stack developer",
    "Web Developer",
    "DevOps",
    "Portfolio",
    "Myfolio",
    "Folio",
  ].join(", "),
  image:
    "https://www.dropbox.com/scl/fi/z3hx6lavyzivpycvtq702/preview.png?rlkey=45eienk69kyaokacz252jpyho&st=s3j420uh&dl=0",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I transform ideas into elegant digital solutions.",
  "I bring creative visions to life with robust, scalable code.",
  "I deliver robust, scalable, and maintainable web applications.",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: akryelias@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/iliasseakry/",
  },
  {
    name: "github",
    url: "https://github.com/eliasluimeme",
  },
  // {
  //   name: "instagram",
  //   url: "https://www.instagram.com/e1i4ss/",
  // },
  {
    name: "twitter",
    url: "https://x.com/Iliasse16170429",
  },
];

export const SKILLS = {
  languages: [
    "python",
    "c",
    "cpp",
    "javascript",
    "typescript",
    "java",
    // "webpack",
    // "react",
    "html",
    "css",
    "shell",
    // "firebase",
    // "figma",
    // "tanstack-query",
  ],
  librariesAndFrameworks: [
    "nestjs",
    "django",
    "react",
    "nextjs",
    "tailwindcss",
    // "redux",
    "express",
    "nodejs",
    "rest",
    // "styledcomponents", 
    // "antdesign",
    // "chakra-ui",
  ],
  databases: ["postgresSQL", "mysql", "mongodb"],
  tools: ["git", "github actions", "postman", "vite", "docker", "nginx", ],
};

export const PROJECTS = [
  {
    name: "Airbnb",
    image: "/projects/airbnb.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description: "Airbnb UI clone using NextJS + Tailwind CSS 🛏️ and Python Django + PostgreSQL for the backend",
    gradient: ["#F14658", "#DC2537"],
    url: "https://elias-airbnb-clone.vercel.app/",
    tech: ["react", "nextjs", "tailwindcss", "django", "postgresql"],
  },
  {
    name: "OnBank",
    image: "/projects/onbank.webp",
    blurImage: "/projects/blur/onbank-blur.webp",
    description: "Money Transfer Platform using NextJS + Tailwind CSS ✍🏻 and Django + PostgreSQL for the backend",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://github.com/eliasluimeme/Money-Transfer-App",
    tech: ["typescript", "react", "nextjs", "tailwindcss", "nestjs", "postgresql"],
  },
  {
    name: "Ft_transcendence",
    image: "/projects/ft_transcendence.webp",
    blurImage: "/projects/blur/ft_transcendence-blur.webp",
    description: "Online Pong Platform using NextJS + Tailwind CSS ✍🏻 and NestJs + PostgreSQL for the backend",
    gradient: ["#000066", "#6699FF"],
    url: "https://github.com/eliasluimeme/ft_transcendence",
    tech: ["typescript", "react", "nextjs", "tailwindcss", "nestjs", "postgresql"],
  },
  // {
  //   name: "Medium",
  //   image: "/projects/medium.webp",
  //   blurImage: "/projects/blur/medium-blur.webp",
  //   description: "Medium UI clone using NextJS + Tailwind CSS ✍🏻",
  //   gradient: ["#FFA62E", "#EA4D2C"],
  //   url: "https://shubh73-medium.vercel.app/",
  //   tech: ["typescript", "react", "nextjs", "tailwindcss", "sanity.io"],
  // },
  // {
  //   name: "Inshorts",
  //   image: "/projects/inshorts.webp",
  //   blurImage: "/projects/blur/airbnb-blur.webp",
  //   description:
  //     "Conversational Voice Controlled React News Application using Alan AI 🎙",
  //   gradient: ["#000066", "#6699FF"],
  //   url: "https://shubh73-inshorts.netlify.app/",
  //   tech: ["react", "chakra-ui", "alan"],
  // },
  // {
  //   name: "Tesla",
  //   image: "/projects/tesla.webp",
  //   blurImage: "/projects/blur/tesla-blur.webp",
  //   description: "A Tesla React Native App 🏎️",
  //   gradient: ["#142D46", "#2E4964"],
  //   url: "https://github.com/shubh73/tesla",
  //   tech: ["react"],
  // },
];

// export const WORK = [
//   {
//     id: 1,
//     company: "Dukaan",
//     title: "Frontend Developer",
//     location: "Bangalore, Karnataka",
//     range: "December - Current",
//     responsibilities: [
//       "Led creation of a captivating cross-platform e-commerce solution.",
//       "Enhanced UX with gamification and personalized push notifications ensuring an ever-improving shopping journey.",
//       "The app boasts a DAU base of 32k and an extensive MAU count of 180k.",
//     ],
//     url: "https://mydukaan.io/",
//     video: "/work/dukaan.mp4",
//   },
//   {
//     id: 2,
//     company: "Aviate",
//     title: "Frontend Developer Intern",
//     location: "Goa",
//     range: "May - October 2022",
//     responsibilities: [
//       "Built their flagship product Q-Rate, a voice-based applicant screening platform.",
//       "Developed pixel-perfect responsive web applications achieving daily traffic of 1000-2000 users.",
//       "Successfully rolled out an error-logging and bug reporting system that cut user-reported bugs by 30%.",
//     ],
//     url: "https://www.aviate.jobs/",
//     video: "/work/aviate.mp4",
//   },
//   {
//     id: 3,
//     company: "Spacenos",
//     title: "Web Developer Intern",
//     location: "Bangalore, Karnataka",
//     range: "September - December 2021",
//     responsibilities: [
//       "Led the Full Stack revamp on the Admin Portal.",
//       "Developed app integration with REST APIs, Google Maps, User Auth, Stripe and other libraries.",
//       "Implemented CRUD features for all the services and providers.",
//     ],
//     url: "https://spacenos.com/",
//     video: "/work/spacenos.mp4",
//   },
// ];

export const WORK_CONTENTS = {
  AIWOLVES: [
    {
      title: "AI Wolves Inc",
      description:
        "AI Wolves Inc. stands as a pioneering force in the world of artificial intelligence.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          A collective of visionary minds dedicated to unraveling the infinite possibilities that AI presents.
        </div>
      ),
    },
    {
      title: "Internship",
      description:
        "During my internship at Ai Wolves, I contributed to the development of a robust mobile app analytics platform that aggregates and analyzes the Apple App Store and Google Play Store and provides detailed data for every app.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Backend Developer Intern
        </div>
      ),
    },
    // {
    //   title: "Evolution",
    //   description:
    //     "Recognizing the need for improved performance and user engagement, I spearheaded the migration of the Dukaan App from native to React-Native for iOS and Android platforms. This strategic move led to a X% enhancement in app performance and a Y% boost in user engagement, representing a significant milestone in the app's evolution.",
    //   content: (
    //     <div className="h-full w-full flex items-center justify-center text-white px-4">
    //       Frontend Engineer
    //     </div>
    //   ),
    // },
    // {
    //   title: "Optimization",
    //   description:
    //     "Leveraging user feedback and analytics, I improved the seller web dashboard design, reducing bounce rates. Simultaneously, I overhauled the build process, slashing bundle size and boosting overall performance.",
    //   content: (
    //     <div className="h-full w-full flex items-center justify-center text-white px-4">
    //       Frontend Engineer Intern
    //     </div>
    //   ),
    // },
  ],
  FREELANCE: [
    {
      title: "Freelance",
      description:
          "During my time as a freelance full stack developer, I gained valuable insights into both technical and soft skills that significantly enhanced my professional growth. Working on diverse projects allowed me to deepen Technical Proficiency, develop Problem-Solving Skills, enhance Communication and Collaboration, and build Project Management Skills",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Freelance
        </div>
      ),
    },
    {
      title: "Full Stack Developer",
      description:
        "As a freelance full stack developer, I designed and implemented dynamic web applications, managing both frontend and backend development. I collaborated with clients to understand their requirements and delivered tailored solutions that met their needs. My responsibilities included: \
          - Developing user-friendly interfaces using modern frameworks and libraries. \
          - Creating and maintaining RESTful APIs for seamless integration between frontend and backend services.\
          - Implementing database solutions, ensuring efficient data management and retrieval.\
          - Utilizing best practices for code quality, testing, and deployment. \
          - Collaborating with clients throughout the development lifecycle to ensure satisfaction and project success.",      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Full Stack Developer
        </div>
      ),
    },
  ],
  // SPACENOS: [
  //   {
  //     title: "Spacenos",
  //     description:
  //       "A dynamic startup dedicated to creating innovative products that make the world a better place.",
  //     content: (
  //       <div className="h-full w-full flex items-center justify-center text-white px-4">
  //         We build apps that solve problems for the next billion people
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "Trailblazing",
  //     description:
  //       "I led the comprehensive overhaul of the Admin Portal, implementing CRUD features for all services and providers. Additionally, I architected a feature enabling precise customer location tracking and delivering insightful usage statistics. Through optimized and compressed file serving, I catalyzed a remarkable Yx increase in page speed, resulting in a X% boost in customer retention.",
  //     content: (
  //       <div className="h-full w-full flex items-center justify-center text-white px-4">
  //         Web Developer Intern
  //       </div>
  //     ),
  //   },
  // ],
};

export const GTAG = "G-QRPSYSM070";
