"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cloud, Box, Workflow, Activity, ShieldCheck, Bot, Brain, Layout } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

export const TechStack = () => (
    <section id="tech" className="space-y-12">
      <SectionHeader title="CAPABILITY MATRIX" subtitle="Integrations & Stack" number="2" />
      
      <div className="p-8 bg-muted/30 border border-border mb-12">
        <p className="text-sm text-muted-foreground font-mono leading-relaxed">
          This section represents the technologies and platforms I integrate into my engineering workflows across infrastructure, automation, security, observability, and experimentation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            icon: <Cloud className="h-5 w-5" />,
            title: "Cloud Platforms",
            load: 95,
            desc: "Used for infrastructure provisioning, networking, and scalable platform foundations.",
            skills: ["Amazon Web Services", "Microsoft Azure", "Google Cloud Platform"]
          },
          {
            icon: <Box className="h-5 w-5" />,
            title: "Containers & Orchestration",
            load: 98,
            desc: "Used to standardize application runtime and manage scalable workloads.",
            skills: ["Docker", "Kubernetes (EKS)", "Helm"]
          },
          {
            icon: <Workflow className="h-5 w-5" />,
            title: "CI/CD & Automation",
            load: 96,
            desc: "Used to automate build, test, and deployment workflows.",
            skills: ["Jenkins", "GitHub Actions", "ArgoCD", "Bash", "YAML", "Groovy"]
          },
          {
            icon: <Activity className="h-5 w-5" />,
            title: "Observability",
            load: 90,
            desc: "Used to understand system health, performance, and failures.",
            skills: ["Prometheus", "Grafana", "ELK Stack", "Alertmanager"]
          },
          {
            icon: <ShieldCheck className="h-5 w-5" />,
            title: "Security & Access",
            load: 88,
            desc: "Used to embed security into infrastructure and pipelines.",
            skills: ["IAM / Policies", "IRSA", "Image Scanning", "Secrets Management"]
          },
          {
            icon: <Brain className="h-5 w-5" />,
            title: "AI Partners",
            load: 85,
            desc: "Used as engineering copilots for faster iteration and exploration.",
            skills: ["ChatGPT", "Gemini", "Claude", "GitHub Copilot", "DeepSeek"]
          }
        ].map((group, i) => (
            <div key={i} className="p-8 border border-border bg-card group relative overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-primary/50 to-transparent" />
            <div className="absolute top-0 right-0 p-2 font-mono text-[8px] text-muted-foreground opacity-30">
              MOD_00{i+1}
            </div>
            
            <div className="space-y-6 relative flex-grow">
              <div className="flex items-center gap-4">
                  <div className="p-3 bg-muted border border-border text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    {group.icon}
                  </div>
                  <h3 className="text-xl font-display tracking-tight uppercase leading-none">{group.title}</h3>
                </div>

              <p className="text-[11px] font-mono leading-relaxed text-muted-foreground opacity-80 uppercase tracking-tighter">
                {group.desc}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {group.skills.map(skill => (
                  <span key={skill} className="text-[9px] font-mono px-2 py-1 bg-muted border border-border text-foreground/70 uppercase tracking-tighter font-bold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 space-y-2">
              <div className="flex justify-between text-[9px] font-mono uppercase font-bold text-muted-foreground tracking-widest">
                <span>Proficiency_Index</span>
                <span>{group.load}%</span>
              </div>
              <div className="h-[2px] w-full bg-muted overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${group.load}%` }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  className="h-full bg-primary" 
                />
              </div>
            </div>
          </div>
        ))}
      </div>

        <div className="mt-32 p-12 pt-16 border border-border bg-muted/30 relative group">
          <div className="absolute inset-0 bg-blueprint opacity-[0.02] group-hover:opacity-[0.05] transition-opacity" />
          <div className="absolute top-0 left-12 -translate-y-1/2 bg-background border border-border px-6 py-1 font-mono text-[10px] font-bold text-accent uppercase tracking-[0.3em]">
            Registry: Dev, AI & Vibe-Coding Tools
          </div>
        
        <div className="flex flex-wrap gap-x-8 gap-y-4 justify-center items-center relative">
          {[
            "Bolt.new", "Cursor", "Google AI Studio", "Trae", "Qoder", "Emergent", "Kimi", "Lovable", "Z.ai", "Warp", "Replit", "Continue.dev", "Vercel AI SDK"
          ].map(tool => (
            <motion.span 
              key={tool} 
              whileHover={{ scale: 1.1, color: "var(--primary)" }}
              className="text-[10px] font-mono font-bold uppercase tracking-widest opacity-40 hover:opacity-100 transition-all cursor-default"
            >
              {tool}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
);
