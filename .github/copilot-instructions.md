# Copilot Instructions for N8N Extension Website

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
This is a Next.js single-page application for the N8N extension introduction, pricing, and payment functionality. The website is designed to be integrated with browser extensions and serves as a landing page for users to learn about and purchase the N8N extension.

## Technologies Used
- Next.js 14+ with App Router
- TypeScript
- Tailwind CSS
- React components for modern UI
- Payment integration capabilities

## Code Style Guidelines
- Use TypeScript for all components and utilities
- Follow React best practices with functional components and hooks
- Use Tailwind CSS for styling with responsive design principles
- Implement clean, modular component architecture
- Use meaningful component and variable names
- Follow Next.js App Router conventions

## Component Structure
- Keep components in `src/components/` directory
- Create reusable UI components for pricing cards, buttons, and layouts
- Implement responsive design for mobile and desktop
- Use TypeScript interfaces for prop definitions

## Integration Considerations
- Design components to work well with browser extension integration
- Ensure proper CORS configuration for extension communication
- Implement clean URLs for deep linking from extensions
- Consider localStorage/sessionStorage for user preferences

## Performance Optimization
- Use Next.js Image component for optimized images
- Implement proper SEO meta tags
- Ensure fast loading times for good user experience
- Use code splitting where appropriate
