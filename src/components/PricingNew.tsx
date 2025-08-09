'use client'

import { motion } from 'framer-motion'
import { Check, Star, Zap, Crown, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

const pricingPlans = [
  {
    name: 'Free',
    price: { monthly: 0, yearly: 0 },
    description: 'Perfect for getting started with AI workflows',
    icon: Zap,
    features: [
      '3 AI prompts per day',
      'Basic workflow templates',
      'Community support'
    ],
    buttonText: 'Get Started Free',
    popular: false,
    color: 'border-gray-200'
  },
  {
    name: 'Pro',
    price: { monthly: 9, yearly: 7 },
    description: 'For professionals who need unlimited AI assistance',
    icon: Star,
    features: [
      'Unlimited AI prompts',
      'Save workflow history',
      'Priority AI responses',
      'Advanced templates',
      'Email support'
    ],
    buttonText: 'Upgrade to Pro',
    popular: true,
    color: 'border-blue-500 ring-2 ring-blue-500'
  },
  {
    name: 'Enterprise',
    price: { monthly: 29, yearly: 24 },
    description: 'For teams with advanced automation needs',
    icon: Crown,
    features: [
      'Everything in Pro',
      'Team collaboration',
      'Custom AI training',
      'Priority support (24/7)',
      'Custom integrations'
    ],
    buttonText: 'Contact Sales',
    popular: false,
    color: 'border-purple-200'
  }
]

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section className="py-20 lg:py-32 bg-gray-50" id="pricing">
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
            Simple, transparent
            <span className="block text-blue-600">pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your automation needs. Start free and upgrade 
            as your workflow complexity grows.
          </p>

          {/* View Full Pricing Link */}
          <Link 
            href="/pricing" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-8"
          >
            View detailed pricing and features
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-lg ${!isYearly ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isYearly ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg ${isYearly ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
              Yearly
            </span>
            {isYearly && (
              <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
                Save 20%
              </span>
            )}
          </div>
        </motion.div>

        {/* Pricing Cards - Simplified for homepage */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl shadow-lg p-8 ${plan.color} ${
                plan.popular ? 'transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${
                  plan.name === 'Free' ? 'bg-gray-100' :
                  plan.name === 'Pro' ? 'bg-blue-100' : 'bg-purple-100'
                }`}>
                  <plan.icon className={`w-6 h-6 ${
                    plan.name === 'Free' ? 'text-gray-600' :
                    plan.name === 'Pro' ? 'text-blue-600' : 'text-purple-600'
                  }`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    ${isYearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                  <span className="text-gray-600">/month</span>
                  {isYearly && plan.price.monthly > 0 && (
                    <div className="text-sm text-gray-500">
                      ${plan.price.yearly * 12} billed annually
                    </div>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/pricing"
                className={`block w-full py-4 px-6 rounded-lg font-semibold text-lg text-center transition-all duration-300 ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105'
                    : plan.name === 'Free'
                    ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                }`}
              >
                {plan.buttonText}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Not sure which plan is right for you?
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Compare all features
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
