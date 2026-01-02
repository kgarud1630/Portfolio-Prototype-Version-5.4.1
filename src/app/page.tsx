"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { Certs } from "@/components/sections/Certs";
import { Work } from "@/components/sections/Work";
import { Prototypes } from "@/components/sections/Prototypes";
import { Growing } from "@/components/sections/Growing";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-accent-foreground relative overflow-x-hidden">
      
      {/* Background Decor */}
      <div className="noise" />
      <div className="fixed inset-0 z-0 bg-blueprint opacity-40 pointer-events-none" />
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[10%] left-[5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[30%] h-[30%] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <Navbar />

      <Hero />

      <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 space-y-64 py-24 relative z-10">
        <About />
        <TechStack />
        <Certs />
        <Work />
        <Prototypes />
        <Growing />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
