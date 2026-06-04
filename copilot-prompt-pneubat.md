# MASTER COPILOT PROMPT — Pneuservis Batovec (Pneubat s.r.o.) SvelteKit 5 Website

> **HOW TO USE THIS DOCUMENT**
> Copy the entire content below the horizontal rule and paste it as your first message in a GitHub Copilot Chat / Cursor Composer session.
> Re-paste individual module sections when scaffolding each part of the project.
> This prompt is self-contained and production-intent — do NOT simplify unless explicitly told.

---

## ═══════════════════════════════════════════════════════
## SYSTEM CONTEXT — READ THIS FIRST BEFORE GENERATING ANY CODE
## ═══════════════════════════════════════════════════════

You are a senior SvelteKit 5 engineer and Technical SEO specialist.
You will scaffold a complete, production-ready, blazing-fast local business website
for a Czech tire repair shop. The site must achieve a 100/100 Lighthouse score across
all four categories (Performance, Accessibility, Best Practices, SEO).

**CRITICAL LANGUAGE RULE — NON-NEGOTIABLE:**
All user-facing strings, UI copy, headings, button labels, aria-labels, alt text,
meta descriptions, og:title, og:description, JSON-LD name/description fields,
and any text that a human visitor or search engine will read MUST be written in
professional, natural Czech language. English is only used in code comments,
variable names, TypeScript types, and configuration values.
Do NOT mix languages in visible content. Do NOT use placeholder text like "Lorem ipsum".
Use the real business data provided in the BUSINESS DATA block below.

**FRAMEWORK RULES:**
- Use Svelte 5 exclusively. All reactive state MUST use runes: `$state`, `$derived`, `$effect`, `$props`.
- Zero Svelte 4 legacy syntax: NO `let` reactive declarations (`$: foo = ...`), NO `export let` props, NO `on:click` event directives.
- Use Svelte 5 event syntax: `onclick={handler}` (not `on:click`).
- Use `{#snippet}` and `{@render}` for all reusable template fragments.
- SvelteKit routing via `src/routes/` file-based structure.
- All pages are statically pre-rendered via adapter-static (SSG). No server-side runtime.
- TypeScript strict mode throughout. Every component has typed `$props()`.
- Tailwind CSS v4 for all styling. No inline `style=""` attributes except for dynamic CSS custom properties.
- Prefer semantic HTML5 elements: `<main>`, `<article>`, `<section>`, `<nav>`, `<header>`, `<footer>`, `<address>`.

---

## ════════════════════════════════════════════════════
## BUSINESS DATA — SOURCE OF TRUTH FOR ALL COPY
## ════════════════════════════════════════════════════

```
COMPANY_NAME_DISPLAY:  "Pneuservis Batovec"
COMPANY_NAME_LEGAL:    "Pneubat s.r.o."
STREET:                "Kladrubská 3052"
CITY:                  "Teplice"
POSTAL_CODE:           "415 01"
REGION:                "Ústecký kraj"
COUNTRY_CODE:          "CZ"
COUNTRY:               "Česká republika"
PHONE_PRIMARY:         "+420602427504"
PHONE_PRIMARY_DISPLAY: "+420 602 427 504"
PHONE_SECONDARY:       "+420725557223"
PHONE_SECONDARY_DISPLAY: "+420 725 557 223"
EMAIL:                 "harkabusova@seznam.cz"
LAT:                   50.6383
LNG:                   13.8238
GOOGLE_MAPS_EMBED_SRC: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2496.XXX!2d13.8238!3d50.6383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zUG5ldXNlcnZpcyBCYXRvdmVj!5e0!3m2!1scs!2scz!4v1"

OPENING_HOURS:
  Monday:    { open: "07:30", close: "17:00" }
  Tuesday:   { open: "07:30", close: "17:00" }
  Wednesday: { open: "07:30", close: "17:00" }
  Thursday:  { open: "07:30", close: "17:00" }
  Friday:    { open: "07:30", close: "16:00" }
  Saturday:  CLOSED
  Sunday:    CLOSED

SERVICES_CZ:
  1. "Přezutí a vyvážení pneumatik (osobní automobily, motocykly, čtyřkolky ATV)"
  2. "Oprava a renovace ALU kol — svařování a lakování hliníkových disků"
  3. "Výměna motorového oleje"
  4. "Oprava a výměna brzd"
  5. "Sezónní uskladnění pneumatik"

USP_CZ: "Odvezeme vaše auto, přezujeme pneumatiky a přivezeme zpět — přímo k vám domů nebo do práce."

TAGLINE_CZ: "Pneuservis v Teplicích — rychle, spolehlivě, s odvozem."

SEO_META_DESCRIPTION_CZ: "Pneuservis Batovec Teplice — přezutí a vyvážení pneumatik, oprava ALU kol, výměna oleje a brzd. Nabízíme odvoz a dovoz vozidla. Volejte +420 602 427 504."

PAGE_TITLE_CZ: "Pneuservis Batovec Teplice | Přezutí, ALU kola, Odvoz vozidla"
```

