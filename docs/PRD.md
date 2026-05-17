# Product Requirements Document (PRD)
**Project Name:** Abi's Garten-Pflege MVP
**Date:** 2026-05-17
**Status:** Approved

## 1. Product Vision & Goal
Create a high-performing, multi-language Minimum Viable Product (MVP) web application for **Abi's Garten-Pflege**, a local landscaping and garden maintenance business in Germany. The primary goal is to generate high-intent leads via traditional local search (Google Local, Maps) while future-proofing the brand's visibility on AI Recommendation Engines (ChatGPT, Perplexity) through structured data.

## 2. Target Audience
- **Primary:** Local German-speaking homeowners and property managers needing garden maintenance.
- **Secondary:** Expatriates and international residents in the service area speaking English (en).
- **Tertiary:** Turkish-speaking community members (tr) in the local area.

## 3. Core Principles & Strategy
Based on the `CONTEXT.md` glossary and our initial architectural grilling session:
- **Local SEO (Primary Traffic Source):** The site architecture, URL structure, and content layout must be heavily optimized for local search intent.
- **AEO / GEO (Secondary Traffic Source):** Answer Engine Optimization and Generative Engine Optimization will be implemented behind-the-scenes using robust Schema markup.
- **Premium Conversion UI:** The design system will prioritize high-end aesthetic trust-signals (curated green palettes, modern typography) combined with straightforward, fast, and accessible conversion paths (e.g., persistent "Kontakt aufnehmen" CTAs).

## 4. Technical Architecture & Requirements

### 4.1 Tech Stack
- **Framework:** Next.js (App Router)
- **Styling:** Vanilla CSS / CSS Modules
- **Deployment:** Vercel (target)

### 4.2 Internationalization (i18n)
- **Requirement:** Full support for German (`de`), English (`en`), and Turkish (`tr`).
- **Implementation:** Next.js dynamic routing `/[lang]/` with middleware for language detection and negotiation (See `ADR-0001`).
- **Content Management:** Content will be hardcoded using local JSON dictionaries (e.g., `messages/de.json`). No Headless CMS will be used for the MVP to minimize infrastructure complexity.

### 4.3 SEO & AI Discoverability
- **Traditional SEO:** Dynamic generation of metadata (Titles, Descriptions, OpenGraph) based on the active language route.
- **Entity Schema (AEO):** Injection of JSON-LD `<script>` tags for `LocalBusiness` and `Organization` to establish entity clarity for AI crawlers.
- **FAQ Schema (AEO):** Structured Q&A formatting using `FAQPage` schema to capture AI citation prompts (e.g., "Best garden service near me").

### 4.4 Pages & User Flow
1. **Landing Page (`/[lang]/`)**: Hero section, core value proposition, brief service overview, and prominent contact CTA.
2. **Leistungen (`/[lang]/leistungen`)**: Detailed breakdown of garden services (lawn care, tree trimming, etc.).
3. **Kontakt (`/[lang]/kontakt`)**: Contact form, phone number, business hours, and service area map.
4. **Rechtliches (`/[lang]/impressum`, `/[lang]/datenschutz`)**: Legally required Impressum and Privacy Policy pages.

## 5. Non-Functional Requirements
- **Performance:** Must achieve Core Web Vitals targets (LCP < 2.5s, FID < 100ms, CLS < 0.1). Zero render-blocking resources.
- **Accessibility:** Must adhere to WCAG 2.1 AA standards, ensuring keyboard navigability, screen reader support, and adequate color contrast.
- **Responsiveness:** Mobile-first design, ensuring flawless operation across all device viewports.

## 6. Future Roadmap (Post-MVP)
- Integration of a Headless CMS (Sanity/Contentful) once content update frequency increases.
- Automated booking system / calendar integration for direct appointment scheduling.
- Dedicated case study / portfolio pages to further boost AEO/GEO footprint.
