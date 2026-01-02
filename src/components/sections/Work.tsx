"use client";

import React, { useState } from "react";
import { Server, Bot, ShieldCheck, Layers, Activity, ChevronRight, Terminal as TerminalIcon, Info } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { PipelineVisual } from "@/components/PipelineVisual";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: "aws-devops",
    number: "01",
    role: "AWS DevOps Engineer",
    title: "Learning Hub Platform",
    subtitle: "End-to-End DevOps Automation on AWS",
    proves: "Delivery Ownership",
    description: "This project demonstrates hands-on DevOps execution, focusing on CI/CD automation, Kubernetes operations, infrastructure provisioning, and production-grade deployment strategies. Engineered with a DevOps-first mindset, emphasizing repeatability, reliability, and observability.",
    tech: ["AWS", "Terraform", "EKS", "Jenkins", "Docker", "Helm", "SonarQube", "JaCoCo", "Trivy", "Prometheus", "Grafana", "ELK Stack", "CloudWatch", "X-Ray"],
    responsibilities: [
      "Designed and operated a cloud-native microservices platform (15+ services, 40+ modules).",
      "Automated complete AWS infrastructure using Terraform (VPC, EKS, RDS, S3, CloudFront, Route 53, IAM).",
      "Built a standardized CI/CD framework using Jenkins Shared Libraries for consistency.",
      "Implemented multi-stage CI: build validation, SonarQube analysis, JaCoCo coverage, and Trivy scanning.",
      "Containerized services via Docker and deployed to EKS using Helm charts.",
      "Implemented blue-green deployment strategies for zero-downtime releases.",
      "Established full observability using Prometheus, Grafana, ELK, and X-Ray.",
      "Enforced 'Infrastructure as Code' to eliminate manual operational effort."
    ],
    icon: <Server className="w-6 h-6" />
  },
  {
    id: "platform-eng",
    number: "02",
    role: "Platform Engineer",
    title: "GitOps-Driven AI Platform",
    subtitle: "LLM Model Deployment on AWS",
    proves: "Systems Thinking",
    description: "Focused on building a secure, reusable Kubernetes platform for operating LLM inference workloads using GitOps principles. Emphasis on platform design, workload isolation, and cloud-native scalability.",
    tech: ["AWS", "Terraform", "EKS", "GitHub Actions", "Argo CD", "Docker", "ECR", "ALB", "Route 53", "CloudFront", "Prometheus", "Ansible"],
    responsibilities: [
      "Designed and deployed a GitOps-driven Kubernetes platform for AI/LLM workloads.",
      "Provisioned 100% of infra using Terraform with remote state (S3/DynamoDB).",
      "Designed secure VPC architecture: public ingress, private worker nodes, zero SSH/public IP exposure.",
      "Deployed EKS with separate managed node groups to isolate frontend from LLM inference pods.",
      "Enforced workload placement using node labels, selectors, and taints.",
      "Separated CI (GitHub Actions) from CD (Argo CD) for declarative K8s deployments.",
      "Enabled domain-based access using Route 53, CloudFront, and Application Load Balancer.",
      "Automated cluster bootstrap and operational tooling using Ansible."
    ],
    icon: <Bot className="w-6 h-6" />
  },
  {
    id: "devsecops",
    number: "03",
    role: "DevSecOps Engineer",
    title: "Security Across Platforms",
    subtitle: "Shift-Left Security Implementation",
    proves: "Security-Aware Mindset",
    description: "Embedding security controls directly into CI/CD pipelines, Kubernetes platforms, and AWS infrastructure. Security is treated as a built-in practice, not a separate role.",
    tech: ["SonarQube", "Trivy", "IAM", "IRSA", "OIDC", "Secrets Manager", "GuardDuty", "AWS Config", "RBAC"],
    responsibilities: [
      "Integrated static code analysis and vulnerability scanning directly into CI pipelines.",
      "Implemented container image security scanning before deployment to EKS.",
      "Designed OIDC-based authentication for GitHub Actions (no long-lived credentials).",
      "Enforced least-privilege IAM policies and pod-level permissions via IRSA.",
      "Managed secrets using AWS Secrets Manager to avoid plaintext configuration.",
      "Hardened Kubernetes clusters using RBAC and namespace isolation.",
      "Enabled AWS GuardDuty and Config for threat detection and compliance.",
      "Designed platforms to operate without SSH, significantly reducing attack surface."
    ],
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    id: "infra-eng",
    number: "04",
    role: "Infrastructure Engineer",
    title: "Foundation Layer",
    subtitle: "Multi-AZ Cloud Infrastructure",
    proves: "Infrastructure Ownership",
    description: "Focusing on cloud networking, high availability, and scalable system design. Building the foundation that supports all application and platform layers.",
    tech: ["AWS", "Terraform", "VPC", "EKS", "ALB", "Route 53", "CloudFront", "S3", "DynamoDB", "RDS", "Ansible"],
    responsibilities: [
      "Designed custom AWS VPC architectures with public/private subnet segmentation.",
      "Provisioned highly available EKS clusters across multiple Availability Zones.",
      "Implemented robust Terraform state management and locking strategies.",
      "Designed scalable ingress architectures using ALB and global CloudFront distribution.",
      "Automated infrastructure lifecycle management using Terraform + Ansible.",
      "Ensured environment consistency and reproducibility across development and production.",
      "Analyzed trade-offs between EKS, ECS, and EC2 for specific workload needs.",
      "Integrated cost and capacity considerations into architectural decisions."
    ],
    icon: <Layers className="w-6 h-6" />
  }
];

