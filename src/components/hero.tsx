"use client"

import { useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion"
import { wrap } from "@motionone/utils"

function ParallaxText({ children, baseVelocity = 100 }: { children: string; baseVelocity?: number }) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  })

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)

  const directionFactor = useRef<number>(1)
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }
    moveBy += directionFactor.current * moveBy * velocityFactor.get()
    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  )
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToAbout = () => {
    scrollToSection("about")
  }

  const scrollToContact = () => {
    scrollToSection("contact")
  }

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!ref.current) return
      const { clientX, clientY } = ev
      ref.current.style.setProperty("--mouse-x", `${clientX}px`)
      ref.current.style.setProperty("--mouse-y", `${clientY}px`)
    }
    window.addEventListener("mousemove", updateMousePosition)
    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  return (
    <div
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dot-pattern"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background z-10" />

      {/* Interactive spotlight effect */}
      <div
        className="pointer-events-none absolute inset-0 z-30 transition duration-300"
        style={{
          background:
            "radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%)",
        }}
      />

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="container px-4 mx-auto flex flex-col items-center text-center z-20 space-y-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-4 text-balance">
            Hi, I'm{" "}
            <span className="text-gradient bg-gradient-to-r from-primary via-primary/80 to-primary/60">
              Prince Ajuzie
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto text-balance">
            Software engineer specializing in building exceptional digital experiences with a focus on performance and
            scalability.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={scrollToAbout}
              className="rounded-full px-6 py-2 text-base bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 transition-colors duration-300"
            >
              Explore My Work
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="rounded-full px-6 py-2 text-base transition-colors duration-300"
            >
              Get In Touch
            </Button>
          </div>
        </motion.div>
      </motion.div>

      {/* Parallax text */}
      <div className="absolute bottom-24 w-full overflow-hidden flex flex-col gap-2 z-20 opacity-30">
        <ParallaxText baseVelocity={-1}>Innovative Solutions • Scalable Architecture • </ParallaxText>
        <ParallaxText baseVelocity={1}>High-Performance Systems • User-Centric Design • </ParallaxText>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 z-20"
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToAbout}
          className="rounded-full animate-bounce bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 transition-colors duration-300"
        >
          <ArrowDown className="h-4 w-4" />
          <span className="sr-only">Scroll Down</span>
        </Button>
      </motion.div>
    </div>
  )
}

