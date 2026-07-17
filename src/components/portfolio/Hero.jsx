import React from "react";
import { profile } from "../../mock/mock";
import { Button } from "../ui/button";
import { ArrowUpRight, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { useLanguage } from '../../lib/i18n.jsx'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="inicio"
      className="relative pt-32 pb-24 lg:pt-40 lg:pb-36 px-6 lg:px-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/5 text-violet-300 text-xs font-mono tracking-wider uppercase mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
          {t('hero.available')}
        </div>

        <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl leading-[0.95] tracking-tight">
          <span className="block text-zinc-100">{t('hero.headlineLine1')}</span>
          <span className="block bg-gradient-to-r from-violet-300 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
            {t('hero.headlineLine2')}
          </span>
          <span className="block text-zinc-500">— {profile.name}</span>
        </h1>

        <div className="mt-10 grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <p className="text-lg lg:text-xl text-zinc-400 leading-relaxed max-w-2xl">
              {t('profile.shortBio')}
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-violet-600 hover:bg-violet-500 text-white border-0 h-12 px-6 shadow-lg shadow-violet-900/40"
              >
                <a href="/cv-jose-zumbado.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                  {t('hero.cv')} <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 px-6 bg-transparent border-white/15 text-zinc-200 hover:bg-white/5 hover:text-white"
              >
                <a href="#projects">{t('hero.viewProjects')}</a>
              </Button>
            </div>
            <div className="flex items-center gap-4 text-zinc-400">
              <a href={profile.socials.github} target="_blank" rel="noreferrer" className="hover:text-violet-300 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href={profile.socials.instagram} target="_blank" rel="noreferrer" className="hover:text-violet-300 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-violet-300 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href={profile.socials.email} className="hover:text-violet-300 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <span className="ml-2 text-xs font-mono text-zinc-600">{profile.location}</span>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-white/5 pt-6 flex flex-wrap items-center gap-x-10 gap-y-2 text-xs font-mono text-zinc-500 uppercase tracking-widest">
          <span>React</span>
          <span className="text-violet-500">·</span>
          <span>Tailwind</span>
          <span className="text-violet-500">·</span>
          <span>TypeScript</span>
          <span className="text-violet-500">·</span>
          <span>Photoshop</span>
          <span className="text-violet-500">·</span>
          <span>Figma</span>
          <span className="text-violet-500">·</span>
          <span>Illustration</span>
        </div>
      </div>
    </section>
  );
}