"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState("all")

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

  const projects = [
    {
      title: "Bilwills",
      description:
        "An animated icon library providing motion-based icons for modern interfaces. Bilwills offers customizable, performant SVG animations that bring life to UI components.",
      image: "/bilwills.png",
      tags: [
        "SVG",
        "Animation",
        "React",
        "Vue",
        "UI/UX",
        "TypeScript",
        "framer-motion",
      ],
      liveUrl: "https://bilwills.com",
      githubUrl: "https://github.com/princeajuzie/bilwills",
      category: "saas",
      status: "coming-soon",
    },
    {
      title: "Enterbox",
      description:
        "An all-in-one platform designed to help businesses, content creators, and organizations streamline their digital presence and achieve sustainable growth. With a focus on simplicity, innovation, and ease of use, Enterbox empowers users to build, manage, and scale custom digital platforms without the need for multiple services.",
      image: "/enterbox.png",
      tags: [
        "NodeJS",
        "ExpressJS",
        "JavaScript",
        "NextJS",
        "ReactQuery",
        "MongoDB",
        "TailwindCSS",
        "TypeScript",
        "Socket.IO",
        "SwiperJS",
        "ApexChart",
      ],
      liveUrl: "https://enterbox.app",
      githubUrl: "https://github.com/princeajuzie/enterbox",
      category: "saas",
    },
    {
      title: "proliferate",
      description:
        "Proliferate is an educational platform that connects students with tutors, fostering curiosity-driven learning. The website serves as a centralized hub for learners to discover qualified tutors, explore various subject categories, and access engaging content designed to expand their knowledge base.",
      image: "/proliferate.png",
      tags: [
        "NextJS",
        "TailwindCSS",
        "ContextAPI",
        "date-fns",
        "ReactQuery",
        "Socket.IO",
        "ApexChart",
        "wysiwg",
        "expressJs",
        "Typescript",
      ],
      githubUrl: "",
      liveUrl: "https://www.proliferate.ai",
      category: "gigs",
    },
    {
      title: "AbcNetworks24",
      description:
        "A versatile web application designed to enhance users' online experience. Integrating both a dynamic blogging platform and a seamless e-commerce store, it caters to a wide array of interests, purchasing products across different categories.",
      image: "/abcnetworks24.png",
      tags: [
        "NextJS",
        "JavaScript",
        "TailwindCSS",
        "ContextAPI",
        "CSS",
        "Socket.IO",
        "SwiperJS",
        "expressJs",
      ],
      liveUrl: "https://www.abcnetworks24.com",
      githubUrl: "",
      category: "fullstack",
    },
    // {
    //   title: "CinewaveMovies",
    //   description:
    //     "A web application that leverages the TMDB API. It provides users with the ability to search for movies and TV shows, watch trailers, and includes a bookmarking functionality.",
    //   image: "/placeholder.svg?height=600&width=800",
    //   tags: ["TailwindCSS", "ContextAPI", "NextJS", "TypeScript", "CSS"],
    //   liveUrl: "https://cinewave.vercel.app",
    //   githubUrl: "https://github.com/princeajuzie/cinewave",
    //   category: "frontend",
    // },
  ];

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <section
      id="projects"
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
                Featured Projects
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              A selection of projects that showcase my approach to design and
              development.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Tabs
              defaultValue="all"
              className="w-full"
              onValueChange={setActiveTab}
            >
              <div className="flex justify-center mb-12">
                <TabsList className="bg-card/50 border border-border/50">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="saas">SaaS</TabsTrigger>
                  <TabsTrigger value="fullstack">Full-Stack</TabsTrigger>
                  <TabsTrigger value="gigs">gigs</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value={activeTab} className="mt-0">
                <div className="grid md:grid-cols-2 gap-8">
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="bg-card/50 hover:bg-card/80 transition-all duration-300 border-none group overflow-hidden">
                        <div className="relative aspect-video overflow-hidden">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                          {project.status === "coming-soon" && (
                            <div className="absolute top-4 left-4 z-10">
                              <div className="bg-primary/80 text-primary-foreground text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg backdrop-blur-sm">
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-foreground"></span>
                                </span>
                                Coming Soon
                              </div>
                            </div>
                          )}
                        </div>
                        <CardContent className="p-6 relative flex flex-col h-full">
                          <div className="absolute top-0 right-0 mt-4 mr-4">
                            <Badge
                              variant="secondary"
                              className="bg-primary/10 text-primary"
                            >
                              {project.category}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-4">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map((tag) => (
                              <Badge
                                key={tag}
                                variant="outline"
                                className="bg-secondary/10 text-secondary-foreground text-xs"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex flex-wrap gap-3 mt-auto">
                            {project.status !== "coming-soon" ? (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-1 text-sm font-medium text-primary transition-all hover:text-primary/80"
                              >
                                <span className="relative overflow-hidden">
                                  <span className="relative inline-block">
                                    Visit Site
                                  </span>
                                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                                </span>
                                <span className="relative flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:translate-x-1">
                                  <ExternalLink className="h-3 w-3 text-primary" />
                                </span>
                              </a>
                            ) : (
                              <span className="inline-flex items-center gap-1 text-sm font-medium text-primary/50 cursor-not-allowed">
                                <span>Visit Site</span>
                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/5">
                                  <ExternalLink className="h-3 w-3" />
                                </span>
                              </span>
                            )}

                            {project.category !== "saas" && project.githubUrl !== "" && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-all hover:text-foreground"
                              >
                                <span className="relative overflow-hidden">
                                  <span className="relative inline-block">
                                    View Code
                                  </span>
                                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-foreground origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                                </span>
                                <span className="relative flex items-center justify-center w-6 h-6 rounded-full bg-secondary/50 transition-all duration-300 group-hover:bg-secondary group-hover:translate-x-1">
                                  <Github className="h-3 w-3" />
                                </span>
                              </a>
                            )}
                          </div>
                          <div className="absolute bottom-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <ArrowRight className="h-6 w-6 text-primary" />
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

