"use client"

import { Button } from "@/components/ui/button"
import { Download, ExternalLink, Github, Instagram, Linkedin, Mail, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "../components/language-provider"

export default function Footer() {
  const { language } = useLanguage()

  const translations = {
    en: {
      bio: "Full-stack developer passionate about creating exceptional digital experiences with modern technologies.",
      navigation: "Navigation",
      contact: "Contact",
      connect: "Connect",
      downloadCV: "Download CV",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      allRightsReserved: "All rights reserved.",
    },
    es: {
      bio: "Desarrollador full-stack apasionado por crear experiencias digitales excepcionales con tecnologías modernas.",
      navigation: "Navegación",
      contact: "Contacto",
      connect: "Conectar",
      downloadCV: "Descargar CV",
      privacyPolicy: "Política de Privacidad",
      termsOfService: "Términos de Servicio",
      allRightsReserved: "Todos los derechos reservados.",
    },
  }

  const t = translations[language]
  const cvPath = language === "en" ? "/Resume-MatteoDaniele.pdf" : "/CV-MatteoDaniele-Español.pdf"

  return (
    <footer id="contact" className="relative overflow-hidden border-t border-[var(--border-subtle)]/30">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--text-secondary)]/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,#BFB79208_0%,transparent_70%)] pointer-events-none" />

      <div className="container px-4 md:px-6 py-14 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-[var(--border-subtle)]">
                <Image src="/Logo.png" alt="Matteo Daniele" fill sizes="40px" className="object-cover" />
              </div>
              <span className="font-display font-semibold text-[var(--text-primary)]">Matteo Daniele</span>
            </div>
            <p className="text-sm text-[var(--text-primary)]/60 leading-relaxed">{t.bio}</p>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-display font-medium mb-4 text-sm uppercase tracking-wider text-[var(--text-secondary)]">{t.navigation}</h3>
            <ul className="space-y-2.5">
              {[
                { href: "/#about", label: language === "en" ? "About" : "Sobre mí" },
                { href: "/#projects", label: language === "en" ? "Projects" : "Proyectos" },
                { href: "/#skills", label: language === "en" ? "Skills" : "Habilidades" },
                { href: "/#contact", label: t.contact },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-[var(--text-primary)]/60 hover:text-[var(--text-primary)] transition-colors duration-300">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-display font-medium mb-4 text-sm uppercase tracking-wider text-[var(--text-secondary)]">{t.contact}</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:matteodaniele222@gmail.com" className="text-sm flex items-center gap-2 text-[var(--text-primary)]/60 hover:text-[var(--text-primary)] transition-colors duration-300">
                  <Mail className="h-4 w-4 text-[var(--text-secondary)]/60" />matteodaniele222@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+542235919553" className="text-sm flex items-center gap-2 text-[var(--text-primary)]/60 hover:text-[var(--text-primary)] transition-colors duration-300">
                  <Phone className="h-4 w-4 text-[var(--text-secondary)]/60" />+54 (223)-5919553
                </a>
              </li>
              <li>
                <a href={cvPath} download>
                  <Button variant="outline" size="sm" className="gap-1.5 rounded-full border-[var(--border-subtle)] hover:border-[var(--text-secondary)]/40 hover:bg-[var(--text-secondary)]/5 text-[var(--text-primary)] transition-all duration-300">
                    <Download className="h-3.5 w-3.5" /><span>{t.downloadCV}</span>
                  </Button>
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-display font-medium mb-4 text-sm uppercase tracking-wider text-[var(--text-secondary)]">{t.connect}</h3>
            <div className="flex flex-col space-y-3">
              {[
                { href: "https://github.com/Matteo-Daniele", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/matteo-daniele-a39b88250/", icon: Linkedin, label: "LinkedIn" },
                { href: "https://www.instagram.com/danielematteo_/", icon: Instagram, label: "Instagram" },
              ].map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                  className="text-sm flex items-center gap-2.5 text-[var(--text-primary)]/60 hover:text-[var(--text-primary)] transition-colors duration-300 group">
                  <div className="bg-[var(--bg-card)] p-1.5 rounded-lg border border-[var(--border-subtle)]/40 group-hover:border-[var(--text-secondary)]/30 transition-colors duration-300">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <span>{item.label}</span>
                  <ExternalLink className="h-3 w-3 opacity-0 -ml-1 transition-opacity group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-[var(--border-subtle)]/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--text-primary)]/50">© {new Date().getFullYear()} Matteo Daniele. {t.allRightsReserved}</p>
          <div className="flex items-center gap-4">
            <div className="text-xs text-[var(--text-primary)]/40 hover:text-[var(--text-primary)]/60 transition-colors cursor-pointer">{t.privacyPolicy}</div>
            <div className="text-xs text-[var(--text-primary)]/40 hover:text-[var(--text-primary)]/60 transition-colors cursor-pointer">{t.termsOfService}</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
