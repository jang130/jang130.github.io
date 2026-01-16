const skills = [
  "Embedded Systems",
  "PCB Design",
  "FPGA",
  "ARM Cortex",
  "LoRa / Mesh",
  "C / C++",
  "Rust",
  "KiCad",
  "Altium",
  "Signal Integrity",
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">01.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">About</h2>
          <span className="flex-1 h-px bg-border"></span>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              I'm a hardware engineer passionate about building systems that bridge the digital and physical worlds. My
              work spans from low-level firmware development to high-frequency PCB design.
            </p>
            <p>
              Currently focused on <span className="text-primary">mesh networking devices</span> and{" "}
              <span className="text-primary">distributed computing architectures</span>. I believe in open-source
              hardware and contributing back to the community.
            </p>
            <p>
              When I'm not debugging hardware, you'll find me contributing to open-source projects or experimenting with
              new fabrication techniques.
            </p>
          </div>

          <div>
            <h3 className="text-foreground font-mono text-sm mb-4 uppercase tracking-wider">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-secondary text-secondary-foreground font-mono text-sm border border-border hover:border-primary transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
