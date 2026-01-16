"use client"

import { useLanguage } from "./language-provider"
import { content } from "@/data/content"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Contact() {
    const { language } = useLanguage()
    const t = content[language].contact

    return (
        <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 h-64 w-64 border-t border-r border-white/5 opacity-50" />
            <div className="absolute bottom-0 left-0 h-64 w-64 border-b border-l border-white/5 opacity-50" />

            <div className="container px-4 mx-auto relative z-10">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-12 text-center uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">
                    {t.title}
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Form */}
                    <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Input placeholder={t.form.name} className="bg-slate-950 border-white/10 focus:border-cyan-500" />
                            </div>
                            <div className="space-y-2">
                                <Input placeholder={t.form.email} className="bg-slate-950 border-white/10 focus:border-cyan-500" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Textarea placeholder={t.form.message} className="bg-slate-950 border-white/10 focus:border-cyan-500 min-h-[150px]" />
                        </div>
                        <Button className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold tracking-wider uppercase" size="lg">
                            {t.form.submit}
                        </Button>
                    </div>

                    {/* Socials & Info */}
                    <div className="flex flex-col justify-between items-center lg:items-end space-y-8">
                        <div className="flex gap-4">
                            <Link href="https://github.com" target="_blank" className="p-4 bg-slate-950 rounded-full border border-white/10 hover:border-cyan-500 hover:text-cyan-500 transition-all">
                                <Github className="h-6 w-6" />
                            </Link>
                            <Link href="https://linkedin.com" target="_blank" className="p-4 bg-slate-950 rounded-full border border-white/10 hover:border-cyan-500 hover:text-cyan-500 transition-all">
                                <Linkedin className="h-6 w-6" />
                            </Link>
                            <Link href="mailto:contact@makerlabs.pl" className="p-4 bg-slate-950 rounded-full border border-white/10 hover:border-cyan-500 hover:text-cyan-500 transition-all">
                                <Mail className="h-6 w-6" />
                            </Link>
                        </div>

                        <div className="text-slate-500 text-sm font-mono text-center lg:text-right">
                            <p>Warsaw, Poland</p>
                            <p>contact@makerlabs.pl</p>
                        </div>
                    </div>
                </div>

                <footer className="mt-24 text-center text-slate-600 text-sm font-mono border-t border-white/5 pt-8">
                    {t.footer}
                </footer>
            </div>
        </section>
    )
}
