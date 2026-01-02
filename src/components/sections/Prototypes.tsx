"use client";

import React from "react";
import { ExternalLink, Code, Zap } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

export const Prototypes = () => (
    <section id="prototypes" className="space-y-16">
      <SectionHeader title="LAB EXPERIMENTS" subtitle="Web App Prototypes" number="5" />
      
      <div className="p-8 bg-muted/30 border border-border mb-12">
        <p className="text-sm text-muted-foreground font-mono leading-relaxed uppercase tracking-tighter">
          Show web application delivery exposure, not frontend specialization. These projects are included for application lifecycle understanding.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {[
          "Learning Hub", "Interior Designer", "Restaurant Site", "SaaS Prototype", "Portfolio v1", "Portfolio v2"
        ].map(app => (
          <div key={app} className="aspect-square border border-border bg-card flex flex-col items-center justify-center p-6 text-center hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer group relative overflow-hidden">
            <div className="absolute inset-0 bg-blueprint opacity-[0.02] group-hover:opacity-0" />
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <ExternalLink className="h-3 w-3" />
            </div>
            <Code className="h-6 w-6 mb-3 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all" />
            <span className="text-[9px] font-mono font-bold leading-tight uppercase tracking-widest">{app}</span>
          </div>
        ))}
      </div>
      
      <div className="p-12 border border-border bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 font-mono text-[8px] opacity-20 uppercase tracking-[0.5em]">Reflection_Logs</div>
        <div className="relative grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h4 className="text-xl font-black font-display uppercase italic flex items-center gap-4">
              <Zap className="h-5 w-5 text-primary" /> What I Learned
            </h4>
            <p className="text-sm leading-relaxed text-muted-foreground font-medium italic">
              Through these builds, I strengthened my understanding of web application build and deployment lifecycles, frontend–backend integration from a delivery perspective, and hosting configuration.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 text-[9px] font-mono font-bold uppercase tracking-widest">
            {[
              "Build & Deployment Lifecycles",
              "Frontend–Backend Delivery",
              "Hosting & Env Configuration",
              "CI/CD for Web Workloads",
              "Speed vs Maintainability"
            ].map((learned, i) => (
              <div key={i} className="p-4 border border-border bg-background flex justify-between items-center group hover:border-primary/50 transition-colors">
                <span className="opacity-40 group-hover:opacity-100 transition-opacity">{learned}</span>
                <div className="h-[1px] w-8 bg-primary/20 group-hover:bg-primary transition-all" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
);
