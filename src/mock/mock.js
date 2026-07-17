export const profile = {
  name: "José Zumbado",
  alias: "@dark_spades.art",
  role: "Desarrollador Full Stack & Artista Digital",
  location: "Puntarenas. CR",
  shortBio: "Me gustan los servidores, desarrollar e ilustrar, soy una persona creativa que aprende constantemente y me encanta la tecnología y el dibujo",
  longBio: "Soy un desarrollador apasionado por construir productos web elegantes y de alto rendimiento. Cuando no estoy escribiendo código o estudiando sobre servidores, dibujo ilustraciones digitales que exploran la figura humana, el color y reflejan mi visión de la estética y el detalle. Este portafolio es mi forma de expresar estas 2 pasiones, el arte y la tecnología.",
  email: "josezumbado02@gmail.com",
  phone: "+506 7111 4365",
  resumeUrl: "https://www.linkedin.com/in/josezumbado",
  avatar: "/davy-jones.png",
  socials: {
    github: "https://github.com/KikePraPra",
    instagram: "https://www.instagram.com/dark_spades.art",
    linkedin: "https://www.linkedin.com/in/josezumbado",
    email: "mailto:josezumbado02@gmail.com",
  },
};

export const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Javascript"] },
  { category: "Backend", items: ["MySQL", "MongoDB", "Laravel", "APEX", "Oracle"] },
  { category: "Design & Art", items: ["Photoshop", "Figma", "Illustrator"] },
  { category: "Tools", items: ["Git", "Docker", "Vercel", "AWS", "Linux", "Laragon"] },
];

export const techStack = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 88 },
  { name: "MySQL", level: 70 },
  { name: "MongoDB", level: 60 },
  { name: "APEX", level: 65 },
  { name: "Oracle", level: 60 },
  { name: "Photoshop", level: 60 },
  { name: "Git", level: 90 },
  { name: "Docker", level: 65 },
  { name: "AWS", level: 50 },
  { name: "Linux", level: 65 },
];

export const experiences = [
  {
    id: 1,
    role: {
      en: "Frontend Lead",
      es: "Encargado de Frontend",
    },
    company: "I+D UCR, sede del Pacífico",
    period: "2025 — Presente",
    description: {
      en: "I lead interface development for university products, coordinating the workflow between Frontend and Backend to ensure quality and efficiency.",
      es: "Lidero el desarrollo de interfaces para productos utilizados por la universidad. Coordinando el flujo de trabajo entre el área de Frontend y Backend para garantizar la calidad y eficiencia.",
    },
    tags: ["React", "Tailwind CSS", "Javascript", "MySQL", "Laravel"],
  },
  {
    id: 2,
    role: {
      en: "Full Stack Developer & DevOps Engineer",
      es: "Full Stack Developer & DevOps Engineer",
    },
    company: "Gestior, UCR",
    period: "2025 — 2025",
    description: {
      en: "I worked across areas for a university course, including building APIs, frontend development, and configuring deployment infrastructure for platforms like Vercel, Render, and Zeabur.",
      es: "Desarrollo en varias áreas para un curso universitario, incluyendo la creación de APIs, desarrollo frontend y configuración de infraestructura en despliegues para plataformas como Vercel, Render y Zeabur.",
    },
    tags: ["React", "TypeScript", "Tailwind CSS", "MySQL", "Laravel", "Vercel", "Render", "Zeabur"],
  },
];

export const artworks = [
  {
    id: "a1",
    title: {
      en: "Original character",
      es: "Personaje original",
    },
    year: "2025",
    medium: {
      en: "Concept Art",
      es: "Concept Art",
    },
    image: "/juan.png",
    description: {
      en: "Original character based on a sinister buffoon.",
      es: "Personaje original basado en un buffon siniestro.",
    },
  },
  {
    id: "a2",
    title: {
      en: "Original character",
      es: "Personaje original",
    },
    year: "2025",
    medium: {
      en: "Digital Painting",
      es: "Pintura Digital",
    },
    image: "/gdlvb.png",
    description: {
      en: "Digital painting of an original character.",
      es: "Pintura digital de un personaje original.",
    },
  },
  {
    id: "a3",
    title: {
      en: "Davy Jones",
      es: "Davy Jones",
    },
    year: "2022-2023",
    medium: {
      en: "Traditional Illustration",
      es: "Ilustración Tradicional",
    },
    image: "/davy-jones.png",
    description: {
      en: "Ink treatment of the Davy Jones character in a semi-realistic style.",
      es: "Tratamiento a tinta del personaje Davy Jones en estilo semi-realista.",
    },
  },
  {
    id: "a4",
    title: {
      en: "Ichigo Vasto Lorde",
      es: "Ichigo Vasto Lorde",
    },
    year: "2025",
    medium: {
      en: "Digital Illustration",
      es: "Ilustración Digital",
    },
    image: "/ichigo-vasto-lorde.png",
    description: {
      en: "Fan art of the Ichigo character from Bleach.",
      es: "Fan art del personaje Ichigo de Bleach.",
    },
  },
  {
    id: "a5",
    title: {
      en: "Original character",
      es: "Personaje original",
    },
    year: "2024",
    medium: {
      en: "Digital Illustration",
      es: "Ilustración Digital",
    },
    image: "/oc.png",
    description: {
      en: "Illustration of an original character in a semi-realistic style.",
      es: "Ilustración de un personaje original en estilo semi-realista.",
    },
  },
  {
    id: "a6",
    title: {
      en: "Original character",
      es: "Personaje original",
    },
    year: "2023",
    medium: {
      en: "Digital Illustration",
      es: "Ilustración Digital",
    },
    image: "/skltn.png",
    description: {
      en: "Illustration of an original character in a semi-realistic style.",
      es: "Ilustración de un personaje original en estilo semi-realista.",
    },
  },
];

export const projects = [
  {
    id: "p1",
    title: "Gestior",
    category: "webApp",
    year: "2025",
    image: "/gestior.png",
    description: {
      en: "System created for managing supermarkets, branches and warehouses, including inventory control, invoicing, cash handling, charts, reports, and more. Credentials: test@example.com 123456",
      es: "Sistema creado para la gestión de supermercados, sucursales y bodegas, incluyendo control de inventario, facturación, manejo de caja, gráficos, reportes, entre otros. Credenciales: test@example.com 123456",
    },
    tech: ["React", "TypeScript", "Tailwind CSS", "MySQL", "Laravel", "Vercel", "Render", "Zeabur"],
    links: {
      live: "https://gestion-inventarios-desarrollo-fron.vercel.app/",
      repo: "https://github.com/Taller5?tab=repositories",
    },
  },
  {
    id: "p2",
    title: "Aulas",
    category: "webApp",
    year: "2025-Presente",
    image: "/aulasc.png",
    description: {
      en: "Classroom management platform for schedules, reservations and academic cycles at the University of Costa Rica. Currently in development.",
      es: "Plataforma de gestión de aulas, horarios, reservas y ciclos académicos para la Universidad de Costa Rica. Actualmente en desarrollo.",
    },
    tech: ["React", "Tailwind CSS", "Javascript", "MySQL", "Laravel"],
    links: {
      live: "#",
      repo: "#",
    },
  },
];

export const navLinks = [
  { id: "home", href: "#inicio" },
  { id: "about", href: "#about" },
  { id: "skills", href: "#skills" },
  { id: "experience", href: "#experience" },
  { id: "gallery", href: "#gallery" },
  { id: "projects", href: "#projects" },
  { id: "contact", href: "#contact" },
];