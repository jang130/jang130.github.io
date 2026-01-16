import { ExternalLink, Github, Radio, Server } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Meshtastic Node",
    description:
      "Custom hardware node for the Meshtastic mesh networking protocol. Features a long-range LoRa radio, GPS module, and solar charging capability. Designed for off-grid communication in remote areas.",
    tags: ["LoRa", "ESP32", "KiCad", "Firmware"],
    icon: Radio,
    links: {
      github: "https://github.com",
      external: "https://meshtastic.org",
    },
  },
  {
    title: "Compute Cluster",
    description:
      "12-node ARM-based compute cluster built from custom carrier boards. Designed for parallel computing workloads with high-speed interconnects and centralized power management.",
    tags: ["ARM", "PCB Design", "Linux", "Networking"],
    icon: Server,
    links: {
      github: "https://github.com",
    },
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">02.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Projects</h2>
          <span className="flex-1 h-px bg-border"></span>
        </div>

        <div className="grid gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group p-6 md:p-8 bg-background border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 flex items-center justify-center bg-secondary text-primary">
                    <project.icon className="w-6 h-6" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-3">
                      {project.links.github && (
                        <Link
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label="View source on GitHub"
                        >
                          <Github className="w-5 h-5" />
                        </Link>
                      )}
                      {project.links.external && (
                        <Link
                          href={project.links.external}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label="View live project"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </Link>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-primary font-mono text-xs border border-primary/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
