"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center pt-24 pb-20 overflow-hidden bg-black text-center">
      {/* Absolute High-End Fluid Image Background */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero_fluid.png" 
          alt="Abstract Fluid Background" 
          fill
          priority
          className="object-cover opacity-30 mix-blend-screen"
        />
        {/* Soft edge fade masks */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <span className="text-ink-400 font-semibold tracking-[0.3em] uppercase text-xs">
            Niks Consulting Pro
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
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
          <Link href="/contact" className="btn-primary w-full sm:w-auto text-lg">
            Book Discovery
          </Link>
          <Link href="/services" className="btn-secondary w-full sm:w-auto text-lg group">
            Explore Architecture
            <ArrowRight size={18} className="ml-2 opacity-50 group-hover:opacity-100 transition-opacity" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}