---

## ════════════════════════════════════════════════
## MODULE 1 — PROJECT SETUP & SVELTEKIT CONFIGURATION
## ════════════════════════════════════════════════

### 1.1 — Scaffold the Project

Generate the exact shell commands to scaffold the project using the SvelteKit CLI, then install all required dependencies. The commands must produce the following setup:

```bash
# Scaffold
npx sv create pneubat-web
# Select: SvelteKit minimal / TypeScript / Yes to ESLint + Prettier

cd pneubat-web

# Dependencies
npm install -D @sveltejs/adapter-static tailwindcss @tailwindcss/vite
npm install -D prettier-plugin-tailwindcss
npm install -D vite-imagetools        # for optimized image imports
npm install -D @iconify/svelte        # for SVG icons (no JS bundle cost)
```

### 1.2 — `svelte.config.js`

Generate `svelte.config.js` with:
- `adapter`: `@sveltejs/adapter-static` configured with `fallback: undefined` (pure SSG, no SPA fallback), `pages: 'build'`, `assets: 'build'`, `precompress: true` (enables brotli/gzip pre-compression of static assets).
- `prerender: { default: true }` in kit config so all routes are pre-rendered by default.
- `alias` in kit config: `$components` → `src/lib/components`, `$lib` → `src/lib`.
- `vitePlugin` options: `inspector: false`.

### 1.3 — `vite.config.ts`

Generate `vite.config.ts` with:
- `@tailwindcss/vite` plugin included.
- `imagetools()` plugin included for `?enhanced` image imports (WebP/AVIF auto-conversion).
- `build.cssCodeSplit: false` — single CSS file for faster critical CSS delivery.
- `build.rollupOptions.output.manualChunks: undefined` — let Rollup optimize without manual splitting for a small static site.
- Define a global constant `__BUILD_DATE__` as `JSON.stringify(new Date().toISOString())` for cache-busting and schema markup.

### 1.4 — `tailwind.config.ts`

Generate `tailwind.config.ts` with:
- Content paths scanning `./src/**/*.{html,js,ts,svelte}`.
- Custom theme extension:
  - `colors.brand`: `{ DEFAULT: '#E63B2E', dark: '#BF2D22', light: '#FF5A4D' }` — a strong Czech-flag-inspired red for CTAs.
  - `colors.surface`: `{ DEFAULT: '#0F1117', card: '#1A1D27' }` — dark, high-contrast backgrounds.
  - `colors.text`: `{ primary: '#F5F5F5', muted: '#9CA3AF' }`.
  - `fontFamily.display`: `['Barlow Condensed', 'sans-serif']` — strong condensed font for headings.
  - `fontFamily.body`: `['Inter Variable', 'sans-serif']`.
- Plugins: none needed (keep bundle small).

### 1.5 — `src/app.html`

Generate the root HTML shell with:
- `lang="cs"` on `<html>`.
- `<meta charset="utf-8">` and `<meta name="viewport" content="width=device-width, initial-scale=1">`.
- Preconnect `<link>` tags to `https://fonts.googleapis.com` and `https://fonts.gstatic.com` (crossorigin).
- A `<link rel="stylesheet">` fetching `Barlow+Condensed:wght@600;700;800` and `Inter:ital,opsz,wght@0,14..32,300..700` from Google Fonts.
- `%sveltekit.head%` and `%sveltekit.body%` in correct positions.
- A `<noscript>` tag informing the user in Czech that JavaScript is optional but enhances experience.
- `theme-color` meta tag set to `#E63B2E`.

### 1.6 — Root Layout `src/routes/+layout.svelte`

Generate the root layout component with:
- Imports for `Header`, `Footer`, and `FloatingCTA` components.
- A `<svelte:head>` block with default canonical URL derived from `$page.url.href`.
- The structural HTML: `<Header />`, `<main id="main-content">`, `<slot />` (or `{@render children()}` in Svelte 5), `</main>`, `<Footer />`, `<FloatingCTA />`.
- A skip-to-content link: `<a href="#main-content" class="sr-only focus:not-sr-only ...">Přejít na hlavní obsah</a>` — this is an accessibility and Lighthouse requirement.

### 1.7 — `src/routes/+layout.ts`

Generate a layout load function that:
- Sets `prerender = true` and `trailingSlash = 'always'`.
- Exports site-wide metadata object `siteConfig` with company name, base URL (`https://pneuservis-batovec.cz`), and locale `cs_CZ` for use in SEO components.

---

## ═══════════════════════════════════════════════
## MODULE 2 — GLOBAL SEO & JSON-LD COMPONENTS
## ═══════════════════════════════════════════════

### 2.1 — `src/lib/components/seo/SeoHead.svelte`

