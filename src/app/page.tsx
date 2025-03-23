import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import { Navigation } from "@/components/navigation"
import Skills from "@/components/skills"
import ScrollToTop from "@/components/scroll-to-top"
import { Suspense } from "react"
import Loading from "./loading"

export const metadata: Metadata = {
  title: "Prince Ajuzie | Software Engineer & SAAS Builder",
  description:
    "Software engineer specializing in building exceptional digital experiences with a focus on performance and scalability.",
  keywords: [
    "Prince Ajuzie",
    "Software Engineer",
    "Full Stack Developer",
    "SAAS Builder",
    "Web Development",
    "React",
    "Next.js",
    "TypeScript",
  ],
  alternates: {
    canonical: "https://www.princeajuzie.me",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Suspense fallback={<Loading />}>
        <Navigation />
        <Hero />
      
        <About />
        <Services />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <ScrollToTop />
      </Suspense>
    </main>
  )
}

