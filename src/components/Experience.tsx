import AnimatedSection from './AnimatedSection'

export default function Experience() {
  return (
    <AnimatedSection id="experience">
      <div className="space-y-12">
        <div>
          <h2 className="text-3xl font-bold mb-2">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-neutral-400">
            End-to-end ownership across discovery, design, and delivery — collaborating
            closely with stakeholders, GRC teams, and engineering.
          </p>
        </div>

        <div className="border-l-2 border-cyan-500/30 pl-6 space-y-2">
          <h3 className="text-xl font-bold">RakFort</h3>
          <p className="text-neutral-400 text-sm">Dublin, Ireland · AI Governance Intern · Sep 2025 – Dec 2025</p>
          <p className="text-neutral-300 mt-3 mb-3">
            Built the backend of an AI Governance platform — secure REST APIs, agent
            orchestration, and a RAG-powered compliance chatbot.
          </p>
          <ul className="space-y-2 text-neutral-300">
            <li>• Designed REST endpoints with Node.js / Express for user, policy, and audit workflows</li>
            <li>• Built RAG chatbot answering GRC and security-questionnaire queries — 87% accuracy, 78.5/100 SUS</li>
            <li>• Engineered document ingestion + cloud sync — 92% coverage, 98.5% sync reliability</li>
            <li>• Implemented JWT + Google OAuth2 auth and MongoDB Atlas schemas optimised for audit queries</li>
            <li>• Orchestrated governance agents with health checks, retry logic, and structured audit logging</li>
            <li>• Applied Green AI techniques (prompt compression, response caching) to reduce LLM cost and energy</li>
          </ul>
        </div>

        <div className="border-l-2 border-cyan-500/30 pl-6 space-y-2">
          <h3 className="text-xl font-bold">Persistent Systems</h3>
          <p className="text-neutral-400 text-sm">Pune, India · Software Engineer · Jul 2022 – Jan 2024</p>
          <p className="text-neutral-300 mt-3 mb-3">
            Salesforce development on a customised loan-processing application. Bravo and
            High Five individual awards.
          </p>
          <ul className="space-y-2 text-neutral-300">
            <li>• Built Apex classes, Aura components, and Salesforce REST APIs for loan workflows</li>
            <li>• Wrote SOQL / SOSL queries for advanced data retrieval and reporting</li>
            <li>• Managed sandbox-to-production deployments using Jira, Bitbucket, and Tortoise SVN</li>
            <li>• Ran UAT cycles and reported status directly to business analysts and clients</li>
            <li>• Translated stakeholder requirements into CRM solutions end-to-end</li>
          </ul>
        </div>
      </div>
    </AnimatedSection>
  )
}