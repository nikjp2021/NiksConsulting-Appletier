"use client";

import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function ServicesPage() {
  const services = [
    {
      title: "AI Solutions & Agentic AI",
      description: "AI-powered solutions that automate, optimize, and transform your business operations. We build custom agentic workflows to act as autonomous workers for your data pipelines and customer support.",
      features: ["Custom LLM integration", "Autonomous AI Agents", "RAG Systems", "AI Customer Support"],
      media: { type: "video", src: "/media/Generate_Video_Extreme_close_.mp4" },
    },
    {
      title: "AI Automation",
      description: "Streamline operations with intelligent automation that learns and adapts. Replace manual data entry and repetitive tasks with reliable, fault-tolerant AI scripts.",
      features: ["Workflow Automation", "Data Pipeline Optimization", "Zapier/Make Integrations", "Custom Scripts"],
      media: { type: "image", src: "/media/Copilot_20260524_190748.png" },
    },
    {
      title: "Digital Transformation",
      description: "Strategic DX initiatives that drive measurable growth for startups and SMEs. We audit your current stack and implement modern, scalable architecture.",
      features: ["Tech Stack Audit", "Cloud Migration", "Legacy System Modernization", "CTO as a Service"],
      media: { type: "image", src: "/media/Copilot_20260524_190259.png" },
    },
    {
      title: "Website & App Development",
      description: "Stunning, high-performance websites and apps built for the AI era. We use Next.js, React, and Tailwind CSS to build apps that load instantly and look incredible.",
      features: ["Next.js Fullstack Apps", "UI/UX Design", "E-commerce Platforms", "SaaS Dashboards"],
      media: { type: "video", src: "/media/Generate_video_Fast_dolly_sho.mp4" },
    },
  ];

  return (
    <div className="py-32 bg-black min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="heading-display text-5xl md:text-7xl mb-6 tracking-tight"
          >
            Our <span className="gradient-text-vibrant">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-ink-300 font-light max-w-2xl mx-auto"
          >
            End-to-end digital transformation and AI integration specifically architected for scaling enterprises.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="bento-card overflow-hidden flex flex-col group h-full"
            >
              <div className="relative w-full h-64 md:h-72 shrink-0">
                {svc.media.type === "video" ? (
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000"
                  >
                    <source src={svc.media.src} type="video/mp4" />
                  </video>
                ) : (
                  <img 
                    src={svc.media.src} 
                    alt={svc.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-1 to-transparent"></div>
              </div>

              <div className="p-8 md:p-10 flex-1 flex flex-col relative z-10 mt-[-40px]">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 tracking-tight">{svc.title}</h3>
                <p className="text-ink-300 leading-relaxed mb-8 flex-1">
                  {svc.description}
                </p>
                <ul className="space-y-4">
                  {svc.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm text-ink-200 font-medium">
                      <CheckCircle2 className="text-brand-500" size={18} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
