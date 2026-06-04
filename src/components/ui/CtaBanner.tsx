import { motion } from "motion/react";
import { ShieldCheck } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--brand-500)]/5"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="glass-card p-12 md:p-20"
        >
          <ShieldCheck className="w-16 h-16 text-[var(--brand-500)] mx-auto mb-6" />
          <h2 className="heading-display text-[var(--font-size-h2)] md:text-[var(--font-size-h3)] mb-6">
            Ready to scale your business?
          </h2>
          <p className="text-[var(--font-size-body)] text-[var(--ink-300)] mb-10 max-w-xl mx-auto">
            Book a free discovery call today. We'll audit your current tech stack and outline an AI-integration roadmap.
          </p>
          <a href="/contact" className="btn-primary-glow px-8 py-4 text-lg">
            Book Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}