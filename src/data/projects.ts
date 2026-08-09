export interface Project {
  slug: string
  title: { en: string; es: string }
  subtitle: { en: string; es: string }
  description: { en: string; es: string }
  category: { en: string; es: string }
  image: string
  secondaryImage: string
  tags: string[]
  year: string
  color: string
}

export const PROJECTS: Project[] = [
  {
    slug: "migafina",
    title: { en: "Migafina", es: "Migafina" },
    subtitle: {
      en: "Artisan bakery digital experience",
      es: "Experiencia digital de panadería artesanal",
    },
    description: {
      en: "Premium artisan bakery website with responsive design, smooth animations, and optimized performance for an elegant digital experience.",
      es: "Sitio web premium de panadería artesanal con diseño responsivo, animaciones suaves y rendimiento optimizado para una experiencia digital elegante.",
    },
    category: { en: "E-commerce Platform", es: "Plataforma E-commerce" },
    image: "/images/migafina-desktop.png",
    secondaryImage: "/images/migafina-mobile.png",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    year: "2025",
    color: "#D4831A",
  },
  {
    slug: "rentacar",
    title: { en: "Rent a Car", es: "Rent a Car" },
    subtitle: {
      en: "Vehicle reservation platform",
      es: "Plataforma de reservas de vehículos",
    },
    description: {
      en: "Full-stack vehicle reservation platform with real-time availability, admin dashboard, and seamless booking experience.",
      es: "Plataforma full-stack de reservas de vehículos con disponibilidad en tiempo real, panel de administración y experiencia de reserva fluida.",
    },
    category: { en: "Full-Stack App", es: "Aplicación Full-Stack" },
    image: "/images/rentacar-desktop1.png",
    secondaryImage: "/images/rentacar-desktop2.png",
    tags: ["React.js", "Node.js", "MongoDB", "Express"],
    year: "2024",
    color: "#1B5E99",
  },
  {
    slug: "gian-barber",
    title: { en: "Gian Barber", es: "Gian Barber" },
    subtitle: {
      en: "Barbershop management & revenue platform",
      es: "Plataforma de gestión y ganancias de barbería",
    },
    description: {
      en: "Real-time barbershop management platform: barber cut tracking, admin approvals, split payments, per-barber shares and exportable stats on Supabase.",
      es: "Plataforma de gestión de barbería en tiempo real: registro de cortes, aprobaciones del admin, pagos divididos, participación por barbero y estadísticas exportables sobre Supabase.",
    },
    category: { en: "Web App", es: "Aplicación Web" },
    image: "/images/admingian-app-desktop.png",
    secondaryImage: "/images/admingian-app-mobile.png",
    tags: ["Next.js", "Supabase", "TypeScript"],
    year: "2026",
    color: "#D4831A",
  },
]