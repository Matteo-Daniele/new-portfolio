"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-[#2B3E4C] text-[#FBE8C5] flex flex-col items-center justify-center overflow-hidden">
      
      {/* Decorative Grid/Lines for agency feel */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 w-[1px] h-full bg-[#FBE8C5]/20" />
        <div className="absolute top-1/2 -translate-y-1/2 w-full h-[1px] bg-[#FBE8C5]/20" />
      </div>

      <div className="container px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Massive 404 Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <h1 className="text-[12rem] md:text-[20rem] lg:text-[25rem] font-display font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#FBE8C5] to-[#FBE8C5]/10">
            404
          </h1>
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 bg-[#D4831A] text-[#2B3E4C] rounded-full text-[10px] md:text-sm font-black uppercase tracking-widest rotate-[-12deg]"
          >
            Página No Encontrada
          </motion.div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-8 mb-12 max-w-xl mx-auto"
        >
          <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">
            Parece que te has perdido.
          </h2>
          <p className="text-sm md:text-lg text-[#FBE8C5]/60 font-medium">
            La página que estás buscando (probablemente el catálogo de proyectos) ha sido eliminada o ya no existe.
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <Link 
            href="/"
            className="group relative inline-flex items-center gap-4 px-10 py-5 rounded-full bg-[#FBE8C5] text-[#2B3E4C] overflow-hidden transition-transform hover:scale-105"
          >
            <span className="relative z-10 font-black text-[10px] uppercase tracking-[0.2em]">
              Volver al Inicio
            </span>
            <div className="relative z-10 w-6 h-6 rounded-full bg-[#2B3E4C] text-[#FBE8C5] flex items-center justify-center group-hover:-translate-x-1 transition-transform">
               <ArrowLeft className="w-3 h-3" />
            </div>
          </Link>
        </motion.div>

      </div>
    </main>
  )
}
