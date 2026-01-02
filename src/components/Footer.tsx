"use client";

import React from "react";

const footerLinks = [
  { href: "#about", label: "ABOUT" },
  { href: "#services", label: "SERVICES" },
  { href: "#tech", label: "STACK" },
  { href: "#work", label: "WORK" },
  { href: "#contact", label: "CONTACT" },
];

export const Footer = () => (
  <footer className="py-16 border-t border-border bg-card z-10 relative">
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary flex items-center justify-center font-display text-primary-foreground text-sm">
              KG
            </div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">KIRAN_GARUD.SYS</span>
          </div>
          <p className="font-mono text-[10px] text-muted-foreground max-w-xs leading-relaxed">
            Full-stack developer crafting digital experiences with modern technologies and creative solutions.
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold">QUICK_LINKS</span>
          <div className="flex flex-wrap gap-6 font-mono text-[10px] uppercase tracking-[0.2em]">
            {footerLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold">STATUS</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="font-mono text-[10px] text-muted-foreground">AVAILABLE FOR WORK</span>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.3em]">
          © 2025 KIRAN_GARUD.SYS // ALL RIGHTS RESERVED
        </div>
        <div className="flex gap-8 font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
          <span>v1.0.0-PROD</span>
          <span className="italic">Built with Next.js + AI</span>
        </div>
      </div>
    </div>
  </footer>
);
