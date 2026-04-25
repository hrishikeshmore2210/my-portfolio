import AnimatedSection from './AnimatedSection'

export default function Skills() {
  return (
    <AnimatedSection id="skills">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold">
          <span className="gradient-text">Skills</span>
        </h2>

        <div>
          <h3 className="text-lg font-semibold mb-3">Languages</h3>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-neutral-300">
            <span>English <span className="text-neutral-500">— Professional</span></span>
            <span>Hindi <span className="text-neutral-500">— Working</span></span>
            <span>Marathi <span className="text-neutral-500">— Working</span></span>
            <span>German <span className="text-neutral-500">— Elementary</span></span>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">AI & Machine Learning</h3>
          <div className="flex flex-wrap gap-2">
            {['Machine Learning', 'Deep Learning', 'Neural Networks', 'NLP', 'Scikit-learn', 'TensorFlow', 'XGBoost', 'NLTK'].map(s => (
              <span key={s} className="text-sm px-3 py-1 bg-neutral-900/60 border border-neutral-800 rounded-full hover:border-cyan-500/50 transition-colors">{s}</span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Generative AI & Agents</h3>
          <div className="flex flex-wrap gap-2">
            {['LLMs', 'RAG', 'AI Agents', 'Multi-Agent Orchestration', 'MCP', 'LangChain', 'OpenAI APIs', 'AI Governance', 'Green AI'].map(s => (
              <span key={s} className="text-sm px-3 py-1 bg-neutral-900/60 border border-neutral-800 rounded-full hover:border-cyan-500/50 transition-colors">{s}</span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Backend & Data</h3>
          <div className="flex flex-wrap gap-2">
            {['Node.js', 'Express', 'REST APIs', 'JWT', 'Google OAuth2', 'MongoDB Atlas', 'PostgreSQL', 'SQLAlchemy'].map(s => (
              <span key={s} className="text-sm px-3 py-1 bg-neutral-900/60 border border-neutral-800 rounded-full hover:border-cyan-500/50 transition-colors">{s}</span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Frontend & Data Science</h3>
          <div className="flex flex-wrap gap-2">
            {['React', 'Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'SQL', 'Hugging Face', 'Streamlit'].map(s => (
              <span key={s} className="text-sm px-3 py-1 bg-neutral-900/60 border border-neutral-800 rounded-full hover:border-cyan-500/50 transition-colors">{s}</span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Cloud & DevOps</h3>
          <div className="flex flex-wrap gap-2">
            {['Google Cloud Platform', 'Docker', 'CI/CD', 'Git', 'GitHub', 'Bitbucket'].map(s => (
              <span key={s} className="text-sm px-3 py-1 bg-neutral-900/60 border border-neutral-800 rounded-full hover:border-cyan-500/50 transition-colors">{s}</span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Salesforce</h3>
          <div className="flex flex-wrap gap-2">
            {['Apex', 'SOQL', 'SOSL', 'Aura Components', 'LWC', 'Platform Developer I'].map(s => (
              <span key={s} className="text-sm px-3 py-1 bg-neutral-900/60 border border-neutral-800 rounded-full hover:border-cyan-500/50 transition-colors">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}