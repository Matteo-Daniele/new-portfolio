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
  { name: "React", color: "#3A8CC4" },
  { name: "Node.js", color: "#2B3E4C" },
  { name: "PostgreSQL", color: "#1B5E99" },
  { name: "TypeScript", color: "#1B5E99" },
  { name: "Tailwind CSS", color: "#3A8CC4" },
  { name: "REST API", color: "#D4831A" },
  { name: "Docker", color: "#2B3E4C" },
]

const screenshots = [
  { src: "/images/rentacar-desktop1.png", alt: "Rentacar dashboard" },
  { src: "/images/rentacar-desktop2.png", alt: "Rentacar fleet management" },
  { src: "/images/rentacar-desktop3.png", alt: "Rentacar booking system" },
]

export default function RentacarProjectPage() {
  const { language } = useLanguage()
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)
  const [activeShot, setActiveShot] = useState(0)

  const translations = {
    en: {
      back: "Back",
      visit: "View Live Demo",
      code: "Source Code",
      challenge: "The Challenge",
      solution: "The Solution",
      techLabel: "Tech Stack",
      nextProject: "Next Project",
      challengeText:
        "Design and develop a high-performance vehicle management platform capable of handling complex booking flows, real-time fleet tracking, and automated logistics for a car rental operation.",
      solutionText:
        "Built a full-stack platform with a clean admin dashboard, real-time fleet visibility, and streamlined booking UX. Automated key workflows to reduce manual operations and human error.",
      gallery: "Gallery",
    },
    es: {
      back: "Volver",
      visit: "Ver Demo en Vivo",
      code: "Código Fuente",
      challenge: "El Desafío",
      solution: "La Solución",
      techLabel: "Tecnologías",
      nextProject: "Siguiente Proyecto",
      challengeText:
        "Diseñar y desarrollar una plataforma de gestión de vehículos de alto rendimiento capaz de manejar flujos de reserva complejos, seguimiento de flota en tiempo real y logística automatizada.",
      solutionText:
        "Construimos una plataforma full-stack con un panel de administración limpio, visibilidad de flota en tiempo real y una UX de reservas optimizada. Automatizamos flujos clave para reducir las operaciones manuales.",
      gallery: "Galería",
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
          {/* Dot pattern */}
          <div
            className="absolute inset-0 z-0 opacity-[0.06]"
            style={{
              backgroundImage: "radial-gradient(circle, #1B5E99 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />

          {/* Parallax image — very subtle */}
          <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0">
            <Image
              src="/images/rentacar-desktop1.png"
              alt="Rentacar preview"
              fill
              className="object-cover opacity-[0.04]"
              priority
            />
          </motion.div>

          {/* Floating rings */}
          <motion.div
            animate={{ y: [0, -18, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-28 right-[8%] w-72 h-72 rounded-full border border-[#3A8CC4]/15 z-0"
          />
          <motion.div
            animate={{ y: [0, 12, 0], rotate: [0, 4, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
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
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-[#3A8CC4]">
                {language === "en" ? "Web Application" : "Aplicación Web"}
              </span>
              <span className="w-8 h-px bg-[#3A8CC4]/50" />
              <span className="text-[10px] font-black tracking-[0.3em] text-[#7FA8BF]">2024</span>
            </motion.div>

            {/* Giant title */}
            <div className="overflow-hidden mb-8">
              <motion.h1
                initial={{ y: 120, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(3rem,11vw,11rem)] font-display font-black tracking-tighter leading-none text-[#2B3E4C]"
              >
                Rent a Car
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
                  ? "A high-performance vehicle management platform with complex business logic and automated booking systems."
                  : "Una plataforma de gestión de vehículos de alto rendimiento con lógica de negocios compleja y sistemas de reserva automatizados."}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex items-center gap-4"
              >
                <a
                  href="#"
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
              <StatCard value="3+" label={language === "en" ? "Core Modules" : "Módulos Core"} />
              <StatCard value="Full" label={language === "en" ? "Stack" : "Stack"} />
              <StatCard value="99%" label={language === "en" ? "Uptime" : "Disponibilidad"} />
            </div>
          </div>
        </section>

        {/* ── INTERACTIVE GALLERY ── */}
        <section className="py-20 bg-[#F5F8FA]">
          <div className="container px-6 md:px-12 lg:px-20 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-10"
            >
              <span className="w-6 h-px bg-[#3A8CC4]" />
              <span className="text-[10px] font-black tracking-[0.35em] uppercase text-[#7FA8BF]">{t.gallery}</span>
            </motion.div>

            {/* Main screenshot */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl overflow-hidden border border-[#B8C8D2]/40 shadow-xl shadow-[#2B3E4C]/10 mb-4 group"
            >
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-5 py-3 bg-[#EEF4F8] border-b border-[#B8C8D2]/40">
                <div className="w-3 h-3 rounded-full bg-[#B8C8D2]/60" />
                <div className="w-3 h-3 rounded-full bg-[#B8C8D2]/45" />
                <div className="w-3 h-3 rounded-full bg-[#B8C8D2]/30" />
                <div className="ml-4 flex-1 max-w-xs h-6 rounded bg-[#D6ECF7] flex items-center px-3">
                  <span className="text-[10px] text-[#7FA8BF]">rentacar-app.com</span>
                </div>
              </div>
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#EEF4F8]">
                <motion.div
                  key={activeShot}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={screenshots[activeShot].src}
                    alt={screenshots[activeShot].alt}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Thumbnail strip */}
            <div className="flex gap-3">
              {screenshots.map((shot, i) => (
                <motion.button
                  key={i}
                  onClick={() => setActiveShot(i)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={`relative flex-1 aspect-video rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    activeShot === i
                      ? "border-[#3A8CC4] shadow-lg shadow-[#3A8CC4]/20"
                      : "border-[#B8C8D2]/40 opacity-50 hover:opacity-80 hover:border-[#3A8CC4]/50"
                  }`}
                >
                  <Image src={shot.src} alt={shot.alt} fill className="object-cover" />
                </motion.button>
              ))}
            </div>
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

        {/* ── TECH STACK ── */}
        <section className="py-24 bg-[#F5F8FA] border-t border-[#B8C8D2]/30">
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
                  Migafina
                </h2>
              </div>
              <Link
                href="/projects/migafina"
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
