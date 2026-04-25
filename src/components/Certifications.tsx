import AnimatedSection from './AnimatedSection'

export default function Certifications() {
  const certs = [
    { year: '2025', name: 'OCI 2025 Certified AI Foundations Associate', issuer: 'Oracle' },
    { year: '2024', name: 'Introduction to Generative AI', issuer: 'Google' },
    { year: '2024', name: 'Introduction to Large Language Models', issuer: 'Google' },
    { year: '2023', name: 'Salesforce Platform Developer I', issuer: 'Salesforce' },
    { year: '2023', name: 'Software Engineering Job Simulation', issuer: 'J.P. Morgan' },
  ]

  return (
    <AnimatedSection id="certifications">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">
          <span className="gradient-text">Certifications</span>
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {certs.map((c) => (
            <div key={c.name} className="border border-neutral-800 rounded-lg p-4 hover:border-cyan-500/50 transition-colors bg-neutral-900/30 backdrop-blur-sm">
              <p className="text-xs text-neutral-500 mb-1">{c.year}</p>
              <p className="font-medium mb-1">{c.name}</p>
              <p className="text-sm text-neutral-400">{c.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}