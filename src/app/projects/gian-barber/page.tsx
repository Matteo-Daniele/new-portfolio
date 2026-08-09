"use client"

import ProjectPageLayout, { type ProjectPageData } from "@/components/project-page-layout"
import { useLanguage } from "@/components/language-provider"

export default function GianBarberProjectPage() {
  const { language } = useLanguage()

  const data: ProjectPageData = language === "es"
    ? {
        title: "Gian Barber",
        tagline: "Gestión de barbería repensada: ||registrá cortes, aprobá ingresos|| y repartí ganancias en tiempo real.",
        altTagline: "La operación de la barbería en un solo panel: cortes, pagos y participaciones en tiempo real.",
        marqueeText: "Gestión en tiempo real \u2717 Cortes por barbero \u2717 Propinas 100% al barbero \u2717 Compartir ganancias \u2717 Mobile y desktop",
        year: "2026",
        role: "Full-Stack Developer",
        category: "Plataforma Web",
        description:
          "Gian Barber centraliza la operación diaria de una barbería en un solo flujo. Los barberos cargan cada corte desde el celular, el admin lo aprueba o rechaza desde su panel, y el sistema calcula ganancias por barbero, medios de pago, propinas y porcentajes de participación — todo en vivo y sin planillas. Diseñada mobile-first para el piso de la barbería, se ve y funciona igual de cómodo en desktop.",
        challenge: {
          heading: "El Reto",
          body: "Coordinar roles distintos (admin y barberos) y llevar una contabilidad de ingresos sin errores: aprobaciones, pagos divididos, propinas y reparto de ganancias por barbero, todo respetando la zona horaria de la tienda.",
        },
        approach: {
          heading: "El Enfoque",
          body: "Arquitectura full-stack sobre Supabase (Auth + base de datos), server actions de Next.js, grupos de rutas por rol, pagos con división por medio, matriz de participación y exportación a Excel. Una interfaz mobile-first que escala sin fricción al panel del admin en desktop.",
        },
        outcome: {
          heading: "El Resultado",
          body: "Un panel único y en vivo: aprobación con un clic, propinas 100% para el barbero, reparto de ganancias transparente y estadísticas descargables a Excel. Desde el celular del barbero hasta el desktop del admin, la barbería sabe al instante cuánto vendió, quién cortó más y cómo se reparte el día.",
        },
        heroImage: "/images/admingian-app-desktop.png",
        detailImage: "/images/admingian-app-mobile.png",
        images: [
          "/images/admingian-app-desktop.png",
          "/images/admingian-app-mobile.png",
          "/images/admingian-app-desktop-2.png",
          "/images/admingian-app-mobile-2.png",
        ],
        demoUrl: "https://www.youtube.com/watch?v=lWodIKWdRnQ",
        repoUrl: "https://github.com/Matteo-Daniele",
        videoId: "lWodIKWdRnQ",
        tech: [
          { label: "Next.js 16" },
          { label: "React 19" },
          { label: "TypeScript" },
          { label: "Supabase" },
          { label: "Tailwind CSS" },
          { label: "Server Actions" },
          { label: "xlsx" },
        ],
        accentColor: "#D4831A",
        labelBack: "Volver al Inicio",
        labelVisit: "Ver Demo",
        labelCode: "Ver Código",
        services: [
          {
            title: "Cortes y aprobaciones",
            items: ["Cargar corte con cliente, tipo, cantidad, precio y notas", "Admin aprueba o rechaza desde el panel", "Estados Pendiente / Aprobado / Rechazado"],
          },
          {
            title: "Medios de pago y propinas",
            items: ["Efectivo, transferencia o tarjeta", "Pagos divididos entre medios, con precio personalizado", "La propina va 100% al barbero"],
          },
          {
            title: "Participación y ganancias",
            items: ["Ganancias netas por barbero", "% de la tienda por barbero", "Matriz de participación por admin"],
          },
          {
            title: "Stats y reportes",
            items: ["Filtro por día y por rango de fechas", "Ranking del día y análisis de horas pico", "Exportación a Excel"],
          },
          {
            title: "Equipo y accesos",
            items: ["Crear y editar barberos", "Roles admin / barbero", "Activar o desactivar perfiles"],
          },
        ],
      }
    : {
        title: "Gian Barber",
        tagline: "Barbershop management, rethought: ||log cuts, approve revenue|| and split earnings in real time.",
        altTagline: "A barbershop's whole operation in one panel: cuts, payments and earnings splits in real time.",
        marqueeText: "Real-time management \u2717 Cuts per barber \u2717 Tips 100% to the barber \u2717 Share earnings \u2717 Mobile & desktop",
        year: "2026",
        role: "Full-Stack Developer",
        category: "Web Platform",
        description:
          "Gian Barber centralizes a barbershop's daily operation into a single flow. Barbers log each cut from their phone, the admin approves or rejects it from the dashboard, and the system works out per-barber earnings, payment methods, tips, and shares — all live, no spreadsheets. Built mobile-first for the shop floor, it looks and works just as well on desktop.",
        challenge: {
          heading: "The Challenge",
          body: "Coordinate multiple roles (admin and barbers) and keep error-free revenue accounting: approvals, split payments, tips, and per-barber share splits — all while respecting the shop's timezone.",
        },
        approach: {
          heading: "The Approach",
          body: "A full-stack architecture on Supabase (auth + database), Next.js server actions, role-based route groups, per-payment-method splits, a per-barber share percentage, and Excel export. A mobile-first interface that scales seamlessly to the admin's desktop panel.",
        },
        outcome: {
          heading: "The Outcome",
          body: "A single live dashboard: one-tap approvals, tips 100% to the barber, transparent earnings splits, and stats downloadable to Excel. From the barber's phone to the admin's desktop, the shop instantly knows how much it sold, who cut the most, and how the day is split.",
        },
        heroImage: "/images/admingian-app-desktop.png",
        detailImage: "/images/admingian-app-mobile.png",
        images: [
          "/images/admingian-app-desktop.png",
          "/images/admingian-app-mobile.png",
          "/images/admingian-app-desktop-2.png",
          "/images/admingian-app-mobile-2.png",
        ],
        demoUrl: "https://www.youtube.com/watch?v=lWodIKWdRnQ",
        repoUrl: "https://github.com/Matteo-Daniele",
        videoId: "lWodIKWdRnQ",
        tech: [
          { label: "Next.js 16" },
          { label: "React 19" },
          { label: "TypeScript" },
          { label: "Supabase" },
          { label: "Tailwind CSS" },
          { label: "Server Actions" },
          { label: "xlsx" },
        ],
        accentColor: "#D4831A",
        labelBack: "Back to Home",
        labelVisit: "View Demo",
        labelCode: "View Code",
        services: [
          {
            title: "Cuts & approvals",
            items: ["Log cuts with client, cut type, quantity, price and notes", "Admin approves or rejects from the panel", "Pending / Approved / Rejected states"],
          },
          {
            title: "Payments & tips",
            items: ["Cash, transfer, or card", "Split payments per method, with custom pricing", "Tips go 100% to the barber"],
          },
          {
            title: "Shares & earnings",
            items: ["Net earnings per barber", "Shop cut per barber", "Per-admin share matrix"],
          },
          {
            title: "Stats & reports",
            items: ["Filter by day or date range", "Daily leaderboard and peak-hour analysis", "Excel export"],
          },
          {
            title: "Team & access",
            items: ["Create and edit barbers", "Admin / barber roles", "Activate or deactivate profiles"],
          },
        ],
      }

  return <ProjectPageLayout data={data} />
}
