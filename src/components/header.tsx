"use client"

import Link from "next/link"
import { useLanguage } from "./language-provider"
import { content } from "@/data/content"
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function Header() {
    const { language, setLanguage } = useLanguage()
    const t = content[language].header.nav
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'pl' : 'en')
    }

    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="font-mono text-xl font-bold tracking-tighter text-cyan-400 hover:text-cyan-300 transition-colors">
                    MakerLabs
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="#about" className="text-sm font-medium hover:text-cyan-400 transition-colors text-slate-300">{t.about}</Link>
                    <Link href="#projects" className="text-sm font-medium hover:text-cyan-400 transition-colors text-slate-300">{t.projects}</Link>
                    <Link href="#offer" className="text-sm font-medium hover:text-cyan-400 transition-colors text-slate-300">{t.offer}</Link>
                    <Link href="#contact" className="text-sm font-medium hover:text-cyan-400 transition-colors text-slate-300">{t.contact}</Link>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={toggleLanguage}
                        className="ml-2 font-mono text-xs border-white/20 hover:border-cyan-500/50 hover:bg-cyan-950/20"
                    >
                        {language.toUpperCase()}
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-slate-300 hover:text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-white/5 bg-slate-950">
                    <nav className="flex flex-col p-4 gap-4">
                        <Link href="#about" className="text-sm font-medium hover:text-cyan-400 text-slate-300" onClick={() => setMobileMenuOpen(false)}>{t.about}</Link>
                        <Link href="#projects" className="text-sm font-medium hover:text-cyan-400 text-slate-300" onClick={() => setMobileMenuOpen(false)}>{t.projects}</Link>
                        <Link href="#offer" className="text-sm font-medium hover:text-cyan-400 text-slate-300" onClick={() => setMobileMenuOpen(false)}>{t.offer}</Link>
                        <Link href="#contact" className="text-sm font-medium hover:text-cyan-400 text-slate-300" onClick={() => setMobileMenuOpen(false)}>{t.contact}</Link>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={toggleLanguage}
                            className="self-start font-mono text-xs"
                        >
                            {language === 'en' ? 'Switch to PL' : 'Przełącz na EN'}
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    )
}