Generate a reusable SEO component that accepts these typed `$props()`:
```typescript
interface SeoHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noindex?: boolean;
}
```
Inside `<svelte:head>`:
- `<title>` — uses prop or falls back to `PAGE_TITLE_CZ`.
- `<meta name="description">` — uses prop or falls back to `SEO_META_DESCRIPTION_CZ`.
- `<meta name="robots">` — `"index, follow"` unless `noindex` is true.
- Full Open Graph block: `og:title`, `og:description`, `og:type`, `og:url`, `og:locale` (`cs_CZ`), `og:site_name`, `og:image`, `og:image:width` (1200), `og:image:height` (630).
- Twitter Card block: `twitter:card` (`summary_large_image`), `twitter:title`, `twitter:description`, `twitter:image`.
- `<link rel="canonical">` using the canonical prop.
- `<link rel="alternate" hreflang="cs" href="...">`.

### 2.2 — `src/lib/components/seo/JsonLd.svelte`

Generate a JSON-LD injection component that accepts a `schema` prop of type `Record<string, unknown>` and renders:
```html
<svelte:head>
  <script type="application/ld+json">{JSON.stringify(schema)}</script>
</svelte:head>
```

### 2.3 — `src/lib/seo/schemas.ts`

Generate a TypeScript module exporting two functions:

**`buildLocalBusinessSchema()`** — returns a complete `schema.org/AutoRepair` JSON-LD object:
```jsonc
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoRepair"],
  "name": "Pneuservis Batovec",
  "legalName": "Pneubat s.r.o.",
  "image": "https://pneuservis-batovec.cz/og-image.jpg",
  "logo": "https://pneuservis-batovec.cz/logo.svg",
  "@id": "https://pneuservis-batovec.cz/#localbusiness",
  "url": "https://pneuservis-batovec.cz",
  "telephone": "+420602427504",
  "email": "harkabusova@seznam.cz",
  "priceRange": "$$",
  "currenciesAccepted": "CZK",
  "paymentAccepted": "Cash, Credit Card",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Kladrubská 3052",
    "addressLocality": "Teplice",
    "postalCode": "415 01",
    "addressRegion": "Ústecký kraj",
    "addressCountry": "CZ"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 50.6383,
    "longitude": 13.8238
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday"], "opens": "07:30", "closes": "17:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Friday"], "opens": "07:30", "closes": "16:00" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Pneuservis služby",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Přezutí a vyvážení pneumatik" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Oprava a renovace ALU kol" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Výměna motorového oleje" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Oprava a výměna brzd" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Odvoz a dovoz vozidla" } }
    ]
  },
  "areaServed": [
    { "@type": "City", "name": "Teplice" },
    { "@type": "City", "name": "Ústí nad Labem" },
    { "@type": "City", "name": "Most" },
    { "@type": "City", "name": "Duchcov" }
  ],
  "sameAs": []
}
```

**`buildBreadcrumbSchema(items: {name: string, url: string}[])`** — returns a `BreadcrumbList` schema for sub-pages.

### 2.4 — Usage in `src/routes/+page.svelte`

On the homepage, import and render both:
```svelte
<SeoHead
  title="Pneuservis Batovec Teplice | Přezutí, ALU kola, Odvoz vozidla"
  description="Pneuservis Batovec Teplice — přezutí a vyvážení pneumatik, oprava ALU kol, výměna oleje a brzd. Nabízíme odvoz a dovoz vozidla. Volejte +420 602 427 504."
  canonical="https://pneuservis-batovec.cz/"
/>
<JsonLd schema={buildLocalBusinessSchema()} />
```

---

## ══════════════════════════════════════════
## MODULE 3 — UI COMPONENTS
## ══════════════════════════════════════════

