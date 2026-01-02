"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, BookOpen, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

export const Certs = () => (
    <section id="certs" className="space-y-16">
      <SectionHeader title="VALIDATION LAYERS" subtitle="Certifications & Learning" number="3" />
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="p-8 border border-border bg-card relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-3 bg-muted border-l border-b border-border font-mono text-[9px] uppercase tracking-widest opacity-50">
              Learning_Mindset
            </div>
            <p className="text-xl leading-relaxed text-muted-foreground font-medium italic">
              "My learning approach combines structured courses with hands-on experimentation. Certifications and guided learning paths are used to establish foundational knowledge, which is then validated through real implementations and system-level projects."
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-primary" />
              <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 text-foreground">Applied Methodology</h4>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I prioritize applied learning — concepts are reinforced only after they are implemented, tested, and refined in practical environments. This ensures long-term understanding rather than short-term memorization.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {[
            {
              title: "AWS Certified Solutions Architect",
              org: "Amazon Web Services",
              status: "Validated",
              date: "2024"
            },
            {
              title: "Certified Kubernetes Administrator (CKA)",
              org: "Cloud Native Computing Foundation",
              status: "Validated",
              date: "2024"
            },
            {
              title: "HashiCorp Certified: Terraform Associate",
              org: "HashiCorp",
              status: "Validated",
              date: "2023"
            },
            {
              title: "DevOps Engineering Learning Path",
              org: "Guided Implementation",
              status: "Completed",
              date: "2023"
            }
          ].map((cert, i) => (
            <motion.div 
              key={cert.title}
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 border border-border bg-muted/20 flex items-center justify-between group hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-6">
                <div className="p-3 bg-background border border-border text-primary group-hover:scale-110 transition-transform">
                  <Award className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold uppercase tracking-tight">{cert.title}</h4>
                  <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">{cert.org} // {cert.date}</p>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-2 px-3 py-1 border border-primary/20 bg-primary/5">
                <CheckCircle2 className="w-3 h-3 text-primary" />
                <span className="text-[9px] font-mono font-bold text-primary uppercase">{cert.status}</span>
              </div>
            </motion.div>
          ))}
          
          <div className="p-6 border border-dashed border-border flex items-center gap-6 opacity-40 grayscale group hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
            <div className="p-3 bg-background border border-border">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold uppercase tracking-tight italic">Continuous Learning Queue</h4>
              <p className="text-[10px] font-mono uppercase tracking-widest underline decoration-primary underline-offset-4">Advanced Observability & Platform Security</p>
            </div>
          </div>
        </div>
      </div>
    </section>
);
