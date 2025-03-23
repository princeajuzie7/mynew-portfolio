"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowLeft, Home, AlertCircle } from "lucide-react"
import { useEffect } from "react"

export default function NotFound() {
  // Update page title and meta description
  useEffect(() => {
    document.title = "Page Not Found | Prince Ajuzie"
  }, [])

  return (
    <div className="min-h-screen bg-dot-pattern flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background z-0" />

      {/* Interactive spotlight effect */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition duration-300"
        style={{
          background:
            "radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%)",
        }}
      />

      <motion.div
        className="z-20 text-center max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.1,
            duration: 0.6,
          }}
          className="mb-6 flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse" />
            <div className="relative bg-card/50 backdrop-blur-sm p-6 rounded-full border border-border/50">
              <AlertCircle className="h-16 w-16 text-primary" />
            </div>
          </div>
        </motion.div>

        <motion.h1
          className="text-6xl font-bold mb-2 text-gradient bg-gradient-to-r from-primary via-primary/80 to-primary/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          404
        </motion.h1>

        <motion.h2
          className="text-2xl font-semibold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Page Not Found
        </motion.h2>

        <motion.p
          className="text-muted-foreground mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button
            asChild
            className="rounded-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 transition-colors duration-300"
          >
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Return Home
            </Link>
          </Button>

          <Button asChild variant="outline" className="rounded-full transition-colors duration-300">
            <Link href="javascript:history.back()">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-primary/20 rounded-full opacity-20 animate-pulse" />
      <div
        className="absolute bottom-10 right-10 w-32 h-32 border border-primary/20 rounded-full opacity-10 animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/4 right-1/4 w-16 h-16 border border-primary/20 rounded-full opacity-20 animate-pulse"
        style={{ animationDelay: "0.5s" }}
      />
    </div>
  )
}

