import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-4xl">
        <p className="text-primary font-mono text-sm mb-4 matrix-glow">{"// Hardware Engineer"}</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">Alex Chen</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
          Building the physical layer of tomorrow. I design embedded systems, work with mesh networks, and architect
          distributed computing clusters. From PCB design to firmware development.
        </p>

        <div className="flex items-center gap-6">
          <Link
            href="https://github.com"
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
            href="mailto:hello@example.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </Link>
        </div>

        <div className="mt-16 flex items-center gap-2 text-muted-foreground font-mono text-sm">
          <span className="w-8 h-px bg-primary"></span>
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  )
}
