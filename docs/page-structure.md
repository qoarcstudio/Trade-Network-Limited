# tradeCommerce — Technical Page Structure

> **Framework:** Next.js 16.1.6 (App Router) · **Language:** TypeScript · **Font:** Outfit (Google Fonts)  
> **Build:** Static Export (`output: 'export'`) · **Base Path (prod):** `/Trade-Network-Limited`

---

## Directory Overview

```
src/
├── app/
│   ├── layout.tsx          # Root layout (HTML shell, Outfit font, global CSS)
│   ├── globals.css         # Design tokens, utilities, responsive breakpoints
│   ├── page.tsx            # Home page  →  /
│   ├── about-us/page.tsx   # About Us    →  /about-us (story-driven layout)
│   ├── contact/page.tsx    # Contact     →  /contact
│   ├── service/1/page.tsx  # Service    →  /service/1 (former product)
│   └── services/page.tsx   # Services   →  /services (dedicated page)
│
└── components/
    ├── Header.tsx           # Sticky navbar (desktop + mobile drawer)
    ├── Hero.tsx             # Full-viewport hero with diagonal-line pattern
    ├── Slider.tsx           # Auto-advancing content slider (5s interval)
    ├── Services.tsx         # Services carousel (former Products)
    ├── Testimonials.tsx     # Client quote slider with prev/next controls
    ├── ImageGallery.tsx     # 4-column gallery grid with nav arrows
    ├── Contact.tsx          # Dark CTA banner ("Ready to grow?")
    ├── Footer.tsx           # 4-column footer with subscribe box + socials
    ├── RevealOnScroll.tsx   # Intersection Observer wrapper for scroll animations
    └── Placeholder.tsx      # Aspect-ratio placeholder for images
```

---

## Pages

### 1. Home — `/`
**File:** `src/app/page.tsx` · **Rendering:** Server Component (static)

| Section Order | Component        | Description |
|:---:|:---|:---|
| 1 | `Header`         | Sticky navbar |
| 2 | `Hero`           | Headline, subtitle, "Get Started" CTA |
| 3 | `Slider`         | Image + text carousel (5 slides, auto-advances) |
| 4 | `Services`       | Horizontal-scroll service cards (8 items) |
| 5 | `Testimonials`   | Client quotes slider (3 testimonials) |
| 6 | `ImageGallery`   | 4-col image grid with prev/next arrows (hidden on mobile) |
| 7 | `Contact`        | Dark-background CTA section |
| 8 | `Footer`         | Site links, subscribe form, social icons |

---

### 3. About Us — `/about-us`
**File:** `src/app/about-us/page.tsx` · **Rendering:** Client Component (`"use client"`)

| Section Order | Description |
|:---:|:---|
| 1 | **Header** |
| 2 | **Hero** — Mission-focused headline ("Connecting the World..."), description, and "Our Mission" badge. |
| 3 | **Story** — "A Journey of Shared Growth" with overlapping image and "Est. 2018" indicator. |
| 4 | **Stats** — Four key statistical blocks (Partners, Presence, Projects, Experts). |
| 5 | **Values** — "Our Core Values" section with three descriptive cards and icons. |
| 6 | **Footer** |

---

### 4. Contact Us — `/contact`
**File:** `src/app/contact/page.tsx` · **Rendering:** Client Component (`"use client"`)

| Section Order | Description |
|:---:|:---|
| 1 | **Header** |
| 2 | **Hero Title** — Badge ("Project Inquiry"), heading, description |
| 3 | **2-col Layout** — Left: 3 info cards (Email, Phone, Address). Right: Contact form |
| 4 | **Footer** |

**State:** `formData` object — `{ name, email, subject, message }`. Form currently logs to console on submit.

---

### 5. Service Detail — `/service/1`
**File:** `src/app/service/1/page.tsx` · **Rendering:** Client Component (`"use client"`)

| Section Order | Description |
|:---:|:---|
| 1 | **Header** |
| 2 | **Breadcrumbs** — Home → Services → Service Name |
| 3 | **Service Layout** — 2-col: Image gallery · Service info (description, inquiry button) |
| 4 | **Detail Tabs** — 3 tabs: Description, Specifications, Reviews |
| 5 | **Related Services** — Reuses `Services` component |
| 6 | **Footer** |

**State:** `mainImage` (string), `activeTab` (string).

---

## Shared Components

| Component | Type | Key Behavior |
|:---|:---:|:---|
| **Header** | Client | Sticky, 80px height. Desktop: nav links (Home, About Us, Services, Contact Us). Mobile: hamburger → slide-down drawer. |
| **Hero** | Server | Full-viewport section with diagonal-line CSS pattern, radial mask, and curvy SVG bottom shape. `isolation: isolate` for correct z-index layering. |
| **Slider** | Client | 5-slide carousel, auto-advances every 5s via `useEffect` timer. Pagination dots. |
| **Services Listing** | Client | Dedicated `/services` page with vertical card layout and read-more links. |
| **Services Section** | Client | Horizontal-scroll container with `scrollSnapType`. 8 service cards on Home page. |
| **Testimonials** | Client | 3-quote slider with prev/next circular buttons and quote icon. |
| **ImageGallery** | Server | 4-column responsive grid. Nav arrows hidden on mobile (`hidden-md` class). |
| **Contact** | Server | Dark CTA banner linking to `/contact`. |
| **Footer** | Client | 4-column grid: Product links, Information links, Company links, Subscribe form. Bottom bar: logo, legal links, social icons (LinkedIn, Facebook, GitHub). |
| **RevealOnScroll** | Client | Wraps children with Intersection Observer. Adds `is-visible` class on scroll to trigger CSS transitions (`reveal-up`, `reveal-left`, `reveal-right`). Supports configurable `delay`. |
| **Placeholder** | Server | Renders a styled div with aspect-ratio and placeholder text/styling for missing images. |

---

## Styling Architecture

| Layer | File | Details |
|:---|:---|:---|
| **Design Tokens** | `globals.css` `:root` | Colors (`--bg-primary`, `--accent-blue`, etc.), shadows, radii, transitions |
| **Dark Mode** | `globals.css` | **Disabled**: The `@media (prefers-color-scheme: dark)` block is commented out to ensure theme consistency and fix mobile visibility issues. |
| **Utility Classes** | `globals.css` | `.flex`, `.grid`, `.container`, `.btn`, `.badge`, `.glass`, `.hidden-md`, `.flex-col-md` |
| **Responsive** | `globals.css` `@media` | **Tablet** (≤1024px): 4-col → 2-col. **Mobile** (≤768px): all grids → 1-col, hero padding reduced, buttons full-width. |
| **Animations** | `globals.css` | `@keyframes fadeIn`, `.reveal-up/left/right` with `.is-visible` trigger, `.animate-fade-in` with delay classes |
| **Scoped Styles** | Per-component `<style jsx>` | Hover effects, focus states, scrollbar hiding |

---

## Navigation Map

```
Header Navbar
├── Home          →  /
├── About Us      →  /about-us
├── Services      →  /services
└── Contact Us    →  /contact

Internal Links
├── Hero CTA      →  (no link, button only)
├── Contact CTA   →  /contact
├── Service Card  →  /service/1
└── Footer        →  # (placeholder links)
```

---

## Build & Deploy

```bash
# Development
npm run dev          # → http://localhost:3000

# Production (static export)
npm run build        # → outputs to /out directory
```

**Production config:** `basePath: '/Trade-Network-Limited'`, `assetPrefix: '/Trade-Network-Limited/'` — configured for GitHub Pages deployment.
