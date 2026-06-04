"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import Image from "next/image";
import React, { useRef } from "react";

export function ServicesGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Create subtle parallax effects for the images
  const imageY1 = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [-30, 30]);
  const imageY2 = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [-50, 50]);
  const imageY3 = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [-20, 40]);

  return (
    <section ref={containerRef} className="py-32 bg-black overflow-hidden" id="services">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="heading-display text-4xl md:text-5xl mb-6"
          >
            Capabilities
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-subtle"
          >
            Deploy autonomous agents, automate complex pipelines, and extract deep insights using state-of-the-art architecture.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          
          {/* Card 1: Agentic Workflows */}
          <motion.div 
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="bento-card col-span-1 md:col-span-2 group min-h-[500px] flex flex-col md:flex-row items-center"
          >
            <div className="p-10 md:p-16 flex-1 z-10 w-full md:w-1/2">
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-ink-400 mb-4 block">Core Engine</span>
              <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">Agentic AI <br/>Workflows</h3>
              <p className="text-ink-300 text-lg leading-relaxed max-w-md">
                We build autonomous LLM-powered agents that don't just chat—they execute. Multi-step reasoning, tool usage, and full API integrations.
              </p>
            </div>
            <div className="relative h-64 md:h-[500px] w-full md:w-1/2 flex-shrink-0 overflow-hidden">
              <motion.div style={{ y: imageY1 }} className="absolute inset-[-50px]">
                <Image 
                  src="/images/bento_engine.webp" 
                  alt="AI Neural Engine" 
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out opacity-90"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-transparent via-transparent to-[#111111]"></div>
            </div>
          </motion.div>

          {/* Card 2: Big Data */}
          <motion.div 
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="bento-card flex flex-col h-[500px] group overflow-hidden"
          >
            <div className="p-10 z-10">
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-ink-400 mb-3 block">Insights</span>
              <h3 className="text-3xl font-display font-bold text-white mb-4 tracking-tight">Data Intelligence</h3>
              <p className="text-ink-300">Predictive analytics and real-time visualization.</p>
            </div>
            <div className="relative flex-1 w-full mt-auto">
              <motion.div style={{ y: imageY2 }} className="absolute inset-[-50px]">
                <Image 
                  src="/images/bento_graph.webp" 
                  alt="Data Visualization" 
                  fill
                  className="object-cover object-bottom group-hover:scale-105 transition-transform duration-1000 ease-out opacity-80"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[#111111]"></div>
            </div>
          </motion.div>

          {/* Card 3: Global Scale */}
          <motion.div 
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="bento-card flex flex-col h-[500px] group overflow-hidden"
          >
            <div className="p-10 z-10">
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-ink-400 mb-3 block">Infrastructure</span>
              <h3 className="text-3xl font-display font-bold text-white mb-4 tracking-tight">Global Networks</h3>
              <p className="text-ink-300">Serverless deployments scaled to millions.</p>
            </div>
            <div className="relative flex-1 w-full mt-auto">
              <motion.div style={{ y: imageY3 }} className="absolute inset-[-50px]">
                <Image 
                  src="/images/bento_globe.webp" 
                  alt="Global Network Connectivity" 
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out opacity-80"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[#111111]"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}