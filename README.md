# N8N Extension Website

A modern, responsive single-page application built with Next.js for introducing and selling our N8N extension. This website serves as the main landing page for users to learn about the extension features, view pricing, and make purchases.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Single Page Application**: All content accessible from one page with smooth scrolling
- **Interactive Pricing**: Toggle between monthly and yearly billing
- **Performance Optimized**: Built with Next.js for fast loading times
- **Extension Integration Ready**: Designed to work seamlessly with browser extensions

## 🛠 Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Headless UI

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Quick Start

```bash
npm run dev     # Start development server
npm run build   # Build for production
npm start       # Start production server
```

## 🔗 Extension Integration

This website is designed to work seamlessly with browser extensions:

1. **Local Development**: Run the website locally on `http://localhost:3000`
2. **Extension Communication**: Ready for message passing and data sharing
3. **Deep Linking**: Supports URL parameters for direct navigation

Example extension integration:
```javascript
// In your extension
chrome.tabs.create({
  url: 'http://localhost:3000?source=extension&user=' + userId
});
```

---

Built with ❤️ for the N8N community
