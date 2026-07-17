import React, { useEffect, useState } from "react";
import { navLinks, profile } from "../../mock/mock";
import { Menu, X, Ghost } from "lucide-react";
import { Button } from "../ui/button";
import LanguageToggle from "../ui/LanguageToggle";
import { useLanguage } from '../../lib/i18n.jsx'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const { t } = useLanguage()

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-zinc-950/70 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2 group">
          <span className="grid place-items-center h-8 w-8 rounded-md bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-900/40">
            <Ghost className="h-4 w-4 text-white" />
          </span>
          <span className="font-display text-lg tracking-tight">
            {profile.name.split(" ")[0]}
            <span className="text-violet-400">.</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={l.href}
                className="px-3 py-2 text-sm text-zinc-400 hover:text-white rounded-md transition-colors hover:bg-white/5"
              >
                {t(`navLinks.${l.id}`)}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <Button
            asChild
            className="bg-violet-600 hover:bg-violet-500 text-white border-0 shadow-md shadow-violet-900/40"
          >
            <a href="#contact">{t('nav.talk')}</a>
          </Button>
          <LanguageToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle className="px-2.5 py-1 text-xs rounded-full bg-white/5 border-white/10 whitespace-nowrap" />
          <button
            className="p-2 rounded-md text-zinc-300 hover:bg-white/5"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-zinc-950/95 backdrop-blur-xl">
          <ul className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-3 text-sm text-zinc-300 hover:text-white rounded-md hover:bg-white/5"
                >
                  {t(`navLinks.${l.id}`)}
                </a>
              </li>
            ))}
            <li className="pt-3 flex justify-center">
              <LanguageToggle className="px-3 py-2 rounded-full bg-white/5 border-white/10 whitespace-nowrap" />
            </li>
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block text-center px-3 py-3 rounded-md bg-violet-600 hover:bg-violet-500 text-white"
              >
                {t('nav.talk')}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}