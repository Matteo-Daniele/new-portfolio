"use client"

import ProjectPageLayout, { type ProjectPageData } from "@/components/project-page-layout"
import { useLanguage } from "@/components/language-provider"

export default function RentacarProjectPage() {
  const { language } = useLanguage()

  const data: ProjectPageData = language === "es"
    ? {
        title: "Rent a Car",
        tagline: "Una plataforma de gestión de flota construida para la ||eficiencia real|| de negocio.",
        year: "2024",
        role: "Full-Stack Developer",
        category: "Aplicación Web",
        description:
          "Rent a Car reinventa cómo las empresas gestionan su flota. Reservas automatizadas, supervisión en tiempo real y lógica de negocio compleja — todo en una interfaz limpia e intuitiva.",
        challenge: {
          heading: "El Reto",
          body: "Manejar lógica de negocio compleja: disponibilidad de vehículos, reservas solapadas, roles de usuario y reportes de flota — sin sacrificar la usabilidad.",
        },
        approach: {
          heading: "El Enfoque",
          body: "Arquitectura modular con separación clara de responsabilidades, sistema de reservas con validaciones en tiempo real y dashboard de supervisión con filtros avanzados.",
        },
        outcome: {
          heading: "El Resultado",
          body: "Una plataforma robusta que redujo el tiempo de gestión de reservas y eliminó conflictos de disponibilidad, con una curva de aprendizaje mínima para el equipo.",
        },
        heroImage: "/images/rentacar-desktop1.png",
        detailImage: "/images/rentacar-desktop2.png",
        images: ["/images/rentacar-desktop1.png", "/images/rentacar-desktop2.png", "/images/rentacar-desktop3.png", "/images/rentacar-desktop1.png"],
        demoUrl: "#",
        repoUrl: "https://github.com/Matteo-Daniele",
        tech: [
          { label: "Next.js 14" },
          { label: "TypeScript" },
          { label: "Tailwind CSS" },
          { label: "Supabase" },
          { label: "Framer Motion" },
          { label: "Vercel" },
        ],
        accentColor: "#1B5E99",
        labelBack: "Volver al Inicio",
        labelVisit: "Ver Demo en Vivo",
        labelCode: "Código Fuente",
        marqueeText: "Gestión inteligente ✻ Reservas automatizadas ✻ Control total de flota",
        services: [
          {
            title: "Dashboard",
            items: ["Vista de flota", "Métricas en tiempo real", "Alertas personalizadas"],
          },
          {
            title: "Reservas",
            items: ["Calendario interactivo", "Validación automática", "Conflictos resueltos"],
          },
          {
            title: "Usuarios",
            items: ["Roles y permisos", "Historial de acciones", "Multi-tenant"],
          },
          {
            title: "Reportes",
            items: ["Exportación de datos", "Gráficos dinámicos", "Filtros avanzados"],
          },
        ],
      }
    : {
        title: "Rent a Car",
        tagline: "A fleet management platform built for ||real business|| efficiency.",
        year: "2024",
        role: "Full-Stack Developer",
        category: "Web Application",
        description:
          "Rent a Car reimagines how companies manage their fleet. Automated bookings, real-time oversight, and complex business logic — all inside a clean, intuitive interface.",
        challenge: {
          heading: "The Challenge",
          body: "Handling complex business logic: vehicle availability, overlapping reservations, user roles, and fleet reporting — without sacrificing usability for daily operators.",
        },
        approach: {
          heading: "The Approach",
          body: "Modular architecture with clear separation of concerns, a booking system with real-time validations, and an oversight dashboard with advanced filtering.",
        },
        outcome: {
          heading: "The Outcome",
          body: "A robust platform that reduced reservation management time and eliminated availability conflicts, with a minimal learning curve for the operations team.",
        },
        heroImage: "/images/rentacar-desktop1.png",
        detailImage: "/images/rentacar-desktop2.png",
        images: ["/images/rentacar-desktop1.png", "/images/rentacar-desktop2.png", "/images/rentacar-desktop3.png", "/images/rentacar-desktop1.png"],
        demoUrl: "#",
        repoUrl: "https://github.com/Matteo-Daniele",
        tech: [
          { label: "Next.js 14" },
          { label: "TypeScript" },
          { label: "Tailwind CSS" },
          { label: "Supabase" },
          { label: "Framer Motion" },
          { label: "Vercel" },
        ],
        accentColor: "#1B5E99",
        labelBack: "Back to Home",
        labelVisit: "View Live Demo",
        labelCode: "Source Code",
        marqueeText: "Smart management ✻ Automated bookings ✻ Total fleet control",
        services: [
          {
            title: "Dashboard",
            items: ["Fleet overview", "Real-time metrics", "Custom alerts"],
          },
          {
            title: "Bookings",
            items: ["Interactive calendar", "Auto validation", "Conflict resolution"],
          },
          {
            title: "Users",
            items: ["Roles & permissions", "Action history", "Multi-tenant"],
          },
          {
            title: "Reports",
            items: ["Data export", "Dynamic charts", "Advanced filters"],
          },
        ],
      }

  return <ProjectPageLayout data={data} />
}
