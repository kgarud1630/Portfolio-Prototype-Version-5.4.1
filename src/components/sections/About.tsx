"use client";

import React from "react";
import { ShieldCheck, Target, Zap } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

export const About = () => (
    <section id="about" className="relative">
      <SectionHeader title="ENGINEERING IDENTITY" subtitle="Mindset & Intent" number="1" />
      <div className="grid md:grid-cols-2 gap-24 items-start">
        <div className="space-y-12">
          <div className="p-10 border border-border bg-card relative group overflow-hidden">
            <div className="absolute inset-0 bg-blueprint opacity-[0.03] pointer-events-none" />
            <div className="absolute top-0 right-0 p-3 font-mono text-[9px] text-muted-foreground uppercase tracking-widest border-l border-b border-border bg-muted/50">
              SYS_SPEC: DEVOPS-PLATFORM
            </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent" />
            
            <p className="text-2xl leading-[1.4] font-medium tracking-tight">
              I am a self-driven <span className="text-primary font-bold">DevOps and platform-focused engineer</span> with a strong interest in building reliable, automated, and scalable cloud systems.
            </p>
          </div>
          
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              My learning journey has been hands-on and project-driven, centered around understanding how real-world systems are designed, deployed, and operated. Rather than focusing only on application development, I gravitate toward the engineering layers that make applications reliable — infrastructure, automation pipelines, observability, security practices, and operational stability.
            </p>
            <p>
              I enjoy breaking down complex systems, understanding their failure points, and iteratively improving them through better design and automation. My work reflects a strong bias toward clarity, simplicity, and production readiness, even when building experimental systems.
            </p>
          </div>
        </div>
        
        <div className="space-y-10">
          <div className="space-y-6">
            <h3 className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-accent flex items-center gap-2">
              <Target className="w-4 h-4" /> Engineering Philosophy
            </h3>
            <p className="text-2xl leading-relaxed text-foreground font-display italic font-black uppercase italic">
              "I believe strong systems are built through <span className="text-primary">automation</span>, <span className="text-primary">observability</span>, and <span className="text-primary">continuous iteration</span>."
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="p-8 bg-muted/30 border border-border relative group hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-background border border-border text-primary">
                  <Zap className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest opacity-50">Operational_Bias</h4>
                  <p className="text-sm font-medium leading-relaxed">
                    A relentless focus on the layers that ensure application uptime, security, and scalability.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-muted/50 border border-border relative">
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-primary" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-accent" />
              
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span className="text-[10px] font-mono uppercase tracking-widest font-bold opacity-40">Journey_Mindset</span>
              </div>
              <p className="text-base font-mono leading-relaxed italic text-foreground/80">
                Concepts are reinforced only after they are implemented, tested, and refined in practical environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
);
