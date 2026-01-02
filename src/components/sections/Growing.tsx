"use client";

import React from "react";
import { Activity, Users, BookOpen } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Badge } from "@/components/ui/badge";

export const Growing = () => (
    <section id="growing" className="grid md:grid-cols-2 gap-px bg-border border border-border">
      <div className="p-16 bg-card space-y-12">
        <SectionHeader title="CURRENT SPRINT" subtitle="Momentum" number="6" />
        <div className="space-y-8">
          {[
            {
              title: "Hardening Platforms",
              desc: "Improving existing platforms for better reliability and security."
            },
            {
              title: "Deployment Safety",
              desc: "Refining rollout strategies and deployment safety patterns."
            },
            {
              title: "Kubernetes Depth",
              desc: "Deepening operational understanding and cluster management."
            },
            {
              title: "Feedback Loops",
              desc: "Refining CI/CD feedback loops for faster iteration."
            }
          ].map((item, i) => (
            <div key={i} className="flex gap-6 items-start group">
              <span className="font-mono text-primary font-black text-sm italic opacity-40 group-hover:opacity-100 transition-opacity">0{i+1}</span>
              <div className="space-y-1">
                <p className="text-sm font-bold uppercase tracking-tight text-foreground">{item.title}</p>
                <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-tighter">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="p-16 bg-muted/30 space-y-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8">
          <Activity className="w-32 h-32 text-primary/5 rotate-12" />
        </div>
        
        <div className="space-y-10 relative">
          <SectionHeader title="ECOSYSTEM" subtitle="Collaboration" number="7" />
          <div className="space-y-6">
            <p className="text-lg font-medium text-muted-foreground leading-relaxed italic">
              Engaging in DevOps and cloud engineering discussions, collaborating on delivery workflows, and learning from real-world incidents.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="rounded-none px-4 py-1.5 border-border bg-background text-[9px] font-mono font-bold uppercase tracking-widest">#DevOps_Community</Badge>
              <Badge variant="outline" className="rounded-none px-4 py-1.5 border-border bg-background text-[9px] font-mono font-bold uppercase tracking-widest">#Architecture_Reviews</Badge>
              <Badge variant="outline" className="rounded-none px-4 py-1.5 border-border bg-background text-[9px] font-mono font-bold uppercase tracking-widest">#Cloud_Native</Badge>
            </div>
          </div>
        </div>

        <div className="space-y-10 relative pt-12 border-t border-border">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-primary text-primary-foreground">
              <BookOpen className="w-4 h-4" />
            </div>
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.3em]">Growth Strategy</h4>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[
              "Learn → experiment → integrate approach",
              "Revisiting cloud & networking fundamentals",
              "Focused labs before production integration"
            ].map((strategy, i) => (
              <div key={i} className="flex items-center gap-4 text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-widest">
                <div className="w-1 h-1 bg-accent" />
                {strategy}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
);
