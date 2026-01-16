"use client"

import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Offer } from "@/components/offer";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Offer />
      <Contact />
    </main>
  );
}
