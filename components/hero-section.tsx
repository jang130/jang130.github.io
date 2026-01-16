"use client"

import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "./language-provider"
import { content } from "@/lib/content"
import { Button } from "./ui/button"

export function HeroSection() {
  const { language } = useLanguage()
  const t = content.hero

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 bg-background relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-[20%] left-[15%] w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[20%] right-[15%] w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-4xl relative z-10">
        <p className="text-primary font-mono text-sm mb-4 matrix-glow">{"// MakerLabs R&D"}</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance leading-tight">
          {t.headline[language]}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8 whitespace-pre-line">
          {t.subheadline[language]}
        </p>

        <div className="flex items-center gap-4 mb-12">
          <Button asChild size="lg" className="font-mono">
            <Link href="#contact">{t.cta.contact[language]}</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="font-mono">
            <Link href="#projects">{t.cta.projects[language]}</Link>
          </Button>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="https://github.com/jang130"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </Link>
          <Link
            href="mailto:adm.moszczynski@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </Link>
        </div>

        <div className="mt-16 flex items-center gap-2 text-muted-foreground font-mono text-sm animate-bounce">
          <ArrowDown className="w-4 h-4" />
          <span>Scroll</span>
        </div>
      </div>
    </section>
  )
}
