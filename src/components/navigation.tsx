"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import {
  HomeIcon,
  User2Icon,
  CodeIcon,
  FolderIcon,
  BriefcaseIcon,
  MailIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  MenuIcon,
} from "lucide-react"

import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Dock, DockIcon } from "@/registry/magicui/dock"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export type IconProps = React.HTMLAttributes<SVGElement>

const navItems = [
  { href: "#hero", icon: HomeIcon, label: "Home" },
  { href: "#about", icon: User2Icon, label: "About" },
  { href: "#skills", icon: CodeIcon, label: "Skills" },
  { href: "#projects", icon: FolderIcon, label: "Projects" },
  { href: "#experience", icon: BriefcaseIcon, label: "Experience" },
  { href: "#contact", icon: MailIcon, label: "Contact" },
];

const socialItems = [
  { name: "GitHub", url: "https://github.com/princeajuzie7", icon: GithubIcon },
  { name: "LinkedIn", url: "https://linkedin.com/princeajuzie", icon: LinkedinIcon },
  { name: "Twitter", url: "https://twitter.com/princeajuzie7", icon: TwitterIcon },
]

export function Navigation() {
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    setMounted(true)
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)

    // Track active section on scroll
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.replace("#", ""))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("resize", checkMobile)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace("#", ""))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(id.replace("#", ""))
    }
  }

  const MobileMenu = () => {
    const [open, setOpen] = useState(false)

    const handleMenuClick = () => {
      setOpen(!open)
    }

    const handleNavItemClick = (id: string) => {
      scrollToSection(id)
      setOpen(false)
    }

    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden fixed top-4 left-4 z-50 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-md"
            onClick={handleMenuClick}
          >
            <MenuIcon className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-[300px] sm:w-[350px] border-r border-border/50 bg-background/95 backdrop-blur-md p-0"
        >
          <div className="flex flex-col h-full">
            <div className="p-6 border-b border-border/10">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <User2Icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Prince Ajuzie</h2>
                  <p className="text-xs text-muted-foreground">Software Engineer</p>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-auto py-4">
              <nav className="flex flex-col gap-1 px-2">
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    variant="ghost"
                    className={cn(
                      "justify-start rounded-lg h-12 px-4 w-full text-base font-medium",
                      activeSection === item.href.replace("#", "") && "bg-primary/10 text-primary",
                    )}
                    onClick={() => handleNavItemClick(item.href)}
                  >
                    <item.icon className="mr-3 h-5 w-5 text-primary" />
                    {item.label}
                  </Button>
                ))}
              </nav>

              <Separator className="my-4 opacity-50" />

              <div className="px-4 py-2">
                <h3 className="text-sm font-medium text-muted-foreground mb-3 px-2">Connect</h3>
                <div className="flex flex-wrap gap-2 px-2">
                  {socialItems.map((item) => (
                    <Button key={item.name} variant="outline" size="icon" className="rounded-full h-10 w-10" asChild>
                      <Link href={item.url} target="_blank" rel="noopener noreferrer" aria-label={item.name}>
                        <item.icon className="h-4 w-4" />
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-border/10 mt-auto">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Theme</span>
                <ModeToggle />
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    )
  }

  if (!mounted) return null

  return (
    <>
      {isMobile ? (
        <div className="z-50">
          <MobileMenu />
        </div>
      ) : (
        <TooltipProvider delayDuration={100}>
          <Dock className="!fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            {navItems.map((item) => (
              <DockIcon
                key={item.label}
                className={cn(
                  activeSection === item.href.replace("#", "") &&
                    "after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-primary after:rounded-full",
                )}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className={cn(
                        "rounded-full transition-all duration-300",
                        activeSection === item.href.replace("#", "") && "bg-primary/10 text-primary",
                      )}
                      onClick={() => scrollToSection(item.href)}
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="sr-only">{item.label}</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="font-medium">
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}
            <Separator orientation="vertical" className="h-10 mx-1" />
            <div className="flex items-center gap-1">
              {socialItems.map((item) => (
                <DockIcon key={item.name}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full flex items-center justify-center transition-all duration-300 hover:bg-primary/10"
                        asChild
                      >
                        <Link href={item.url} target="_blank" rel="noopener noreferrer">
                          <item.icon className="h-5 w-5" />
                          <span className="sr-only">{item.name}</span>
                        </Link>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="font-medium">
                      <p>{item.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </DockIcon>
              ))}
            </div>
            <Separator orientation="vertical" className="h-10 mx-1" />
            <DockIcon>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center justify-center">
                    <ModeToggle />
                  </div>
                </TooltipTrigger>
                <TooltipContent side="top" className="font-medium">
                  <p>Theme</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          </Dock>
        </TooltipProvider>
      )}
    </>
  )
}

