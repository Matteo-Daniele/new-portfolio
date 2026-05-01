"use client"

import Navbar from "@/components/navbar"
import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export default function MigafinaProjectPage() {
  const { language } = useLanguage()

  const translations = {
    en: {
      back: "Back to Home",
      visit: "Visit Live Site",
      code: "View Code",
    },
    es: {
      back: "Volver al Inicio",
      visit: "Ver Sitio en Vivo",
      code: "Ver Código",
    }
  }

  const t = translations[language]

  const projectData = {
    title: "Migafina",
    year: "2024",
    category: language === "en" ? "E-commerce Platform" : "Plataforma E-commerce",
    description: language === "en" 
      ? "A premium digital bakery experience designed to bring artisanal quality to the web. Focused on conversion and high-end visual storytelling."
      : "Una experiencia de panadería digital premium diseñada para llevar la calidad artesanal a la web. Enfocada en la conversión y la narrativa visual de alto nivel.",
    demoUrl: "https://migafina.com",
    repoUrl: "https://github.com/Matteo-Daniele"
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FBE8C5]">
        
        {/* ── Elegant Light Hero (100vh) ── */}
        <section className="relative w-full h-screen flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0 z-0 bg-white">
             <Image 
               src="/images/migafina-desktop.png" 
               alt="Hero" 
               fill 
               className="object-cover opacity-30 mix-blend-luminosity"
               priority
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#FBE8C5] via-[#FBE8C5]/60 to-transparent" />
             <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent" />
          </div>

          <div className="container px-6 md:px-12 lg:px-24 mx-auto relative z-10 pb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-black tracking-widest uppercase mb-8 text-[#2B3E4C]/50 hover:text-[#2B3E4C] transition-colors">
                <ArrowLeft className="w-3 h-3" />
                {t.back}
              </Link>

              <h1 className="text-7xl md:text-[10rem] font-display font-black tracking-tighter mb-6 text-[#2B3E4C] leading-none">
                {projectData.title}
              </h1>

              <div className="flex items-center gap-6 text-[10px] font-black mb-8">
                <span className="text-[#D4831A] tracking-[0.3em] uppercase">{projectData.category}</span>
                <span className="w-1 h-1 rounded-full bg-[#2B3E4C]/20" />
                <span className="text-[#2B3E4C]/60">{projectData.year}</span>
              </div>

              <p className="text-xl md:text-3xl leading-relaxed mb-12 text-[#2B3E4C]/80 font-medium">
                {projectData.description}
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <a href={projectData.demoUrl} className="flex items-center gap-3 px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-[0.2em] bg-[#2B3E4C] text-[#FBE8C5] hover:scale-105 transition-transform shadow-lg shadow-[#2B3E4C]/20">
                  <ExternalLink className="w-4 h-4" />
                  {t.visit}
                </a>
                <a href={projectData.repoUrl} target="_blank" className="flex items-center gap-3 px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-[0.2em] bg-[#2B3E4C]/5 text-[#2B3E4C] hover:bg-[#2B3E4C]/10 border border-[#2B3E4C]/10 transition-colors">
                  <Github className="w-4 h-4" />
                  {t.code}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
    </>
  )
}
