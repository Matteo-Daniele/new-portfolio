"use client"

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion"
import { Clock } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useLanguage } from "../components/language-provider"

export default function About() {
  const { language } = useLanguage()
  const [currentTime, setCurrentTime] = useState("")
  const [activeCard, setActiveCard] = useState(0)
  const [currentWord, setCurrentWord] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Track which card should be active
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(Math.floor(v * 4), 3)
    setActiveCard(idx)
  })

  const carouselWords = {
    en: ["learner", "team player", "problem solver", "curious", "self-driven"],
    es: ["aprendiz", "trabajador en equipo", "solucionador", "curioso", "autodidacta"]
  }
  const words = carouselWords[language]

  const translations = {
    en: {
      age: "Age",
      years: "years",
      basedIn: "Based in",
      education: "Education",
      graduatedFrom: "Graduated from",
      degree: "Associate Degree in Programming",
      aboutTitle: "I'm a",
      aboutMe: "About me",
      bio: "I'm a fullstack developer looking to find my first job in the software industry. Eager to learn and collaborate with talented people, I'm confident I can make a significant positive impact at the work environment. Available for remote and on-site jobs.",
    },
    es: {
      age: "Edad",
      years: "años",
      basedIn: "Ubicado en",
      education: "Educación",
      graduatedFrom: "Graduado de",
      degree: "Técnico Universitario en Programación",
      aboutTitle: "Soy un",
      aboutMe: "Sobre mí",
      bio: "Soy un desarrollador fullstack buscando encontrar mi primer trabajo en la industria del software. Ansioso por aprender y colaborar con personas talentosas, estoy seguro de que puedo generar un impacto positivo significativo en el entorno laboral. Disponible para trabajos remotos y presenciales.",
    },
  }

  const t = translations[language]
  const dateOfBirth = new Date("2003-12-12T08:00:00")
  const [age, setAge] = useState({ years: 0, months: 0, days: 0 })

  useEffect(() => {
    const calculateAge = () => {
      const now = new Date()
      let years = now.getFullYear() - dateOfBirth.getFullYear()
      let tempDate = new Date(dateOfBirth)
      tempDate.setFullYear(tempDate.getFullYear() + years)
      if (now < tempDate) { years--; }
      setAge({ years, months: 0, days: 0 })
    }
    calculateAge()
  }, [])

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const argentinaTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Argentina/Buenos_Aires" }))
      const hours = argentinaTime.getHours()
      const minutes = argentinaTime.getMinutes()
      const ampm = hours >= 12 ? "PM" : "AM"
      const formattedHours = hours % 12 || 12
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes
      setCurrentTime(`${formattedHours}:${formattedMinutes} ${ampm}`)
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => setCurrentWord((prev) => (prev + 1) % words.length), 2200)
    return () => clearInterval(interval)
  }, [words.length])

  const cards = [
    {
      label: t.age,
      heading: `${age.years}`,
      sub: t.years,
      detail: "12 / 12 / 2003",
    },
    {
      label: t.basedIn,
      heading: "Mar del Plata",
      sub: "Argentina",
      detail: currentTime,
      hasTime: true,
    },
    {
      label: t.education,
      heading: `${t.graduatedFrom} UTN`,
      sub: t.degree,
      detail: "2025",
    },
    {
      label: t.aboutMe,
      heading: "",
      sub: "",
      detail: "",
      bio: t.bio,
    },
  ]

  return (
    <section id="about" ref={containerRef} className="relative" style={{ height: "400vh" }}>
      <div className="sticky top-0 h-screen flex items-center justify-center">
        {/* Carousel — bottom left, subtle */}
        <div className="absolute bottom-8 left-6 md:left-12 z-20 flex items-center gap-1.5 text-[var(--text-muted)]/60">
          <span className="text-[11px] tracking-wide">{t.aboutTitle}</span>
          <span className="relative h-6 overflow-hidden inline-block" style={{ minWidth: "160px" }}>
            {words.map((word, idx) => (
              <span
                key={idx}
                className="absolute left-0 top-1 text-[11px] font-medium text-[var(--accent-warm)]/70 transition-all duration-500"
                style={{
                  opacity: currentWord === idx ? 1 : 0,
                  transform: currentWord === idx ? "translateY(0)" : "translateY(6px)",
                }}
              >
                {word}
              </span>
            ))}
          </span>
        </div>
        <div className="relative w-full max-w-3xl mx-auto px-6 text-center">
          {cards.map((card, i) => (
            <div
              key={i}
              className="absolute inset-0 flex flex-col items-center justify-center px-6 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                opacity: activeCard === i ? 1 : 0,
                transform: activeCard === i
                  ? "translateY(0) scale(1)"
                  : activeCard > i
                    ? "translateY(-40px) scale(0.97)"
                    : "translateY(40px) scale(0.97)",
                pointerEvents: activeCard === i ? "auto" : "none",
              }}
            >
              {/* Label */}
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[var(--text-muted)] mb-6">
                {card.label}
              </span>

              {card.bio ? (
                /* Bio card — just text */
                <p className="text-xl sm:text-2xl md:text-3xl leading-relaxed text-[var(--text-primary)] font-display font-medium max-w-xl">
                  {card.bio}
                </p>
              ) : (
                <>
                  {/* Big heading */}
                  <h3 className="text-5xl sm:text-7xl md:text-8xl font-display font-bold text-[var(--text-primary)] leading-none">
                    {card.heading}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-lg sm:text-xl text-[var(--text-secondary)] mt-3 font-light">
                    {card.sub}
                  </p>

                  {/* Detail */}
                  <div className="mt-6 flex items-center gap-2 text-[var(--text-muted)]">
                    {card.hasTime && <Clock className="h-3.5 w-3.5" />}
                    <span className="text-sm font-mono tabular-nums">{card.detail}</span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}
