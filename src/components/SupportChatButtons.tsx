import React from "react";

export default function SupportChatButtons() {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4 items-end">
      {/* Email Support Button */}
      <a
        href="mailto:codecodersofficial@gmail.com?subject=N8N%20AI%20Assistant%20Support"
        className="flex items-center gap-2 px-5 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg transition-all text-lg"
        style={{ boxShadow: "0 4px 16px rgba(37, 99, 235, 0.18)" }}
        title="Email Support"
      >
        <span role="img" aria-label="Email">✉️</span> Email Support
      </a>
      {/* Instagram Button */}
      <a
        href="https://instagram.com/faizu.dev"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white font-semibold shadow-lg transition-all text-lg"
        style={{ boxShadow: "0 4px 16px rgba(225, 48, 108, 0.18)" }}
        title="DM on Instagram"
      >
        <span role="img" aria-label="Instagram">📸</span> Instagram DM
      </a>
    </div>
  );
}
