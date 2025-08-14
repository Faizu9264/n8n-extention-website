
import React, { useState } from 'react';

const faqs = [
  {
    q: "I don’t see the chat icon in my N8N editor. What should I do?",
    a: "The chat icon appears in the bottom right corner only when you’re using the official N8N platform (e.g., n8n.cloud, n8n.io) and are inside a workflow. If you don’t see it, try reloading the page. If the issue persists, please contact us at codecodersofficial@gmail.com."
  },
  {
    q: "Does this extension work with self-hosted N8N?",
    a: "By default, the extension only works on official N8N platforms. For self-hosted N8N instances, Chrome’s security rules prevent automatic support. However, you can request a custom version of the extension for your domain—just email us and we’ll send you a zipped file and step-by-step instructions to load it as an unpacked extension in Chrome."
  },
  {
    q: "How do I use the extension on my self-hosted N8N?",
    a: "Contact us at codecodersofficial@gmail.com with your N8N domain. We’ll provide a custom extension package and easy instructions for loading it into your browser."
  },
  {
    q: "The chat icon is missing or not working. What should I do?",
    a: "First, make sure you’re inside a workflow on the official N8N platform. Try refreshing the page. If you still have issues, reach out to codecodersofficial@gmail.com for support."
  },
  {
    q: "How can I get help or report a bug?",
    a: "We’re here to help! Email us anytime at codecodersofficial@gmail.com and we’ll respond as soon as possible."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions (FAQ)</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-0 overflow-hidden transition-all">
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-blue-400 group"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
              >
                <span className="text-lg font-semibold text-blue-700 group-hover:text-indigo-700 transition-colors flex-1">{faq.q}</span>
                <span className={`ml-4 transform transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>▼</span>
              </button>
              <div
                className={`px-6 pb-5 text-gray-700 text-base transition-all duration-300 ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
                style={{
                  transitionProperty: 'max-height, opacity',
                }}
              >
                {openIndex === idx && (
                  <div className="pt-2">
                    {faq.a}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
