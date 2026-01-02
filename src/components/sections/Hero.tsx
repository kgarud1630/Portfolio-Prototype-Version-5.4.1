"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Terminal } from "@/components/Terminal";

export const Hero = () => (
    <header className="relative min-h-screen flex flex-col justify-center items-center px-6 text-center z-10 pt-32 pb-12 overflow-hidden">
      {/* Decorative Lines */}
      <div className="absolute top-1/4 -left-12 w-64 h-[1px] bg-primary/20 rotate-[30deg] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-12 w-64 h-[1px] bg-accent/20 rotate-[30deg] pointer-events-none" />
      <div className="absolute top-0 right-[20%] w-[1px] h-full bg-border pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="space-y-16 w-full max-w-6xl relative"
      >
        <div className="space-y-6">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-4 bg-muted border border-border px-4 py-1.5"
          >
            <div className="w-2 h-2 bg-accent animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold">
              Status: <span className="text-primary">Operational</span> // System: <span className="text-primary">KRN-01</span>
            </span>
          </motion.div>

            <div className="relative">
              <h1 className="text-[12vw] md:text-[8rem] font-display tracking-tighter leading-[0.8] uppercase flex flex-col items-center">
              <motion.span 
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                Kiran
              </motion.span>
              <motion.span 
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="block text-primary relative"
              >
                Garud
                <span className="absolute -bottom-4 right-0 text-[12px] font-mono tracking-widest opacity-30 text-foreground">
                  [DevOps & Platform Engineer]
                </span>
              </motion.span>
            </h1>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl font-mono text-muted-foreground max-w-3xl mx-auto uppercase tracking-tighter pt-8"
          >
            Building <span className="text-accent italic">scalable, secure, and reliable</span> cloud platforms through automation, IaC, and production-focused engineering.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start text-left max-w-5xl mx-auto pt-16 border-t border-border">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-primary" />
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest opacity-50">Value Statement</h3>
              </div>
              <p className="text-xl leading-snug font-medium italic opacity-80">
                Clarity over creativity. I build production-ready systems that prioritize reliability and operational stability.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="rounded-none px-8 font-bold text-[10px] tracking-[0.2em] bg-primary hover:bg-primary/90 text-primary-foreground h-14 relative group overflow-hidden" asChild>
                <a href="#work">
                  <span className="relative z-10">VIEW_ENGINEERING_WORK</span>
                  <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </a>
              </Button>
              <div className="flex gap-2">
                <Button size="lg" variant="outline" className="rounded-none px-6 font-bold text-[10px] tracking-[0.2em] h-14 border-border hover:bg-muted" asChild>
                  <a href="https://github.com" target="_blank"><Github className="h-4 w-4" /></a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-none px-6 font-bold text-[10px] tracking-[0.2em] h-14 border-border hover:bg-muted" asChild>
                  <a href="#contact"><Mail className="h-4 w-4" /></a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-none px-6 font-bold text-[10px] tracking-[0.2em] h-14 border-border hover:bg-muted" asChild>
                  <a href="#"><FileText className="h-4 w-4" /></a>
                </Button>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/5 border border-primary/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <Terminal />
          </div>
        </div>
      </motion.div>
    </header>
);
