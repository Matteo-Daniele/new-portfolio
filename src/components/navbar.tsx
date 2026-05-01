"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useLanguage } from "../components/language-provider"
import { Button } from "../components/ui/button"

export default function Navbar() {
  const { language, setLanguage } = useLanguage()
  const [scrolled, setScrolled] = useState(false)

  const translations = {
    en: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    es: {
      about: "Sobre mí",
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contacto",
    },
  }

  const t = translations[language]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-4 pt-4">
      <nav
        className={`w-full max-w-4xl flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 ${
          scrolled
            ? "bg-[var(--bg-elevated)]/80 backdrop-blur-xl shadow-lg shadow-[var(--text-primary)]/[0.04] border border-[var(--border-subtle)]"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center gap-2.5">
          <Link href="/" className="relative block h-9 w-9 overflow-hidden rounded-full border border-[var(--border-subtle)] hover:border-[var(--text-secondary)] transition-colors duration-300">
            <Image src="/Logo.png" alt="Matteo Daniele" fill sizes="36px" className="object-cover" />
          </Link>
          <span className="font-display font-semibold text-sm tracking-tight hidden sm:block text-[var(--text-primary)]">Matteo Daniele</span>
        </div>

        <div className="hidden md:flex items-center gap-1">
          {[
            { href: "/#about", label: t.about },
            { href: "/#projects", label: t.projects },
            { href: "/#skills", label: t.skills },
            { href: "/#contact", label: t.contact },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm px-3.5 py-1.5 rounded-full text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-subtle)]/30 transition-all duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLanguage(language === "en" ? "es" : "en")}
            aria-label="Toggle language"
            className="h-8 w-8 rounded-full text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-subtle)]/30"
          >
            {language === "en" ? "EN" : "ES"}
          </Button>
        </div>
      </nav>
    </header>
  )
}
