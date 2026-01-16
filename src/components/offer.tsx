"use client"

import { useLanguage } from "./language-provider"
import { content } from "@/data/content"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "./ui/card"

export function Offer() {
    const { language } = useLanguage()
    const t = content[language].offer

    return (
        <section id="offer" className="py-24 bg-slate-950 relative">
            <div className="container px-4 mx-auto">
                <h2 className="text-3xl font-bold tracking-tight text-white/90 sm:text-4xl mb-12 text-center">
                    {t.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {t.items.map((service, index) => (
                        <Card key={index} className="bg-slate-900 border-l-4 border-l-cyan-500 border-y-0 border-r-0 rounded-none shadow-none hover:bg-slate-800 transition-colors">
                            <CardHeader>
                                <CardTitle className="text-xl text-white font-mono">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-slate-400 text-base">
                                    {service.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
