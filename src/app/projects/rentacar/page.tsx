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
  { name: "React", color: "#5AABDA" },
  { name: "Node.js", color: "#F5F8FA" },
  { name: "PostgreSQL", color: "#3A8CC4" },
  { name: "TypeScript", color: "#5AABDA" },
  { name: "Tailwind CSS", color: "#3A8CC4" },
  { name: "REST API", color: "#F0A83B" },
  { name: "Docker", color: "#F5F8FA" },
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
      overview: "Overview",
      challenge: "The Challenge",
      solution: "The Solution",
      techLabel: "Tech Stack",
      nextProject: "Next Project",
      challengeText: "Design and develop a high-performance vehicle management platform capable of handling complex booking flows, real-time fleet tracking, and automated logistics for a car rental operation.",
      solutionText: "Built a full-stack platform with a clean admin dashboard, real-time fleet visibility, and streamlined booking UX. Automated key workflows to reduce manual operations and human error.",
      gallery: "Gallery",
    },
    es: {
      back: "Volver",
      visit: "Ver Demo en Vivo",
      code: "Código Fuente",
      overview: "Descripción",
      challenge: "El Desafío",
      solution: "La Solución",
      techLabel: "Tecnologías",
      nextProject: "Siguiente Proyecto",
      challengeText: "Diseñar y desarrollar una plataforma de gestión de vehículos de alto rendimiento capaz de manejar flujos de reserva complejos, seguimiento de flota en tiempo real y logística automatizada para una empresa de alquiler de autos.",
      solutionText: "Construimos una plataforma full-stack con un panel de administración limpio, visibilidad de flota en tiempo real y una UX de reservas optimizada. Automatizamos flujos clave para reducir las operaciones manuales y el error humano.",
      gallery: "Galería",
    }
  }

  const t = translations[language]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0D1B2A] overflow-x-hidden">

        {/* ── HERO ── */}
        <section ref={heroRef} className="relative w-full h-screen flex flex-col justify-center overflow-hidden">

          {/* Parallax background */}
          <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0">
            <Image
              src="/images/rentacar-desktop1.png"
              alt="Rentacar preview"
              fill
              className="object-cover opacity-10"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A]/40 via-transparent to-[#0D1B2A]" />
          </motion.div>

          {/* Grid texture */}
          <div className="absolute inset-0 z-0 opacity-[0.04]"
            style={{ backgroundImage: "linear-gradient(#5AABDA 1px, transparent 1px), linear-gradient(90deg, #5AABDA 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

          {/* Floating rings */}
          <motion.div
            animate={{ y: [0, -18, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-28 right-[8%] w-72 h-72 rounded-full border border-[#1B5E99]/10 z-0"
          />
          <motion.div
            animate={{ y: [0, 12, 0], rotate: [0, 4, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-36 right-[10%] w-48 h-48 rounded-full border border-[#3A8CC4]/10 z-0"
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
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-[#3A8CC4]">
                {language === "en" ? "Web Application" : "Aplicación Web"}
              </span>
              <span className="w-8 h-px bg-[#3A8CC4]/40" />
              <span className="text-[10px] font-black tracking-[0.3em] text-[#7FA8BF]/50">2024</span>
            </motion.div>

            {/* Giant title */}
            <div className="overflow-hidden mb-8">
              <motion.h1
                initial={{ y: 120, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(3rem,11vw,11rem)] font-display font-black tracking-tighter leading-none text-[#F5F8FA]"
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
                className="text-lg md:text-xl text-[#B8C8D2] leading-relaxed max-w-xl font-sans"
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
              <StatCard value="3+" label={language === "en" ? "Core Modules" : "Módulos Core"} />
              <StatCard value="Full" label={language === "en" ? "Stack" : "Stack"} />
              <StatCard value="99%" label={language === "en" ? "Uptime" : "Disponibilidad"} />
            </div>
          </div>
        </section>

        {/* ── INTERACTIVE GALLERY ── */}
        <section className="py-20">
          <div className="container px-6 md:px-12 lg:px-20 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-10"
            >
              <span className="w-6 h-px bg-[#3A8CC4]" />
              <span className="text-[10px] font-black tracking-[0.35em] uppercase text-[#7FA8BF]/60">{t.gallery}</span>
            </motion.div>

            {/* Main screenshot */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl overflow-hidden border border-[#1B5E99]/20 shadow-2xl shadow-[#0D1B2A]/80 mb-4 group"
            >
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-5 py-3 bg-[#0F2235] border-b border-[#1B5E99]/20">
                <div className="w-3 h-3 rounded-full bg-[#1B5E99]/40" />
                <div className="w-3 h-3 rounded-full bg-[#1B5E99]/30" />
                <div className="w-3 h-3 rounded-full bg-[#1B5E99]/20" />
                <div className="ml-4 flex-1 max-w-xs h-6 rounded bg-[#1B5E99]/10 flex items-center px-3">
                  <span className="text-[10px] text-[#7FA8BF]/40">rentacar-app.com</span>
                </div>
              </div>
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#0F2235]">
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
                      : "border-[#1B5E99]/20 opacity-50 hover:opacity-80"
                  }`}
                >
                  <Image src={shot.src} alt={shot.alt} fill className="object-cover" />
                </motion.button>
              ))}
            </div>
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
                <h2 className="text-5xl md:text-7xl font-display font-black text-[#F5F8FA] leading-none">Migafina</h2>
              </div>
              <Link
                href="/projects/migafina"
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
