import AnimatedSection from './AnimatedSection'

export default function Education() {
  return (
    <AnimatedSection id="education">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">
          <span className="gradient-text">Education</span>
        </h2>

        <div className="space-y-1">
          <p className="text-neutral-400 text-sm">2025 – 2026 · National College of Ireland, Dublin</p>
          <h3 className="text-xl font-bold">MSc in Artificial Intelligence</h3>
          <p className="text-neutral-300">
            Machine Learning, Deep Learning, NLP, Intelligent Agents & Process Automation,
            Data Analytics, AI Ethics & Governance.
          </p>
        </div>

        <div className="space-y-1">
          <p className="text-neutral-400 text-sm">2019 – 2022 · Savitribai Phule Pune University</p>
          <h3 className="text-xl font-bold">Bachelor of Engineering — Electrical, Electronics & Communications</h3>
          <p className="text-neutral-300">Sandip Institute of Technology & Research Centre, Nashik.</p>
        </div>
      </div>
    </AnimatedSection>
  )
}