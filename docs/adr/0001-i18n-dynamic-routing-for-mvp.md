# 1. Use Dynamic Routing for i18n from Day One

Date: 2026-05-17

## Status
Accepted

## Context
We are building a Next.js MVP for Abi's Garten-Pflege. For a standard local service MVP, building a single-language (German-only) static route structure is standard practice to reduce complexity. However, there is a strategic requirement to support English and Turkish audiences to capture the expat/multi-cultural market in the local area.

Adding i18n to the Next.js App Router retroactively is highly disruptive, requiring a complete refactor of every route, layout, and metadata object.

## Decision
We will implement Next.js dynamic routing `/[lang]/` from day one, explicitly supporting German (`de`), English (`en`), and Turkish (`tr`). We will manage the translations using hardcoded JSON dictionary files, avoiding the complexity of a Headless CMS for the MVP phase.

## Consequences
- **Positive:** We avoid a massive refactor later. We immediately capture a broader local market segment.
- **Negative:** Upfront development time is increased. Every page component must now receive and pass down a `lang` parameter and fetch from the dictionary. Metadata and AEO/GEO Schema must be localized.
