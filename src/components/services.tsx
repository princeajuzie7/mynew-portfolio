"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Lightbulb, Rocket, ArrowRight } from "lucide-react"

export default function Services() {
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

  const services = [
    {
      icon: <Palette className="h-10 w-10 text-primary" />,
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user experiences through thoughtful design.",
      details: [
        "User-centered design approach",
        "Wireframing and prototyping",
        "Responsive design for all devices",
        "Accessibility considerations",
      ],
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Full-Stack Development",
      description: "Building robust applications with modern technologies from front to back.",
      details: [
        "Frontend: React, Vue, Next.js",
        "Backend: Node.js, Express, Django",
        "Database: MongoDB, PostgreSQL",
        "API Development and Integration",
      ],
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Design Systems",
      description: "Crafting scalable design systems that ensure consistency and efficiency.",
      details: [
        "Component library development",
        "Style guide creation",
        "Design tokens implementation",
        "Documentation for developers and designers",
      ],
    },
    {
      icon: <Rocket className="h-10 w-10 text-primary" />,
      title: "Performance Optimization",
      description: "Enhancing application speed and efficiency for better user experience.",
      details: [
        "Code optimization and refactoring",
        "Lazy loading and code splitting",
        "Caching strategies",
        "Server-side rendering and static generation",
      ],
    },
  ]

  return (
    <section
      id="services"
      ref={ref}
      className="py-24 lg:px-4 px-0 bg-dot-pattern"
    >
      <div className="container mx-auto lg:px-0 px-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-balance">
              <span className="text-gradient bg-gradient-to-r from-primary via-primary/80 to-primary/60">
                Services I Offer
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Leveraging cutting-edge technologies to deliver exceptional
              digital solutions tailored to your needs.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-card/50 hover:bg-card/80 transition-all duration-300 border-none group overflow-hidden"
              >
                <CardContent className="p-6 relative">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-primary/10 mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <ArrowRight className="h-4 w-4 text-primary mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <div className="absolute bottom-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

