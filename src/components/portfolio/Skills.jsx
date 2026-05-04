import React from "react";
import { skills, techStack } from "../../mock/mock";
import { SectionLabel } from "./About";
import { Progress } from "../ui/progress";
import { Badge } from "../ui/badge";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 lg:py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionLabel num="02" label="Stack & Habilidades" />

        <div className="mt-10 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
              Tecnologías que <span className="text-violet-400">domino</span>
            </h2>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              Un stack moderno que me permite ir desde una ilustración hasta un producto en producción sin cambiar de guante.
            </p>

            <div className="mt-8 space-y-5">
              {techStack.map((t) => (
                <div key={t.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-zinc-300 font-medium">{t.name}</span>
                    <span className="text-xs font-mono text-zinc-500">{t.level}%</span>
                  </div>
                  <Progress
                    value={t.level}
                    className="h-1.5 bg-white/5 [&>div]:bg-gradient-to-r [&>div]:from-violet-500 [&>div]:to-indigo-500"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {skills.map((g) => (
              <div
                key={g.category}
                className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-violet-500/20 transition-colors"
              >
                <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-violet-300/80 mb-4">
                  {g.category}
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-white/5 hover:bg-violet-500/15 text-zinc-200 border border-white/5 hover:border-violet-500/30 font-normal"
                    >
                      {i}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}