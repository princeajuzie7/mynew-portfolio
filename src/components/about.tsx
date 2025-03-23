"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="about" ref={ref} className="py-24 lg:px-4 px-0 relative">
      <div className="absolute inset-0 bg-dot-pattern"></div>

      <div className="container mx-auto relative lg:px-0 px-4 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-balance">
              <span className="text-gradient bg-gradient-to-r from-primary via-primary/80 to-primary/60">
                Simplicity is the ultimate sophistication
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              I combine design thinking with technical expertise to create
              products that are both beautiful and functional.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="relative aspect-square z-20">
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg">
                {/* Dark overlay to dim the image */}
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 z-20" />
                <img
                  src="/princeajuzie.png"
                  alt="About Me"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-8">
              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-semibold mb-3">My Approach</h3>
                <p className="text-muted-foreground mb-4">
                  I believe that great design is not just about how something
                  looks, but how it works. My approach centers on understanding
                  user needs and business goals to create solutions that deliver
                  real value.
                </p>
                <p className="text-muted-foreground mb-4">
                  With a focus on simplicity and functionality, I strive to
                  create digital experiences that are both beautiful and
                  intuitive. Every pixel, every interaction, and every line of
                  code is crafted with purpose and attention to detail.
                </p>
                <p className="text-sm italic text-muted-foreground">
                  "Design is not just what it looks like and feels like. Design
                  is how it works." — Steve Jobs
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
