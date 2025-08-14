import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "N8N AI Workflow Generator - Chrome Extension",
  description: "Generate complex N8N workflows with simple AI prompts. Our Chrome extension brings AI-powered automation directly to your N8N workspace.",
  keywords: ["n8n", "automation", "workflow", "AI", "chrome extension", "workflow generator", "openai", "chatbot"],
  authors: [{ name: "N8N AI Extension Team" }],
  openGraph: {
    title: "N8N AI Workflow Generator - Chrome Extension",
    description: "Generate complex N8N workflows with simple AI prompts. Our Chrome extension brings AI-powered automation directly to your N8N workspace.",
    type: "website",
    url: "https://snapwebz.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "N8N AI Workflow Generator - Chrome Extension",
    description: "Generate complex N8N workflows with simple AI prompts. Our Chrome extension brings AI-powered automation directly to your N8N workspace.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Top-right header bar */}
  {/* No top-right header bar here; moved to homepage only */}
        {children}
      </body>
    </html>
  );
}
