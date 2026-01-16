import Link from "next/link"
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react"

const contactLinks = [
  {
    label: "Email",
    value: "hello@alexchen.dev",
    href: "mailto:hello@alexchen.dev",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "@alexchen",
    href: "https://github.com",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "Alex Chen",
    href: "https://linkedin.com",
    icon: Linkedin,
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">03.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Contact</h2>
          <span className="flex-1 h-px bg-border"></span>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {
                "I'm always interested in discussing new projects, hardware challenges, or opportunities to collaborate. Feel free to reach out."
              }
            </p>
            <Link
              href="mailto:hello@alexchen.dev"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-sm hover:bg-primary/90 transition-colors"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-6">
            {contactLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="flex items-center gap-4 group"
              >
                <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <div>
                  <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{link.label}</p>
                  <p className="text-foreground group-hover:text-primary transition-colors">{link.value}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <footer className="mt-24 pt-8 border-t border-border">
          <p className="text-center text-muted-foreground font-mono text-sm">
            {"© 2026 Alex Chen. Built with Next.js"}
          </p>
        </footer>
      </div>
    </section>
  )
}
