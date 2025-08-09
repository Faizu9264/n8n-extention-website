import Footer from "@/components/Footer"

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 flex flex-col">
      <div className="max-w-3xl mx-auto px-4 py-20 flex-1">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Privacy Policy</h1>
        <p className="mb-6 text-gray-700">Effective Date: August 2025</p>
        <h2 className="text-2xl font-semibold mb-4 mt-10 text-gray-800">1. Overview</h2>
        <p className="mb-6 text-gray-700">N8N AI Workflow Generator is a Chrome extension that helps users search, preview, and import N8N workflows, and optionally generate workflows using AI. We value your privacy and are committed to protecting your personal information.</p>
        <h2 className="text-2xl font-semibold mb-4 mt-10 text-gray-800">2. Data Collection</h2>
        <ul className="mb-6 text-gray-700 list-disc pl-6">
          <li><b>No Personal Data Collected:</b> The extension does <b>not</b> collect, transmit, or store any personal information or browsing data.</li>
          <li><b>Local Storage:</b> User preferences, workflow history, and (optionally) your OpenAI API key are stored <b>locally</b> in your browser using Chrome’s storage. This data is never transmitted to any external server by the extension.</li>
          <li><b>OpenAI API Key:</b> If you use the AI workflow generation feature, your OpenAI API key is stored only on your device and is used solely to make requests to the OpenAI API. The extension does not access, transmit, or share your API key with any third party.</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4 mt-10 text-gray-800">3. Permissions</h2>
        <ul className="mb-6 text-gray-700 list-disc pl-6">
          <li><b>activeTab:</b> Used to inject the chatbot UI into N8N workflow pages.</li>
          <li><b>storage:</b> Used to save your preferences and workflow history locally.</li>
          <li><b>Host Permissions:</b> Required to run the extension on N8N workflow pages and to access the OpenAI API for AI-powered features.</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4 mt-10 text-gray-800">4. Data Sharing</h2>
        <p className="mb-6 text-gray-700">We do <b>not</b> share, sell, or transmit your data to any third parties.</p>
        <h2 className="text-2xl font-semibold mb-4 mt-10 text-gray-800">5. Third-Party Services</h2>
        <p className="mb-6 text-gray-700"><b>OpenAI:</b> If you use AI workflow generation, requests are sent directly from your browser to the OpenAI API using your API key. No data is routed through our servers.</p>
        <h2 className="text-2xl font-semibold mb-4 mt-10 text-gray-800">6. Security</h2>
        <p className="mb-6 text-gray-700">We use Chrome’s extension APIs to store your data securely on your device. We do not have access to your data.</p>
        <h2 className="text-2xl font-semibold mb-4 mt-10 text-gray-800">7. Changes to This Policy</h2>
        <p className="mb-6 text-gray-700">We may update this privacy policy from time to time. Updates will be posted on the extension’s website or Chrome Web Store listing.</p>
        <h2 className="text-2xl font-semibold mb-4 mt-10 text-gray-800">8. Contact</h2>
        <p className="mb-6 text-gray-700">If you have any questions about this privacy policy, please contact us at:<br/>
        <b>Email:</b> codecodersofficial@gmail.com</p>
      </div>
      <Footer />
    </main>
  )
}
