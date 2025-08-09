'use client'

import { motion } from 'framer-motion'
import { Bot, Search, MessageCircle, Coffee, Star, Mail, FileText, Bug, ExternalLink } from 'lucide-react'
import Navigation from '../../components/Navigation'

export default function Welcome() {
  const handleBuyMeCoffee = () => {
    window.open('https://buymeacoffee.com/faizurahman', '_blank')
  }

  const handleRateExtension = () => {
    window.open('https://chrome.google.com/webstore', '_blank')
  }

  const handleEmailSupport = (subject: string) => {
    window.open(`mailto:codecodersofficial@gmail.com?subject=${encodeURIComponent(subject)}`, '_blank')
  }

  const handleGetAPIKey = () => {
    window.open('https://platform.openai.com/api-keys', '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white">
      <Navigation />
      
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-8xl mb-6">🤖</div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Welcome to N8N AI Assistant
          </h1>
          <p className="text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
            Your AI-Powered N8N Companion - Completely FREE!
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-blue-500/30 px-4 py-2 rounded-full">🔍 2,000+ Templates</span>
            <span className="bg-purple-500/30 px-4 py-2 rounded-full">🤖 Unlimited AI</span>
            <span className="bg-green-500/30 px-4 py-2 rounded-full">💬 24/7 Chat Help</span>
            <span className="bg-yellow-500/30 px-4 py-2 rounded-full">💰 100% Free</span>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12">🚀 What You Can Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <Search className="w-12 h-12 text-blue-300 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Search Mode</h3>
              <p className="text-blue-100 mb-6">
                Browse and discover over 2,000 pre-built N8N workflows from the community
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><span className="text-green-400 mr-2">✅</span> Instant workflow search</li>
                <li className="flex items-center"><span className="text-green-400 mr-2">✅</span> One-click download to N8N</li>
                <li className="flex items-center"><span className="text-green-400 mr-2">✅</span> Copy to clipboard</li>
                <li className="flex items-center"><span className="text-green-400 mr-2">✅</span> Preview before using</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <Bot className="w-12 h-12 text-purple-300 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Generate Mode</h3>
              <p className="text-blue-100 mb-6">
                Create custom workflows with AI from natural language descriptions
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><span className="text-green-400 mr-2">✅</span> Unlimited AI generation</li>
                <li className="flex items-center"><span className="text-green-400 mr-2">✅</span> Smart workflow creation</li>
                <li className="flex items-center"><span className="text-green-400 mr-2">✅</span> Auto-paste to N8N</li>
                <li className="flex items-center"><span className="text-green-400 mr-2">✅</span> JSON validation</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <MessageCircle className="w-12 h-12 text-green-300 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Chat Mode</h3>
              <p className="text-blue-100 mb-6">
                Get expert help with N8N questions, troubleshooting, and best practices
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><span className="text-green-400 mr-2">✅</span> Error troubleshooting</li>
                <li className="flex items-center"><span className="text-green-400 mr-2">✅</span> Node configuration help</li>
                <li className="flex items-center"><span className="text-green-400 mr-2">✅</span> Best practices advice</li>
                <li className="flex items-center"><span className="text-green-400 mr-2">✅</span> Integration guidance</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Getting Started Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">🎯 Getting Started</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">1</div>
              <h3 className="text-xl font-semibold mb-4">Set up OpenAI API Key</h3>
              <p className="text-blue-100 mb-4">Click the extension popup and add your OpenAI API key for AI generation</p>
              <button
                onClick={handleGetAPIKey}
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg font-medium transition-colors inline-flex items-center"
              >
                Get API Key
                <ExternalLink className="w-4 h-4 ml-2" />
              </button>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">2</div>
              <h3 className="text-xl font-semibold mb-4">Choose Your Mode</h3>
              <p className="text-blue-100">Switch between Search, Generate, and Chat modes using the tabs in the floating widget</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">3</div>
              <h3 className="text-xl font-semibold mb-4">Start Creating</h3>
              <p className="text-blue-100">Describe what you want to automate and let AI do the work for you!</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">4</div>
              <h3 className="text-xl font-semibold mb-4">Import to N8N</h3>
              <p className="text-blue-100">Use our one-click copy/paste feature to add workflows directly to your N8N instance</p>
            </div>
          </div>
        </motion.div>

        {/* Why Free Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">🎁 Why is Everything Free?</h2>
          <p className="text-blue-100 text-lg text-center mb-8 max-w-4xl mx-auto">
            We believe automation should be accessible to everyone! This extension is our contribution to the N8N community. 
            By keeping it free, we help developers, businesses, and creators build amazing automations without barriers.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <span className="text-blue-100">Support the open-source community</span>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <span className="text-blue-100">Enable innovation for everyone</span>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <span className="text-blue-100">Build trust through transparency</span>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <span className="text-blue-100">Accelerate automation adoption</span>
            </div>
          </div>
        </motion.div>

        {/* Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-4">❤️ Support Our Work (Optional)</h2>
          <p className="text-blue-100 text-center mb-8">Love the extension? Help us keep it free and improve it further!</p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="text-center bg-white/5 rounded-xl p-6">
              <Coffee className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Buy Me a Coffee</h3>
              <p className="text-blue-100 mb-4">Support with a small donation</p>
              <button
                onClick={handleBuyMeCoffee}
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center"
              >
                <Coffee className="w-5 h-5 mr-2" />
                Buy Me a Coffee
              </button>
            </div>
            
            <div className="text-center bg-white/5 rounded-xl p-6">
              <Star className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Rate Us</h3>
              <p className="text-blue-100 mb-4">Leave a review on Chrome Web Store</p>
              <button
                onClick={handleRateExtension}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center"
              >
                <Star className="w-5 h-5 mr-2" />
                Rate Extension
              </button>
            </div>
          </div>
          
          <div className="bg-white/5 rounded-xl p-6">
            <h4 className="text-xl font-semibold mb-4 text-center">Your donations help us:</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center">
                <span className="text-blue-300 mr-2">🔧</span>
                <span>Maintain and improve the extension</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-blue-300 mr-2">🚀</span>
                <span>Add new features and integrations</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-blue-300 mr-2">💡</span>
                <span>Develop more free tools for the community</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">📊 Extension Stats</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-300 mb-2">2,000+</div>
              <div className="text-blue-100">Workflow Templates</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-300 mb-2">∞</div>
              <div className="text-blue-100">AI Generations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-300 mb-2">24/7</div>
              <div className="text-blue-100">Chat Support</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-300 mb-2">100%</div>
              <div className="text-blue-100">Free Forever</div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center"
        >
          <p className="text-blue-100 mb-6">Made with ❤️ for the N8N community | Version 1.0.0</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => handleEmailSupport('N8N AI Assistant - Documentation Request')}
              className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors inline-flex items-center"
            >
              <FileText className="w-4 h-4 mr-2" />
              Documentation
            </button>
            <button
              onClick={() => handleEmailSupport('N8N AI Assistant - Bug Report')}
              className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors inline-flex items-center"
            >
              <Bug className="w-4 h-4 mr-2" />
              Report Bug
            </button>
            <button
              onClick={() => handleEmailSupport('N8N AI Assistant - Contact')}
              className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors inline-flex items-center"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </button>
          </div>
        </motion.div>
      </div>

      {/* Custom styles for animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}
