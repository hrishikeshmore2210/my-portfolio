import { motion } from 'motion/react'
import { Typewriter } from 'react-simple-typewriter'

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-12"
    >
      <div className="grid md:grid-cols-[auto_1fr] gap-8 items-center mb-8">
        <motion.img
          src="/avatar.webp"
          alt="Hrishikesh More"
          className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover avatar-glow avatar-pulse mx-auto md:mx-0"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />

        <div>
          <p className="text-neutral-400 mb-3">
            Hello, I am <a href="#about" className="gradient-text font-semibold hover:underline underline-offset-4">Hrishikesh More</a>
          </p>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-2">
            <span className="gradient-text">
              <Typewriter
                words={[
                  'AI Engineer',
                  'Generative AI',
                  'RAG + MCP',
                  'AI Agents',
                  'Salesforce Developer',
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1800}
              />
            </span>
          </h1>

          <p className="text-xl md:text-2xl font-bold text-neutral-200 leading-tight">
            Trying to bring AI to production with LLMs, RAG, AI agents, and MCP 
          </p>
        </div>
      </div>

      <p className="text-neutral-300 mb-4 leading-relaxed">
        MSc in Artificial Intelligence from National College of Ireland. Most recently
        at RakFort, I shipped an AI Governance Trust Center with a RAG chatbot that hit
        87% answer accuracy and a 78.5/100 SUS usability score.
      </p>
      <p className="text-neutral-300 mb-8 leading-relaxed">
        Before AI, I spent 1.8 years as a Salesforce Engineer at Persistent Systems
        building loan-processing CRM in Apex and Aura. Now looking for AI/ML or
        Generative AI roles in Dublin or remote.
      </p>
      <div className="flex flex-wrap gap-3">
        <a href="#experience" className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-neutral-200 transition">My path</a>
        <a href="#projects" className="px-4 py-2 border border-neutral-700 rounded-full text-sm font-medium hover:bg-neutral-900 hover:border-cyan-500/50 transition">What I build</a>
        <a href="#contact" className="px-4 py-2 border border-neutral-700 rounded-full text-sm font-medium hover:bg-neutral-900 hover:border-cyan-500/50 transition">Let's talk</a>
      </div>
    </motion.section>
  )
}