export const Work = () => {
  const [activeTab, setActiveTab] = useState(projects[0].id);

  const activeProject = projects.find(p => p.id === activeTab) || projects[0];

  return (
    <section id="work" className="space-y-24">
      <SectionHeader title="ENGINEERING LEVELS" subtitle="Flagship Work" number="4" />
      
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 min-h-[600px]">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-4 space-y-4">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveTab(project.id)}
              className={cn(
                "w-full text-left p-6 border transition-all duration-300 group relative overflow-hidden",
                activeTab === project.id 
                  ? "bg-primary border-primary text-primary-foreground" 
                  : "bg-muted/30 border-border hover:border-primary/50"
              )}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={cn(
                  "font-mono text-[10px] font-bold tracking-widest uppercase",
                  activeTab === project.id ? "text-primary-foreground/70" : "text-primary"
                )}>
                  Level {project.number}
                </span>
                <div className={cn(
                  "transition-transform duration-300",
                  activeTab === project.id ? "scale-110" : "opacity-40 group-hover:opacity-100"
                )}>
                  {project.icon}
                </div>
              </div>
              <h3 className="text-xl font-black font-display uppercase italic leading-tight">
                {project.role}
              </h3>
              <p className={cn(
                "text-[10px] font-mono uppercase tracking-tighter mt-1",
                activeTab === project.id ? "text-primary-foreground/60" : "text-muted-foreground"
              )}>
                {project.title}
              </p>
              
              {activeTab === project.id && (
                <div className="absolute right-0 top-0 bottom-0 w-1 bg-accent" />
              )}
            </button>
          ))}

          {/* SRE / Operational Layer (Mini Card) */}
          <div className="p-6 border border-border bg-card/50 mt-12">
            <div className="flex items-center gap-3 mb-4">
              <Activity className="w-5 h-5 text-accent" />
              <h4 className="text-xs font-black font-display uppercase italic">Reliability / SRE Layer</h4>
            </div>
            <p className="text-[10px] font-mono text-muted-foreground uppercase leading-relaxed">
              Active across all platforms: Observability strategy, deployment safety (Blue-Green), and operational clarity for production readiness.
            </p>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-8 bg-muted/20 border border-border relative flex flex-col">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary/20" />
          
          <div className="p-8 lg:p-12 space-y-10 flex-grow">
            {/* Project Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <TerminalIcon className="w-4 h-4 text-primary" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                  Engineering_Report // {activeProject.id.toUpperCase()}
                </span>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-8">
                <div>
                  <h2 className="text-3xl lg:text-5xl font-black font-display uppercase italic leading-none mb-2">
                    {activeProject.subtitle}
                  </h2>
                  <p className="text-primary font-mono text-xs font-bold tracking-widest uppercase">
                    PROVES: {activeProject.proves}
                  </p>
                </div>
                <div className="flex -space-x-2">
                  {/* Decorative element showing status */}
                  <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                  <div className="w-3 h-3 rounded-full bg-accent/40" />
                  <div className="w-3 h-3 rounded-full bg-accent/20" />
                </div>
              </div>
            </div>

            {/* Description & Details */}
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                    <Info className="w-3 h-3" /> Role Description
                  </h4>
                  <p className="text-sm leading-relaxed text-foreground/80 font-medium">
                    {activeProject.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tech.map((t) => (
                      <span key={t} className="px-2 py-1 bg-muted border border-border text-[9px] font-mono font-bold uppercase">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground">Key Contributions</h4>
                <ul className="space-y-4">
                  {activeProject.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-3 text-[11px] font-mono font-medium text-foreground/70 uppercase tracking-tighter hover:text-foreground transition-colors">
                      <ChevronRight className="w-3 h-3 mt-0.5 text-primary flex-shrink-0" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Visual Indicator Layer */}
          <div className="p-8 border-t border-border bg-muted/10">
            <PipelineVisual status={activeTab === "platform-eng" ? "running" : "success"} />
          </div>
        </div>
      </div>
    </section>
  );
};
