import AnimatedSection from './AnimatedSection'
import { motion, useInView, useMotionValue, useTransform, animate } from 'motion/react'
import { useEffect, useRef } from 'react'

function AnimatedNumber({ value, suffix = '', decimals = 0 }: { value: number; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => latest.toFixed(decimals) + suffix)

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 2, ease: 'easeOut' })
      return () => controls.stop()
    }
  }, [inView, value, count])

  return <motion.span ref={ref}>{rounded}</motion.span>
}

export default function About() {
  return (
    <AnimatedSection id="about">
      <div className="space-y-8">
        <div>
          <p className="text-sm text-neutral-500 mb-2 tracking-wider uppercase">About me</p>
        </div>

        {/* Main bio panel */}
        <div className="glass-panel rounded-2xl p-8 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60" />

          <div className="absolute top-4 right-6 text-8xl font-serif text-cyan-500/10 select-none leading-none pointer-events-none">
            "
          </div>

          <div className="relative space-y-6 text-neutral-300 leading-relaxed">
            <p className="text-xl italic text-neutral-100 border-l-2 border-cyan-500 pl-5 py-1">
              I work at the intersection of <span className="gradient-text font-semibold not-italic">LLMs</span>, <span className="gradient-text font-semibold not-italic">agents</span>, and <span className="gradient-text font-semibold not-italic">software engineering</span> — turning research-grade AI into production systems people can actually trust.
            </p>

            <p>
              MSc in Artificial Intelligence from <span className="text-white font-medium">National College of Ireland</span>, with a focus on generative AI, RAG systems, and agentic architectures. My thesis-adjacent work at <span className="text-white font-medium">RakFort</span> shipped a RAG-powered compliance chatbot that hit <span className="text-cyan-400 font-semibold">87% accuracy</span> and <span className="text-cyan-400 font-semibold">78.5/100 SUS</span> — production, not prototype.
            </p>

            <p>
              Before AI, I spent <span className="text-white font-medium">1.8 years as a Salesforce Engineer at Persistent Systems</span>, leading development on a customised loan-processing CRM. That foundation in enterprise software shapes how I build AI today: <span className="text-white">testable, observable, deployable.</span>
            </p>
          </div>
        </div>

        {/* Signal grid — Currently / Background / Looking for */}
        <div className="grid md:grid-cols-3 gap-3">
          <div className="border border-neutral-800 rounded-xl p-4 hover:border-cyan-500/50 transition-colors bg-neutral-900/30 backdrop-blur-sm">
            <p className="text-xs text-cyan-400 mb-2 tracking-wider uppercase">Currently</p>
            <p className="text-sm text-neutral-200 leading-snug">
              Deepening expertise in LangChain, MCP, and multi-agent orchestration
            </p>
          </div>
          <div className="border border-neutral-800 rounded-xl p-4 hover:border-cyan-500/50 transition-colors bg-neutral-900/30 backdrop-blur-sm">
            <p className="text-xs text-purple-400 mb-2 tracking-wider uppercase">Background</p>
            <p className="text-sm text-neutral-200 leading-snug">
              MSc Artificial Intelligence · 1.8y Salesforce Engineer · Enterprise software
            </p>
          </div>
          <div className="border border-neutral-800 rounded-xl p-4 hover:border-cyan-500/50 transition-colors bg-neutral-900/30 backdrop-blur-sm">
            <p className="text-xs text-cyan-400 mb-2 tracking-wider uppercase">Looking for</p>
            <p className="text-sm text-neutral-200 leading-snug">
              AI/ML or Generative AI roles · Dublin or remote
            </p>
          </div>
        </div>

        {/* Animated stat cards with count-up */}
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="stat-card glass-panel rounded-xl p-6 text-center">
            <p className="text-4xl font-bold gradient-text mb-1">
              <AnimatedNumber value={87} suffix="%" />
            </p>
            <p className="text-xs text-neutral-400 uppercase tracking-wider">RAG Accuracy</p>
            <p className="text-xs text-neutral-500 mt-2">RakFort compliance chatbot</p>
          </div>
          <div className="stat-card glass-panel rounded-xl p-6 text-center">
            <p className="text-4xl font-bold gradient-text mb-1">
              <AnimatedNumber value={98.5} decimals={1} suffix="%" />
            </p>
            <p className="text-xs text-neutral-400 uppercase tracking-wider">Sync Reliability</p>
            <p className="text-xs text-neutral-500 mt-2">Doc ingestion pipeline</p>
          </div>
          <div className="stat-card glass-panel rounded-xl p-6 text-center">
            <p className="text-4xl font-bold gradient-text mb-1">
              <AnimatedNumber value={1.8} decimals={1} suffix="y" />
            </p>
            <p className="text-xs text-neutral-400 uppercase tracking-wider">Enterprise Eng</p>
            <p className="text-xs text-neutral-500 mt-2">Salesforce @ Persistent</p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}