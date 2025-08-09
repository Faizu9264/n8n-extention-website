'use client'

import { motion } from 'framer-motion'
import { Mail, Heart } from 'lucide-react'

export default function Footer() {
  const handleEmailClick = (subject: string) => {
    window.location.href = `mailto:codecodersofficial@gmail.com?subject=${encodeURIComponent(subject)}`
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-8">🤖 N8N AI Assistant</h2>
            <p className="text-xl text-gray-300 mb-12">
              Your AI-Powered N8N Companion - Completely FREE!
            </p>
            
            {/* Contact Options */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-semibold mb-2">Documentation</h3>
                  <p className="text-gray-300">Documentation available upon request.</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">🐛</div>
                <h3 className="text-xl font-semibold mb-2">Report Bug</h3>
                  <p className="text-gray-300">Please report any bugs via email.</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">✉️</div>
                <h3 className="text-xl font-semibold mb-2">Contact</h3>
                  <p className="text-gray-300">Contact us at: codecodersofficial@gmail.com</p>
              </div>
            </div>

            {/* Email Display */}
            <div className="bg-gray-800 rounded-lg p-6 mb-8">
              <div className="flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-blue-400 mr-2" />
                <span className="text-lg">codecodersofficial@gmail.com</span>
              </div>
              <p className="text-gray-400">
                We typically respond within 24 hours. Feel free to reach out for any questions, suggestions, or support!
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <div className="flex items-center mb-4 md:mb-0">
              <span>© 2025 N8N AI Assistant. All rights reserved.</span>
            </div>
            <div className="flex items-center">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 mx-1" />
              <span>for the N8N community</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
