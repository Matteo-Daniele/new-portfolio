"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { useLanguage } from "../components/language-provider"

export default function Projects() {
  const { language } = useLanguage()

  const translations = {
    en: {
      myWork: "Selected Work",
      featuredProjects: "Projects that define my craft",
      description: "Each project is a story of solving real problems with code, design, and intention.",
      viewAllProjects: "View all projects",
      viewProject: "View Project",
    },
    es: {
      myWork: "Trabajo Seleccionado",
      featuredProjects: "Proyectos que definen mi oficio",
      description: "Cada proyecto es una historia de resolver problemas reales con código, diseño e intención.",
      viewAllProjects: "Ver todos los proyectos",
      viewProject: "Ver Proyecto",
    },
  }

  const t = translations[language]

  const projectsData = [
    {
      id: 1,
      title: "Migafina",
      subtitle: language === "en" ? "Artisan bakery digital experience" : "Experiencia digital de panadería artesanal",
      image: "/images/migafina-desktop.png",
      mobileImage: "/images/migafina-mobile.png",
      tags: ["Next.js", "React", "Tailwind"],
      caseStudyUrl: "/projects/migafina",
      year: "2025",
      color: "#D4831A",
    },
    {
      id: 2,
      title: "Rent a Car",
      subtitle: language === "en" ? "Vehicle reservation platform" : "Plataforma de reservas de vehículos",
      image: "/images/rentacar-desktop1.png",
      mobileImage: "/images/rentacar-desktop2.png",
      tags: ["React.js", "Node.js", "MongoDB"],
      caseStudyUrl: "/projects/rentacar",
      year: "2024",
      color: "#1B5E99",
    },
  ]

  return (
    <section
      id="projects"
      className="relative py-32 md:py-44 overflow-hidden"
      style={{ background: "var(--bg-main)" }}
    >
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-20 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(212,131,26,0.08) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(27,94,153,0.06) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, -25, 0],
          y: [0, 25, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="container px-6 md:px-8 mx-auto mb-16 md:mb-24">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 mb-6"
              >
                <span className="w-8 h-px bg-[var(--accent-warm)]" />
                <span
                  className="font-medium tracking-[0.2em] uppercase text-xs"
                  style={{ color: "var(--accent-warm)" }}
                >
                  {t.myWork}
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-[1.1]"
                style={{ color: "var(--text-primary)" }}
              >
                {t.featuredProjects}
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-base md:text-lg max-w-sm leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              {t.description}
            </motion.p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="container px-6 md:px-8 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                viewLabel={t.viewProject}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="container px-6 md:px-8 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center mt-16 md:mt-24"
          >
            <Link
              href="/projects"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-sm overflow-hidden transition-all duration-500"
              style={{
                background: "var(--bg-card)",
                color: "var(--text-primary)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <span className="relative z-10">{t.viewAllProjects}</span>
              <ArrowRight className="h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(135deg, rgba(27,94,153,0.1) 0%, rgba(212,131,26,0.1) 100%)",
                }}
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  viewLabel,
}: {
  project: {
    id: number
    title: string
    subtitle: string
    image: string
    mobileImage: string
    tags: string[]
    caseStudyUrl: string
    year: string
    color: string
  }
  index: number
  viewLabel: string
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [8, -8]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-8, 8]), { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width)
    mouseY.set((e.clientY - rect.top) / rect.height)
  }

  const handleMouseLeave = () => {
    mouseX.set(0.5)
    mouseY.set(0.5)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={project.caseStudyUrl}>
        <motion.div
          ref={cardRef}
          className="group relative rounded-3xl overflow-hidden cursor-pointer"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border-subtle)",
            transformStyle: "preserve-3d",
            perspective: "1000px",
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
          >
            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden">
              {/* Main Image */}
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index < 2}
                />
              </motion.div>

              {/* Gradient Overlay */}
              <div
                className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(180deg, transparent 0%, ${project.color}20 100%)`,
                }}
              />

              {/* Floating Mobile Preview */}
              <motion.div
                className="absolute bottom-4 right-4 w-20 md:w-28 aspect-[9/16] rounded-xl overflow-hidden shadow-2xl border-2 border-white/20"
                style={{ transform: "translateZ(40px)" }}
                initial={{ opacity: 0, y: 20, rotate: 6 }}
                whileInView={{ opacity: 1, y: 0, rotate: 6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Image
                  src={project.mobileImage}
                  alt={`${project.title} mobile`}
                  fill
                  className="object-cover"
                  sizes="112px"
                />
              </motion.div>

              {/* Year Badge */}
              <motion.div
                className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-mono font-medium backdrop-blur-md"
                style={{
                  background: "rgba(255,255,255,0.9)",
                  color: project.color,
                  transform: "translateZ(20px)",
                }}
              >
                {project.year}
              </motion.div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3
                    className="text-2xl md:text-3xl font-display font-bold tracking-tight mb-2 group-hover:text-[var(--text-secondary)] transition-colors duration-300"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-sm md:text-base"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {project.subtitle}
                  </p>
                </div>

                {/* Arrow Button */}
                <motion.div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    background: "var(--bg-main)",
                    border: "1px solid var(--border-subtle)",
                  }}
                  whileHover={{
                    background: project.color,
                    borderColor: project.color,
                  }}
                >
                  <ArrowUpRight
                    className="h-5 w-5 transition-all duration-300 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    style={{ color: "var(--text-muted)" }}
                  />
                </motion.div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 rounded-full font-medium"
                    style={{
                      background: `${project.color}10`,
                      color: project.color,
                      border: `1px solid ${project.color}20`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Shine Effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 45%, rgba(255,255,255,0.05) 50%, transparent 55%)",
              transform: "translateX(-100%)",
            }}
            whileHover={{
              transform: "translateX(100%)",
              transition: { duration: 0.8, ease: "easeInOut" },
            }}
          />
        </motion.div>
      </Link>
    </motion.div>
  )
}
