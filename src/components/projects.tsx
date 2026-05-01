"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"
import { useLanguage } from "../components/language-provider"

export default function Projects() {
  const { language } = useLanguage()

  const translations = {
    en: {
      myWork: "Selected Work",
      featuredProjects: "Projects that\ndefine my craft",
      description: "Each project is a story of solving real problems with code, design, and intention.",
      viewAllProjects: "View all projects",
    },
    es: {
      myWork: "Trabajo Seleccionado",
      featuredProjects: "Proyectos que\ndefinen mi oficio",
      description: "Cada proyecto es una historia de resolver problemas reales con código, diseño e intención.",
      viewAllProjects: "Ver todos los proyectos",
    },
  }

  const t = translations[language]

  const projectsData = [
    {
      id: 1, title: "Migafina",
      subtitle: language === "en" ? "Bakery website with responsive design" : "Sitio web de panadería con diseño responsivo",
      image: "/images/migafina-desktop.png",
      tags: ["Next.js", "React", "CSS"],
      caseStudyUrl: "/projects/migafina", year: "2025",
    },
    {
      id: 2, title: "Rent a Car",
      subtitle: language === "en" ? "Full-stack vehicle reservation platform" : "Plataforma full-stack de reservas de vehículos",
      image: "/images/rentacar-desktop1.png",
      tags: ["React.js", "Node.js", "MongoDB"],
      caseStudyUrl: "/projects/rentacar", year: "2024",
    },
  ]

  return (
    <section id="projects" className="relative py-32 md:py-44 overflow-hidden"
      style={{ background: "linear-gradient(180deg, var(--bg-main) 0%, var(--bg-card) 40%, #F3E8D5 60%, var(--bg-main) 100%)" }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(240,168,59,0.08) 0%, transparent 70%)" }} />

      <div className="relative z-10">
        <div className="container px-6 md:px-8 mx-auto mb-20 md:mb-28">
          <div className="max-w-5xl">
            <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="font-medium tracking-[0.2em] uppercase text-xs mb-8"
              style={{ color: "var(--text-secondary)" }}>{t.myWork}</motion.p>

            <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-display font-bold tracking-tight leading-[1.05] whitespace-pre-line"
              style={{ color: "var(--text-primary)" }}>{t.featuredProjects}</motion.h2>

            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.25 }}
              className="text-lg md:text-xl max-w-lg mt-8 leading-relaxed"
              style={{ color: "var(--text-muted)", opacity: 0.85 }}>{t.description}</motion.p>
          </div>
        </div>

        <div className="container px-6 md:px-8 mx-auto">
          <div className="h-px" style={{ background: "var(--border-subtle)" }} />
          {projectsData.map((project, index) => (
            <ProjectRow key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="container px-6 md:px-8 mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="flex justify-center mt-28 md:mt-36">
            <Link href="/projects"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.03] active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, #1B5E99 0%, #3A8CC4 100%)",
                color: "#FFFBF4",
                boxShadow: "0 8px 24px rgba(27,94,153,0.25)",
              }}>
              {t.viewAllProjects}
              <ArrowUpRight className="h-4 w-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ProjectRow({ project, index }: { project: any; index: number }) {
  const rowRef = useRef<HTMLAnchorElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 250, damping: 30, mass: 0.5 })
  const springY = useSpring(mouseY, { stiffness: 250, damping: 30, mass: 0.5 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!rowRef.current) return
    const rect = rowRef.current.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left + 20)
    mouseY.set(e.clientY - rect.top - 160)
  }

  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}>
      <Link ref={rowRef} href={project.caseStudyUrl}
        className="group relative block py-8 md:py-10 cursor-pointer"
        style={{ borderBottom: "1px solid var(--border-subtle)" }}
        onMouseMove={handleMouseMove} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        {/* Hover bg */}
        <div className={`absolute inset-0 transition-opacity duration-500 rounded-xl ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          style={{ background: "linear-gradient(90deg, rgba(43,62,76,0.05) 0%, rgba(212,131,26,0.02) 60%, transparent 100%)" }} />

        <div className="relative z-10 flex items-center justify-between gap-4">
          <div className="flex items-baseline gap-4 md:gap-8 min-w-0">
            <span className="text-sm md:text-base font-mono tracking-widest flex-shrink-0 w-8"
              style={{ color: "rgba(43,62,76,0.3)" }}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="min-w-0">
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight transition-all duration-500"
                style={{ color: isHovered ? "#1B5E99" : "var(--text-primary)" }}>
                {project.title}
              </h3>
              <p className="text-sm md:text-base mt-1 transition-all duration-500 truncate"
                style={{ color: "var(--text-muted)", opacity: isHovered ? 0.8 : 0.5 }}>
                {project.subtitle}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 md:gap-8 flex-shrink-0">
            <div className="hidden lg:flex items-center gap-2">
              {project.tags.map((tag: string, i: number) => (
                <span key={i} className="text-xs rounded-full px-3 py-1"
                  style={{ color: "var(--text-secondary)", border: "1px solid var(--border-subtle)", opacity: 0.7 }}>{tag}</span>
              ))}
            </div>
            <span className="text-sm font-mono hidden sm:block"
              style={{ color: "rgba(43,62,76,0.35)" }}>{project.year}</span>
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-500"
              style={{
                border: `1px solid ${isHovered ? 'rgba(27,94,153,0.3)' : 'var(--border-subtle)'}`,
                background: isHovered ? 'rgba(27,94,153,0.08)' : 'transparent',
              }}>
              <ArrowUpRight className={`h-4 w-4 md:h-5 md:w-5 transition-all duration-500 ${isHovered ? '-translate-y-0.5 translate-x-0.5' : ''}`}
                style={{ color: isHovered ? "#1B5E99" : "rgba(43,62,76,0.3)" }} />
            </div>
          </div>
        </div>

        <motion.div className="absolute z-30 pointer-events-none hidden md:block" style={{ left: springX, top: springY }}>
          <motion.div initial={false}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.85, rotate: isHovered ? -2 : -5 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="w-[320px] h-[200px] rounded-2xl overflow-hidden shadow-2xl"
            style={{ boxShadow: "0 20px 48px rgba(43,62,76,0.18), 0 8px 16px rgba(43,62,76,0.1)", border: "1px solid var(--border-subtle)" }}>
            <Image src={project.image} alt={project.title} fill className="object-cover" sizes="320px" priority={index < 2} />
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  )
}
