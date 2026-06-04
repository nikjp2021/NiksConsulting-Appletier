"use client";

import { motion, type Variants } from "motion/react";

const fadeUpBlur: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 200, damping: 25 } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function AboutPage() {
  return (
    <div className="py-32 relative overflow-hidden bg-black min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="text-center mb-20"
        >
          <motion.div variants={fadeUpBlur} className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-10 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-amber opacity-80"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-amber shadow-[0_0_10px_var(--accent-amber)]"></span>
            </span>
            <span className="text-xs font-semibold text-ink-200 tracking-[0.2em] uppercase">Our Story</span>
          </motion.div>

          <motion.h1 variants={fadeUpBlur} className="heading-display text-5xl md:text-7xl mb-8 tracking-tight leading-[1.1]">
            About <br className="hidden md:block"/>
            <span className="gradient-text-vibrant pb-2">Nik's Consulting</span>
          </motion.h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.3, type: "spring", stiffness: 100, damping: 20 }}
          className="bento-card p-8 md:p-14 space-y-12"
        >
          <div>
            <h2 className="font-display font-bold text-3xl text-ink-100 mb-6 tracking-tight">Our Mission</h2>
            <p className="text-ink-300 leading-relaxed text-lg font-light">
              At Nik's Consulting, we believe that AI should not be an inaccessible buzzword. Our mission is to demystify artificial intelligence and digital transformation, bringing production-ready, agentic workflows to startups and SMEs who want to compete at a global scale. We turn complex architectures into simple, scalable, and highly profitable systems.
            </p>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

          <div>
            <h2 className="font-display font-bold text-3xl text-ink-100 mb-6 tracking-tight">The Team</h2>
            <p className="text-ink-300 leading-relaxed text-lg font-light">
              We are a collective of senior engineers, award-winning UI/UX designers, and business strategists. We don't just hand you a slide deck and walk away. We build the infrastructure, deploy the agents, and optimize the funnels that drive real, measurable ROI. Your growth is exactly what fuels our passion.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
