"use client";

import { motion } from "framer-motion";
import Footer from "../components/Footer";
import SupportChatButtons from "../components/SupportChatButtons";
import { useRef } from "react";
import FaqSection from "../components/FaqSection";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const faqRef = useRef<HTMLDivElement>(null);

  const scrollToFaq = (e: React.MouseEvent) => {
    e.preventDefault();
    faqRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* FAQ Icon only on Home */}
      <div className="fixed top-6 right-8 z-50 flex gap-4 items-center">
        {/* Buy Me a Coffee Button with animated text */}
        <a
          href="https://buymeacoffee.com/faizurahman"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold shadow-lg transition-all text-base overflow-hidden"
          style={{ boxShadow: "0 2px 8px rgba(255, 193, 7, 0.18)" }}
          title="Support us on Buy Me a Coffee"
        >
          <video
            src="/coffee.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-7 h-7 rounded-full object-cover bg-transparent"
            style={{ background: 'transparent' }}
          />
                    <motion.span
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="inline-block"
          >
            Buy Me a Coffee
          </motion.span>
        </a>
        {/* FAQ Icon Button */}
        <a
          href="#faq"
          onClick={scrollToFaq}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all text-2xl"
          title="Go to FAQ"
        >
          <span role="img" aria-label="FAQ">❓</span>
        </a>
      </div>
      {/* Hero Section */}
      <header className="py-24 px-4 text-center relative overflow-hidden">
        {/* Background animation */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="mb-8 flex justify-center"
          >
            <video
              src="/robot.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-32 h-32 md:w-48 md:h-48 rounded-xl shadow-lg object-contain bg-transparent"
              style={{ background: 'transparent' }}
            />
          </motion.div> */}

          <motion.h1
            {...fadeInUp}
            className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent leading-tight"
          >
            Welcome to N8N AI Assistant
          </motion.h1>

          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-2xl text-gray-700 mb-12 font-medium"
          >
            Your AI-Powered N8N Companion -{" "}
            <span className="text-green-600 font-bold">Completely FREE!</span>
          </motion.p>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              {
                text: "🔍 2,000+ Templates",
                color: "from-blue-500 to-blue-600",
              },
              { text: "🤖 Unlimited AI", color: "from-green-500 to-green-600" },
              {
                text: "💬 24/7 Chat Help",
                color: "from-purple-500 to-purple-600",
              },
              { text: "💰 100% Free", color: "from-yellow-500 to-yellow-600" },
            ].map((badge, index) => (
              <motion.span
                key={index}
                variants={fadeInUp}
                className={`bg-gradient-to-r ${badge.color} text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg hover:scale-105 transition-transform cursor-default`}
              >
                {badge.text}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-24 px-4 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-50"></div>
        <div className="max-w-7xl mx-auto relative">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-20 text-gray-800"
          >
            🚀 What You Can Do
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            className="grid md:grid-cols-3 gap-10"
          >
            {[
              {
                icon: "🔍",
                title: "Search Mode",
                description:
                  "Browse and discover over 2,000 pre-built N8N workflows from the community",
                features: [
                  "Instant workflow search",
                  "One-click download to N8N",
                  "Copy to clipboard",
                  "Preview before using",
                ],
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: "🤖",
                title: "Generate Mode",
                description:
                  "Create custom workflows with AI from natural language descriptions",
                features: [
                  "Unlimited AI generation",
                  "Smart workflow creation",
                  "Auto-paste to N8N",
                  "JSON validation",
                ],
                color: "from-green-500 to-green-600",
              },
              {
                icon: "💬",
                title: "Chat Mode",
                description:
                  "Get expert help with N8N questions, troubleshooting, and best practices",
                features: [
                  "Error troubleshooting",
                  "Node configuration help",
                  "Best practices advice",
                  "Integration guidance",
                ],
                color: "from-purple-500 to-purple-600",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-6xl mb-6 text-center">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-3 text-xl">✅</span>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <div
                  className={`mt-6 h-1 bg-gradient-to-r ${feature.color} rounded-full`}
                ></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-20 text-gray-800"
          >
            🎯 Getting Started
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Set up OpenAI API Key",
                description:
                  "Click the extension popup and add your OpenAI API key for AI generation",
                link: "https://platform.openai.com/api-keys",
                linkText: "Get API Key →",
              },
              {
                step: "2",
                title: "Choose Your Mode",
                description:
                  "Switch between Search, Generate, and Chat modes using the tabs in the floating widget",
              },
              {
                step: "3",
                title: "Start Creating",
                description:
                  "Describe what you want to automate and let AI do the work for you!",
              },
              {
                step: "4",
                title: "Import to N8N",
                description:
                  "Use our one-click copy/paste feature to add workflows directly to your N8N instance",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all"
                >
                  {step.step}
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {step.description}
                </p>
                {step.link && (
                  <a
                    href={step.link}
                    target="_blank"
                    className="text-indigo-600 hover:text-indigo-800 font-semibold transition-colors inline-flex items-center"
                  >
                    {step.linkText}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Free Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-8 text-gray-800"
          >
            🎁 Why is Everything Free?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-700 mb-16 leading-relaxed max-w-4xl mx-auto"
          >
            We believe automation should be accessible to everyone! This
            extension is our contribution to the N8N community. By keeping it
            free, we help developers, businesses, and creators build amazing
            automations without barriers.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🌍", text: "Support the open-source community" },
              { icon: "💡", text: "Enable innovation for everyone" },
              { icon: "🤝", text: "Build trust through transparency" },
              { icon: "🚀", text: "Accelerate automation adoption" },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-blue-50 hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <p className="text-gray-800 font-medium text-lg">
                  {benefit.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-8 text-gray-800"
          >
            ❤️ Support Our Work{" "}
            {/* <span className="text-gray-500">(Optional)</span> */}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-700 mb-16"
          >
            Love the extension? Help us keep it free and improve it further!
          </motion.p>

          <div className="grid md:grid-cols-2 gap-10 mb-16">
            {[
              {
                icon: (
                  <video
                    src="/coffee.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-14 h-14 rounded-full object-cover border border-yellow-400 shadow bg-[#fff8e1]"
                    style={{ display: 'inline-block', verticalAlign: 'middle' }}
                  />
                ),
                title: "Buy Me a Coffee",
                description: "Support with a small donation",
                url: "https://buymeacoffee.com/faizurahman",
                buttonText: (
                  <>
                    <video
                      src="/coffee.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-6 h-6 rounded-full object-cover border border-yellow-400 shadow bg-[#fff8e1] mr-2 inline-block align-middle"
                      style={{ display: 'inline-block', verticalAlign: 'middle' }}
                    />
                    Buy Me a Coffee
                  </>
                ),
                color: "from-yellow-500 to-orange-500",
              },
              {
                icon: "⭐",
                title: "Rate Us",
                description: "Leave a review on Chrome Web Store",
                url: "https://chromewebstore.google.com/detail/mphnijmmbiocdipbpiinjglkppmgjeac?utm_source=item-share-cb",
                buttonText: "⭐ Rate Extension",
                color: "from-blue-500 to-indigo-600",
              },
            ].map((support, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-6xl mb-6">{support.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {support.title}
                </h3>
                <p className="text-gray-600 mb-8 text-lg">
                  {support.description}
                </p>
                <a
                  href={support.url}
                  target="_blank"
                  className={`inline-block bg-gradient-to-r ${support.color} text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105`}
                >
                  {support.buttonText}
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-2xl shadow-xl"
          >
            <h4 className="text-2xl font-bold mb-8 text-gray-800">
              Your donations help us:
            </h4>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: "🔧", text: "Maintain and improve the extension" },
                { icon: "🚀", text: "Add new features and integrations" },
                {
                  icon: "💡",
                  text: "Develop more free tools for the community",
                },
              ].map((help, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center text-center"
                >
                  <span className="text-3xl mr-4">{help.icon}</span>
                  <span className="text-gray-700 font-medium text-lg">
                    {help.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-20 text-gray-800"
          >
            📊 Extension Stats
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-10">
            {[
              {
                number: "2,000+",
                label: "Workflow Templates",
                color: "from-blue-500 to-cyan-500",
              },
              {
                number: "∞",
                label: "AI Generations",
                color: "from-green-500 to-teal-500",
              },
              {
                number: "24/7",
                label: "Chat Support",
                color: "from-purple-500 to-pink-500",
              },
              {
                number: "100%",
                label: "Free Forever",
                color: "from-yellow-500 to-orange-500",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50 hover:shadow-xl transition-all"
              >
                <div
                  className={`text-6xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-4`}
                >
                  {stat.number}
                </div>
                <div className="text-gray-700 font-semibold text-xl">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div ref={faqRef} id="faq">
        <FaqSection />
      </div>
  <Footer />
      <SupportChatButtons />
    </main>
  );
}
