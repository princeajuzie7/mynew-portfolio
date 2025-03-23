"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768)
    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navItems = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "glass py-4" : "bg-transparent py-6",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tighter hover:text-primary transition-colors relative group"
          onClick={() => scrollToSection("hero")}
        >
          DEV<span className="text-primary">FOLIO</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
        </Link>

        {isMobile ? (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="glass glass-hover rounded-full"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>

            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-x-0 top-[72px] p-4 glass border-t border-border/50"
                >
                  <nav className="container mx-auto flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="text-left px-4 py-2 rounded-lg hover:bg-primary/10 transition-colors"
                      >
                        {item.name}
                      </button>
                    ))}
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                      className="self-start ml-4 rounded-full glass glass-hover"
                    >
                      {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </Button>
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        ) : (
          <div className="flex items-center space-x-8">
            <nav className="flex space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/10 transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute bottom-1.5 left-4 w-0 h-0.5 bg-primary transition-all group-hover:w-[calc(100%-32px)]" />
                </button>
              ))}
            </nav>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full glass glass-hover"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        )}
      </div>
    </motion.header>
  )
}

