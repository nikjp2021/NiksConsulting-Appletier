"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "AI Solutions & Agentic AI",
      description: "AI-powered solutions that automate, optimize, and transform your business operations. We build custom agentic workflows to act as autonomous workers for your data pipelines and customer support.",
      features: ["Custom LLM integration", "Autonomous AI Agents", "RAG Systems", "AI Customer Support"],
    },
    {
      title: "AI Automation",
      description: "Streamline operations with intelligent automation that learns and adapts. Replace manual data entry and repetitive tasks with reliable, fault-tolerant AI scripts.",
      features: ["Workflow Automation", "Data Pipeline Optimization", "Zapier/Make Integrations", "Custom Scripts"],
    },
    {
      title: "Digital Transformation",
      description: "Strategic DX initiatives that drive measurable growth for startups and SMEs. We audit your current stack and implement modern, scalable architecture.",
      features: ["Tech Stack Audit", "Cloud Migration", "Legacy System Modernization", "CTO as a Service"],
    },
    {
      title: "Website & App Development",
      description: "Stunning, high-performance websites and apps built for the AI era. We use Next.js, React, and Tailwind CSS to build apps that load instantly and look incredible.",
      features: ["Next.js Fullstack Apps", "UI/UX Design", "E-commerce Platforms", "SaaS Dashboards"],
    },
  ];

  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="heading-display text-4xl md:text-6xl mb-6"
        >
          Our <span className="gradient-text-vibrant">Services</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-ink-400 max-w-2xl mx-auto"
        >
          We provide end-to-end digital transformation and AI integration services designed specifically for scaling startups and SMEs.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {services.map((svc, i) => (
          <motion.div
            key={svc.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8 hover:border-brand-500/50 transition-colors"
          >
            <h3 className="text-2xl font-bold font-display text-ink-100 mb-4">{svc.title}</h3>
            <p className="text-ink-300 mb-6 leading-relaxed">{svc.description}</p>
            <ul className="space-y-3">
              {svc.features.map(f => (
                <li key={f} className="flex items-center gap-3 text-sm text-ink-200">
                  <CheckCircle2 className="text-brand-500" size={18} />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
