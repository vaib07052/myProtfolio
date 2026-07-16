/*=============== PROJECT DATA ===============*/
/* Converted from the original React "projects" array (Work.jsx) */
const IMG = (window.STATIC_URL || "/static/") + "images/";

const projects = [
  {
    name: "Crown Clothing",
    description:
      "A full-stack e-commerce app with Stripe payment, Firebase authentication, and a serverless backend hosted on Netlify. Optimized for real use.",
    stacks: ["React", "Redux Toolkit", "Stripe", "Firebase", "Netlify"],
    link: "https://crown-clothing-be9922.netlify.app/",
    github: "https://github.com/vaib07052/Exedo-estate-main",
    image: IMG + "crown.png",
    category: "Fullstack",
  },

   {
    name: "Mode – Project Management App",
    description:
      "A Linear-inspired project tracker built with Next.js App Router. Includes auth, CRUD for issues, PostgreSQL backend, and clean Tailwind UI.",
    stacks: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    link: "https://mode-tau-ruddy.vercel.app",
    github: "https://github.com/vaib07052/mode-FM-main",
    image: IMG + "mode.png",
    category: "Fullstack",
  },
  
  {
    name: "Exedo Estate",
    description:
      "A MERN-based property listing platform with secure login, and CRUD functionality for real estate listings. Designed for efficient property management.",
    stacks: ["React", "Redux", "Node.js", "Express.js", "MongoDB"],
    link: "https://real-estate-mhee.onrender.com",
    github: "https://github.com/vaib07052/Exedo-estate-main",
    image: IMG + "ExedoEstate.png",
    category: "Fullstack",
  },
  
  {
    name: "Foodeli",
    description:
      "A MERN stack food ordering app with authentication, Stripe payments, cart management, and responsive user interface for smooth ordering experience.",
    stacks: ["React", "Node.js", "Express.js", "MongoDB", "Stripe"],
    link: "https://foodeli-frontend.onrender.com/",
    github: "https://github.com/vaib07052/Foodis",
    image: IMG + "Foodeli.png",
    category: "Fullstack",
  },
  
  {
    name: "SmartHost",
    description:
      "A business site for an architecture firm, using React with animated Framer Motion navbar and contact form integration with Nodemailer.",
    stacks: ["React", "Framer Motion"],
    link: "http://www.smarthost.org.uk",
    github: "https://github.com/vaib07052",
    image: IMG + "SmartHost.png",
    category: "React",
  },
];
