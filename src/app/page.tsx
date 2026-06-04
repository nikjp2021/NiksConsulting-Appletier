"use client";

import { Hero } from "@/components/ui/Hero";
import { InfiniteMarquee } from "@/components/ui/InfiniteMarquee";
import { ServicesGrid } from "@/components/ui/ServicesGrid";
import { TrustMetrics } from "@/components/ui/TrustMetrics";
import { CtaBanner } from "@/components/ui/CtaBanner";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <Hero />
      
      {/* Infinite Marquee */}
      <InfiniteMarquee />
      
      {/* Services Grid */}
      <ServicesGrid />
      
      {/* Trust Metrics */}
      <TrustMetrics />
      
      {/* CTA Banner */}
      <CtaBanner />
      
      {/* Global Footer is in layout */}
    </div>
  );
}