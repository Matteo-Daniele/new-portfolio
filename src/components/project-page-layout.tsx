"use client"

import Navbar from "@/components/navbar"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useLanguage } from "./language-provider"

interface Tech {
  label: string
}

interface ProjectSection {
  heading: string
  body: string
}

interface ServiceCategory {
  title: string
  items: string[]
}

export interface ProjectPageData {
  title: string
  tagline: string
  year: string
  role: string
  category: string
  description: string
  altTagline?: string
  marqueeText?: string
  challenge: ProjectSection
  approach: ProjectSection
  outcome: ProjectSection
  heroImage: string
  detailImage: string
  images?: string[]
  demoUrl: string
  repoUrl: string
  tech: Tech[]
  accentColor: string
  labelBack: string
  labelVisit: string
  labelCode: string
  services?: ServiceCategory[]
}

interface Props {
  data: ProjectPageData
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const INK = "#2B3E4C"

function AdaptiveImage({
  src,
  alt,
  priority,
  className = "rounded-[2rem]",
  minHeight = "16rem",
}: {
  src: string
  alt: string
  priority?: boolean
  className?: string
  minHeight?: string
}) {
  const [ratio, setRatio] = useState<number | null>(null)

  return (
    <div
      className={`relative w-full overflow-hidden shadow-2xl border border-white/20 ${className}`}
      style={ratio ? { aspectRatio: ratio } : { minHeight }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 460px"
        className="object-cover"
        onLoad={(e) => {
          const { naturalWidth: w, naturalHeight: h } = e.currentTarget
          if (w && h) setRatio(w / h)
        }}
      />
    </div>
  )
}

/* Sweeping marquee band — the animated moment */
function Marquee({ text, ink }: { text: string; ink: boolean }) {
  const rm = useReducedMotion()
  const repeatedText = Array(6).fill(text).join("  \u2717  ")

  return (
    <div className="relative w-full overflow-hidden py-7 -my-6" style={{ transform: "rotate(-2deg) scale(1.01)" }}>
      <motion.div
        className="flex whitespace-nowrap"
        animate={rm ? undefined : { x: [0, -2400] }}
        transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 26, ease: "linear" } }}
      >
        <span
          className="text-4xl md:text-6xl font-display font-bold tracking-tight uppercase"
          style={{ color: ink ? INK : "#FFFFFF" }}
        >
          {repeatedText}
        </span>
        <span
          className="text-4xl md:text-6xl font-display font-bold tracking-tight uppercase ml-8"
          style={{ color: ink ? INK : "#FFFFFF" }}
        >
          {repeatedText}
        </span>
      </motion.div>
    </div>
  )
}

