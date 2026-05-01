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
      <span className="text-5xl md:text-6xl font-display font-black text-[#1B5E99] group-hover:text-[#D4831A] transition-colors duration-300">
        {value}
      </span>
      <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#7FA8BF]">{label}</span>
    </motion.div>
  )
}

const techStack = [
  { name: "Next.js", color: "#1B5E99" },
  { name: "React", color: "#3A8CC4" },
  { name: "TypeScript", color: "#1B5E99" },
  { name: "Tailwind CSS", color: "#3A8CC4" },
  { name: "Framer Motion", color: "#D4831A" },
  { name: "Vercel", color: "#2B3E4C" },
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
      challenge: "The Challenge",
      solution: "The Solution",
      techLabel: "Tech Stack",
      nextProject: "Next Project",
      challengeText:
        "Build a premium digital bakery experience that converts visitors into loyal customers — combining artisanal storytelling with modern e-commerce best practices.",
      solutionText:
        "Crafted an immersive visual experience with editorial photography, smooth transitions, and conversion-optimized flows. Every interaction was designed to reflect the quality of the brand.",
      mobileLabel: "Mobile Experience",
      mobileHeading: "Designed for every screen.",
      mobileDesc: "A fully responsive layout ensuring a seamless experience from mobile to desktop.",
    },
    es: {
      back: "Volver",
      visit: "Ver Sitio en Vivo",
      code: "Ver Código",
      challenge: "El Desafío",
      solution: "La Solución",
      techLabel: "Tecnologías",
      nextProject: "Siguiente Proyecto",
      challengeText:
        "Construir una experiencia de panadería digital premium que convierta visitantes en clientes fieles, combinando narrativa artesanal con las mejores prácticas de e-commerce moderno.",
      solutionText:
        "Creamos una experiencia visual inmersiva con fotografía editorial, transiciones suaves y flujos optimizados para la conversión. Cada interacción fue diseñada para reflejar la calidad de la marca.",
      mobileLabel: "Experiencia Móvil",
      mobileHeading: "Diseñado para cada pantalla.",
      mobileDesc:
        "Un diseño completamente responsivo que garantiza una experiencia fluida desde móvil hasta escritorio.",
    },
  }

  const t = translations[language]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F5F8FA] overflow-x-hidden">

        {/* ── HERO ── */}
        <section
          ref={heroRef}
          className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-[#FDF8F0]"
        >
          {/* Subtle dot pattern */}
          <div
            className="absolute inset-0 z-0 opacity-[0.06]"
            style={{
              backgroundImage: "radial-gradient(circle, #1B5E99 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />

          {/* Parallax image overlay — very subtle */}
          <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0">
            <Image
              src="/images/migafina-desktop.png"
              alt="Migafina preview"
              fill
              className="object-cover opacity-[0.04]"
              priority
            />
          </motion.div>

          {/* Floating decorative rings */}
          <motion.div
            animate={{ y: [0, -18, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-24 right-[8%] w-72 h-72 rounded-full border border-[#3A8CC4]/15 z-0"
          />
          <motion.div
            animate={{ y: [0, 14, 0], rotate: [0, -3, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-36 right-[11%] w-44 h-44 rounded-full border border-[#D4831A]/15 z-0"
          />

          <div className="container px-6 md:px-12 lg:px-20 mx-auto relative z-10 pt-32 pb-24">

            {/* Back link */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.25em] uppercase mb-12 text-[#7FA8BF] hover:text-[#1B5E99] transition-colors group"
              >
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
              <span className="w-8 h-px bg-[#D4831A]/50" />
              <span className="text-[10px] font-black tracking-[0.3em] text-[#7FA8BF]">2024</span>
            </motion.div>

            {/* Giant title */}
            <div className="overflow-hidden mb-8">
              <motion.h1
                initial={{ y: 120, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(4rem,14vw,14rem)] font-display font-black tracking-tighter leading-none text-[#2B3E4C]"
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
                className="text-lg md:text-xl text-[#7FA8BF] leading-relaxed max-w-xl font-sans"
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
                  className="group flex items-center gap-3 px-8 py-4 bg-[#1B5E99] hover:bg-[#3A8CC4] text-[#F5F8FA] font-black text-[10px] uppercase tracking-[0.2em] rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#1B5E99]/20 hover:scale-105"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  {t.visit}
                </a>
                <a
                  href="https://github.com/Matteo-Daniele"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-8 py-4 border border-[#1B5E99]/30 text-[#1B5E99] hover:border-[#3A8CC4] hover:text-[#3A8CC4] font-black text-[10px] uppercase tracking-[0.2em] rounded-full transition-all duration-300"
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
            <span className="text-[9px] tracking-[0.3em] uppercase text-[#B8C8D2]">scroll</span>
          </motion.div>
        </section>

        {/* ── STATS ── */}
        <section className="py-20 bg-white border-t border-b border-[#B8C8D2]/30">
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
        <section className="py-20 bg-[#F5F8FA]">
          <div className="container px-6 md:px-12 lg:px-20 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl overflow-hidden border border-[#B8C8D2]/40 shadow-xl shadow-[#2B3E4C]/10 group"
            >
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-5 py-3 bg-[#EEF4F8] border-b border-[#B8C8D2]/40">
                <div className="w-3 h-3 rounded-full bg-[#B8C8D2]/60" />
                <div className="w-3 h-3 rounded-full bg-[#B8C8D2]/45" />
                <div className="w-3 h-3 rounded-full bg-[#B8C8D2]/30" />
                <div className="ml-4 flex-1 max-w-xs h-6 rounded bg-[#D6ECF7] flex items-center px-3">
                  <span className="text-[10px] text-[#7FA8BF]">migafina.com</span>
                </div>
              </div>
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                <Image
                  src="/images/migafina-desktop.png"
                  alt="Migafina desktop"
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B3E4C]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── CHALLENGE & SOLUTION ── */}
        <section className="py-24 bg-white">
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
                <p className="text-xl md:text-2xl text-[#2B3E4C] leading-relaxed font-sans">
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
                  <span className="w-6 h-px bg-[#1B5E99]" />
                  <span className="text-[10px] font-black tracking-[0.3em] uppercase text-[#1B5E99]">{t.solution}</span>
                </div>
                <p className="text-xl md:text-2xl text-[#2B3E4C] leading-relaxed font-sans">
                  {t.solutionText}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── MOBILE SCREENSHOT ── */}
        <section className="py-16 bg-[#F5F8FA] overflow-hidden">
          <div className="container px-6 md:px-12 lg:px-20 mx-auto">
            <div className="flex gap-8 items-end">
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-[200px] md:w-[260px] shrink-0 rounded-3xl overflow-hidden border border-[#B8C8D2]/50 shadow-xl shadow-[#2B3E4C]/10"
              >
                <Image
                  src="/images/migafina-mobile.png"
                  alt="Migafina mobile"
                  width={260}
                  height={520}
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
                <span className="block text-[10px] font-black tracking-[0.35em] uppercase text-[#7FA8BF] mb-4">
                  {t.mobileLabel}
                </span>
                <h2 className="text-4xl md:text-6xl font-display font-black text-[#2B3E4C] leading-tight mb-6">
                  <AnimatedText text={t.mobileHeading} />
                </h2>
                <p className="text-base md:text-lg text-[#7FA8BF] leading-relaxed max-w-md font-sans">
                  {t.mobileDesc}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── TECH STACK ── */}
        <section className="py-24 bg-white border-t border-[#B8C8D2]/30">
          <div className="container px-6 md:px-12 lg:px-20 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-12"
            >
              <span className="text-[10px] font-black tracking-[0.35em] uppercase text-[#7FA8BF]">{t.techLabel}</span>
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
                  className="relative px-6 py-3 rounded-full border font-black text-[11px] uppercase tracking-[0.2em] transition-all duration-300"
                  style={{
                    borderColor: hoveredTech === tech.name ? tech.color : "#B8C8D2",
                    color: hoveredTech === tech.name ? "#F5F8FA" : tech.color,
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
        <section className="relative py-24 overflow-hidden bg-[#1B5E99]">
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(#D6ECF7 1px, transparent 1px), linear-gradient(90deg, #D6ECF7 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          {/* Floating rings for CTA */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-20 -top-20 w-80 h-80 rounded-full border border-[#5AABDA]/20"
          />
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-10 top-0 w-48 h-48 rounded-full border border-[#5AABDA]/10"
          />

          <div className="container px-6 md:px-12 lg:px-20 mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10"
            >
              <div>
                <span className="block text-[10px] font-black tracking-[0.35em] uppercase text-[#F0A83B] mb-4">
                  {t.nextProject}
                </span>
                <h2 className="text-5xl md:text-7xl font-display font-black text-[#F5F8FA] leading-none">
                  Rent a Car
                </h2>
              </div>
              <Link
                href="/projects/rentacar"
                className="group flex items-center gap-4 px-10 py-5 bg-[#D4831A] hover:bg-[#F0A83B] text-[#F5F8FA] hover:text-[#2B3E4C] font-black text-[11px] uppercase tracking-[0.2em] rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-[#D4831A]/30"
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
