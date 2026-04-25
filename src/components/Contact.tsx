import AnimatedSection from './AnimatedSection'

export default function Contact() {
  return (
    <AnimatedSection id="contact">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">
          <span className="gradient-text">Let's talk</span>
        </h2>
        <p className="text-neutral-300 leading-relaxed">
          Looking for AI/ML, Generative AI, or Salesforce + AI roles in Dublin or remote.
          Open to full-time and contract.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="mailto:hrishi.more.123@gmail.com" className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-neutral-200 transition">
            Email me
          </a>
          <a href="https://www.linkedin.com/in/hrishikesh-more" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-neutral-700 rounded-full text-sm font-medium hover:bg-neutral-900 hover:border-cyan-500/50 transition">
            LinkedIn
          </a>
        </div>
      </div>
    </AnimatedSection>
  )
}