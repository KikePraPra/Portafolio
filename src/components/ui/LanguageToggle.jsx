import React from 'react'
import { useLanguage } from '../../lib/i18n.jsx'

export default function LanguageToggle({ className = '' }) {
  const { lang, setLang } = useLanguage()

  const toggle = () => setLang(lang === 'es' ? 'en' : 'es')

  return (
    <button
      onClick={toggle}
      aria-label="Toggle language"
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-md border border-white/10 text-sm ${className}`}
    >
      <span className={lang === 'es' ? 'font-semibold' : 'text-zinc-400'}>ES</span>
      <span className="text-zinc-600">/</span>
      <span className={lang === 'en' ? 'font-semibold' : 'text-zinc-400'}>EN</span>
    </button>
  )
}
