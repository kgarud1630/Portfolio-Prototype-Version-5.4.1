"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  number: string;
}

export const SectionHeader = ({ title, subtitle, number }: SectionHeaderProps) => (
    <div className="mb-24 relative">
      <div className="absolute -left-16 top-0 h-full w-[1px] bg-border flex flex-col justify-between py-2 overflow-hidden">
        <div className="w-2 h-2 bg-primary -ml-[3.5px]" />
        <div className="w-1 h-1 bg-border -ml-[1.5px]" />
        <div className="w-1 h-1 bg-border -ml-[1.5px]" />
        <div className="w-2 h-2 bg-accent -ml-[3.5px]" />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <div className="flex items-center gap-4">
          <span className="font-mono text-[10px] text-accent font-bold tracking-[0.3em]">REF_00{number}</span>
          <div className="h-[1px] flex-1 bg-border" />
          <span className="font-mono text-[8px] text-muted-foreground uppercase tracking-widest opacity-40">COORD: {number} // 40.7128° N</span>
        </div>
        
        <div className="space-y-1">
          <p className="text-primary font-mono text-[10px] font-bold uppercase tracking-[0.2em]">
            {subtitle}
          </p>
            <h2 className="text-5xl md:text-7xl font-display tracking-tighter uppercase leading-[0.9]">
            {title}
          </h2>
        </div>
      </motion.div>
    </div>
);
