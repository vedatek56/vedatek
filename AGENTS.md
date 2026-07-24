<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-END:nextjs-agent-rules -->

# VEDATEK Project Performance, Accessibility & SEO Rules

Whenever creating or modifying pages, components, or styles in this repository, strictly enforce the following standards:

### 1. Performance & LCP (Target: 100/100)
- **Hero / Above-the-Fold Content**: Heading elements (`<h1>`, `<p>`, hero visuals) MUST paint immediately on initial render. NEVER wrap above-the-fold hero text in Framer Motion with `initial={{ opacity: 0 }}`.
- **Off-Screen & Below-the-Fold Components**: Use `[content-visibility: auto]` on heavy SVG visual containers (e.g. `HeroVisual`, `IntegrationVisual`) to defer off-screen mobile rendering.
- **CSS Filters**: Avoid heavy backdrop blur filters (`blur-3xl`, `backdrop-blur-xl`) on mobile containers; use lightweight opacity layers or radial gradients.
- **Analytics & Scripts**: Always load Google Analytics / GTM with `strategy="lazyOnload"` and include `preconnect` / `dns-prefetch` resource hints in `<head>`.

### 2. Accessibility & WCAG AA (Target: 100/100)
- **Strict Heading Order**: Heading elements MUST follow a sequential descending order (`<h1>` -> `<h2>` -> `<h3>`). NEVER use `<h4>` without a preceding `<h3>` and `<h2>`.
- **Color Contrast Ratio**: Ensure foreground text meets WCAG AA contrast ratio (>4.5:1). Avoid low-opacity text color utilities like `text-brand-cyan/85` on dark backgrounds.
- **Interactive Elements**: All `<button>` tags MUST have an explicit `type` attribute (`type="button"` or `type="submit"`) and a descriptive `aria-label`.
- **Icon / Logo Links**: Icon-only links and brand logos MUST have descriptive `aria-label` attributes (e.g., `aria-label="VEDATEK Homepage"`).

### 3. SEO & Anchor Text (Target: 100/100)
- **Descriptive Link Text**: NEVER use generic link text like `"Learn More"` or `"Click Here"`. Use unique, keyword-rich anchor text (e.g., `"Explore AI & Automation"`, `"View Linnworks Services"`).
- **Structured Data Schemas**: Include valid JSON-LD schemas (`FAQPage`, `LocalBusiness`, `ProfessionalService`) on relevant landing pages.
- **Internal Link Hierarchy**: Maintain site-wide internal link paths (e.g. Footer, CTA banners) to pass link equity directly to priority SEO landing pages (`/linnworks-consultants`).

### 4. Build & Environment Optimization
- Maintain modern `browserslist` target in `package.json` to eliminate legacy polyfills (`Array.prototype.flat`, `Object.hasOwn`).
- Preserve static asset long-term immutable caching rules in `public/_headers`.
