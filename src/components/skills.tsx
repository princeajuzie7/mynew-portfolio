"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const skills = [
    { name: "Next.js", level: "Advanced" },
    { name: "React", level: "Advanced" },
    { name: "TypeScript", level: "Advanced" },
    { name: "Express.js", level: "Intermediate" },
    { name: "MongoDB", level: "Intermediate" },
    { name: "PostgreSQL", level: "Advanced" },
    { name: "Monorepo", level: "Advanced" },
    { name: "Tailwind CSS", level: "Advanced" },
  ];

  const quotes = [
    {
      text: "If users need a manual, the design has failed",
      author: "Steve Jobs",
    },
    {
      text: "Every interaction should feel magical and delightful",
      author: "Steve Jobs",
    },
    {
      text: "The best interface is no interface - make technology invisible",
      author: "Steve Jobs",
    },
  ]

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 lg:px-4 px-0 bg-dot-pattern"
    >
      <div className="container mx-auto lg:px-0 px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-balance">
              <span className="text-gradient bg-gradient-to-r from-primary via-primary/80 to-primary/60">
                Focus on making the product intuitive
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              My technical skills and design expertise allow me to create
              seamless experiences across the entire stack.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-12"
          >
            <div className="space-y-8">
              <h3 className="text-xl font-semibold mb-6">
                Technical Proficiency
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <Card
                    key={index}
                    className="bg-card/50 hover:bg-card/80 transition-all duration-300 border-none overflow-hidden group"
                  >
                    <CardContent className="p-4 relative">
                      <h4 className="font-medium text-base mb-1 z-10 relative">
                        {skill.name}
                      </h4>
                      <Badge
                        variant="secondary"
                        className="text-xs font-normal bg-primary/10 text-primary z-10 relative"
                      >
                        {skill.level}
                      </Badge>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/0 group-hover:translate-x-full transition-transform duration-300 ease-in-out" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-xl font-semibold mb-6">Design Philosophy</h3>
              <div className="space-y-6">
                {quotes.map((quote, index) => (
                  <Card
                    key={index}
                    className="bg-card/50 hover:bg-card/80 transition-all duration-300 border-none overflow-hidden group"
                  >
                    <CardContent className="p-6 relative">
                      <blockquote className="relative z-10">
                        <p className="text-lg mb-2 italic">{quote.text}</p>
                        <footer className="text-sm text-muted-foreground">
                          — {quote.author}
                        </footer>
                      </blockquote>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/0 group-hover:translate-x-full transition-transform duration-300 ease-in-out" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

