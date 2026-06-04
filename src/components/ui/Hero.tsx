"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { MagneticButton } from "./MagneticButton";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  
  // Set up scroll tracking for the parallax effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Transform values based on scroll depth (Digital Flipbook effect)
  // If user prefers reduced motion, we disable the transforms by keeping values static
  const imageScale = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [1, 1] : [1, 1.2]);
  const imageOpacity = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0.3, 0.3] : [0.3, 0.1]);
  const textY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, -100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], prefersReducedMotion ? [1, 1] : [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[95vh] flex flex-col items-center justify-center pt-24 pb-20 overflow-hidden bg-black text-center"
    >
      {/* Scroll-Driven Parallax Background */}
      <motion.div 
        className="absolute inset-0 z-0 origin-top"
        style={{ scale: imageScale, opacity: imageOpacity }}
      >
        <Image 
          src="/images/hero_fluid.png" 
          alt="Abstract Fluid Background" 
          fill
          priority
          className="object-cover mix-blend-screen"
        />
        {/* Soft edge fade masks */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent"></div>
      </motion.div>
      
      <motion.div 
        className="max-w-5xl mx-auto px-4 relative z-10 flex flex-col items-center"
        style={{ y: textY, opacity: textOpacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <span className="text-ink-400 font-semibold tracking-[0.3em] uppercase text-xs">
            Niks Consulting Pro
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="heading-display mb-6"
        >
          Intelligence, <br />
          <span className="gradient-text-subtle">Engineered.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
          className="text-xl md:text-2xl text-ink-300 max-w-2xl mx-auto font-normal leading-relaxed mb-12 tracking-tight"
        >
          We architect pure, uncompromising AI workflows for enterprises. <br className="hidden md:block" />
          No bloat. Just scalable, raw performance.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <MagneticButton>
            <Link href="/contact" className="btn-primary w-full sm:w-auto text-lg block">
              Book Discovery
            </Link>
          </MagneticButton>
          
          <MagneticButton>
            <Link href="/services" className="btn-secondary w-full sm:w-auto text-lg group block">
              Explore Architecture
              <ArrowRight size={18} className="ml-2 opacity-50 group-hover:opacity-100 transition-opacity inline" />
            </Link>
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
}