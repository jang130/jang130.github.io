"use client"

import { useState } from "react"
import { useLanguage } from "./language-provider"
import { content } from "@/lib/content"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "./ui/card"
import { Button } from "./ui/button"
import { Check } from "lucide-react"

export function OfferSection() {
    const { language } = useLanguage()
    const t = content.offer
    const [activeTab, setActiveTab] = useState<'b2b' | 'b2c'>('b2b')

    const currentCards = activeTab === 'b2b' ? t.b2bCards : t.b2cCards
    const description = activeTab === 'b2b' ? t.b2bDescription : t.b2cDescription

    return (
        <section id="offer" className="py-24 px-6 bg-background">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <span className="text-primary font-mono text-sm">02.</span>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t.title[language]}</h2>
                    <span className="flex-1 h-px bg-border"></span>
                </div>

                {/* Tab Switcher */}
                <div className="flex justify-center mb-12">
                    <div className="bg-secondary p-1 rounded-lg inline-flex">
                        <Button
                            variant={activeTab === 'b2b' ? 'default' : 'ghost'}
                            onClick={() => setActiveTab('b2b')}
                            className="min-w-[150px]"
                        >
                            {t.tabs.b2b[language]}
                        </Button>
                        <Button
                            variant={activeTab === 'b2c' ? 'default' : 'ghost'}
                            onClick={() => setActiveTab('b2c')}
                            className="min-w-[150px]"
                        >
                            {t.tabs.b2c[language]}
                        </Button>
                    </div>
                </div>

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-lg text-muted-foreground">{description[language]}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {currentCards.map((card, index) => (
                        <Card key={index} className="border-border bg-card/50 hover:border-primary/50 transition-colors h-full flex flex-col">
                            <CardHeader>
                                <CardTitle className="text-xl text-primary">{card.title[language]}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1 flex flex-col gap-4">
                                <CardDescription className="text-base leading-relaxed">
                                    {card.description[language]}
                                </CardDescription>

                                <div className="mt-4 space-y-2">
                                    {card.examples.map((ex, i) => (
                                        <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                            <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                            <span>{typeof ex === 'string' ? ex : ex[language]}</span>
                                        </div>
                                    ))}
                                </div>

                                {'benefit' in card && (
                                    <div className="mt-auto pt-4 border-t border-border">
                                        <p className="text-sm font-bold text-foreground">
                                            Benefit: <span className="font-normal text-muted-foreground">{(card as any).benefit[language]}</span>
                                        </p>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
