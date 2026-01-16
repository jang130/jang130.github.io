"use client"

import { ExternalLink, Github, Radio, Server, Cpu, Car, Anchor } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "./language-provider"
import { content } from "@/lib/content"

export function ProjectsSection() {
  const { language } = useLanguage()
  const t = content.projects

  const getIcon = (title: string) => {
    if (title.includes("VR")) return <Github className="w-6 h-6" /> // Placeholder
    if (title.includes("PVD")) return <Server className="w-6 h-6" />
    if (title.includes("Robot")) return <Cpu className="w-6 h-6" />
    if (title.includes("Hovercraft")) return <Car className="w-6 h-6" />
    return <Anchor className="w-6 h-6" />
  }

  return (
    <section id="projects" className="py-24 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">03.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t.title[language]}</h2>
          <span className="flex-1 h-px bg-border"></span>
        </div>

        <div className="grid gap-8">
          {t.items.map((project, index) => (
            <article
              key={index}
              className="group p-6 md:p-8 bg-background border border-border hover:border-primary/50 transition-colors rounded-xl"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 flex items-center justify-center bg-secondary text-primary rounded-lg">
                    {getIcon(project.title[language])}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title[language]}
                      </h3>
                      <p className="text-sm text-primary font-mono">{project.subtitle[language]}</p>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground border border-border px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">{project.description[language]}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-primary font-mono text-xs border border-primary/30 rounded-full bg-primary/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
