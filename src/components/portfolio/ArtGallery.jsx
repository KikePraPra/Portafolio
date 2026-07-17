import React, { useState } from "react";
import { artworks } from "../../mock/mock";
import { SectionLabel } from "./About";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { Expand } from "lucide-react";
import { useLanguage } from '../../lib/i18n.jsx'

export default function ArtGallery() {
  const [selected, setSelected] = useState(null);
  const { t, lang } = useLanguage()

  return (
    <section id="gallery" className="relative py-24 lg:py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionLabel num="04" label={t('gallery.label')} />

        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight max-w-2xl">
            {t('gallery.heading').split(' ')[0]} <span className="text-violet-400">{t('gallery.heading').split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-sm text-zinc-500 font-mono">
            {artworks.length} {t('gallery.pieces')} — {t('gallery.selection')}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {artworks.map((a, idx) => (
            <button
              key={a.id}
              onClick={() => setSelected(a)}
              className={`group relative overflow-hidden rounded-xl border border-white/5 bg-zinc-900 text-left focus:outline-none focus:ring-2 focus:ring-violet-500/60 ${
                idx % 5 === 0 ? "lg:row-span-2" : ""
              }`}
            >
              <div className={`relative ${idx % 5 === 0 ? "aspect-[3/4] lg:aspect-[3/5]" : "aspect-[4/5]"}`}>
                <img
                  src={a.image}
                  alt={a.title[lang] ?? a.title.en}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute top-3 right-3 h-8 w-8 grid place-items-center rounded-full bg-zinc-950/60 border border-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <Expand className="h-3.5 w-3.5 text-white" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <div className="text-zinc-50 font-display text-lg leading-tight">{a.title[lang] ?? a.title.en}</div>
                      <div className="mt-0.5 text-xs text-zinc-400 font-mono">
                        {a.medium[lang] ?? a.medium} — {a.year}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={(v) => !v && setSelected(null)}>
        <DialogContent className="max-w-5xl p-0 bg-zinc-950 border-white/10 overflow-hidden">
          {selected && (
            <div className="grid lg:grid-cols-5">
              <div className="lg:col-span-3 bg-zinc-900">
                <img
                  src={selected.image}
                  alt={selected.title[lang] ?? selected.title.en}
                  className="w-full h-full object-cover max-h-[75vh]"
                />
              </div>
              <div className="lg:col-span-2 p-8">
                <DialogTitle className="font-display text-2xl text-zinc-50">
                  {selected.title[lang] ?? selected.title.en}
                </DialogTitle>
                <div className="mt-1 text-xs font-mono text-violet-300">
                  {selected.medium[lang] ?? selected.medium.en} — {selected.year}
                </div>
                <p className="mt-5 text-zinc-400 leading-relaxed">
                  {selected.description[lang] ?? selected.description.en}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}