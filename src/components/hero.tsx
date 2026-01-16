"use client"

import { useLanguage } from "./language-provider"
import { content } from "@/data/content"

export function Hero() {
    const { language } = useLanguage()
    const t = content[language].hero

    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 pt-16">
            {/* Background Shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] h-[800px] w-[800px] rounded-full bg-cyan-500/5 blur-[100px]" />
                <div className="absolute top-[20%] -right-[10%] h-[600px] w-[600px] rounded-full bg-purple-500/5 blur-[100px]" />

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]" />

                {/* Geometric Accents */}
                <div className="absolute top-1/3 left-1/4 h-32 w-32 border border-white/5 rotate-45" />
                <div className="absolute bottom-1/3 right-1/4 h-64 w-64 border border-white/5 -rotate-12" />
            </div>

            <div className="container relative z-10 flex flex-col items-center text-center px-4">
                <div className="inline-block px-3 py-1 mb-6 text-xs font-mono text-cyan-400 border border-cyan-900/50 rounded-full bg-cyan-950/10">
                    EST. 2026
                </div>
                <h1 className="max-w-5xl text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl bg-gradient-to-b from-white via-white to-slate-400 bg-clip-text text-transparent mb-6">
                    {t.headline}
                </h1>
                <p className="max-w-2xl text-lg md:text-xl text-slate-400 font-mono">
                    {t.subheadline}
                </p>
            </div>
        </section>
    )
}
