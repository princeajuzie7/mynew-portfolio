"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
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

  const experiences = [
    {
      title: "Junior Engineer",
      company: "kshop",
      period: "Jan 2022 - Dec 2022",
      description:
        "I played a pivotal role in contributing to the development and enhancement of the company's e-commerce platform. Collaborating closely with senior developers, my responsibilities included implementing new features, optimizing site performance, and ensuring cross-browser compatibility to deliver an exceptional user experience.",
      skills: ["Next.js", "React", "E-commerce", "Performance Optimization"],
    },
    {
      title: "Software Engineer",
      company: "Tech minds",
      period: "2023 - Present",
      description:
        "Author and SAAS Builder focusing on creating innovative solutions and sharing knowledge with the tech community. Developed multiple full-stack applications using modern technologies.",
      skills: ["Full-Stack", "SAAS Development", "Technical Writing", "Leadership"],
    },
  ]

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "Ignatius Ajuru University",
      period: "Jan 2024 - Present",
      description:
        "Currently pursuing a degree in Computer Science, focusing on software development and computer systems.",
    },
  ]

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 lg:px-4 px-0 bg-dot-pattern"
    >
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-balance">
              <span className="text-gradient bg-gradient-to-r from-primary via-primary/80 to-primary/60">
                Perfection in details matters
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              My professional journey and educational background that have
              shaped my skills and expertise.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-12"
          >
            <div className="space-y-8">
              <h3 className="text-xl font-semibold mb-6">Work Experience</h3>
              <div className="space-y-6">
                {experiences.map((job, index) => (
                  <Card
                    key={index}
                    className="bg-card/50 hover:bg-card/80 transition-all duration-300 border-none group"
                  >
                    <CardContent className="p-6 space-y-4">
                      <div>
                        <div className="flex justify-between items-start flex-wrap gap-2">
                          <h4 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                            {job.title}
                          </h4>
                          <Badge
                            variant="outline"
                            className="bg-primary/10 text-primary"
                          >
                            {job.period}
                          </Badge>
                        </div>
                        <p className="text-primary">{job.company}</p>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {job.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-secondary/50 text-secondary-foreground text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-xl font-semibold mb-6">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card
                    key={index}
                    className="bg-card/50 hover:bg-card/80 transition-all duration-300 border-none group"
                  >
                    <CardContent className="p-6 space-y-4">
                      <div>
                        <div className="flex justify-between items-start flex-wrap gap-2">
                          <h4 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                            {edu.degree}
                          </h4>
                          <Badge
                            variant="outline"
                            className="bg-primary/10 text-primary"
                          >
                            {edu.period}
                          </Badge>
                        </div>
                        <p className="text-primary">{edu.institution}</p>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {edu.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="pt-8">
                <Card className="bg-card/50 hover:bg-card/80 transition-all duration-300 border-none group">
                  <CardContent className="p-6">
                    <blockquote className="relative">
                      <p className="text-lg mb-2 italic">
                        "Quality must go all the way through. The parts you
                        can't see should be as beautiful as the parts you can
                        see."
                      </p>
                      <footer className="text-sm text-muted-foreground">
                        — Steve Jobs
                      </footer>
                    </blockquote>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

