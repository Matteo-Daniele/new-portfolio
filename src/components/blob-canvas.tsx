"use client"

import { useEffect, useRef, useState } from "react"

interface Blob {
  x: number
  y: number
  targetX: number
  targetY: number
  size: number
  baseSize: number
  color: string
  speedFactor: number
  angle: number
  angleSpeed: number
}

export default function BlobCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const blobsRef = useRef<Blob[]>([])
  const animationRef = useRef<number>(0)
  const hasMovedRef = useRef(false)

  useEffect(() => {
    // Colors derived from the palette
    const colors = [
      "hsla(190, 14%, 49%, 0.25)",   // sage
      "hsla(25, 40%, 39%, 0.22)",    // brown
      "hsla(47, 24%, 66%, 0.28)",    // tan
      "hsla(60, 25%, 18%, 0.12)",    // olive light
      "hsla(190, 14%, 49%, 0.18)",   // sage light
      "hsla(47, 24%, 66%, 0.22)",    // tan light
      "hsla(25, 40%, 39%, 0.15)",    // brown light
    ]

    setDimensions({ width: window.innerWidth, height: window.innerHeight })
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2

    blobsRef.current = Array(7).fill(0).map((_, i) => ({
      x: centerX, y: centerY,
      targetX: centerX, targetY: centerY,
      baseSize: 80 + i * 25, size: 80 + i * 25,
      color: colors[i],
      speedFactor: 0.01 + (i % 3) * 0.03,
      angle: Math.random() * Math.PI * 2,
      angleSpeed: 0.0005 + Math.random() * 0.002,
    }))

    const handleResize = () => setDimensions({ width: window.innerWidth, height: window.innerHeight })
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      hasMovedRef.current = true
      blobsRef.current.forEach((blob, index) => {
        blob.targetX = e.clientX + Math.sin(index * 0.5) * 50
        blob.targetY = e.clientY + Math.cos(index * 0.5) * 50
      })
    }
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        hasMovedRef.current = true
        const touch = e.touches[0]
        blobsRef.current.forEach((blob, index) => {
          blob.targetX = touch.clientX + Math.sin(index * 0.5) * 50
          blob.targetY = touch.clientY + Math.cos(index * 0.5) * 50
        })
      }
    }
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("touchmove", handleTouchMove, { passive: true })
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchmove", handleTouchMove)
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    canvas.width = dimensions.width
    canvas.height = dimensions.height

    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (!hasMovedRef.current) {
        const centerX = dimensions.width / 2
        const centerY = dimensions.height / 2
        blobsRef.current.forEach((blob, index) => {
          blob.angle += blob.angleSpeed
          const radius = 30 + index * 25
          blob.targetX = centerX + Math.cos(blob.angle + index * 0.5) * radius
          blob.targetY = centerY + Math.sin(blob.angle + index * 0.5) * radius * 0.6
        })
      }

      blobsRef.current.forEach((blob, index) => {
        blob.x += (blob.targetX - blob.x) * blob.speedFactor
        blob.y += (blob.targetY - blob.y) * blob.speedFactor
        const pulseFactor = Math.sin(Date.now() * 0.001 + index * 0.5) * 0.15 + 1
        blob.size = blob.baseSize * pulseFactor
        ctx.beginPath()
        ctx.arc(blob.x, blob.y, blob.size, 0, Math.PI * 2)
        ctx.fillStyle = blob.color
        ctx.fill()
      })
      animationRef.current = requestAnimationFrame(animate)
    }
    animate()
    return () => cancelAnimationFrame(animationRef.current)
  }, [dimensions])

  return (
    <>
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="40" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8" result="gooey" />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-[-1]" style={{ filter: "url(#gooey)" }} />
    </>
  )
}
