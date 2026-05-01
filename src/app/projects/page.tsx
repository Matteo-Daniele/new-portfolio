"use client"

import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { useLanguage } from "@/components/language-provider"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"

export default function ProjectsPage() {
  const { language } = useLanguage()

  const translations = {
    en: {
      title: "All Projects",
      subtitle: "A collection of work that showcases my journey as a developer",
      backHome: "Back to Home",
      viewProject: "View Project",
      year: "Year",
      stack: "Stack",
      contactTitle: "Have a project in mind?",
      contactSubtitle: "Let&apos;s work together to bring your ideas to life",
      contactCta: "Get in Touch",
    },
    es: {
      title: "Todos los Proyectos",
      subtitle: "Una colección de trabajo que muestra mi trayectoria como desarrollador",
      backHome: "Volver al Inicio",
      viewProject: "Ver Proyecto",
      year: "Año",
      stack: "Tecnologías",
      contactTitle: "¿Tienes un proyecto en mente?",
      contactSubtitle: "Trabajemos juntos para dar vida a tus ideas",
      contactCta: "Contactar",
    },
  }

  const t = translations[language]

  const allProjects = [
    {
      id: 1,
      title: "Migafina",
      description: language === "en" 
        ? "Premium artisan bakery website with responsive design, smooth animations, and optimized performance for an elegant digital experience."
        : "Sitio web premium de panadería artesanal con diseño responsivo, animaciones suaves y rendimiento optimizado para una experiencia digital elegante.",
      image: "/images/migafina-desktop.png",
      secondaryImage: "/images/migafina-mobile.png",
      tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
      caseStudyUrl: "/projects/migafina",
      year: "2025",
      color: "#D4831A",
      category: language === "en" ? "Web Design" : "Diseño Web",
    },
    {
      id: 2,
      title: "Rent a Car",
      description: language === "en"
        ? "Full-stack vehicle reservation platform with real-time availability, admin dashboard, and seamless booking experience."
        : "Plataforma full-stack de reservas de vehículos con disponibilidad en tiempo real, panel de administración y experiencia de reserva fluida.",
      image: "/images/rentacar-desktop1.png",
      secondaryImage: "/images/rentacar-desktop2.png",
      tags: ["React.js", "Node.js", "MongoDB", "Express"],
      caseStudyUrl: "/projects/rentacar",
      year: "2024",
      color: "#1B5E99",
      category: language === "en" ? "Full-Stack App" : "Aplicación Full-Stack",
    },
  ]

  return (
    <main className="min-h-screen" style={{ background: "var(--bg-main)" }}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(212,131,26,0.06) 0%, transparent 70%)",
            }}
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(27,94,153,0.05) 0%, transparent 70%)",
            }}
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.6, 0.4, 0.6] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container px-6 md:px-8 mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300 hover:text-[var(--text-primary)]"
              style={{ color: "var(--text-muted)" }}
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              {t.backHome}
            </Link>
          </motion.div>

          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-[var(--accent-warm)]" />
              <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>
                {allProjects.length} {language === "en" ? "Projects" : "Proyectos"}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              {t.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-lg md:text-xl max-w-2xl leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              {t.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 md:pb-32">
        <div className="container px-6 md:px-8 mx-auto">
          <div className="space-y-8 md:space-y-12">
            {allProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} t={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, var(--bg-main) 0%, var(--bg-card) 50%, var(--bg-main) 100%)",
          }}
        />

        <div className="container px-6 md:px-8 mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-8"
              style={{
                background: "linear-gradient(135deg, rgba(27,94,153,0.1) 0%, rgba(212,131,26,0.1) 100%)",
                border: "1px solid var(--border-subtle)",
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Mail className="h-7 w-7" style={{ color: "var(--text-secondary)" }} />
            </motion.div>

            <h2
              className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              {t.contactTitle}
            </h2>

            <p
              className="text-base md:text-lg mb-10 max-w-lg mx-auto"
              style={{ color: "var(--text-muted)" }}
            >
              {t.contactSubtitle}
            </p>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              style={{
                background: "linear-gradient(135deg, #1B5E99 0%, #3A8CC4 100%)",
                color: "#FFFBF4",
                boxShadow: "0 8px 24px rgba(27,94,153,0.25)",
              }}
            >
              {t.contactCta}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function ProjectCard({
  project,
  index,
  t,
}: {
  project: {
    id: number
    title: string
    description: string
    image: string
    secondaryImage: string
    tags: string[]
    caseStudyUrl: string
    year: string
    color: string
    category: string
  }
  index: number
  t: { viewProject: string; year: string; stack: string }
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [4, -4]), { stiffness: 400, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-4, 4]), { stiffness: 400, damping: 30 })

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

  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={project.caseStudyUrl}>
        <motion.div
          ref={cardRef}
          className="group relative rounded-3xl overflow-hidden cursor-pointer"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border-subtle)",
            transformStyle: "preserve-3d",
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}>
            <div className={`grid grid-cols-1 lg:grid-cols-2 ${isEven ? "" : "lg:grid-flow-dense"}`}>
              {/* Image Section */}
              <div className={`relative aspect-[4/3] lg:aspect-auto overflow-hidden ${isEven ? "" : "lg:col-start-2"}`}>
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={index < 2}
                  />
                </motion.div>

                {/* Gradient Overlay */}
                <div
                  className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(${isEven ? "135deg" : "225deg"}, transparent 30%, ${project.color}40 100%)`,
                  }}
                />

                {/* Floating Secondary Image */}
                <motion.div
                  className="absolute bottom-6 right-6 w-24 md:w-32 aspect-video rounded-xl overflow-hidden shadow-2xl border-2 border-white/30"
                  style={{ transform: "translateZ(30px)" }}
                  initial={{ opacity: 0, y: 20, rotate: isEven ? 3 : -3 }}
                  whileInView={{ opacity: 1, y: 0, rotate: isEven ? 3 : -3 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Image
                    src={project.secondaryImage}
                    alt={`${project.title} detail`}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </motion.div>

                {/* Category Badge */}
                <motion.div
                  className="absolute top-6 left-6 px-4 py-2 rounded-full text-xs font-semibold backdrop-blur-md"
                  style={{
                    background: "rgba(255,255,255,0.95)",
                    color: project.color,
                  }}
                >
                  {project.category}
                </motion.div>
              </div>

              {/* Content Section */}
              <div className={`p-8 md:p-12 lg:p-16 flex flex-col justify-center ${isEven ? "" : "lg:col-start-1 lg:row-start-1"}`}>
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-mono text-sm" style={{ color: "var(--text-muted)" }}>
                      {t.year}: {project.year}
                    </span>
                    <span className="w-6 h-px" style={{ background: "var(--border-subtle)" }} />
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ background: project.color }}
                    />
                  </div>

                  <h2
                    className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4 group-hover:text-[var(--text-secondary)] transition-colors duration-300"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {project.title}
                  </h2>

                  <p
                    className="text-base md:text-lg leading-relaxed mb-8"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="mb-8">
                  <span className="text-xs font-medium uppercase tracking-wider mb-3 block" style={{ color: "var(--text-muted)" }}>
                    {t.stack}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1.5 rounded-full font-medium"
                        style={{
                          background: `${project.color}10`,
                          color: project.color,
                          border: `1px solid ${project.color}25`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-4">
                  <motion.span
                    className="inline-flex items-center gap-2 text-sm font-semibold"
                    style={{ color: project.color }}
                  >
                    {t.viewProject}
                    <ArrowUpRight className="h-4 w-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                  </motion.span>

                  <motion.div
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      background: `${project.color}10`,
                      border: `1px solid ${project.color}25`,
                    }}
                    whileHover={{
                      background: project.color,
                      scale: 1.1,
                    }}
                  >
                    <ArrowUpRight
                      className="h-5 w-5 transition-colors duration-300 group-hover:text-white"
                      style={{ color: project.color }}
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Shine Effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.03) 50%, transparent 55%)",
              transform: "translateX(-100%)",
            }}
            whileHover={{
              transform: "translateX(100%)",
              transition: { duration: 1, ease: "easeInOut" },
            }}
          />
        </motion.div>
      </Link>
    </motion.div>
  )
}
