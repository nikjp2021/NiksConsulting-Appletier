"use client";

import { motion } from "motion/react";
import React from "react";

export function InfiniteMarquee() {
  const tools = [
    "Next.js 15",
    "Framer Motion",
    "Agentic AI",
    "Tailwind CSS v4",
    "TypeScript",
    "LangChain",
    "Anthropic Claude",
    "OpenAI GPT-4",
  ];

  const marqueeText = [...tools, ...tools, ...tools, ...tools];

  return (
    <section className="py-12 border-y border-white/5 bg-surface-1/50 overflow-hidden relative backdrop-blur-xl">
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-surface-0 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-surface-0 to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
          className="flex items-center gap-12 sm:gap-24 px-12"
        >
          {marqueeText.map((tool, index) => (
            <div key={index} className="flex items-center gap-4 group">
              <span className="text-xl sm:text-2xl font-display font-medium text-ink-300/40 transition-colors duration-500 group-hover:text-ink-100 cursor-default">
                {tool}
              </span>
              <span className="w-2 h-2 rounded-full bg-brand-500/30 group-hover:bg-accent-cyan group-hover:shadow-[0_0_10px_var(--accent-cyan)] transition-all duration-500"></span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}