"use client"

import ProjectPageLayout, { type ProjectPageData } from "@/components/project-page-layout"
import { useLanguage } from "@/components/language-provider"

export default function MigafinaProjectPage() {
  const { language } = useLanguage()

  const data: ProjectPageData = language === "es"
    ? {
        title: "Migafina",
        tagline: "Una experiencia de panadería digital diseñada para ||convertir, deleitar|| y destacar en cada detalle.",
        year: "2024",
        role: "Full-Stack Developer",
        category: "Plataforma E-commerce",
        description:
          "Migafina transforma la calidad artesanal en experiencia digital. Cada pantalla fue diseñada para evocar calidez, confianza y apetito — y convertirlos en pedidos reales.",
        challenge: {
          heading: "El Reto",
          body: "Traducir la calidez de una panadería artesanal a un entorno digital sin perder autenticidad, mientras se lograba una tasa de conversión competitiva con grandes e-commerce.",
        },
        approach: {
          heading: "El Enfoque",
          body: "Diseño visual-first con fotografía de producto, micro-animaciones que guían al usuario y un flujo de checkout simplificado al máximo.",
        },
        outcome: {
          heading: "El Resultado",
          body: "Un sitio que comunica premium desde el primer scroll, con tiempos de carga rápidos y una narrativa visual coherente que refuerza la marca.",
        },
        heroImage: "/images/migafina-desktop.png",
        detailImage: "/images/migafina-desktop.png",
        demoUrl: "https://migafina.com",
        repoUrl: "https://github.com/Matteo-Daniele",
        tech: [
          { label: "Next.js 14" },
          { label: "TypeScript" },
          { label: "Tailwind CSS" },
          { label: "Framer Motion" },
          { label: "Vercel" },
        ],
        accentColor: "#D4831A",
        labelBack: "Volver al Inicio",
        labelVisit: "Ver Sitio en Vivo",
        labelCode: "Ver Código",
        marqueeText: "Hornear con pasión ✻ Diseñar con propósito ✻ Crear experiencias únicas",
        services: [
          {
            title: "Diseño de Producto",
            items: ["UI/UX Design", "Branding visual", "Fotografía de producto"],
          },
          {
            title: "Desarrollo Web",
            items: ["Frontend responsive", "Integración de pagos", "CMS personalizado"],
          },
          {
            title: "E-commerce",
            items: ["Carrito optimizado", "Checkout simplificado", "Gestión de pedidos"],
          },
          {
            title: "Performance",
            items: ["SEO técnico", "Core Web Vitals", "Optimización de imágenes"],
          },
        ],
      }
    : {
        title: "Migafina",
        tagline: "A digital bakery experience built to ||convert, delight|| and stand out in every detail.",
        year: "2024",
        role: "Full-Stack Developer",
        category: "E-commerce Platform",
        description:
          "Migafina brings artisanal quality to the web. Every screen was crafted to evoke warmth, trust, and appetite — and turn those feelings into real orders.",
        challenge: {
          heading: "The Challenge",
          body: "Translating the warmth of an artisanal bakery into a digital environment without losing authenticity, while achieving conversion rates competitive with larger e-commerce stores.",
        },
        approach: {
          heading: "The Approach",
          body: "Visual-first design with product photography, micro-animations that guide the user, and a checkout flow stripped down to its essentials.",
        },
        outcome: {
          heading: "The Outcome",
          body: "A site that communicates premium from the first scroll, with fast load times and a coherent visual narrative that reinforces the brand at every touchpoint.",
        },
        heroImage: "/images/migafina-desktop.png",
        detailImage: "/images/migafina-desktop.png",
        demoUrl: "https://migafina.com",
        repoUrl: "https://github.com/Matteo-Daniele",
        tech: [
          { label: "Next.js 14" },
          { label: "TypeScript" },
          { label: "Tailwind CSS" },
          { label: "Framer Motion" },
          { label: "Vercel" },
        ],
        accentColor: "#D4831A",
        labelBack: "Back to Home",
        labelVisit: "Visit Live Site",
        labelCode: "View Code",
        marqueeText: "Bake with passion ✻ Design with purpose ✻ Create unique experiences",
        services: [
          {
            title: "Product Design",
            items: ["UI/UX Design", "Visual branding", "Product photography"],
          },
          {
            title: "Web Development",
            items: ["Responsive frontend", "Payment integration", "Custom CMS"],
          },
          {
            title: "E-commerce",
            items: ["Optimized cart", "Simplified checkout", "Order management"],
          },
          {
            title: "Performance",
            items: ["Technical SEO", "Core Web Vitals", "Image optimization"],
          },
        ],
      }

  return <ProjectPageLayout data={data} />
}
