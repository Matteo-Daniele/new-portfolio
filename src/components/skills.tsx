"use client"
import { motion, useReducedMotion } from "framer-motion"
import { Layers } from "lucide-react"
import { useState, useEffect } from "react"
import { useLanguage } from "./language-provider"

type Cat = "technology" | "framework" | "tool"
type Skill = { name: string; category: Cat; years: number | null; learning?: boolean }

const SKILLS: Skill[] = [
  { name: "C", category: "technology", years: 2 },
  { name: "Java", category: "technology", years: 2 },
  { name: "HTML", category: "technology", years: 3 },
  { name: "CSS", category: "technology", years: 3 },
  { name: "JavaScript", category: "technology", years: 3 },
  { name: "TypeScript", category: "technology", years: 1.5 },
  { name: "SQL", category: "technology", years: 1 },
  { name: "React.js", category: "framework", years: 2 },
  { name: "Next.js", category: "framework", years: 2 },
  { name: "Angular", category: "framework", years: 2 },
  { name: "Tailwind", category: "framework", years: 2 },
  { name: "Node.js", category: "framework", years: 1 },
  { name: "Nest.js", category: "framework", years: 1 },
  { name: "Git", category: "tool", years: 4 },
  { name: "Jira", category: "tool", years: 2 },
  { name: "MySQL", category: "tool", years: 2 },
  { name: "MongoDB", category: "tool", years: 2 },
  { name: "Docker", category: "tool", years: 1 },
  { name: "Postman", category: "tool", years: 2 },
  { name: "API", category: "tool", years: 2 },
  { name: "AWS", category: "tool", years: null, learning: true },
  { name: "n8n", category: "tool", years: 1 },
]

type Theme = {
  label: { en: string; es: string }
  leatherA: string; leatherB: string; leatherC: string
  pocketA: string; pocketB: string
  stitch: string; stitchShadow: string
  cardFace: string; cardEdge: string
  cardText: string; cardMuted: string
  accent: string
}

const THEMES: Record<Cat, Theme> = {
  technology: {
    label: { en: "Technologies", es: "Tecnologías" },
    leatherA: "#5C5955", leatherB: "#46423E", leatherC: "#333028",
    pocketA: "#6A6660", pocketB: "#504C46",
    stitch: "rgba(255,255,255,0.13)", stitchShadow: "rgba(0,0,0,0.35)",
    cardFace: "#E8EDF0", cardEdge: "#CDD2D6",
    cardText: "#1A2430", cardMuted: "#5A6878",
    accent: "#6D8C8F",
  },
  framework: {
    label: { en: "Frameworks", es: "Frameworks" },
    leatherA: "#9A6B45", leatherB: "#7A5030", leatherC: "#5A3820",
    pocketA: "#A87850", pocketB: "#8A5E38",
    stitch: "rgba(255,255,255,0.10)", stitchShadow: "rgba(40,18,6,0.45)",
    cardFace: "#F0EAE0", cardEdge: "#D8CEBC",
    cardText: "#2C1E14", cardMuted: "#6E5540",
    accent: "#88623E",
  },
  tool: {
    label: { en: "Tools", es: "Herramientas" },
    leatherA: "#8A8268", leatherB: "#6E6850", leatherC: "#52503C",
    pocketA: "#98906E", pocketB: "#7E785C",
    stitch: "rgba(255,255,255,0.12)", stitchShadow: "rgba(35,30,18,0.40)",
    cardFace: "#F2F0E8", cardEdge: "#DCD8C8",
    cardText: "#2A2C1C", cardMuted: "#5C5E42",
    accent: "#BFB792",
  },
}

const CATS: Cat[] = ["technology", "framework", "tool"]

function tenure(s: Skill, lang: "en" | "es") {
  if (s.learning) return lang === "es" ? "Aprendiendo" : "Learning"
  const y = s.years
  if (!y || y <= 0) return ""
  if (lang === "es") return y < 1 ? `${Math.round(y * 12)}m` : `${y % 1 === 0 ? y : y.toFixed(1)} ${y === 1 ? "año" : "años"}`
  return y < 1 ? `${Math.round(y * 12)}mo` : `${y % 1 === 0 ? y : y.toFixed(1)} ${y === 1 ? "yr" : "yrs"}`
}

// ── Fixed dimensions — no layout shift ──
const W_W = 210
const W_H = 310
const CARD_W = 178
const CARD_H = 260
const POCKET_TOP = 78    // where pocket starts from wallet top
const PEEK_STEP = 26     // each card peeks this much above the previous

