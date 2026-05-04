export const profile = {
  name: "José Zumbado",
  alias: "@dark_spades.art",
  role: "Desarrollador Full Stack & Artista Digital",
  location: "Puntarenas. CR",
  shortBio: "Me gustan los servidores, desarrollar e ilustrar, soy una persona creativa que aprende constantemente y me encanta la tecnología y el dibujo",
  longBio: "Soy un desarrollador apasionado por construir productos web elegantes y de alto rendimiento. Cuando no estoy escribiendo código o estudiando sobre servidores, dibujo ilustraciones digitales que exploran la figura humana, el color y reflejan mi visión de la estética y el detalle. Este portafolio es mi forma de expresar estas 2 pasiones, el arte y la tecnología.",
  email: "josezumbado02@gmail.com",
  phone: "+506 7111 4365",
  resumeUrl: "https://youtube.com",
  avatar: "src/assets/davy-jones.png",
  socials: {
    github: "https://github.com/KikePraPra",
    instagram: "https://www.instagram.com/dark_spades.art",
    linkedin: "https://linkedin.com/in/tuusuario",
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
  { name: "Linux", level: 50 },
];

export const experiences = [
  { id: 1, role: "Encargado de Frontend", company: "I+D UCR, sede del Pacífico", period: "2025 — Presente",
    description: "Lidero el desarrollo de interfaces para productos utilizados por la universidad. Coordinando el flujo de trabajo entre el área de Frontend y Backend para garantizar la calidad y eficiencia.",
    tags: ["React", "Tailwind CSS", "JavaScript"] },
  { id: 2, role: "Full Stack Developer & DevOps Engineer", company: "Gestior, UCR", period: "2025 — 2025",
    description: "Desarrollo en varias áreas para un curso universitario, incluyendo la creación de APIs, desarrollo frontend y configuración de infraestructura en despliegues para plataformas como vercel, render y zeabur.",
    tags: ["Node.js", "MongoDB", "GSAP"] }
];

export const artworks = [
   { id: "a1", title: "Personaje original", year: "2025", medium: "Concept Art",
    image: "src/assets/juan.png",
    description: "Escena de bosque nocturno para un proyecto de narrativa visual." },
  { id: "a2", title: "Personaje original", year: "2025", medium: "Pintura Digital",
    image: "src/assets/gdlvb.png",
    description: "Retrato conceptual donde el azul cobalto construye silencio y distancia." },
    { id: "a3", title: "Davy Jones", year: "2022-2023", medium: "Ilustración Tradicional",
    image: "src/assets/davy-jones.png",
    description: "Tratamiento a tinta del personaje Davy Jones en estilo semi-realista." },
  { id: "a4", title: "Ichigo Vasto Lorde", year: "2025", medium: "Ilustración Digital",
    image: "src/assets/ichigo-vasto-lorde.png",
    description: "Captura del proceso creativo sobre tableta gráfica." },
  { id: "a5", title: "Personaje original", year: "2024", medium: "Ilustración Digital",
    image: "src/assets/oc.png",
    description: "Estudio dramático sobre identidad y luz direccional." },
  { id: "a6", title: "Personaje original", year: "2023", medium: "Ilustración Digital",
    image: "src/assets/skltn.png",
    description: "Serie Umbra — retratos a contraluz en tonos fríos." },
];

export const projects = [
  { id: "p1", title: "Gestior", category: "Web App", year: "2025",
    image: "src/assets/gestior.png",
    description: "Sistema creado para la gestión de supermercados, sucursales y bodegas, incluyendo control de inventario, facturación, manejo de caja, gráficos, reportes, entre otros. Credenciales: test@example.com 123456",
    tech: ["React", "TypeScript", "Tailwind CSS", "MySQL", "Laravel", "Vercel", "Render", "Zeabur"], links: { live: "https://gestion-inventarios-desarrollo-fron.vercel.app/", repo: "https://github.com/Taller5?tab=repositories" } },
  { id: "p2", title: "Aulas", category: "Web App", year: "2025-Presente",
    image: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?w=1200&q=80",
    description: "Plataforma de gestión de aulas, horarios, reservas y ciclos académicos para la Universidad de Costa Rica. Actualmente en desarrollo.",
    tech: ["React", "Javascript", "MySQL", "Laravel"], links: { live: "#", repo: "#" } },
];

export const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#about" },
  { label: "Stack", href: "#skills" },
  { label: "Experiencia", href: "#experience" },
  { label: "Galería", href: "#gallery" },
  { label: "Proyectos", href: "#projects" },
];