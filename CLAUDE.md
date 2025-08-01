# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 React application for "向洋エンジニアリング株式会社" (Kouyo Engineering), a Japanese electrical engineering company based in Kobe. The website serves as a company landing page with recruitment information, featuring Japanese text and content.

## Development Commands

```bash
# Development
npm run dev          # Start development server with turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# The dev server runs on http://localhost:3000
```

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **React**: Version 19.0.0 (latest)
- **Styling**: Tailwind CSS (v4) with PostCSS
- **Animations**: Framer Motion (v12.23.3)
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation (configured but not actively used)
- **Utilities**: clsx, tailwind-merge
- **Development**: TypeScript (strict mode), ESLint with Next.js config

## Code Architecture

### Project Structure
```
src/
├── app/                 # Next.js App Router pages
│   ├── layout.tsx      # Root layout with Japanese font (Noto Sans JP)
│   ├── page.tsx        # Home page with hero section, features, and messaging
│   ├── sitemap.ts      # SEO sitemap generation
│   ├── globals.css     # Global Tailwind styles
│   └── careers/        # Recruitment page
│       ├── layout.tsx
│       └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx  # Navigation with mobile menu
│   │   └── Footer.tsx  # Footer with contact information
│   ├── AnimatedBackground.tsx      # Fallback animated background
│   ├── ClientOnly.tsx              # Client-side only rendering wrapper
│   └── SwitchingVideoBackground.tsx # Video background switcher
└── lib/
    └── utils.ts        # Utility functions (clsx + tailwind-merge)
```

### Key Components

1. **Layout System**:
   - `layout.tsx` sets up Japanese font (Noto Sans JP) and basic page structure
   - `Header.tsx` provides responsive navigation with mobile menu
   - `Footer.tsx` contains contact information and social links

2. **Animation Components**:
   - Heavy use of Framer Motion for page transitions and interactions
   - `SwitchingVideoBackground.tsx` manages video background switching
   - `ClientOnly.tsx` prevents hydration issues with animations

3. **Page Structure**:
   - Home page (`page.tsx`) features hero section, company features, and employee testimonials
   - Careers page (`careers/page.tsx`) contains detailed recruitment information
   - Both pages use elaborate animations and gradient backgrounds

### Styling Patterns

- **Design System**: Dark slate backgrounds with emerald and blue accents
- **Animations**: Extensive use of Framer Motion for micro-interactions
- **Responsive**: Mobile-first approach with responsive breakpoints
- **Japanese Typography**: Noto Sans JP font family for Japanese text
- **Glass Effects**: Backdrop blur effects with gradient overlays

### Content Management

- **Language**: All content is in Japanese
- **Media**: Video backgrounds stored in `/public/` directory
- **Contact**: LINE integration for customer inquiries
- **SEO**: Proper metadata configuration for Japanese market

## Development Notes

- The application uses client-side rendering for animation components (wrapped in `ClientOnly`)
- Video backgrounds have fallback systems for performance (switches to animated gradients)
- Mobile responsiveness is crucial for Japanese user experience
- Animation performance is optimized with proper loading states and Framer Motion best practices
- External links include proper `rel="noopener noreferrer"` attributes
- TypeScript path mapping configured: `@/*` maps to `./src/*`
- All animations use Framer Motion with consistent patterns for entrance, hover, and micro-interactions

## Important Patterns

### Animation Architecture
- **Entrance animations**: Use `initial={{ opacity: 0, y: 20 }}` with `animate={{ opacity: 1, y: 0 }}`
- **Hover effects**: Consistent scale (1.05) and brightness transformations
- **Client-side only**: Wrap animation components in `<ClientOnly>` to prevent hydration issues
- **Video backgrounds**: Two videos (hero-road.mp4, hero-plant.mp4) cycle automatically with manual controls

### Styling Conventions
- **Color scheme**: Dark slate backgrounds (slate-900, slate-800) with emerald accents (emerald-500)
- **Typography**: Noto Sans JP for Japanese text, system fonts for fallback
- **Responsive**: Mobile-first with `sm:`, `md:`, `lg:`, `xl:` breakpoints
- **Effects**: Backdrop blur (`backdrop-blur-sm`) with gradient overlays for glass effects

### Content Structure
- **Japanese market focus**: All content in Japanese, LINE integration for contact
- **SEO optimized**: Comprehensive metadata in layout.tsx, sitemap.ts generation
- **Contact integration**: LINE links with proper Japanese social conventions

## Testing

No specific test framework is configured. Check with the development team for testing requirements.

## Deployment

The application is configured for Vercel deployment (standard Next.js deployment pattern).