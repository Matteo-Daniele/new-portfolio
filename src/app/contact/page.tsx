"use client"

import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"
import {
  ArrowRight,
  ArrowUpRight,
  Clock,
  Download,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ContactPage() {
  const { language } = useLanguage()
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const translations = {
    en: {
      title: "Let&apos;s Talk",
      subtitle: "Have a project in mind? I&apos;d love to hear about it.",
      backHome: "Back to Home",
      getInTouch: "Get in Touch",
      contactInfo: "Contact Information",
      email: "Email",
      phone: "Phone",
      location: "Location",
      locationValue: "Mar del Plata, Argentina",
      availability: "Availability",
      availabilityValue: "Open for freelance & full-time",
      downloadCV: "Download CV",
      followMe: "Follow Me",
      sendMessage: "Send a Message",
      formName: "Your Name",
      formEmail: "Your Email",
      formSubject: "Subject",
      formMessage: "Your Message",
      formSubmit: "Send Message",
      formSubmitting: "Sending...",
      formSuccess: "Message sent successfully!",
      formSuccessDesc: "I&apos;ll get back to you as soon as possible.",
      timezone: "GMT-3 (Argentina)",
      responseTime: "Usually responds within 24h",
    },
    es: {
      title: "Hablemos",
      subtitle: "¿Tienes un proyecto en mente? Me encantaría escucharlo.",
      backHome: "Volver al Inicio",
      getInTouch: "Contactar",
      contactInfo: "Información de Contacto",
      email: "Email",
      phone: "Teléfono",
      location: "Ubicación",
      locationValue: "Mar del Plata, Argentina",
      availability: "Disponibilidad",
      availabilityValue: "Disponible para freelance y tiempo completo",
      downloadCV: "Descargar CV",
      followMe: "Sígueme",
      sendMessage: "Enviar un Mensaje",
      formName: "Tu Nombre",
      formEmail: "Tu Email",
      formSubject: "Asunto",
      formMessage: "Tu Mensaje",
      formSubmit: "Enviar Mensaje",
      formSubmitting: "Enviando...",
      formSuccess: "¡Mensaje enviado con éxito!",
      formSuccessDesc: "Te responderé lo antes posible.",
      timezone: "GMT-3 (Argentina)",
      responseTime: "Normalmente responde en 24h",
    },
  }

  const t = translations[language]
  const cvPath = language === "en" ? "/Resume-MatteoDaniele.pdf" : "/CV-MatteoDaniele-Español.pdf"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitted(true)
    setFormState({ name: "", email: "", subject: "", message: "" })
  }

  const socialLinks = [
    { href: "https://github.com/Matteo-Daniele", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/matteo-daniele-a39b88250/", icon: Linkedin, label: "LinkedIn" },
    { href: "https://www.instagram.com/danielematteo_/", icon: Instagram, label: "Instagram" },
  ]

  return (
    <main className="min-h-screen" style={{ background: "var(--bg-main)" }}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 -right-40 w-[700px] h-[700px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(27,94,153,0.06) 0%, transparent 70%)",
            }}
            animate={{ scale: [1, 1.15, 1], rotate: [0, 10, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(212,131,26,0.05) 0%, transparent 70%)",
            }}
            animate={{ scale: [1.1, 1, 1.1] }}
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
              <motion.div
                className="w-3 h-3 rounded-full bg-green-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>
                {t.availabilityValue}
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

      {/* Contact Content */}
      <section className="pb-24 md:pb-32">
        <div className="container px-6 md:px-8 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info Column */}
            <motion.div
              className="lg:col-span-2 space-y-10"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Contact Info Card */}
              <div
                className="rounded-3xl p-8 md:p-10"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <h2
                  className="text-xl font-display font-semibold mb-8"
                  style={{ color: "var(--text-primary)" }}
                >
                  {t.contactInfo}
                </h2>

                <div className="space-y-6">
                  {/* Email */}
                  <a
                    href="mailto:matteodaniele222@gmail.com"
                    className="group flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 hover:bg-[var(--bg-main)]"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-[var(--text-secondary)]"
                      style={{
                        background: "rgba(27,94,153,0.1)",
                      }}
                    >
                      <Mail className="h-5 w-5 group-hover:text-white transition-colors duration-300" style={{ color: "var(--text-secondary)" }} />
                    </div>
                    <div>
                      <span className="text-xs font-medium uppercase tracking-wider block mb-1" style={{ color: "var(--text-muted)" }}>
                        {t.email}
                      </span>
                      <span className="text-base font-medium group-hover:text-[var(--text-secondary)] transition-colors duration-300" style={{ color: "var(--text-primary)" }}>
                        matteodaniele222@gmail.com
                      </span>
                    </div>
                    <ArrowUpRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: "var(--text-secondary)" }} />
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:+542235919553"
                    className="group flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 hover:bg-[var(--bg-main)]"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-[var(--accent-warm)]"
                      style={{
                        background: "rgba(212,131,26,0.1)",
                      }}
                    >
                      <Phone className="h-5 w-5 group-hover:text-white transition-colors duration-300" style={{ color: "var(--accent-warm)" }} />
                    </div>
                    <div>
                      <span className="text-xs font-medium uppercase tracking-wider block mb-1" style={{ color: "var(--text-muted)" }}>
                        {t.phone}
                      </span>
                      <span className="text-base font-medium group-hover:text-[var(--accent-warm)] transition-colors duration-300" style={{ color: "var(--text-primary)" }}>
                        +54 (223) 591-9553
                      </span>
                    </div>
                    <ArrowUpRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: "var(--accent-warm)" }} />
                  </a>

                  {/* Location */}
                  <div className="flex items-start gap-4 p-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "rgba(43,62,76,0.08)",
                      }}
                    >
                      <MapPin className="h-5 w-5" style={{ color: "var(--text-primary)" }} />
                    </div>
                    <div>
                      <span className="text-xs font-medium uppercase tracking-wider block mb-1" style={{ color: "var(--text-muted)" }}>
                        {t.location}
                      </span>
                      <span className="text-base font-medium" style={{ color: "var(--text-primary)" }}>
                        {t.locationValue}
                      </span>
                      <span className="text-xs block mt-1" style={{ color: "var(--text-muted)" }}>
                        {t.timezone}
                      </span>
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="flex items-start gap-4 p-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "rgba(34,197,94,0.1)",
                      }}
                    >
                      <Clock className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <span className="text-xs font-medium uppercase tracking-wider block mb-1" style={{ color: "var(--text-muted)" }}>
                        {t.availability}
                      </span>
                      <span className="text-base font-medium" style={{ color: "var(--text-primary)" }}>
                        {t.responseTime}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Download CV */}
                <div className="mt-8 pt-6" style={{ borderTop: "1px solid var(--border-subtle)" }}>
                  <a
                    href={cvPath}
                    download
                    className="group inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
                    style={{
                      background: "var(--bg-main)",
                      color: "var(--text-primary)",
                      border: "1px solid var(--border-subtle)",
                    }}
                  >
                    <Download className="h-4 w-4" />
                    {t.downloadCV}
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div
                className="rounded-3xl p-8"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <h3
                  className="text-lg font-display font-semibold mb-6"
                  style={{ color: "var(--text-primary)" }}
                >
                  {t.followMe}
                </h3>

                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300"
                      style={{
                        background: "var(--bg-main)",
                        border: "1px solid var(--border-subtle)",
                      }}
                      whileHover={{
                        scale: 1.1,
                        background: "var(--text-secondary)",
                        borderColor: "var(--text-secondary)",
                      }}
                      aria-label={link.label}
                    >
                      <link.icon className="h-5 w-5 transition-colors duration-300 group-hover:text-white" style={{ color: "var(--text-muted)" }} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form Column */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div
                className="rounded-3xl p-8 md:p-12"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <h2
                  className="text-2xl font-display font-semibold mb-8"
                  style={{ color: "var(--text-primary)" }}
                >
                  {t.sendMessage}
                </h2>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <motion.div
                      className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                      style={{ background: "rgba(34,197,94,0.1)" }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", duration: 0.6 }}
                    >
                      <Send className="h-8 w-8 text-green-600" />
                    </motion.div>
                    <h3 className="text-2xl font-display font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                      {t.formSuccess}
                    </h3>
                    <p style={{ color: "var(--text-muted)" }}>{t.formSuccessDesc}</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="text-sm font-medium mb-2 block"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {t.formName}
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          required
                          className="w-full px-5 py-4 rounded-xl text-base transition-all duration-300 outline-none"
                          style={{
                            background: "var(--bg-main)",
                            border: "1px solid var(--border-subtle)",
                            color: "var(--text-primary)",
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = "var(--text-secondary)"
                            e.target.style.boxShadow = "0 0 0 3px rgba(27,94,153,0.1)"
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = "var(--border-subtle)"
                            e.target.style.boxShadow = "none"
                          }}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="text-sm font-medium mb-2 block"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {t.formEmail}
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          required
                          className="w-full px-5 py-4 rounded-xl text-base transition-all duration-300 outline-none"
                          style={{
                            background: "var(--bg-main)",
                            border: "1px solid var(--border-subtle)",
                            color: "var(--text-primary)",
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = "var(--text-secondary)"
                            e.target.style.boxShadow = "0 0 0 3px rgba(27,94,153,0.1)"
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = "var(--border-subtle)"
                            e.target.style.boxShadow = "none"
                          }}
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium mb-2 block"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {t.formSubject}
                      </label>
                      <input
                        type="text"
                        id="subject"
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        required
                        className="w-full px-5 py-4 rounded-xl text-base transition-all duration-300 outline-none"
                        style={{
                          background: "var(--bg-main)",
                          border: "1px solid var(--border-subtle)",
                          color: "var(--text-primary)",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "var(--text-secondary)"
                          e.target.style.boxShadow = "0 0 0 3px rgba(27,94,153,0.1)"
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "var(--border-subtle)"
                          e.target.style.boxShadow = "none"
                        }}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="text-sm font-medium mb-2 block"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {t.formMessage}
                      </label>
                      <textarea
                        id="message"
                        rows={6}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        required
                        className="w-full px-5 py-4 rounded-xl text-base transition-all duration-300 outline-none resize-none"
                        style={{
                          background: "var(--bg-main)",
                          border: "1px solid var(--border-subtle)",
                          color: "var(--text-primary)",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "var(--text-secondary)"
                          e.target.style.boxShadow = "0 0 0 3px rgba(27,94,153,0.1)"
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "var(--border-subtle)"
                          e.target.style.boxShadow = "none"
                        }}
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full font-semibold text-base transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                      style={{
                        background: "linear-gradient(135deg, #1B5E99 0%, #3A8CC4 100%)",
                        color: "#FFFBF4",
                        boxShadow: "0 8px 24px rgba(27,94,153,0.25)",
                      }}
                      whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          {t.formSubmitting}
                        </>
                      ) : (
                        <>
                          {t.formSubmit}
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