### DESIGN DIRECTION
The aesthetic is **industrial precision meets Czech pragmatism**: dark background (#0F1117), strong brand-red accents (#E63B2E), Barlow Condensed for all headings (all-caps, tight letter-spacing), Inter Variable for body. Layouts use CSS Grid with deliberate asymmetry. No rounded-3xl softness — use `rounded-sm` or `rounded` at most. Every interactive element has a visible focus ring in brand-red for accessibility.

---

### 3.1 — `src/lib/components/layout/Header.svelte`

Generate a sticky header (`position: sticky; top: 0; z-index: 50`) with:
- Logo area (left): SVG inline logo of a stylized tire with text "Pneuservis Batovec" in Barlow Condensed. Make the SVG logo a reusable `Logo.svelte` snippet.
- Navigation (right, desktop): anchor links to page sections: `#uvod`, `#sluzby`, `#o-nas`, `#kontakt`. Text in Czech: "Úvod", "Služby", "O nás", "Kontakt".
- Mobile hamburger: Svelte 5 `$state(false)` for `menuOpen`. Animate the menu with a CSS `transition` (no JS animation). The mobile menu must be a full-width dropdown that does NOT obscure the floating CTA button.
- Phone number prominently in the header on desktop: `<a href="tel:+420602427504">+420 602 427 504</a>` styled as a ghost-red button.
- `role="banner"` on `<header>`.
- Background: semi-transparent dark with `backdrop-filter: blur(8px)` for glassmorphism effect.

### 3.2 — `src/lib/components/sections/Hero.svelte`

Generate a full-viewport hero section (`min-height: 100svh`) with:
- Background: a dark overlay on a high-contrast image. Use `<enhanced:img src="$lib/assets/hero-bg.jpg" alt="">` with `aria-hidden="true"` (decorative) and `loading="eager"` and `fetchpriority="high"`. The `?enhanced` query triggers `vite-imagetools` to auto-generate WebP/AVIF versions.
- Content layer (centered, slightly left-aligned on desktop):
  - `<span>` tag above headline: "Teplice & okolí" in brand-red small caps.
  - `<h1>` in Barlow Condensed 800, ~5xl/7xl, white, all-caps, with line-break between "PNEUSERVIS" and "BATOVEC". This must be the ONLY `<h1>` on the page.
  - Subheadline `<p>`: "Přezutí, vyvážení, oprava ALU kol a výměna oleje — s možností odvozu vašeho vozidla."
  - USP badge: distinct colored pill/badge saying "🚗 Odvezeme & přivezeme vaše auto" — this is the primary differentiator.
  - Two CTA buttons side by side:
    1. Primary (brand-red, filled): `<a href="tel:+420602427504">Zavolat nyní</a>` with a phone icon.
    2. Secondary (ghost, white border): `<a href="#sluzby">Naše služby</a>`.
- Animated scroll-down chevron at the bottom.
- `id="uvod"` on the section.

### 3.3 — `src/lib/components/sections/OpeningHoursBanner.svelte`

**This is the most critical component — see MODULE 4 for full logic.**
This banner renders BELOW the hero and ABOVE the services section. It shows a full-width status bar with dynamic content (see Module 4). Style: dark card with a green left-border (`border-l-4 border-green-500`) when open, red border when closed. Use `role="status"` and `aria-live="polite"` for accessibility.

### 3.4 — `src/lib/components/sections/Services.svelte`

Generate a services section with:
- `id="sluzby"` on the section.
- Section heading `<h2>`: "Naše služby" in Barlow Condensed.
- Section subheading `<p>`: "Komplexní pneuservis pro osobní auta, motocykly i čtyřkolky."
- A responsive CSS grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`.
- Generate **5 `ServiceCard` components** (as a sub-component `ServiceCard.svelte`) using `{#snippet}` for the card template. Each card contains:
  - An Iconify icon (`@iconify/svelte`) relevant to the service.
  - `<h3>` with the Czech service name.
  - `<p>` with a 2-sentence Czech description of the service.
  - A subtle "Zjistit více →" hover-reveal text link.

**Service cards data — all copy in Czech:**
1. Icon: `mdi:tire` | Title: "Přezutí a vyvážení pneumatik" | Desc: "Profesionální přezutí a přesné vyvážení kol pro osobní automobily, motocykly i čtyřkolky ATV. Pracujeme rychle, aby váš čas byl váš."
2. Icon: `mdi:car-wrench` | Title: "Oprava a renovace ALU kol" | Desc: "Svařujeme poškozené hliníkové disky a nabízíme kompletní renovaci včetně lakování. Vaše kola jako nová za zlomek ceny nových disků."
3. Icon: `mdi:oil` | Title: "Výměna motorového oleje" | Desc: "Výměna oleje a olejového filtru za použití prémiových olejů. Prodloužíme životnost vašeho motoru."
4. Icon: `mdi:car-brake-alert` | Title: "Oprava a výměna brzd" | Desc: "Kontrola, seřízení a výměna brzdových destiček, kotoučů i čelistí. Bezpečnost na prvním místě."
5. Icon: `mdi:warehouse` | Title: "Uskladnění pneumatik" | Desc: "Bezpečné sezónní uskladnění vašich pneumatik v našem skladu. Bez starostí a bez zbytečného prostoru v garáži."

**Special highlight card (6th card, spans full width on mobile, `lg:col-span-full`):**
- Background: brand-red.
- Icon: `mdi:car-arrow-right`.
- Title: "Odvoz a dovoz vozidla — naše unikátní služba".
- Desc: "Nemáte čas přijet do pneuservisu? Nevadí. Zavolejte nám, domluvíme se na čase a my přijedeme pro vaše auto, přezujeme ho a přivezeme zpět — k vám domů nebo do práce."
- CTA button inside card: "Zavolat a domluvit odvoz →" linking to `tel:+420602427504`.

### 3.5 — `src/lib/components/sections/WhyUs.svelte`

Generate an "O nás / Proč my" section with:
- `id="o-nas"` on the section.
- `<h2>`: "Proč si zákazníci vybírají právě nás?"
- A 2-column layout on desktop: left column has 4 USP bullet points with checkmark icons; right column has a stylized testimonial card or trust badges.
- USP points (all in Czech):
  1. "Přes 20 let zkušeností v oboru pneuservisu"
  2. "Unikátní služba odvozu a dovozu vozidla"
  3. "Specializace na opravu a renovaci ALU kol"
  4. "Práce na počkání — přijďte a odjeďte"
- Trust numbers row: 3 stat counters (static, not animated JS):
  - "20+" / "let praxe"
  - "500+" / "spokojených zákazníků ročně"
  - "2" / "telefony, vždy dostupní"

### 3.6 — `src/lib/components/sections/Contact.svelte`

Generate the contact section with:
- `id="kontakt"` on the section.
- `<h2>`: "Kontakt a otevírací doba"
- A 2-column grid on desktop:

**LEFT COLUMN — Contact Details:**
- Use `<address>` semantic tag wrapping the contact info.
- Company name: "Pneuservis Batovec (Pneubat s.r.o.)"
- Street address with `<a href="https://goo.gl/maps/...">Kladrubská 3052, 415 01 Teplice</a>`.
- Two phone numbers as `<a href="tel:...">` links with labels "Hlavní linka:" and "Záložní linka:".
- Email as `<a href="mailto:harkabusova@seznam.cz">` link.
- Opening hours table (a clean `<table>` or definition list `<dl>`) showing each day. Saturday and Sunday must show "Zavřeno" in red. This is STATIC display only — the DYNAMIC logic is in Module 4.

**RIGHT COLUMN — Embedded Google Map:**
- An `<iframe>` embedding Google Maps centered on the business coordinates (lat: 50.6383, lng: 13.8238). 
- IMPORTANT: Wrap the iframe in a container with `loading="lazy"` attribute on the iframe itself. Add `title="Mapa — Pneuservis Batovec Teplice"` for accessibility.
- The map iframe must have `width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"`.
- Use Intersection Observer API in a Svelte 5 `$effect()` to load the map iframe `src` only when the section scrolls into view (lazy-load the map to protect Lighthouse performance score). Before it loads, show a dark placeholder with a map pin icon.

### 3.7 — `src/lib/components/layout/FloatingCTA.svelte`

Generate a floating "Call Now" button that:
- Is `position: fixed`, `bottom: 1.5rem`, `right: 1.5rem`, `z-index: 100`.
- Renders as a large, pill-shaped button in brand-red with a phone icon and text: "Zavolat nyní".
- On mobile: shows icon + text. On desktop, shows only icon (text hidden but available to screen readers via `sr-only` span).
- Has a subtle `box-shadow` pulse animation (CSS `@keyframes pulse-ring`) to draw attention.
- Uses Svelte 5 `$effect()` with a scroll listener: when the user has scrolled past 300px from top, the button appears with a smooth CSS transition (`opacity`, `translate`). Before 300px scroll, it is hidden (the hero already has a call CTA).
- The phone icon is an Iconify `mdi:phone` icon.
- `aria-label="Zavolat Pneuservis Batovec"`.

### 3.8 — `src/lib/components/layout/Footer.svelte`

Generate a footer with:
- Dark background, 3-column layout on desktop.
- Column 1: Logo + tagline "Pneuservis v Teplicích — rychle, spolehlivě, s odvozem."
- Column 2: Quick links (Úvod, Služby, O nás, Kontakt) and a "Sitemap" link if applicable.
- Column 3: Address and phone number repeated for easy access.
- Bottom bar: `© 2024 Pneubat s.r.o. Všechna práva vyhrazena.` and a link to privacy policy.
- `role="contentinfo"` on `<footer>`.

---

## ═══════════════════════════════════════════════════
## MODULE 4 — DYNAMIC OPENING HOURS LOGIC (SVELTE 5 RUNES)
## ═══════════════════════════════════════════════════

### 4.1 — `src/lib/utils/openingHours.ts`

Generate a TypeScript utility module (NO Svelte imports — pure TS):

```typescript
// All types and constants for shop hours logic

export type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6; // JS Date.getDay() convention

export interface DaySchedule {
  open: string | null;  // "HH:MM" or null if closed
  close: string | null;
}

export interface ShopStatus {
  isOpen: boolean;
  statusText: string;           // Czech text for display
  nextEventText: string;        // e.g. "Dnes zavíráme v 17:00" or "Otevíráme zítra v 7:30"
  dayName: string;              // Czech day name
  todaySchedule: DaySchedule;
  urgency: 'open' | 'closing-soon' | 'closed';
}
```

Generate the `SCHEDULE` constant (Record<DayOfWeek, DaySchedule>):
- Day 0 (Sunday): `{ open: null, close: null }` — closed.
- Day 1 (Monday): `{ open: '07:30', close: '17:00' }`.
- Day 2 (Tuesday): `{ open: '07:30', close: '17:00' }`.
- Day 3 (Wednesday): `{ open: '07:30', close: '17:00' }`.
- Day 4 (Thursday): `{ open: '07:30', close: '17:00' }`.
- Day 5 (Friday): `{ open: '07:30', close: '16:00' }`.
- Day 6 (Saturday): `{ open: null, close: null }` — closed.

Generate `CZECH_DAY_NAMES: Record<DayOfWeek, string>`:
```
0: 'neděle', 1: 'pondělí', 2: 'úterý', 3: 'středa', 4: 'čtvrtek', 5: 'pátek', 6: 'sobota'
```

Generate the core function `getShopStatus(now?: Date): ShopStatus`:

**Logic to implement (generate complete, working TypeScript):**

```
1. Get current local time using `now` param (defaults to `new Date()`).
   IMPORTANT: The shop is in the Czech Republic (Europe/Prague timezone, CET/CEST).
   Use `Intl.DateTimeFormat` with `timeZone: 'Europe/Prague'` to extract the correct
   local hour, minute, and day-of-week — do NOT use `getHours()` directly, as the
   server/client may be in a different timezone.

2. Get today's DaySchedule from SCHEDULE[localDayOfWeek].

3. Parse open/close times to total minutes since midnight for comparison.

4. Determine shop state:
   a. If today is CLOSED (open === null): find next open day by iterating forward
      through days (max 7 iterations). Set `isOpen = false`, `urgency = 'closed'`.
      statusText = "Dnes zavřeno"
      nextEventText = "Otevíráme v {CZECH_DAY_NAME} v {open time}" (if next day)
      or "Otevíráme zítra v {open time}" (if next day is tomorrow).
   
   b. If before opening time: `isOpen = false`, `urgency = 'closed'`.
      statusText = "Momentálně zavřeno"
      nextEventText = "Dnes otevíráme v {open time}"

   c. If after closing time: `isOpen = false`, `urgency = 'closed'`.
      Find next open day. statusText = "Dnes již zavřeno".
      nextEventText = "Otevíráme zítra v {open time}" or next weekday.

   d. If within 60 minutes of closing: `isOpen = true`, `urgency = 'closing-soon'`.
      statusText = "Brzy zavíráme"
      nextEventText = "Dnes zavíráme v {close time} — zbývá {minutes} minut"

   e. Otherwise (fully open): `isOpen = true`, `urgency = 'open'`.
      statusText = "Nyní otevřeno"
      nextEventText = "Dnes zavíráme v {close time}"

5. Return the full ShopStatus object.
```

**Edge case:** If `close` time is before `open` time (not applicable here but future-proof it), handle midnight crossover.

### 4.2 — `src/lib/components/sections/OpeningHoursBanner.svelte`

Generate the banner component using Svelte 5 runes:

```svelte
<script lang="ts">
  import { getShopStatus } from '$lib/utils/openingHours.js';
  import { onMount } from 'svelte'; // Only for the interval setup

  // Svelte 5: reactive state
  let now = $state(new Date());
  let status = $derived(getShopStatus(now));
  
  // Update every 60 seconds so the status stays accurate without page reload
  $effect(() => {
    const interval = setInterval(() => {
      now = new Date();
    }, 60_000);
    return () => clearInterval(interval);
  });
</script>
```

**Template requirements:**
- Outer element: `<div role="status" aria-live="polite" aria-atomic="true">`.
- Left side: a colored dot indicator (green when `urgency === 'open'`, amber when `urgency === 'closing-soon'`, red when `urgency === 'closed'`) with a CSS `animate-pulse` class on the dot when open.
- Status badge: renders `status.statusText` in bold (e.g. "Nyní otevřeno").
- Next event text: renders `status.nextEventText` in muted color.
- Right side (desktop only): a condensed 5-column mini schedule table showing Mon–Fri with times, highlighting today's row with the brand-red color.
- The mini schedule table must be generated from the `SCHEDULE` constant — never hardcoded in template.
- Mobile layout: stacked, showing only the status badge and next event text.

### 4.3 — `src/lib/components/sections/OpeningHoursTable.svelte`

Generate a standalone, accessible `<table>` component for the Contact section:
- `<caption>` text: "Otevírací doba Pneuservis Batovec".
- `<thead>`: "Den" | "Otevřeno od" | "Zavírací čas".
- `<tbody>`: iterate over all 7 days using `SCHEDULE`. For closed days, render colspan cell with "Zavřeno" in `text-red-400`. For open days render the times.
- Highlight the current day's row with `aria-current="true"` and a brand-red left border.
- Make the table responsive: on mobile it stacks as a definition list `<dl>` (use CSS `@media` to switch, or render two separate elements with conditional visibility via Tailwind `hidden sm:table`).

---

## ═══════════════════════════════════════════════════
## MODULE 5 — PERFORMANCE & LIGHTHOUSE OPTIMIZATIONS
## ═══════════════════════════════════════════════════

### 5.1 — Image Strategy

Generate an image optimization guide as code comments in `src/lib/assets/`:
- Hero image: 1920×1080px, exported as `hero-bg.jpg`. Import with `?enhanced` for automatic WebP/AVIF. Add `sizes="100vw"` and `fetchpriority="high"`.
- All other images: use `loading="lazy"` and explicit `width` and `height` attributes.
- Generate an `<picture>` fallback wrapper for the hero: `<source type="image/avif">`, `<source type="image/webp">`, `<img>` fallback.
- OG image: a static `1200×630px` PNG at `static/og-image.png` — this bypasses image optimization (served directly from `static/`).
- Generate a `src/lib/components/ui/OptimizedImage.svelte` wrapper component that enforces `width`, `height`, `alt`, and `loading` props via TypeScript `$props()`.

### 5.2 — Font Loading Strategy

In `app.html`, add:
```html
<!-- Preconnect for zero-latency font loading -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<!-- Non-blocking font load -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Inter:ital,opsz,wght@0,14..32,300..700&display=swap" />
<!-- Font display: swap is set in the Google Fonts URL via &display=swap -->
```
Add a CSS custom property in `app.css`:
```css
:root {
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}
```

### 5.3 — Critical CSS & Above-the-Fold

- Generate a `src/app.css` with Tailwind base/components/utilities imports.
- Add a `<style>` block in `app.html` with only 3-4 lines of truly critical CSS: the `body` background color (`#0F1117`) and `body { margin: 0 }`, so there's no flash of white before Tailwind loads.

### 5.4 — `static/robots.txt`

Generate:
```
User-agent: *
Allow: /
Sitemap: https://pneuservis-batovec.cz/sitemap.xml
```

### 5.5 — `src/routes/sitemap.xml/+server.ts`

Generate a SvelteKit endpoint that returns a properly formatted XML sitemap with:
- `<urlset>` with `xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"`.
- One `<url>` for the homepage with `<loc>`, `<lastmod>` (using `__BUILD_DATE__`), `<changefreq>weekly</changefreq>`, and `<priority>1.0</priority>`.
- Response headers: `Content-Type: application/xml`, `Cache-Control: max-age=3600`.
- Mark this route with `export const prerender = true` so it's statically generated.

### 5.6 — `static/manifest.webmanifest`

Generate a Web App Manifest:
```json
{
  "name": "Pneuservis Batovec",
  "short_name": "Pneubat",
  "description": "Pneuservis Teplice — přezutí, ALU kola, odvoz vozidla",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0F1117",
  "theme_color": "#E63B2E",
  "lang": "cs",
  "icons": [
    { "src": "/icons/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icons/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```
Add `<link rel="manifest" href="/manifest.webmanifest">` to `app.html`.

---

## ══════════════════════════════════════
## MODULE 6 — PROJECT FILE STRUCTURE
## ══════════════════════════════════════

Generate the COMPLETE directory tree as a reference comment in `README.md`:

```
pneubat-web/
├── src/
│   ├── app.html
│   ├── app.css
│   ├── app.d.ts
│   ├── lib/
│   │   ├── assets/
│   │   │   └── hero-bg.jpg          # To be replaced with real photo
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Header.svelte
│   │   │   │   ├── Footer.svelte
│   │   │   │   ├── FloatingCTA.svelte
│   │   │   │   └── Logo.svelte
│   │   │   ├── sections/
│   │   │   │   ├── Hero.svelte
│   │   │   │   ├── OpeningHoursBanner.svelte
│   │   │   │   ├── Services.svelte
│   │   │   │   ├── ServiceCard.svelte
│   │   │   │   ├── WhyUs.svelte
│   │   │   │   └── Contact.svelte
│   │   │   ├── seo/
│   │   │   │   ├── SeoHead.svelte
│   │   │   │   └── JsonLd.svelte
│   │   │   └── ui/
│   │   │       └── OptimizedImage.svelte
│   │   ├── seo/
│   │   │   └── schemas.ts
│   │   └── utils/
│   │       └── openingHours.ts
│   └── routes/
│       ├── +layout.svelte
│       ├── +layout.ts
│       ├── +page.svelte
│       └── sitemap.xml/
│           └── +server.ts
├── static/
│   ├── robots.txt
│   ├── manifest.webmanifest
│   ├── favicon.ico
│   ├── favicon.svg
│   └── og-image.png                 # 1200x630 static OG image
├── svelte.config.js
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## ════════════════════════════════════════
## MODULE 7 — `src/routes/+page.svelte` ASSEMBLY
## ════════════════════════════════════════

Generate the complete homepage page component that assembles all sections in the correct order. This is the ONLY route needed for this single-page site (all sections are on one page with anchor navigation):

```svelte
<script lang="ts">
  import SeoHead from '$components/seo/SeoHead.svelte';
  import JsonLd from '$components/seo/JsonLd.svelte';
  import Hero from '$components/sections/Hero.svelte';
  import OpeningHoursBanner from '$components/sections/OpeningHoursBanner.svelte';
  import Services from '$components/sections/Services.svelte';
  import WhyUs from '$components/sections/WhyUs.svelte';
  import Contact from '$components/sections/Contact.svelte';
  import { buildLocalBusinessSchema } from '$lib/seo/schemas.js';
</script>

<SeoHead
  title="Pneuservis Batovec Teplice | Přezutí, ALU kola, Odvoz vozidla"
  description="Pneuservis Batovec Teplice — přezutí a vyvážení pneumatik, oprava ALU kol, výměna oleje a brzd. Nabízíme odvoz a dovoz vozidla. Volejte +420 602 427 504."
  canonical="https://pneuservis-batovec.cz/"
/>
<JsonLd schema={buildLocalBusinessSchema()} />

<Hero />
<OpeningHoursBanner />
<Services />
<WhyUs />
<Contact />
```

Ensure each section component has proper `id` attributes for anchor navigation to work.

---

## ══════════════════════════════════════════
## MODULE 8 — QUALITY CHECKLIST FOR COPILOT
## ══════════════════════════════════════════

After generating all files, verify the following. If any item fails, fix it before presenting the code:

**Accessibility (Target: Lighthouse A11y 100)**
- [ ] All `<img>` tags have non-empty `alt` attributes (decorative images use `alt=""` + `aria-hidden="true"`).
- [ ] All interactive elements are keyboard-navigable and have visible focus rings.
- [ ] Color contrast ratio ≥ 4.5:1 for normal text, ≥ 3:1 for large text against background.
- [ ] `<html lang="cs">` is set.
- [ ] Form elements (if any) have associated `<label>`.
- [ ] Heading hierarchy is strictly sequential: one `<h1>`, then `<h2>`, then `<h3>`.
- [ ] `aria-live="polite"` on the dynamic opening hours banner.
- [ ] No `tabindex > 0` anywhere.

**SEO (Target: Lighthouse SEO 100)**
- [ ] `<title>` tag is present and unique.
- [ ] `<meta name="description">` is present and between 120-160 characters.
- [ ] `<link rel="canonical">` is present.
- [ ] JSON-LD `LocalBusiness`/`AutoRepair` schema is valid (test at schema.org/validator).
- [ ] `robots.txt` allows all crawlers.
- [ ] `sitemap.xml` is generated and linked in `robots.txt`.
- [ ] All `<a>` links have descriptive text (no "klikněte zde" or "více").
- [ ] `hreflang="cs"` is set for the Czech version.

**Performance (Target: Lighthouse Perf 100)**
- [ ] Hero image has `fetchpriority="high"` and `loading="eager"`.
- [ ] All other images have `loading="lazy"` and explicit `width`/`height`.
- [ ] Google Maps iframe is lazy-loaded via Intersection Observer.
- [ ] No render-blocking scripts (all `<script>` tags are module or deferred).
- [ ] `precompress: true` in adapter-static config (brotli static files).
- [ ] `<link rel="preconnect">` for Google Fonts.
- [ ] Web App Manifest is referenced.

**Best Practices (Target: Lighthouse BP 100)**
- [ ] HTTPS assumed in all absolute URLs.
- [ ] No `console.log` left in production code.
- [ ] Images have correct aspect ratios (no layout shift).
- [ ] No deprecated HTML attributes.
- [ ] `referrerpolicy="no-referrer-when-downgrade"` on Google Maps iframe.

**Czech Language QA**
- [ ] Zero English words in any user-visible string.
- [ ] All phone numbers are formatted as `+420 XXX XXX XXX` in display but `+420XXXXXXXXX` in `href="tel:"`.
- [ ] Email is correctly spelled: `harkabusova@seznam.cz`.
- [ ] Address: `Kladrubská 3052, 415 01 Teplice` (verify comma placement matches Czech postal format).
- [ ] Opening hours show correct Friday close time of `16:00` (not `17:00`).

---

## ════════════════════════════════════════════
## FINAL INSTRUCTION TO COPILOT
## ════════════════════════════════════════════

Start code generation with Module 1 (project setup commands and config files).
Then proceed sequentially through each module.
After each module, pause and output the file tree of files created so far.
Do not abbreviate or truncate any file — output the complete, runnable source.
All Czech strings must be grammatically correct — when in doubt, prefer formal register (vykání).
Do not add any placeholder images or lorem ipsum text — use the real business data from the BUSINESS DATA block.
When you reference an Iconify icon, import it as: `import { Icon } from '@iconify/svelte'; import tireSvg from '@iconify-icons/mdi/tire';` or use the string API `icon="mdi:tire"` per Iconify Svelte docs.
Generate complete TypeScript types for every component's props.
Every `$effect()` that sets up a listener MUST return a cleanup function.
Test the opening hours logic mentally: on a Wednesday at 16:45, status should be `urgency: 'closing-soon'` with text "Dnes zavíráme v 17:00 — zbývá 15 minut". On a Saturday at any time, status should be `urgency: 'closed'` with `nextEventText` pointing to Monday at 07:30. Verify this before outputting the utility function.
