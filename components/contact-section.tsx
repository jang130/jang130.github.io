"use client"

import Link from "next/link"
import { Mail, Github, Linkedin, ArrowUpRight, MapPin, Phone } from "lucide-react"
import { useLanguage } from "./language-provider"
import { content } from "@/lib/content"

export function ContactSection() {
  const { language } = useLanguage()
  const t = content.contact

  return (
    <section id="contact" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">04.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t.headline[language]}</h2> // Wait, header is headline in content
          <span className="flex-1 h-px bg-border"></span>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-muted-foreground leading-relaxed mb-8 text-xl">
              {t.subheadline[language]}
            </p>
            <Link
              href={`mailto:${t.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-sm hover:bg-primary/90 transition-colors rounded-lg"
            >
              <span>{t.email}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <Mail className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Email</p>
                <p className="text-foreground">{t.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <Phone className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Phone</p>
                <p className="text-foreground">{t.phone}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <MapPin className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Location</p>
                <p className="text-foreground">{t.location[language]}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <Linkedin className="w-5 h-5 text-primary" />
              <div>
                <Link href="https://linkedin.com" target="_blank" className="hover:underline">
                  <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Social</p>
                  <p className="text-foreground">{t.socials.linkedin}</p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-24 pt-8 border-t border-border">
          <p className="text-center text-muted-foreground font-mono text-sm">
            {t.copyright}
          </p>
        </footer>
      </div>
    </section>
  )
}
