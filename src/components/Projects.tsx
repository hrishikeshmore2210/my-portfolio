import AnimatedSection from './AnimatedSection'

export default function Projects() {
  const projects = [
    {
      title: 'AI Governance Trust Center',
      status: 'RakFort · Production',
      description:
        'Web-based Trust Center that centralises security, privacy, and audit documents with auto-sync from cloud storage. Integrated RAG chatbot answers governance and compliance questions using real organisational policies — helping GRC teams respond to RFIs and assessments faster.',
      stack: ['React', 'Node.js', 'Express', 'MongoDB Atlas', 'GCP', 'LLMs', 'RAG', 'JWT', 'OAuth2'],
    },
    {
      title: 'AI-Powered Sentiment Analysis for Brand Reputation',
      status: 'Academic Project',
      description:
        'NLP system that analyses customer feedback, social posts, and reviews to surface sentiment trends and flag potential PR issues early. Pipeline includes preprocessing, tokenisation, and ML-based sentiment classification.',
      stack: ['Python', 'NLTK', 'Scikit-learn', 'NLP'],
    },
    {
      title: 'Health Analytics: Predictive Diagnosis & Hospital Trends',
      status: 'Academic Project',
      description:
        'End-to-end healthcare analytics system processing cardiovascular disease data with a Scikit-learn prediction model. PostgreSQL + SQLAlchemy ORM for scalable data normalisation, Matplotlib + Seaborn for trend visualisations, HIPAA-compliant secure DB management.',
      stack: ['Python', 'Scikit-learn', 'PostgreSQL', 'SQLAlchemy', 'Matplotlib', 'Seaborn'],
    },
  ]

  return (
    <AnimatedSection id="projects">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-neutral-400">Selected work across LLMs, NLP, and ML.</p>
        </div>

        <div className="grid gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="border border-neutral-800 rounded-xl p-6 hover:border-cyan-500/50 transition-colors bg-neutral-900/30 backdrop-blur-sm"
            >
              <p className="text-xs text-neutral-500 uppercase tracking-wider mb-2">{p.status}</p>
              <h3 className="text-xl font-bold mb-3">{p.title}</h3>
              <p className="text-neutral-300 mb-4 leading-relaxed">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((tech) => (
                  <span key={tech} className="text-xs px-2 py-1 bg-neutral-900 border border-neutral-800 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}