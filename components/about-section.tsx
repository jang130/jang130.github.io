"use client"

import { useLanguage } from "./language-provider"
import { content } from "@/lib/content"

export function AboutSection() {
  const { language } = useLanguage()
  const t = content.about

  return (
    <section id="about" className="py-24 px-6 bg-slate-950/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">01.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t.title[language]}</h2>
          <span className="flex-1 h-px bg-border"></span>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 text-muted-foreground leading-relaxed whitespace-pre-line text-lg">
            {t.description[language]}
          </div>

          <div>
            <h3 className="text-foreground font-mono text-sm mb-6 uppercase tracking-wider">{t.techStackTitle[language]}</h3>
            <div className="space-y-6">
              {t.techStack.map((group) => (
                <div key={group.category}>
                  <h4 className="text-xs text-primary mb-2 font-bold">{group.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-secondary text-secondary-foreground font-mono text-xs border border-border hover:border-primary transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
