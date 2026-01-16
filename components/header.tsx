"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Terminal } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { content } from "@/lib/content"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const t = content.header.nav

  const toggleLanguage = () => {
    setLanguage(language === 'pl' ? 'en' : 'pl')
  }

  const navItems = [
    { name: t.about[language], href: "#about" },
    { name: t.projects[language], href: "#projects" },
    { name: t.offer[language], href: "#offer" },
    { name: t.contact[language], href: "#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-primary font-mono text-lg">
            <Terminal className="w-5 h-5" />
            <span>{"<hw />"}</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors font-mono text-sm uppercase tracking-wider"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                className="font-mono text-xs ml-4"
              >
                {t.toggle[language]}
              </Button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="font-mono text-xs"
            >
              {t.toggle[language]}
            </Button>
            <button
              className="text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 pb-4 space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="block text-muted-foreground hover:text-primary transition-colors font-mono text-sm uppercase tracking-wider"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}
