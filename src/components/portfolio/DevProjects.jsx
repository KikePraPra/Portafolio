import React, { useMemo, useState } from "react";
import { projects } from "../../mock/mock";
import { SectionLabel } from "./About";
import { Badge } from "../ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from '../../lib/i18n.jsx'

export default function DevProjects() {
  const { t, lang } = useLanguage()
  const categories = useMemo(() => {
    const set = new Set(projects.map((p) => p.category));
    return ["all", ...Array.from(set)];
  }, []);
  const [active, setActive] = useState("all")

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="relative py-24 lg:py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionLabel num="05" label={t('project.label')} />

        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight max-w-2xl">
            {t('project.heading')}
          </h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase border transition-colors ${
                  active === c
                    ? "bg-violet-500/15 border-violet-500/40 text-violet-200"
                    : "bg-white/[0.02] border-white/10 text-zinc-400 hover:text-zinc-200 hover:border-white/20"
                }`}
              >
                {c === "all" ? t('project.all') : t(`project.categories.${c}`)}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {filtered.map((p) => (
            <article
              key={p.id}
              className="group relative rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden hover:border-violet-500/30 transition-colors"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-zinc-950/70 border border-white/10 text-violet-200 backdrop-blur">
                    {t(`project.categories.${p.category}`)}
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-zinc-950/70 border border-white/10 text-zinc-300 backdrop-blur">
                    {p.year}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl text-zinc-50">{p.title}</h3>
                  <div className="flex items-center gap-2">
                    <a
                      href={p.links.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="h-8 w-8 grid place-items-center rounded-md border border-white/10 text-zinc-400 hover:text-white hover:border-violet-400/40 hover:bg-white/5 transition-colors"
                      aria-label={t('project.repo')}
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a
                      href={p.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="h-8 w-8 grid place-items-center rounded-md border border-white/10 text-zinc-400 hover:text-white hover:border-violet-400/40 hover:bg-white/5 transition-colors"
                      aria-label={t('project.live')}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <p className="mt-2.5 text-sm text-zinc-400 leading-relaxed">{p.description[lang] ?? p.description.en}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="bg-white/5 text-zinc-300 border border-white/5 font-normal"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}