export default function ProjectPageLayout({ data }: Props) {
  const { language } = useLanguage()
  const rm = useReducedMotion()

  const tr = {
    en: {
      back: data.labelBack || "Back to Home",
      caseStudy: "Case study",
      theStory: "The story",
      stack: "Tech stack",
      capabilities: "What this covers",
      visit: "Live demo",
      code: "Source code",
      allProjects: "All projects",
      built: "Built with Next.js, Tailwind & framer-motion",
      rights: "All rights reserved.",
    },
    es: {
      back: data.labelBack || "Volver al Inicio",
      caseStudy: "Estudio de caso",
      theStory: "La historia",
      stack: "Stack técnico",
      capabilities: "Qué cubre",
      visit: "Demo en vivo",
      code: "Código fuente",
      allProjects: "Todos los proyectos",
      built: "Hecho con Next.js, Tailwind y framer-motion",
      rights: "Todos los derechos reservados.",
    },
  }[language]

  const allImages = data.images && data.images.length > 0 ? data.images : [data.heroImage, data.detailImage]
  const getImage = (index: number) => allImages[index % allImages.length]
  const marquee = data.marqueeText || `${data.title} \u2717 ${data.category}`

  const sections: { meta: ProjectSection; n: string }[] = [
    { meta: data.challenge, n: language === "es" ? "01" : "01" },
    { meta: data.approach, n: "02" },
    { meta: data.outcome, n: "03" },
  ]

  return (
    <>
      <Navbar overlay="light" />

      <main>
        {/* ── Whole-page gradient: Atlantic blue → amber → sand ── */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(180deg, #1B5E99 0%, #3A8CC4 24%, #D4831A 50%, #F0A83B 72%, #FBE8C5 100%)",
          }}
        />

        {/* ── Hero (blue zone) ── */}
        <section
          className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, #1B5E99 0%, #3A8CC4 100%), radial-gradient(120% 60% at 100% 0%, rgba(255,255,255,0.10) 0%, transparent 60%)",
            backgroundBlendMode: "overlay, normal",
          }}
        >
          <div className="mx-auto max-w-5xl px-6 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-10 md:mb-16"
            >
              <Link
                href="/"
                className="group inline-flex items-center gap-2.5 text-sm font-medium text-white/70 hover:text-white"
              >
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                {tr.back}
              </Link>
            </motion.div>

            <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16 lg:items-center">
              <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}>
                <div className="inline-flex items-center gap-3 mb-6">
                  <span className="h-2 w-2 rounded-full" style={{ background: data.accentColor }} />
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
                    {tr.caseStudy}
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-[1.05] mb-6 text-white">
                  {data.tagline.split("||").map((part, i) =>
                    i % 2 === 1 ? (
                      <span
                        key={i}
                        className="relative inline-block text-[#FBE8C5]"
                        style={{
                          textDecoration: "underline",
                          textDecorationColor: "#F0A83B",
                          textDecorationThickness: "0.08em",
                          textUnderlineOffset: "0.12em",
                        }}
                      >
                        {part}
                      </span>
                    ) : (
                      <span key={i}>{part}</span>
                    )
                  )}
                </h1>

                {data.altTagline && (
                  <p className="text-lg md:text-xl font-display italic text-white/60 max-w-xl mb-8">
                    {data.altTagline}
                  </p>
                )}

                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-mono text-white/80">
                  <span>{data.year}</span>
                  <span className="h-3 w-px bg-white/30" />
                  <span>{data.role}</span>
                  <span className="h-3 w-px bg-white/30" />
                  <span className="text-[#FBE8C5]">{data.category}</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="lg:pl-6"
              >
                <AdaptiveImage
                  src={getImage(0)}
                  alt={`${data.title} preview`}
                  priority
                  className="rounded-[2rem]"
                  minHeight="18rem"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Curved marquee over the amber transition ── */}
        <div className="relative overflow-x-clip">
          <div className="relative text-[#2B3E4C] overflow-visible">
            <Marquee text={marquee} ink />
          </div>
        </div>

        {/* ── Description (amber → sand body) ── */}
        <section className="relative py-16 md:py-24 px-6 md:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-start gap-8 md:gap-12"
            >
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex-shrink-0">
                <ArrowRight className="w-14 h-14 md:w-16 md:h-16" color={INK} strokeWidth={1.2} />
              </motion.div>

              <div className="flex-1">
                <motion.h2
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={0}
                  variants={fadeUp}
                  className="text-2xl md:text-4xl font-display font-semibold leading-snug"
                  style={{ color: INK }}
                >
                  {data.description.split(".")[0]}.{" "}
                  <span
                    className="text-[#333028]"
                    style={{
                      textDecoration: "underline",
                      textDecorationColor: "#D4831A",
                      textDecorationThickness: "3px",
                      textUnderlineOffset: "5px",
                    }}
                  >
                    {data.description.split(".")[1]?.trim() || "Built to impress"}
                  </span>
                  .
                </motion.h2>

                <div className="mt-10">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-8 flex items-center gap-3"
                  >
                    <span className="w-8 h-px" style={{ background: "#D4831A" }} />
                    <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#D4831A" }}>
                      {tr.theStory}
                    </span>
                  </motion.div>

                  <div className="grid gap-6 md:grid-cols-3 md:gap-5">
                    {sections.map((block, i) => (
                      <motion.article
                        key={block.meta.heading}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        custom={i}
                        variants={fadeUp}
                        className="rounded-2xl p-6 md:p-7"
                        style={{ background: "rgba(251,232,197,0.45)", backdropFilter: "blur(4px)" }}
                      >
                        <p className="text-[11px] font-mono font-semibold mb-4" style={{ color: "#1B5E99" }}>
                          {block.n}
                        </p>
                        <h3 className="text-xl font-display font-semibold tracking-tight mb-2.5" style={{ color: INK }}>
                          {block.meta.heading}
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: "#3c3a34" }}>
                          {block.meta.body}
                        </p>
                      </motion.article>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Asymmetric images ── */}
        <section className="py-14 md:py-20 px-6 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-start justify-center gap-10 md:gap-14">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="md:-mt-16 w-full md:w-80"
              >
                <AdaptiveImage src={getImage(1)} alt={`${data.title} detail`} minHeight="20rem" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12, duration: 0.7 }}
                viewport={{ once: true }}
                className="md:mt-24 w-full md:w-80"
              >
                <AdaptiveImage src={getImage(2)} alt={`${data.title} detail`} minHeight="20rem" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Capabilities + stack (sand zone) ── */}
        <section className="py-14 md:py-20 px-6 md:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-8 flex items-center gap-3"
            >
              <span className="w-8 h-px" style={{ background: "#D4831A" }} />
              <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#D4831A" }}>
                {tr.stack}
              </span>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
              className="flex flex-wrap gap-2.5 mb-14"
            >
              {data.tech.map((t) => (
                <span
                  key={t.label}
                  className="px-4 py-2 rounded-full text-sm font-semibold"
                  style={{
                    background: "rgba(43,62,76,0.10)",
                    color: INK,
                    border: "1px solid rgba(43,62,76,0.15)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  {t.label}
                </span>
              ))}
            </motion.div>

            {data.services && data.services.length > 0 && (
              <div className="mt-12">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="mb-8 flex items-center gap-3"
                >
                  <span className="w-8 h-px" style={{ background: "#D4831A" }} />
                  <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#D4831A" }}>
                    {tr.capabilities}
                  </span>
                </motion.div>

                <div className="grid gap-x-14 gap-y-10 md:grid-cols-2">
                  {data.services.map((service, idx) => (
                    <motion.div
                      key={service.title}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={idx}
                      variants={fadeUp}
                    >
                      <h3 className="text-lg font-display font-semibold mb-3" style={{ color: INK }}>
                        {service.title}
                      </h3>
                      <ul className="space-y-1.5">
                        {service.items.map((item) => (
                          <li key={item} className="text-sm flex items-center gap-2.5" style={{ color: "#3c3a34" }}>
                            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#D4831A" }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 md:py-24 px-6 md:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row items-center justify-center gap-4 rounded-[2.5rem] p-10 md:p-14"
            >
              <a
                href={data.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold text-sm text-white shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                style={{ background: INK }}
              >
                {tr.visit}
                <ExternalLink className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href={data.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 border-2"
                style={{ borderColor: INK, color: INK }}
              >
                <Github className="h-4 w-4" />
                {tr.code}
              </a>
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 text-sm font-medium transition-colors"
                style={{ color: INK }}
              >
                <ArrowUpRight className="h-4 w-4 -rotate-45 transition-transform group-hover:translate-x-0.5" />
                {tr.allProjects}
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── Footer bar (cleaned) ── */}
        <footer className="bg-[#2B3E4C] text-white/60 py-6 px-6 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Matteo Daniele · <span className="text-white/80">{data.title}</span>
          </p>
          <p className="text-xs mt-1 text-white/40">{tr.built}</p>
        </footer>
      </main>
    </>
  )
}