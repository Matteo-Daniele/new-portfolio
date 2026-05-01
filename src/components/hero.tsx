"use client"

import { motion } from "framer-motion"
import { ArrowDown, Download, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "../components/language-provider"
import { Button } from "../components/ui/button"

export default function Hero() {
  const { language } = useLanguage()
  const cvPath = language === "en"
    ? "/Resume-MatteoDaniele.pdf"
    : "/CV-MatteoDaniele-Español.pdf"

  const translations = {
    en: {
      greeting: "Hey, I'm Matteo",
      title: "I build things",
      titleAccent: "for the web.",
      subtitle: "Full-stack developer crafting clean, thoughtful digital experiences.",
      viewWork: "See my work",
      githubProfile: "GitHub",
      downloadCV: "Resume",
    },
    es: {
      greeting: "Hola, soy Matteo",
      title: "Construyo cosas",
      titleAccent: "para la web.",
      subtitle: "Desarrollador full-stack creando experiencias digitales limpias y cuidadas.",
      viewWork: "Ver mi trabajo",
      githubProfile: "GitHub",
      downloadCV: "Currículum",
    },
  }

  const t = translations[language]

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden">
      {/* Background image — full cover, blurred */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/bandera.jpeg"
          alt=""
          fill
          className="object-cover"
          style={{ filter: "blur(6px)", transform: "scale(1.05)" }}
          priority
        />
        {/* Overlay to soften and blend with palette */}
        <div className="absolute inset-0 bg-[#1B5E99]/50" />
        <div className="absolute inset-0 bg-[#2B3E4C]/40" />
      </div>

      {/* Subtle grain overlay */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm font-medium tracking-widest uppercase text-white/80 mb-8"
        >
          {t.greeting}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(2.5rem,8vw,6rem)] font-display font-bold leading-[1.05] tracking-tight text-white mb-6"
        >
          {t.title}
          <br />
          <span className="italic" style={{ color: "#F0A83B" }}>{t.titleAccent}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-white/70 max-w-lg mx-auto leading-relaxed font-light mb-12"
        >
          {t.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="#projects">
            <Button
              size="lg"
              className="rounded-full px-8 h-12 bg-white text-[var(--text-primary)] hover:bg-white/90 transition-all duration-300 text-sm font-medium tracking-wide"
            >
              {t.viewWork}
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <a href="https://github.com/Matteo-Daniele" target="_blank">
            <Button
              size="lg"
              variant="ghost"
              className="rounded-full px-6 h-12 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm font-medium border border-white/20"
            >
              <Github className="mr-2 h-4 w-4" />
              {t.githubProfile}
            </Button>
          </a>
          <a href={cvPath} download target="_blank">
            <Button
              size="lg"
              variant="ghost"
              className="rounded-full px-6 h-12 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm font-medium border border-white/20"
            >
              <Download className="mr-2 h-4 w-4" />
              {t.downloadCV}
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-white/40" />
        </motion.div>
      </motion.div>
    </section>
  )
}
