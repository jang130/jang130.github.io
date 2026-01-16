"use client"

import { useLanguage } from "./language-provider"
import { content } from "@/data/content"
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "./ui/card"
import { Badge } from "lucide-react" // Wait, Badge is component usually. I'll use div for badge.

export function Projects() {
    const { language } = useLanguage()
    const t = content[language].projects

    return (
        <section id="projects" className="py-24 bg-slate-900/50 relative">
            {/* Background Grid Accent */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] opacity-20 pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    {t.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {t.items.map((project, index) => (
                        <Card key={index} className="bg-slate-950 border-white/10 overflow-hidden hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-300 group">
                            <div className="h-48 bg-slate-900/50 relative flex items-center justify-center border-b border-white/5 group-hover:bg-slate-900 transition-colors">
                                <div className="text-6xl opacity-20 group-hover:opacity-40 transition-opacity">
                                    {index === 0 ? "🎢" : index === 1 ? "🚁" : "🏭"}
                                </div>
                            </div>
                            <CardHeader>
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-2 py-1 text-[10px] uppercase tracking-wider font-bold text-cyan-400 bg-cyan-950/30 rounded border border-cyan-900/50">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <CardTitle className="text-xl text-white group-hover:text-cyan-400 transition-colors">{project.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-slate-400">
                                    {project.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
