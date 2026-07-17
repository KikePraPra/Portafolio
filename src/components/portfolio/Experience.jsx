import React from "react";
import { experiences } from "../../mock/mock";
import { SectionLabel } from "./About";
import { Badge } from "../ui/badge";
import { useLanguage } from '../../lib/i18n.jsx'

export default function Experience() {
  const { t, lang } = useLanguage()

  return (
    <section id="experience" className="relative py-24 lg:py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionLabel num="03" label={t('experience.label')} />

        <div className="mt-10 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
              {t('experience.heading').split(' ')[0]} <span className="text-violet-400">{t('experience.heading').split(' ').slice(1).join(' ')}</span>
            </h2>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              {t('experience.paragraph')}
            </p>
          </div>

          <div className="lg:col-span-8">
            <ol className="relative border-l border-white/10 pl-8 space-y-10">
              {experiences.map((e) => (
                <li key={e.id} className="relative group">
                  <span className="absolute -left-[37px] top-1 grid place-items-center h-4 w-4 rounded-full bg-zinc-950 border border-violet-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                  </span>
                  <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6 hover:border-violet-500/30 transition-colors">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-xl text-zinc-100 font-medium">
                        {e.role[lang] ?? e.role.en}
                        <span className="text-zinc-500"> — {e.company}</span>
                      </h3>
                      <span className="font-mono text-xs text-violet-300/90">{e.period}</span>
                    </div>
                    <p className="mt-3 text-zinc-400 leading-relaxed">{e.description[lang] ?? e.description.en}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {e.tags.map((t) => (
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
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}