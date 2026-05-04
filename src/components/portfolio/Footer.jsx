import React from "react";
import { profile } from "../../mock/mock";
import { Github, Instagram, Linkedin, Mail, Ghost } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div>
            <a href="#inicio" className="flex items-center gap-2">
              <span className="grid place-items-center h-8 w-8 rounded-md bg-gradient-to-br from-violet-500 to-indigo-600">
                <Ghost className="h-4 w-4 text-white" />
              </span>
              <span className="font-display text-lg">
                {profile.name.split(" ")[0]}
                <span className="text-violet-400">.</span>
              </span>
            </a>
            <p className="mt-4 text-sm text-zinc-500 leading-relaxed max-w-xs">
              Portafolio de código e ilustración. Construido con React + Tailwind.
            </p>
          </div>

          <div>
            <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-zinc-500 mb-4">
              Navegación
            </div>
            <ul className="grid grid-cols-2 gap-2 text-sm text-zinc-400">
              <li><a href="#about" className="hover:text-violet-300">Sobre mí</a></li>
              <li><a href="#skills" className="hover:text-violet-300">Stack</a></li>
              <li><a href="#experience" className="hover:text-violet-300">Experiencia</a></li>
              <li><a href="#gallery" className="hover:text-violet-300">Galería</a></li>
              <li><a href="#projects" className="hover:text-violet-300">Proyectos</a></li>
              <li><a href="#contact" className="hover:text-violet-300">Contacto</a></li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-zinc-500 mb-4">
              Sígueme
            </div>
            <div className="flex items-center gap-3">
              <Social href={profile.socials.github} Icon={Github} />
              <Social href={profile.socials.instagram} Icon={Instagram} />
              <Social href={profile.socials.linkedin} Icon={Linkedin} />
              <Social href={profile.socials.email} Icon={Mail} />
            </div>
            <p className="mt-4 text-xs font-mono text-zinc-600">{profile.email}</p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500 font-mono">
          <span>© {new Date().getFullYear()} {profile.name}. Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  );
}

function Social({ href, Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="h-9 w-9 grid place-items-center rounded-md border border-white/10 text-zinc-400 hover:text-white hover:border-violet-400/40 hover:bg-white/5 transition-colors"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}