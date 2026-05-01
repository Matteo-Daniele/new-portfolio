"use client"

import Navbar from "@/components/navbar"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { ArrowLeft, ExternalLink, Github, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { useRef, useState } from "react"

function AnimatedText({ text, className }: { text: string; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })
  const words = text.split(" ")
  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          initial={{ opacity: 0, y: 60, rotateX: -30 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

function StatCard({ value, label }: { value: string; label: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-1 group"
    >
      <span className="text-5xl md:text-6xl font-display font-black text-[#5AABDA] group-hover:text-[#F0A83B] transition-colors duration-300">
        {value}
      </span>
      <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#B8C8D2]/60">{label}</span>
    </motion.div>
  )
}

const techStack = [
  { name: "Next.js", color: "#F5F8FA" },
  { name: "React", color: "#5AABDA" },
  { name: "TypeScript", color: "#3A8CC4" },
  { name: "Tailwind CSS", color: "#5AABDA" },
  { name: "Framer Motion", color: "#F0A83B" },
  { name: "Vercel", color: "#F5F8FA" },
]

export default function MigafinaProjectPage() {
  const { language } = useLanguage()
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  const translations = {
    en: {
      back: "Back",
      visit: "Visit Live Site",
      code: "View Code",
      overview: "Overview",
      challenge: "The Challenge",
      solution: "The Solution",
      techLabel: "Tech Stack",
      nextProject: "Next Project",
      challengeText: "Build a premium digital bakery experience that converts visitors into loyal customers — combining artisanal storytelling with modern e-commerce best practices.",
      solutionText: "Crafted an immersive visual experience with editorial photography, smooth transitions, and conversion-optimized flows. Every interaction was designed to reflect the quality of the brand.",
    },
    es: {
      back: "Volver",
      visit: "Ver Sitio en Vivo",
      code: "Ver Código",
      overview: "Descripción",
      challenge: "El Desafío",
      solution: "La Solución",
      techLabel: "Tecnologías",
      nextProject: "Siguiente Proyecto",
      challengeText: "Construir una experiencia de panadería digital premium que convierta visitantes en clientes fieles, combinando narrativa artesanal con las mejores prácticas de e-commerce moderno.",
      solutionText: "Creamos una experiencia visual inmersiva con fotografía editorial, transiciones suaves y flujos optimizados para la conversión. Cada interacción fue diseñada para reflejar la calidad de la marca.",
    }
  }

  const t = translations[language]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0D1B2A] overflow-x-hidden">

        {/* ── HERO ── */}
        <section ref={heroRef} className="relative w-full h-screen flex flex-col justify-center overflow-hidden">

          {/* Parallax background image */}
          <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0">
            <Image
              src="/images/migafina-desktop.png"
              alt="Migafina preview"
              fill
              className="object-cover opacity-10"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A]/40 via-transparent to-[#0D1B2A]" />
          </motion.div>

          {/* Decorative grid lines */}
          <div className="absolute inset-0 z-0 opacity-[0.04]"
            style={{ backgroundImage: "linear-gradient(#5AABDA 1px, transparent 1px), linear-gradient(90deg, #5AABDA 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

          {/* Floating accent circle */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-24 right-[10%] w-64 h-64 rounded-full border border-[#3A8CC4]/10 z-0"
          />
          <motion.div
            animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-32 right-[12%] w-40 h-40 rounded-full border border-[#F0A83B]/10 z-0"
          />

          <div className="container px-6 md:px-12 lg:px-20 mx-auto relative z-10">

            {/* Back link */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.25em] uppercase mb-10 text-[#7FA8BF] hover:text-[#5AABDA] transition-colors group">
                <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                {t.back}
              </Link>
            </motion.div>

            {/* Category + year */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-[#D4831A]">
                {language === "en" ? "E-commerce Platform" : "Plataforma E-commerce"}
              </span>
              <span className="w-8 h-px bg-[#D4831A]/40" />
              <span className="text-[10px] font-black tracking-[0.3em] text-[#7FA8BF]/50">2024</span>
            </motion.div>

            {/* Giant title */}
            <div className="overflow-hidden mb-8">
              <motion.h1
                initial={{ y: 120, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(4rem,14vw,14rem)] font-display font-black tracking-tighter leading-none text-[#F5F8FA]"
              >
                Migafina
              </motion.h1>
            </div>

            {/* Description + CTA */}
            <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="text-lg md:text-xl text-[#B8C8D2] leading-relaxed max-w-xl font-sans"
              >
                {language === "en"
                  ? "A premium digital bakery experience designed to bring artisanal quality to the web."
                  : "Una experiencia de panadería digital premium diseñada para llevar la calidad artesanal a la web."}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex items-center gap-4"
              >
                <a
                  href="https://migafina.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-8 py-4 bg-[#3A8CC4] hover:bg-[#5AABDA] text-[#F5F8FA] font-black text-[10px] uppercase tracking-[0.2em] rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#3A8CC4]/30 hover:scale-105"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  {t.visit}
                </a>
                <a
                  href="https://github.com/Matteo-Daniele"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-8 py-4 border border-[#3A8CC4]/30 text-[#7FA8BF] hover:border-[#5AABDA] hover:text-[#5AABDA] font-black text-[10px] uppercase tracking-[0.2em] rounded-full transition-all duration-300"
                >
                  <Github className="w-3.5 h-3.5" />
                  {t.code}
                </a>
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-px h-12 bg-gradient-to-b from-[#3A8CC4] to-transparent"
            />
            <span className="text-[9px] tracking-[0.3em] uppercase text-[#7FA8BF]/40">scroll</span>
          </motion.div>
        </section>

        {/* ── STATS ── */}
        <section className="py-24 border-t border-b border-[#1B5E99]/20">
          <div className="container px-6 md:px-12 lg:px-20 mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-6">
              <StatCard value="2024" label={language === "en" ? "Year" : "Año"} />
              <StatCard value="100%" label={language === "en" ? "Mobile Optimized" : "Mobile Optimizado"} />
              <StatCard value="4.9s" label={language === "en" ? "Avg. Session" : "Sesión Prom."} />
              <StatCard value="A+" label={language === "en" ? "Performance" : "Rendimiento"} />
            </div>
          </div>
        </section>

        {/* ── FULL SCREENSHOT ── */}
        <section className="py-20">
          <div className="container px-6 md:px-12 lg:px-20 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl overflow-hidden border border-[#1B5E99]/20 shadow-2xl shadow-[#0D1B2A]/80 group"
            >
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-5 py-3 bg-[#0F2235] border-b border-[#1B5E99]/20">
                <div className="w-3 h-3 rounded-full bg-[#1B5E99]/40" />
                <div className="w-3 h-3 rounded-full bg-[#1B5E99]/30" />
                <div className="w-3 h-3 rounded-full bg-[#1B5E99]/20" />
                <div className="ml-4 flex-1 max-w-xs h-6 rounded bg-[#1B5E99]/10 flex items-center px-3">
                  <span className="text-[10px] text-[#7FA8BF]/40">migafina.com</span>
                </div>
              </div>
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                <Image
                  src="/images/migafina-desktop.png"
                  alt="Migafina desktop"
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── CHALLENGE & SOLUTION ── */}
        <section className="py-24">
          <div className="container px-6 md:px-12 lg:px-20 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-6 h-px bg-[#D4831A]" />
                  <span className="text-[10px] font-black tracking-[0.3em] uppercase text-[#D4831A]">{t.challenge}</span>
                </div>
                <p className="text-xl md:text-2xl text-[#B8C8D2] leading-relaxed font-sans">
                  {t.challengeText}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-6 h-px bg-[#3A8CC4]" />
                  <span className="text-[10px] font-black tracking-[0.3em] uppercase text-[#3A8CC4]">{t.solution}</span>
                </div>
                <p className="text-xl md:text-2xl text-[#B8C8D2] leading-relaxed font-sans">
                  {t.solutionText}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── MOBILE SCREENSHOT ── */}
        <section className="py-12 overflow-hidden">
          <div className="container px-6 md:px-12 lg:px-20 mx-auto">
            <div className="flex gap-6 items-end">
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-[220px] md:w-[280px] shrink-0 rounded-3xl overflow-hidden border border-[#1B5E99]/30 shadow-2xl shadow-[#0D1B2A]"
              >
                <Image
                  src="/images/migafina-mobile.png"
                  alt="Migafina mobile"
                  width={280}
                  height={560}
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="flex-1 pb-10"
              >
                <span className="block text-[10px] font-black tracking-[0.35em] uppercase text-[#7FA8BF]/50 mb-4">
                  {language === "en" ? "Mobile Experience" : "Experiencia Móvil"}
                </span>
                <h2 className="text-4xl md:text-6xl font-display font-black text-[#F5F8FA] leading-tight mb-6">
                  <AnimatedText text={language === "en" ? "Designed for every screen." : "Diseñado para cada pantalla."} />
                </h2>
                <p className="text-base md:text-lg text-[#7FA8BF] leading-relaxed max-w-md">
                  {language === "en"
                    ? "A fully responsive layout ensuring a seamless experience from mobile to desktop."
                    : "Un diseño completamente responsivo que garantiza una experiencia fluida desde móvil hasta escritorio."}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── TECH STACK ── */}
        <section className="py-24 border-t border-[#1B5E99]/20">
          <div className="container px-6 md:px-12 lg:px-20 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-14"
            >
              <span className="text-[10px] font-black tracking-[0.35em] uppercase text-[#7FA8BF]/50">{t.techLabel}</span>
            </motion.div>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, i) => (
                <motion.button
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  onHoverStart={() => setHoveredTech(tech.name)}
                  onHoverEnd={() => setHoveredTech(null)}
                  className="relative px-6 py-3 rounded-full border font-black text-[11px] uppercase tracking-[0.2em] transition-all duration-300 overflow-hidden"
                  style={{
                    borderColor: hoveredTech === tech.name ? tech.color : "#1B5E99",
                    color: hoveredTech === tech.name ? "#0D1B2A" : tech.color,
                    backgroundColor: hoveredTech === tech.name ? tech.color : "transparent",
                  }}
                >
                  {tech.name}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* ── NEXT PROJECT CTA ── */}
        <section className="relative py-24 overflow-hidden bg-[#0F2235]">
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: "linear-gradient(#5AABDA 1px, transparent 1px), linear-gradient(90deg, #5AABDA 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
          <div className="container px-6 md:px-12 lg:px-20 mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10"
            >
              <div>
                <span className="block text-[10px] font-black tracking-[0.35em] uppercase text-[#D4831A] mb-4">{t.nextProject}</span>
                <h2 className="text-5xl md:text-7xl font-display font-black text-[#F5F8FA] leading-none">Rent a Car</h2>
              </div>
              <Link
                href="/projects/rentacar"
                className="group flex items-center gap-4 px-10 py-5 bg-[#D4831A] hover:bg-[#F0A83B] text-[#0D1B2A] font-black text-[11px] uppercase tracking-[0.2em] rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-[#D4831A]/20"
              >
                {t.nextProject}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>

      </main>
    </>
  )
}