export default function Skills() {
  const { language } = useLanguage()
  const lang = language === "es" ? "es" : "en"
  const rm = useReducedMotion()
  const [open, setOpen] = useState<Cat | null>(null)

  const tr = {
    en: { label: "TECH STACK", title: "Skills in your pocket", sub: "Tap a wallet to peek inside." },
    es: { label: "STACK TÉCNICO", title: "Habilidades a mano", sub: "Toca un tarjetero para ver las tarjetas." },
  }[lang]

  useEffect(() => {
    if (!open) return
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(null) }
    window.addEventListener("keydown", fn)
    return () => window.removeEventListener("keydown", fn)
  }, [open])

  return (
    <section id="skills" className="relative py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-main)] via-[var(--bg-card)] to-[var(--bg-main)] pointer-events-none" />
      <div className="relative z-10 container mx-auto px-4 max-w-6xl">
        <header className="text-center max-w-xl mx-auto mb-20">
          <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-[var(--text-secondary)] font-semibold tracking-[0.22em] uppercase text-[10px] mb-3">{tr.label}</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="text-4xl md:text-5xl font-display font-bold tracking-tight text-[var(--text-primary)]">{tr.title}</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="text-[var(--text-primary)]/55 text-sm mt-4">{tr.sub}</motion.p>
        </header>

        {/* Fixed-height grid — no layout shift on open/close */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-6 justify-items-center"
          style={{ minHeight: W_H + 40 }}>
          {CATS.map(cat => (
            <Wallet3D key={cat} cat={cat} lang={lang} rm={!!rm}
              skills={SKILLS.filter(s => s.category === cat)}
              isOpen={open === cat}
              onToggle={() => setOpen(open === cat ? null : cat)} />
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6 pt-10 mt-14 border-t border-[var(--border-subtle)]/50">
          {CATS.map(cat => (
            <div key={cat} className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: THEMES[cat].accent }} />
              <span className="text-xs text-[var(--text-primary)]/55">{THEMES[cat].label[lang]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   3D Wallet with cards inside — overflow visible, no layout shift
   ═══════════════════════════════════════════════════════════════ */
function Wallet3D({ cat, lang, rm, skills, isOpen, onToggle }: {
  cat: Cat; lang: "en" | "es"; rm: boolean; skills: Skill[]
  isOpen: boolean; onToggle: () => void
}) {
  const theme = THEMES[cat]
  const N = skills.length
  const [selected, setSelected] = useState<number | null>(null)

  // Reset selection when wallet closes
  useEffect(() => { if (!isOpen) setSelected(null) }, [isOpen])

  // How far a selected card pulls out (reveals full card)
  const PULL_OUT = 160

  return (
    /* Fixed-size container — overflow visible so cards peek above */
    <div className="relative" style={{ width: W_W, height: W_H, perspective: 1200 }}>
      {/* 3D tilt wrapper */}
      <motion.div
        className="relative w-full h-full origin-center"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateX: 8, rotateY: isOpen ? -6 : -14, rotateZ: isOpen ? 0 : 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 24 }}
      >
        {/* ═══ BACK SHELL — full visible, rounded, leather ═══ */}
        <div className="absolute inset-0 rounded-[26px]"
          style={{
            background: `linear-gradient(175deg, ${theme.leatherA} 0%, ${theme.leatherB} 55%, ${theme.leatherC} 100%)`,
            boxShadow: [
              "0 28px 64px rgba(0,0,0,0.35)",
              "0 10px 24px rgba(0,0,0,0.25)",
              "inset 0 2px 0 rgba(255,255,255,0.1)",
              "inset 0 -3px 0 rgba(0,0,0,0.2)",
              "inset 0 16px 36px rgba(0,0,0,0.06)",
              "inset 0 -22px 40px rgba(0,0,0,0.1)",
            ].join(", "),
            transformStyle: "preserve-3d",
            transform: "translateZ(0px)",
          }}
        >
          {/* Leather grain texture */}
          <div className="absolute inset-0 rounded-[26px] opacity-[0.045] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.78' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundSize: "128px",
            }} />

          {/* Full outer stitching */}
          <div className="absolute pointer-events-none" style={{
            top: 7, left: 7, right: 7, bottom: 7,
            border: `1.5px dashed ${theme.stitch}`,
            borderRadius: 20,
            filter: `drop-shadow(0 1px 0 ${theme.stitchShadow})`,
          }} />

          {/* Top rim highlight */}
          <div className="absolute top-0 left-6 right-6 h-[1px] rounded-full"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)" }} />

          {/* Side rim highlights */}
          <div className="absolute left-0 top-6 bottom-6 w-[1px]"
            style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.07), transparent 40%, transparent 60%, rgba(255,255,255,0.04))" }} />
          <div className="absolute right-0 top-6 bottom-6 w-[1px]"
            style={{ background: "linear-gradient(180deg, transparent, rgba(0,0,0,0.1), transparent)" }} />
        </div>

        {/* Backdrop — closes selected card when clicking anywhere outside */}
        {selected !== null && (
          <div
            className="fixed inset-0 z-[1] cursor-pointer"
            onClick={() => setSelected(null)}
          />
        )}

        {/* ═══ CARDS — inside the wallet, z between back and pocket ═══ */}
        {skills.map((skill, i) => {
          const reverseI = N - 1 - i
          const isSel = selected === i
          const peekPx = isOpen ? (reverseI + 1) * PEEK_STEP : 0
          const extraPull = isSel ? PULL_OUT : 0
          const cardTop = POCKET_TOP - 14 - peekPx - extraPull

          return (
            <motion.div
              key={skill.name}
              className="absolute rounded-lg"
              style={{
                width: CARD_W, height: CARD_H,
                left: (W_W - CARD_W) / 2,
                zIndex: isSel ? N + 8 : i + 2,
                transform: "translateZ(1px)",
                transformStyle: "preserve-3d",
                // Selected card: full body clickable to close it
                // No card selected: pointer-events none (peek strip handles clicks)
                // Another card selected: fully disabled
                pointerEvents: isSel ? "auto" : "none",
                cursor: isSel ? "pointer" : "default",
              }}
              animate={{ top: cardTop }}
              initial={{ top: POCKET_TOP - 14 }}
              transition={{
                type: "spring", stiffness: 220, damping: 24, mass: 0.85,
                delay: rm ? 0 : (isSel ? 0 : isOpen ? reverseI * 0.04 : i * 0.025),
              }}
              onClick={isSel ? (e: React.MouseEvent) => {
                e.stopPropagation()
                setSelected(null)
              } : undefined}
            >
              {/* Clickable peek strip — only active when NO card is selected */}
              {isOpen && selected === null && (
                <div
                  className="absolute top-0 left-0 right-0 cursor-pointer"
                  style={{ height: PEEK_STEP + 4, pointerEvents: "auto", zIndex: 20 }}
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelected(i)
                  }}
                />
              )}
              {/* Card face */}
              <div className="absolute inset-0 rounded-lg overflow-hidden"
                style={{
                  background: `linear-gradient(172deg, ${theme.cardFace} 0%, ${theme.cardEdge} 100%)`,
                  boxShadow: isSel
                    ? [
                      "0 12px 32px rgba(0,0,0,0.25)",
                      "0 4px 10px rgba(0,0,0,0.15)",
                      "inset 0 1px 0 rgba(255,255,255,0.7)",
                    ].join(", ")
                    : [
                      "0 2px 6px rgba(0,0,0,0.12)",
                      "0 1px 2px rgba(0,0,0,0.08)",
                      "inset 0 1px 0 rgba(255,255,255,0.7)",
                    ].join(", "),
                }}
              >
                {/* ── Top strip: name + years (always visible when peeking) ── */}
                <div className="absolute top-0 left-0 right-0 px-3.5 pt-2.5 pb-1.5">
                  <div className="text-[11px] font-bold tracking-tight leading-tight truncate"
                    style={{ color: "#111111" }}>
                    {skill.name}
                  </div>
                  <div className="text-[9px] font-semibold mt-[2px]" style={{ color: "#444444" }}>
                    {tenure(skill, lang)}
                  </div>
                </div>

                {/* Contactless icon */}
                <div className="absolute top-2.5 right-3 opacity-20">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M8.5 16.5a5 5 0 0 1 0-9" />
                    <path d="M12 19a8 8 0 0 1 0-14" />
                  </svg>
                </div>

                {/* ── Full card content (visible when pulled out) ── */}

                {/* EMV Chip */}
                <div className="absolute left-4" style={{
                  top: 44, width: 38, height: 28, borderRadius: 5,
                  background: "linear-gradient(135deg, #E8D5A3 0%, #C9A855 50%, #8B7340 100%)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.5), 0 1px 3px rgba(0,0,0,0.2)",
                }}>
                  <div className="absolute inset-[4px] flex flex-col justify-between opacity-20">
                    {[0, 1, 2].map(r => <div key={r} className="h-[1.5px] rounded-sm bg-amber-900" />)}
                  </div>
                </div>

                {/* Category accent bar */}
                <div className="absolute left-4 right-4" style={{
                  top: 84, height: 3, borderRadius: 2,
                  background: theme.accent, opacity: 0.45,
                }} />

                {/* Card number dots */}
                <div className="absolute left-4 flex items-center gap-2.5" style={{ top: 100 }}>
                  {[0, 1, 2, 3].map(g => (
                    <div key={g} className="flex items-center gap-[2.5px]">
                      {[0, 1, 2, 3].map(d => (
                        <div key={d} className="w-[3.5px] h-[3.5px] rounded-full bg-black/20" />
                      ))}
                    </div>
                  ))}
                </div>

                {/* Big name + tenure label */}
                <div className="absolute bottom-5 left-4 right-4">
                  <div className="text-[8px] font-semibold uppercase tracking-[0.2em] mb-1" style={{ color: "#666" }}>
                    {skill.learning
                      ? (lang === "es" ? "En aprendizaje" : "Currently learning")
                      : (lang === "es" ? "Tiempo de uso" : "Experience")}
                  </div>
                  <div className="text-[18px] font-bold tracking-tight leading-none" style={{ color: "#111" }}>
                    {skill.name}
                  </div>
                  <div className="text-[11px] font-semibold mt-1" style={{ color: "#333" }}>
                    {tenure(skill, lang)}
                  </div>
                </div>

                {/* Learning badge */}
                {skill.learning && (
                  <div className="absolute right-4 rounded-full px-2 py-[2px] text-[8px] font-bold uppercase tracking-wider"
                    style={{ top: 46, background: "rgba(0,0,0,0.08)", color: "#555" }}>
                    {lang === "es" ? "Nuevo" : "New"}
                  </div>
                )}
              </div>
            </motion.div>
          )
        })}

        {/* ═══ FRONT POCKET — on top of cards, covers them ═══ */}
        <div className="absolute left-[5px] right-[5px] bottom-[5px] rounded-b-[23px] rounded-t-lg"
          style={{
            top: POCKET_TOP,
            background: `linear-gradient(178deg, ${theme.pocketA} 0%, ${theme.pocketB} 100%)`,
            boxShadow: [
              "inset 0 6px 20px rgba(0,0,0,0.22)",
              "inset 0 -5px 16px rgba(255,255,255,0.03)",
              "inset 2px 0 4px rgba(0,0,0,0.08)",
              "inset -2px 0 4px rgba(0,0,0,0.08)",
              "0 -4px 10px rgba(0,0,0,0.14)",
            ].join(", "),
            clipPath: "polygon(0% 16px, 24% 16px, 33% 5px, 50% 3px, 67% 5px, 76% 16px, 100% 16px, 100% 100%, 0% 100%)",
            zIndex: N + 10,
            transform: "translateZ(2px)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Thumb groove */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[42%] h-4"
            style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.28), transparent)", borderRadius: "0 0 40px 40px" }} />

          {/* Leather grain on pocket */}
          <div className="absolute inset-0 rounded-b-[23px] opacity-[0.04] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.78' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundSize: "128px",
            }} />

          {/* Inner stitching */}
          <div className="absolute pointer-events-none" style={{
            top: 22, left: 7, right: 7, bottom: 7,
            border: `1px dashed ${theme.stitch}`,
            borderRadius: 16, opacity: 0.6,
            filter: `drop-shadow(0 1px 0 ${theme.stitchShadow})`,
          }} />

          {/* Debossed label */}
          <div className="absolute inset-x-0 flex flex-col items-center" style={{ top: "38%" }}>
            <Layers className="h-4 w-4 mb-1" style={{
              color: "#1a1a1a", opacity: 0.55,
              filter: "drop-shadow(0 1px 0 rgba(255,255,255,0.08))",
            }} />
            <div className="text-[9px] font-bold tracking-[0.16em] uppercase"
              style={{
                color: "#1a1a1a", opacity: 0.6,
                textShadow: "0 1px 0 rgba(255,255,255,0.06)"
              }}>
              {theme.label[lang]}
            </div>
            <div className="text-[8px] mt-0.5 font-medium tracking-wide"
              style={{ color: "#1a1a1a", opacity: 0.5 }}>
              {N} skills
            </div>
          </div>
        </div>
      </motion.div>

      {/* Click target — when open, only covers the pocket so cards above are clickable */}
      <button
        type="button"
        onClick={onToggle}
        aria-pressed={isOpen}
        aria-label={`${theme.label[lang]} — ${N} skills`}
        className="absolute left-0 right-0 z-50 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-b-[26px]"
        style={{
          top: isOpen ? POCKET_TOP : 0,
          bottom: 0,
          borderTopLeftRadius: isOpen ? 0 : 26,
          borderTopRightRadius: isOpen ? 0 : 26,
          WebkitTapHighlightColor: "transparent",
        }}
      />

      {/* Contact shadow */}
      <div className="absolute -bottom-4 left-[12%] right-[12%] h-6 rounded-full opacity-25 blur-xl pointer-events-none"
        style={{ background: THEMES[cat].leatherC }} />
    </div>
  )
}
