"use client"

import { motion, useMotionValue, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function SlideToNext({ 
  href, 
  label = "Next Project", 
  color = "#D4831A" 
}: { 
  href: string, 
  label?: string, 
  color?: string 
}) {
  const router = useRouter()
  const x = useMotionValue(0)
  const [isUnlocked, setIsUnlocked] = useState(false)
  
  // Track constraints
  const dragConstraints = { left: 0, right: 240 }
  
  // Transitions based on drag progress
  const opacity = useTransform(x, [0, 100], [1, 0])
  const scale = useTransform(x, [0, 240], [1, 1.1])
  const textOpacity = useTransform(x, [0, 150], [1, 0.2])

  useEffect(() => {
    return x.on("change", (latest) => {
      if (latest >= 230 && !isUnlocked) {
        setIsUnlocked(true)
        setTimeout(() => {
          router.push(href)
        }, 300)
      }
    })
  }, [x, href, router, isUnlocked])

  return (
    <div className="flex flex-col items-center gap-6 py-20">
      <div className="relative w-[300px] h-[64px] bg-black/[0.03] rounded-full p-1 border border-black/5 overflow-hidden">
        {/* Track Text */}
        <motion.div 
          style={{ opacity: textOpacity }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
            {isUnlocked ? "Level Loading..." : "Slide to Start"}
          </span>
        </motion.div>

        {/* The Handle */}
        <motion.div
          drag="x"
          dragConstraints={dragConstraints}
          dragElastic={0.1}
          dragSnapToOrigin={!isUnlocked}
          style={{ x }}
          className="relative z-10 w-[56px] h-[56px] rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div 
            className="absolute inset-0 rounded-full" 
            style={{ backgroundColor: color }}
          />
          <ArrowRight className="relative z-10 w-6 h-6 text-white" />
        </motion.div>

        {/* Progress Fill */}
        <motion.div 
          className="absolute top-0 left-0 bottom-0 pointer-events-none opacity-20"
          style={{ width: x, backgroundColor: color }}
        />
      </div>

      <div className="text-center">
        <h3 className="text-[9px] font-black uppercase tracking-[0.4em] opacity-30 mb-2">Continue Journey</h3>
        <h2 className="text-2xl font-display font-black tracking-tight" style={{ color: "var(--text-primary)" }}>{label}</h2>
      </div>
    </div>
  )
}
