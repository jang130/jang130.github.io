"use client"

import { useLanguage } from "./language-provider"
import { content } from "@/data/content"
import { Card, CardContent } from "./ui/card"
import { Cpu, Code, Layers, Zap, Glasses, CircuitBoard } from "lucide-react"

export function About() {
    const { language } = useLanguage()
    const t = content[language].about

    // Mapping tech stack to icons
    const getIcon = (tech: string) => {
        const lower = tech.toLowerCase()
        if (lower.includes("python") || lower.includes("c++")) return <Code className="h-8 w-8 mb-2 text-cyan-400" />
        if (lower.includes("embedded") || lower.includes("linux")) return <Cpu className="h-8 w-8 mb-2 text-cyan-400" />
        if (lower.includes("ros") || lower.includes("robotics")) return <Zap className="h-8 w-8 mb-2 text-amber-400" />
        if (lower.includes("vr") || lower.includes("ar")) return <Glasses className="h-8 w-8 mb-2 text-purple-400" />
        if (lower.includes("pcb")) return <CircuitBoard className="h-8 w-8 mb-2 text-green-400" />
        return <Layers className="h-8 w-8 mb-2 text-slate-400" />
    }

    return (
        <section id="about" className="py-24 bg-slate-950 relative">
            <div className="container px-4 mx-auto">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                    {t.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="p-6 border border-white/5 rounded-2xl bg-white/5 backdrop-blur-sm">
                            <p className="text-lg text-slate-300 leading-relaxed">
                                {t.description}
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {t.techStack.map((tech, index) => (
                            <Card key={index} className="bg-slate-900/50 border-white/10 hover:border-cyan-500/50 transition-colors group">
                                <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
                                    <div className="group-hover:scale-110 transition-transform duration-300">
                                        {getIcon(tech)}
                                    </div>
                                    <span className="text-sm font-medium text-slate-300 group-hover:text-white">{tech}</span>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
