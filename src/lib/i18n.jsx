import React, { createContext, useContext, useEffect, useState } from "react";

const translations = {
  en: {
    nav: {
      talk: "Let's talk",
      navigation: "Navigation",
      follow: "Follow",
    },
    navLinks: {
      home: "Home",
      about: "About me",
      skills: "Skills",
      experience: "Experience",
      gallery: "Gallery",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      available: "Available for projects — 2026",
      cv: "View my CV",
      viewProjects: "See projects",
      headlineLine1: "Code.",
      headlineLine2: "Stroke. Idea.",
    },
    profile: {
      shortBio:
        "I’m a creative developer and illustrator with a passion for servers, technology, and continuous learning. I build, draw, and constantly explore new ways to connect code with art.",
      longBio:
        "I’m a developer passionate about building elegant, high-performance web products. When I’m not writing code or studying servers, I create digital illustrations that explore the human figure and color, reflecting my eye for detail and aesthetics. This portfolio is where my two passions—art and technology—meet.",
    },
    about: {
      label: "About me",
      heading: "Design, drawing and writing code with the same craft.",
      feature1: {
        title: "Development",
        text: "Modern apps with React and robust databases.",
      },
      feature2: {
        title: "Illustration",
        text: "Digital art focused on anatomy, detail and aesthetics.",
      },
      feature3: {
        title: "Product",
        text: "From idea to MVP with design sense and DX.",
      },
    },
    skills: {
      label: "Stack & Skills",
      heading: "Technologies I master",
      paragraph:
        "A modern stack that allows me to go from illustration to production without changing gloves.",
      categories: {
        Frontend: "Frontend",
        Backend: "Backend",
        "Design & Art": "Design & Art",
        Tools: "Tools",
      },
    },
    experience: {
      label: "Experience",
      heading: "Recent background",
      paragraph: "A mix of technical and creative roles that have shaped me.",
    },
    gallery: {
      label: "Art Gallery",
      heading: "Illustrations and visual studies",
      pieces: "pieces",
      selection: "recent selection",
      show: "Show",
    },
    project: {
      label: "Development Projects",
      heading: "Product, interfaces and code",
      all: "All",
      repo: "Repository",
      live: "Live",
      categories: {
        webApp: "Web App",
      },
    },
    footer: {
      tagline: "Code and illustration portfolio. Built with React + Tailwind.",
      rights: "All rights reserved.",
    },
    contact: {
      label: "Contact",
      titleLine1: "Got an idea?",
      titleLine2: "Let's build it.",
      paragraph:
        "Always open to interesting projects, collaborations and illustration commissions. Write me and I'll reply within 48h.",
      responseETA: "Reply in ~48h",
      phone: "Phone",
      location: "Location",
    },
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      placeholderName: "Your name",
      placeholderEmail: "you@email.com",
      placeholderMessage: "Tell me about your project…",
      send: "Send message",
      sending: "Sending…",
      incomplete: "Please complete all fields before sending.",
      success: "Message sent successfully! I'll reply soon.",
      error: "There was an error sending. Try again.",
      connectionError: "Connection error. Check your internet.",
    },
  },
  es: {
    nav: {
      talk: "Hablemos",
      navigation: "Navegación",
      follow: "Sígueme",
    },
    navLinks: {
      home: "Inicio",
      about: "Sobre mí",
      skills: "Stack",
      experience: "Experiencia",
      gallery: "Galería",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      available: "Disponible para proyectos — 2026",
      cv: "Mira mi cv",
      viewProjects: "Ver proyectos",
      headlineLine1: "Código.",
      headlineLine2: "Trazo. Idea.",
    },
    profile: {
      shortBio:
        "Me gustan los servidores, desarrollar e ilustrar, soy una persona creativa que aprende constantemente y me encanta la tecnología y el dibujo.",
      longBio:
        "Soy un desarrollador apasionado por construir productos web elegantes y de alto rendimiento. Cuando no estoy escribiendo código o estudiando sobre servidores, dibujo ilustraciones digitales que exploran la figura humana, el color y reflejan mi visión de la estética y el detalle. Este portafolio es mi forma de expresar estas dos pasiones, el arte y la tecnología.",
    },
    about: {
      label: "Sobre mí",
      heading: "Diseño, dibujo y escribo código con el mismo oficio.",
      feature1: {
        title: "Desarrollo",
        text: "Apps modernas con React y bases de datos robustas.",
      },
      feature2: {
        title: "Ilustración",
        text: "Arte digital con foco en figura humana, detalle y estética.",
      },
      feature3: {
        title: "Producto",
        text: "De la idea al MVP con criterio de diseño y DX.",
      },
    },
    skills: {
      label: "Stack & Habilidades",
      heading: "Tecnologías que domino",
      paragraph:
        "Un stack moderno que me permite ir desde una ilustración hasta un producto en producción sin cambiar de guante.",
      categories: {
        Frontend: "Frontend",
        Backend: "Backend",
        "Design & Art": "Diseño y Arte",
        Tools: "Herramientas",
      },
    },
    experience: {
      label: "Experiencia",
      heading: "Trayectoria reciente",
      paragraph: "Una mezcla de roles técnicos y creativos que me han formado.",
    },
    gallery: {
      label: "Galería de Arte",
      heading: "Ilustraciones y estudios visuales",
      pieces: "piezas",
      selection: "selección reciente",
      show: "Ver",
    },
    project: {
      label: "Proyectos de Desarrollo",
      heading: "Producto, interfaces y código",
      all: "Todos",
      repo: "Repositorio",
      live: "En vivo",
      categories: {
        webApp: "Aplicación Web",
      },
    },
    footer: {
      tagline: "Portafolio de código e ilustración. Construido con React + Tailwind.",
      rights: "Todos los derechos reservados.",
    },
    contact: {
      label: "Contacto",
      titleLine1: "¿Tienes una idea?",
      titleLine2: "Construyámosla.",
      paragraph:
        "Siempre abierto a proyectos interesantes, colaboraciones y encargos de ilustración. Escríbeme y te respondo en menos de 48h.",
      responseETA: "Respuesta en ~48h",
      phone: "Teléfono",
      location: "Ubicación",
    },
    form: {
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      placeholderName: "Tu nombre",
      placeholderEmail: "tu@email.com",
      placeholderMessage: "Cuéntame sobre tu proyecto…",
      send: "Enviar mensaje",
      sending: "Enviando…",
      incomplete: "Completa todos los campos antes de enviar.",
      success: "¡Mensaje enviado con éxito! Te responderé pronto.",
      error: "Hubo un error al enviar. Inténtalo de nuevo.",
      connectionError: "Error de conexión. Revisa tu internet.",
    },
  },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("lang") || "es";
    } catch {
      return "es";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("lang", lang);
    } catch {}
  }, [lang]);

  const t = (path) => {
    const parts = path.split(".");
    let node = translations[lang];
    for (const p of parts) {
      if (!node) return path;
      node = node[p];
    }
    return node ?? path;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

export default LanguageProvider;
