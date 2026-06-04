"use client";

import { motion } from "motion/react";
import React from "react";

export function TrustMetrics() {
  return (
    <section className="py-24 relative overflow-hidden bg-surface-0">
      <div className="absolute inset-0 bg-brand-500/5 mix-blend-screen"></div>
      
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-pink/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-bold text-ink-500 uppercase tracking-[0.2em] mb-12"
        >
          Trusted by innovative teams worldwide
        </motion.p>

        <div className="flex flex-wrap justify-center gap-12 md:gap-20">
          {["Next.js", "OpenAI", "Anthropic", "Vercel", "AWS", "Stripe"].map((brand, i) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, type: "spring" }}
              className="text-2xl sm:text-3xl font-display font-bold text-ink-300/40 hover:text-ink-100 transition-colors duration-500 cursor-default"
            >
              {brand}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}