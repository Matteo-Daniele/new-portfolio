"use client"

import Navbar from "@/components/navbar"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Tech {
  label: string
}

interface ProjectSection {
  heading: string
  body: string
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
}

interface Props {
  data: ProjectPageData
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
}

export default function ProjectPageLayout({ data }: Props) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FBE8C5] text-[#2B3E4C]">

        {/* ── Hero ── */}
        <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-16 px-6 md:px-14 lg:px-24 overflow-hidden">

          {/* Top row: back link + meta */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="flex items-center justify-between"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.25em] uppercase text-[#2B3E4C]/50 hover:text-[#2B3E4C] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              {data.labelBack}
            </Link>
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#2B3E4C]/40">
              {data.year}
            </span>
          </motion.div>

          {/* Giant title */}
          <div className="mt-12">
            <motion.p
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeUp}
              className="text-[11px] font-bold tracking-[0.3em] uppercase mb-5"
              style={{ color: data.accentColor }}
            >
              {data.category}
            </motion.p>

            <motion.h1
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeUp}
              className="font-display font-black text-[clamp(3.5rem,11vw,10rem)] leading-[0.9] tracking-tighter text-[#2B3E4C] text-balance mb-10"
            >
              {data.title}
            </motion.h1>

            {/* Underlined tagline — reference style */}
            <motion.p
              initial="hidden"
              animate="visible"
              custom={3}
              variants={fadeUp}
              className="text-2xl md:text-4xl font-bold leading-snug max-w-3xl text-[#2B3E4C]"
            >
              {data.tagline.split("||").map((part, i) =>
                i % 2 === 1 ? (
                  <span
                    key={i}
                    className="relative inline"
                    style={{
                      textDecoration: "underline",
                      textDecorationColor: data.accentColor,
                      textDecorationThickness: "3px",
                      textUnderlineOffset: "6px",
                    }}
                  >
                    {part}
                  </span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </motion.p>
          </div>

          {/* Bottom row: CTA buttons + role */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={4}
            variants={fadeUp}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-14"
          >
            <div className="flex flex-wrap gap-4">
              <a
                href={data.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-[11px] font-black uppercase tracking-[0.2em] bg-[#2B3E4C] text-[#FBE8C5] hover:scale-[1.03] transition-transform"
              >
                <ExternalLink className="w-4 h-4" />
                {data.labelVisit}
              </a>
              <a
                href={data.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-[11px] font-black uppercase tracking-[0.2em] border border-[#2B3E4C]/25 text-[#2B3E4C] hover:bg-[#2B3E4C]/6 transition-colors"
              >
                <Github className="w-4 h-4" />
                {data.labelCode}
              </a>
            </div>
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#2B3E4C]/40">
              {data.role}
            </p>
          </motion.div>

          {/* Decorative arrow — reference style */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="absolute bottom-20 right-14 hidden lg:block"
          >
            <ArrowRight className="w-16 h-16 text-[#2B3E4C]/10" strokeWidth={1} />
          </motion.div>
        </section>

        {/* ── Full-bleed hero image ── */}
        <motion.section
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="px-6 md:px-14 lg:px-24 mb-2"
        >
          <div className="relative w-full aspect-[16/8] rounded-2xl overflow-hidden bg-[#2B3E4C]/8">
            <Image
              src={data.heroImage}
              alt={`${data.title} preview`}
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.section>

        {/* ── Description strip — reference arrow + two-col style ── */}
        <section className="px-6 md:px-14 lg:px-24 py-20 flex flex-col md:flex-row md:items-start gap-10 md:gap-20 border-b border-[#2B3E4C]/10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="flex-shrink-0"
          >
            <ArrowRight
              className="w-12 h-12 mt-1"
              strokeWidth={1.5}
              style={{ color: data.accentColor }}
            />
          </motion.div>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            className="text-2xl md:text-3xl font-bold leading-snug text-[#2B3E4C] max-w-2xl"
          >
            {data.description}
          </motion.p>
        </section>

        {/* ── Case study: 3 sections in two-col grid ── */}
        <section className="px-6 md:px-14 lg:px-24 py-20">
          <div className="grid md:grid-cols-3 gap-px bg-[#2B3E4C]/10">
            {[data.challenge, data.approach, data.outcome].map((section, i) => (
              <motion.div
                key={section.heading}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="bg-[#FBE8C5] p-10"
              >
                <span
                  className="block text-[10px] font-black tracking-[0.3em] uppercase mb-5"
                  style={{ color: data.accentColor }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display font-bold text-xl mb-4 text-[#2B3E4C]">
                  {section.heading}
                </h3>
                <p className="text-[#2B3E4C]/70 leading-relaxed text-sm">
                  {section.body}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Detail image + tech stack ── */}
        <section className="px-6 md:px-14 lg:px-24 pb-24 grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#2B3E4C]/8"
          >
            <Image
              src={data.detailImage}
              alt={`${data.title} detail`}
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="flex flex-col justify-center gap-6 pt-4"
          >
            <p
              className="text-[11px] font-black tracking-[0.3em] uppercase"
              style={{ color: data.accentColor }}
            >
              Stack
            </p>
            <ul className="flex flex-col divide-y divide-[#2B3E4C]/10">
              {data.tech.map((t, i) => (
                <motion.li
                  key={t.label}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between py-4 text-sm font-semibold text-[#2B3E4C]"
                >
                  {t.label}
                  <ArrowRight className="w-4 h-4 text-[#2B3E4C]/20" />
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </section>

        {/* ── Footer CTA ── */}
        <section
          className="mx-6 md:mx-14 lg:mx-24 mb-24 rounded-2xl px-10 py-16 flex flex-col md:flex-row items-center justify-between gap-8"
          style={{ backgroundColor: "#2B3E4C" }}
        >
          <h2 className="font-display font-black text-3xl md:text-5xl text-[#FBE8C5] leading-tight text-balance max-w-md">
            Ready to see it{" "}
            <span
              style={{
                textDecoration: "underline",
                textDecorationColor: data.accentColor,
                textDecorationThickness: "3px",
                textUnderlineOffset: "6px",
              }}
            >
              live?
            </span>
          </h2>
          <div className="flex flex-wrap gap-4">
            <a
              href={data.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-[11px] font-black uppercase tracking-[0.2em] text-[#2B3E4C] hover:scale-[1.03] transition-transform"
              style={{ backgroundColor: data.accentColor === "#D4831A" ? "#F0A83B" : "#3A8CC4" }}
            >
              <ExternalLink className="w-4 h-4" />
              {data.labelVisit}
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-[11px] font-black uppercase tracking-[0.2em] border border-[#FBE8C5]/25 text-[#FBE8C5] hover:bg-[#FBE8C5]/10 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {data.labelBack}
            </Link>
          </div>
        </section>

      </main>
    </>
  )
}
