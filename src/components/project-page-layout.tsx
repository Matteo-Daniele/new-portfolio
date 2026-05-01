"use client"

import Navbar from "@/components/navbar"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

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
  challenge: ProjectSection
  approach: ProjectSection
  outcome: ProjectSection
  heroImage: string
  detailImage: string
  demoUrl: string
  repoUrl: string
  tech: Tech[]
  accentColor: string
  labelBack: string
  labelVisit: string
  labelCode: string
  marqueeText?: string
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
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

// Curved text marquee component
function CurvedMarquee({ text, speed = 20 }: { text: string; speed?: number }) {
  const repeatedText = Array(6).fill(text).join(" ✻ ")
  
  return (
    <div className="relative w-full overflow-hidden py-8">
      {/* SVG path for the curve */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <defs>
          <path
            id="curvePath"
            d="M 0,80 Q 300,20 600,60 T 1200,40"
            fill="none"
          />
        </defs>
      </svg>
      
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [0, -2000] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
        style={{
          transform: "rotate(-2deg)",
        }}
      >
        <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2B3E4C]/90 tracking-tight">
          {repeatedText}
        </span>
        <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2B3E4C]/90 tracking-tight ml-8">
          {repeatedText}
        </span>
      </motion.div>
    </div>
  )
}

export default function ProjectPageLayout({ data }: Props) {
  const marqueeText = data.marqueeText || `We help you realize your potential`
  
  const defaultServices: ServiceCategory[] = data.services || [
    {
      title: "General Design",
      items: ["Product design", "Brand design", "UI design"],
    },
    {
      title: "Data & Analytics",
      items: ["Performance reporting", "Market data sharing", "Conversion optimization"],
    },
    {
      title: "SEO Optimization",
      items: ["Technical optimization", "Content optimization", "Keyword research"],
    },
    {
      title: "Digital Advertising",
      items: ["Social media", "Optimization and reporting"],
    },
  ]

  return (
    <>
      <Navbar />
      <main 
        className="min-h-screen text-[#2B3E4C]"
        style={{
          background: "linear-gradient(180deg, #1B5E99 0%, #3A8CC4 20%, #D4831A 50%, #F0A83B 75%, #FBE8C5 100%)",
        }}
      >

        {/* ── Hero Section ── */}
        <section className="relative pt-32 pb-16 px-6 md:px-14 lg:px-24">
          
          {/* Main headline with yellow underline */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="max-w-4xl mx-auto"
          >
            <h1 className="font-sans text-3xl md:text-5xl lg:text-6xl font-medium leading-tight text-[#2B3E4C]">
              {data.tagline.split("||").map((part, i) =>
                i % 2 === 1 ? (
                  <span
                    key={i}
                    className="relative inline"
                    style={{
                      textDecoration: "underline",
                      textDecorationColor: "#F0A83B",
                      textDecorationThickness: "4px",
                      textUnderlineOffset: "8px",
                    }}
                  >
                    {part}
                  </span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </h1>
          </motion.div>

          {/* Hero image - pill shaped with rounded corners */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 max-w-3xl mx-auto"
          >
            <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src={data.heroImage}
                alt={`${data.title} preview`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </section>

        {/* ── Asymmetric Images Section ── */}
        <section className="px-6 md:px-14 lg:px-24 py-16">
          <div className="flex flex-col md:flex-row items-start justify-center gap-8 md:gap-16">
            
            {/* Left image - offset up */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="md:-mt-20"
            >
              <div className="relative w-64 md:w-80 aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-xl">
                <Image
                  src={data.heroImage}
                  alt="Project detail 1"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-sm font-medium text-[#2B3E4C]/80 max-w-[250px]">
                {data.challenge.body.slice(0, 80)}...
              </p>
            </motion.div>

            {/* Right image - offset down */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="md:mt-20"
            >
              <div className="relative w-64 md:w-80 aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-xl">
                <Image
                  src={data.detailImage}
                  alt="Project detail 2"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-sm font-medium text-[#2B3E4C]/80 max-w-[250px]">
                {data.approach.body.slice(0, 80)}...
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Curved Text Marquee ── */}
        <section className="py-8 overflow-hidden">
          <CurvedMarquee text={marqueeText} speed={25} />
        </section>

        {/* ── Description with Arrow ── */}
        <section className="px-6 md:px-14 lg:px-24 py-20">
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16 max-w-5xl mx-auto">
            
            {/* Arrow icon */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-shrink-0"
            >
              <ArrowRight className="w-16 h-16 text-[#2B3E4C]/70" strokeWidth={1} />
            </motion.div>

            {/* Text content */}
            <div className="flex-1">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0}
                variants={fadeUp}
                className="text-2xl md:text-4xl font-medium leading-snug text-[#2B3E4C] mb-6"
              >
                {data.description.split(".")[0]}.{" "}
                <span
                  style={{
                    textDecoration: "underline",
                    textDecorationColor: "#F0A83B",
                    textDecorationThickness: "3px",
                    textUnderlineOffset: "6px",
                  }}
                >
                  {data.description.split(".")[1]?.trim() || "Built to impress"}
                </span>
                .
              </motion.h2>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                variants={fadeUp}
                className="grid md:grid-cols-2 gap-6 mt-8"
              >
                <p className="text-sm text-[#2B3E4C]/70 leading-relaxed">
                  {data.challenge.body}
                </p>
                <p className="text-sm text-[#2B3E4C]/70 leading-relaxed">
                  {data.approach.body}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-6"
              >
                <Link
                  href={data.demoUrl}
                  className="text-sm font-medium text-[#2B3E4C] underline underline-offset-4 hover:opacity-70 transition-opacity"
                >
                  Learn about how we work &rarr;
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Services / Tech Stack Section ── */}
        <section className="px-6 md:px-14 lg:px-24 py-20">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20 max-w-6xl mx-auto">
            
            {/* Left: Title with highlight */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-5xl font-medium leading-tight text-[#2B3E4C]">
                {"We're obsessed with"}<br />
                {"helping you reach your"}<br />
                <span 
                  className="inline-block px-2 py-1 mt-2"
                  style={{ backgroundColor: "#F0A83B" }}
                >
                  full potential
                </span>
                .
              </h2>

              {/* Services grid */}
              <div className="grid grid-cols-2 gap-8 mt-12">
                {defaultServices.map((service, idx) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-sm font-bold text-[#2B3E4C] mb-2">{service.title}</h3>
                    <ul className="space-y-1">
                      {service.items.map((item) => (
                        <li key={item} className="text-xs text-[#2B3E4C]/60">{item}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-xl">
                <Image
                  src={data.detailImage}
                  alt={`${data.title} showcase`}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Tech Stack Pills ── */}
        <section className="px-6 md:px-14 lg:px-24 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {data.tech.map((t, i) => (
              <motion.span
                key={t.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="px-5 py-2.5 rounded-full text-sm font-medium bg-[#2B3E4C]/10 text-[#2B3E4C] backdrop-blur-sm"
              >
                {t.label}
              </motion.span>
            ))}
          </motion.div>
        </section>

        {/* ── CTA Section ── */}
        <section className="px-6 md:px-14 lg:px-24 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <a
              href={data.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold bg-[#2B3E4C] text-white hover:scale-105 transition-transform shadow-lg"
            >
              <ExternalLink className="w-4 h-4" />
              {data.labelVisit}
            </a>
            <a
              href={data.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold border-2 border-[#2B3E4C]/30 text-[#2B3E4C] hover:bg-[#2B3E4C]/10 transition-colors"
            >
              <Github className="w-4 h-4" />
              {data.labelCode}
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#2B3E4C]/70 hover:text-[#2B3E4C] transition-colors"
            >
              &larr; {data.labelBack}
            </Link>
          </motion.div>
        </section>

        {/* ── Footer Bar ── */}
        <footer className="bg-[#2B3E4C] text-white/60 py-4 px-6 text-center text-xs">
          <p>
            Your rights remain in Tucson. Upgrade now to get the most out of your visit. 
            <span className="ml-2 px-2 py-1 bg-white/10 rounded text-white text-[10px]">Upgrade</span>
          </p>
        </footer>

      </main>
    </>
  )
}
