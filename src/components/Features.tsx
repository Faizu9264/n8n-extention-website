'use client'

import { motion } from 'framer-motion'
import { 
  Brain, 
  Bot, 
  Sparkles, 
  MessageSquare, 
  History, 
  Zap,
  FileText,
  Settings,
  ArrowRight
} from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Generation',
    description: 'Describe your automation needs in plain English and watch our AI generate complete N8N workflows instantly.',
    color: 'bg-blue-500'
  },
  {
    icon: Bot,
    title: 'Floating Chatbot',
    description: 'Access AI assistance directly within N8N with our elegant floating chatbot interface that stays out of your way.',
    color: 'bg-purple-500'
  },
  {
    icon: MessageSquare,
    title: 'Natural Language Processing',
    description: 'Complex workflow requirements understood through conversational AI. No technical jargon required.',
    color: 'bg-green-500'
  },
  {
    icon: History,
    title: 'Workflow History',
    description: 'Save and revisit your generated workflows. Never lose a great automation idea with our history tracking.',
    color: 'bg-yellow-500'
  },
  {
    icon: Sparkles,
    title: 'Smart Templates',
    description: 'Access curated workflow templates and let AI customize them for your specific use cases.',
    color: 'bg-pink-500'
  },
  {
    icon: Zap,
    title: 'Instant Integration',
    description: 'Works seamlessly with N8N Cloud, self-hosted instances, and localhost development environments.',
    color: 'bg-indigo-500'
  },
  {
    icon: FileText,
    title: 'Export & Share',
    description: 'Export generated workflows as JSON or share them with your team with a single click.',
    color: 'bg-cyan-500'
  },
  {
    icon: Settings,
    title: 'Custom Configuration',
    description: 'Configure your OpenAI API key, adjust AI behavior, and customize the extension to fit your workflow.',
    color: 'bg-orange-500'
  }
]

export default function Features() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6">
            AI-powered workflow creation
            <span className="block text-blue-600">made effortless</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our Chrome extension brings the power of artificial intelligence directly to your N8N workspace, 
            making workflow automation accessible to everyone.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-4 flex items-center text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to transform your workflow?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of teams already using our N8N extension to automate 
              their most critical business processes.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Free Trial
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
