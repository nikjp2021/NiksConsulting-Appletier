"use client";

import { motion, type Variants } from "motion/react";
import { ArrowRight, Mail, MapPin } from "lucide-react";

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

export default function ContactPage() {
  return (
    <div className="py-32 relative overflow-hidden bg-black min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="text-center mb-20"
        >
          <motion.div variants={fadeUpBlur} className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-10 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-80"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-500 shadow-[0_0_10px_var(--brand-500)]"></span>
            </span>
            <span className="text-xs font-semibold text-ink-200 tracking-[0.2em] uppercase">Let's Connect</span>
          </motion.div>

          <motion.h1 variants={fadeUpBlur} className="heading-display text-5xl md:text-7xl mb-8 tracking-tight leading-[1.1]">
            Ready to <span className="gradient-text-vibrant pb-2">scale?</span>
          </motion.h1>
          <motion.p variants={fadeUpBlur} className="text-xl text-ink-300 font-light max-w-2xl mx-auto">
            Book a free discovery call and let's discuss your next big digital leap.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.3, type: "spring", stiffness: 100, damping: 20 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bento-card overflow-hidden h-full flex flex-col">
              <div className="relative w-full h-48 md:h-64">
                <img src="/media/Copilot_20260525_015955.png" alt="Contact Us" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-1 to-transparent"></div>
              </div>
              <div className="p-8 flex items-start gap-4 flex-1 relative z-10 mt-[-60px]">
                <div className="w-12 h-12 rounded-xl bg-brand-500/20 flex items-center justify-center shrink-0 backdrop-blur-md border border-white/10 shadow-2xl">
                  <Mail className="text-brand-500" size={24} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-ink-100 mb-2">Email Us</h3>
                  <p className="text-ink-400 font-light mb-4 text-shadow-sm">We usually respond within 24 hours.</p>
                  <a href="mailto:hello@niksconsulting.com" className="text-brand-500 font-medium hover:underline">hello@niksconsulting.com</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form 
            initial={{ opacity: 0, x: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.4, type: "spring", stiffness: 100, damping: 20 }}
            className="lg:col-span-3 bento-card p-8 md:p-12"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-3">
                <label className="text-sm font-medium text-ink-300">First Name</label>
                <input 
                  type="text" 
                  className="w-full bg-surface-1/50 border border-white/10 rounded-xl px-5 py-4 text-ink-100 focus:outline-none focus:border-brand-500 focus:bg-white/5 transition-all shadow-inner"
                  placeholder="John"
                />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-medium text-ink-300">Last Name</label>
                <input 
                  type="text" 
                  className="w-full bg-surface-1/50 border border-white/10 rounded-xl px-5 py-4 text-ink-100 focus:outline-none focus:border-brand-500 focus:bg-white/5 transition-all shadow-inner"
                  placeholder="Doe"
                />
              </div>
            </div>
            
            <div className="space-y-3 mb-6">
              <label className="text-sm font-medium text-ink-300">Email Address</label>
              <input 
                type="email" 
                className="w-full bg-surface-1/50 border border-white/10 rounded-xl px-5 py-4 text-ink-100 focus:outline-none focus:border-brand-500 focus:bg-white/5 transition-all shadow-inner"
                placeholder="john@company.com"
              />
            </div>

            <div className="space-y-3 mb-8">
              <label className="text-sm font-medium text-ink-300">How can we help?</label>
              <textarea 
                rows={5}
                className="w-full bg-surface-1/50 border border-white/10 rounded-xl px-5 py-4 text-ink-100 focus:outline-none focus:border-brand-500 focus:bg-white/5 transition-all shadow-inner resize-none"
                placeholder="Tell us about your project or digital transformation needs..."
              />
            </div>

            <button type="submit" className="btn-primary-glow w-full py-5 text-lg rounded-xl">
              Send Message <ArrowRight size={20} className="ml-2" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
