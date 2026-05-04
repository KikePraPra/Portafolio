import React from "react";
import { profile } from "../../mock/mock";
import { Code2, Palette, Ghost } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionLabel num="01" label="Sobre mí" />

        <div className="mt-10 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-violet-500/30 to-indigo-600/20 rounded-2xl blur opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-zinc-900">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="font-mono text-xs text-zinc-300">{profile.alias}</span>
                  <span className="font-mono text-xs text-violet-300">{profile.location}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-zinc-100">
              Diseño, dibujo y escribo código{" "}
              <span className="text-violet-400">con el mismo oficio.</span>
            </h2>
            <p className="mt-6 text-zinc-400 leading-relaxed text-lg">{profile.longBio}</p>

            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              <FeatureCard icon={Code2} title="Desarrollo" text="Apps modernas con React y bases de datos robustas." />
              <FeatureCard icon={Palette} title="Ilustración" text="Arte digital con foco en figura humana, detalle y estética." />
              <FeatureCard icon={Ghost} title="Producto" text="De la idea al MVP con criterio de diseño y DX." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, text }) {
  return (
    <div className="group rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-violet-500/30 hover:bg-white/[0.04] transition-colors">
      <div className="h-9 w-9 grid place-items-center rounded-lg bg-violet-500/10 text-violet-300 border border-violet-500/20 mb-4">
        <Icon className="h-4 w-4" />
      </div>
      <h3 className="text-zinc-100 font-medium">{title}</h3>
      <p className="mt-1.5 text-sm text-zinc-400 leading-relaxed">{text}</p>
    </div>
  );
}

export function SectionLabel({ num, label }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-xs text-violet-400 tracking-widest">{num}</span>
      <span className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-violet-500/50 to-transparent" />
      <span className="font-mono text-xs text-zinc-400 uppercase tracking-[0.3em]">{label}</span>
    </div>
  );
}