# Pinheiro Farias Advogados Premium Landing Page Design

Date: 2026-06-15

## Objective

Create a new premium institutional landing page for Pinheiro Farias Advogados. The page should replace the current dated visual presentation with a refined, Apple-inspired digital presence that builds authority before asking visitors to contact the office.

The primary conversion goal is not an immediate hard sell. The page should first communicate trust, specialization, method, and regional presence, then offer a calm contact path.

## Audience

The page is aimed at workers and professionals in Campinas and surrounding regions who need specialized labor law guidance, especially in the following segments:

- Banking
- Security guards
- Armed escort
- Building entrance and concierge roles
- Telecommunications
- Telemarketing

The tone should be clear, serious, and accessible. It should not feel cold, generic, or overly corporate.

## Recommended Direction

Use an institutional premium legal direction with a measured storytelling layer.

The design should be sober and high-trust: generous white space, strong typography, refined asymmetry, transparent borders, technical gridlines, and a curated legal color system. GSAP should be used for scroll reveals and one central pinned narrative section, while standard hover and press interactions should remain CSS-based.

## Visual System

### Color Palette

Use semantic CSS variables instead of raw utility colors.

- `--bg`: warm ivory or soft legal paper tone, approximately `#F7F3EA`
- `--bg-alt`: muted stone, approximately `#ECE6DA`
- `--text`: deep ink/navy, approximately `#071B33`
- `--text-secondary`: desaturated slate, approximately `#5E6470`
- `--border`: transparent ink border, approximately `rgba(7, 27, 51, 0.08)`
- `--accent`: antique brass, approximately `#A67C3D`
- `--accent-secondary`: deep oxford navy, approximately `#061A30`
- `--accent-warm`: muted clay, approximately `#9B6048`

No emojis should appear anywhere in the UI. No raw primary red, green, yellow, or blue should be used.

### Typography

Use typography as the main design object.

- Display and headings: elegant serif or high-end editorial font, with large sizes and light weight where available.
- Body: clean sans-serif for legibility.
- Labels: small uppercase text with wide tracking.

The implementation can use locally available Google fonts or font imports. Recommended pairing:

- `Cormorant Garamond` or `Playfair Display` for display text.
- `Inter` or `Manrope` for body text.

### Layout Language

The page should avoid symmetrical 3-column generic grids. Prefer:

- 12-column layouts.
- Offset section titles and content.
- Staggered service modules.
- Blueprint-style vertical and horizontal gridlines.
- Large section padding, generally `py-24` to `py-36`.
- Transparent borders and subtle radial vignette backgrounds.

Cards should be restrained and used only when needed for repeated content or framed interaction areas.

## Page Structure

### 1. Hero

Purpose: establish authority immediately.

Content:

- Brand name: Pinheiro Farias Advogados
- Positioning line: "Advocacia trabalhista estratégica em Campinas e região"
- Supporting copy explaining specialized, careful, and technical representation.
- Primary CTA: "Conheça a atuação"
- Secondary CTA: "Falar com o escritório"

Visual:

- Full first viewport or near-full first viewport.
- Asymmetric layout with large typography on the left and an abstract legal composition on the right.
- The abstract composition should suggest documents, argument lines, balance, and legal structure without using generic stock icons.
- Sticky glassmorphism header with restrained navigation.

Animation:

- GSAP entrance fade with maximum vertical movement of 20px.
- Subtle stagger on headline, copy, CTAs, and visual elements.

### 2. Authority / Institutional Proof

Purpose: build credibility before conversion.

Content:

- A short institutional statement.
- Editable proof points such as "Atuação especializada", "Campinas e região", and "Análise técnica do caso".

Important constraint:

- Do not invent years of experience, case counts, awards, client results, guarantees, or testimonials. Use neutral editable placeholders only if real facts are not supplied.

Layout:

- Large editorial statement spanning most of the width.
- Small proof points positioned asymmetrically beneath or beside the statement.

Animation:

- Scroll-triggered stagger reveal with `y: 20` maximum.

### 3. Atuação Especializada

Purpose: show the office's labor law focus and specific audience fit.

Content:

- Bancários
- Vigilantes
- Escolta armada
- Portaria
- Telecomunicações
- Telemarketing

Layout:

- 12-column asymmetric grid.
- Section label and heading on one side.
- Services in offset rows or staggered modules, not a generic equal 3-column card grid.
- Each item can include a thin custom SVG line icon or typographic marker.

Interaction:

- CSS hover transition only.
- On hover, reveal a short explanatory line and animate a subtle border/accent shift.

### 4. Pinned GSAP Storytelling Section

Purpose: make the page feel premium and memorable while reinforcing legal method.

Concept:

"Do conflito à estratégia": as the visitor scrolls, scattered document fragments and line paths organize into a structured legal argument.

Stages:

1. Diagnóstico: scattered lines and document blocks represent the initial case context.
2. Estratégia: lines align into a clear route.
3. Defesa técnica: elements converge into a refined central mark or balanced composition.

Implementation rules:

- Use GSAP ScrollTrigger with `pin: true` and `scrub: 1.5`.
- Initialize all SVG positions with `gsap.set`, not hardcoded animated transforms in SVG markup.
- Animate to absolute coordinates for predictable cross-browser behavior.
- Keep motion sober. No large side sweeps, flashing, or looping background spins.
- Optional particle detail at the convergence point may be used, but must be minimal and elegant.

### 5. Método de Atendimento

Purpose: explain how the office works and reduce uncertainty.

Suggested steps:

- Escuta e análise inicial
- Leitura técnica dos documentos
- Definição de estratégia
- Acompanhamento com clareza

Layout:

- Vertical timeline or offset editorial rows.
- Use blueprint gridlines and subtle separators.
- Avoid busy icons and decorative clutter.

Animation:

- GSAP staggered scroll reveals.
- CSS-only hover states.

### 6. Regional Presence

Purpose: tie the brand to Campinas and surrounding region.

Content:

- Short copy about serving Campinas and nearby cities.
- Region label or understated map-like line treatment.

Constraint:

- Do not use a fake address unless supplied.

### 7. Contact Section

Purpose: offer a calm next step after authority is established.

Content:

- Short closing statement.
- Contact form with name, email, phone, message.
- Optional WhatsApp button if a real number is supplied.

Behavior:

- If no backend exists, the first implementation may use a front-end-only form with clear placeholder behavior and no false submission promise.
- A future backend, email service, or WhatsApp integration can be added as a separate implementation task.

## Technical Approach

Build as a new modern frontend project in this repository.

Recommended stack:

- Vite
- React
- TypeScript
- GSAP with ScrollTrigger
- CSS modules or global CSS with semantic variables

This stack is lighter than Next.js for a single premium landing page and easier to verify locally. If future SEO/server rendering requirements become strict, the project can later move to Next.js.

## Component Boundaries

Suggested structure:

- `src/App.tsx`: page composition only.
- `src/components/Header.tsx`: sticky navigation.
- `src/components/Hero.tsx`: first viewport and hero animation hooks.
- `src/components/Authority.tsx`: institutional statement and proof points.
- `src/components/PracticeAreas.tsx`: specialized areas.
- `src/components/StorySection.tsx`: pinned GSAP SVG narrative.
- `src/components/Method.tsx`: method/timeline section.
- `src/components/Region.tsx`: regional presence.
- `src/components/Contact.tsx`: contact section.
- `src/styles.css`: design system, global layout, utilities, responsive rules.

Keep data arrays local to components unless repeated across multiple sections.

## Animation Rules

- Register `ScrollTrigger` once where needed.
- Clean up GSAP contexts on component unmount.
- Respect `prefers-reduced-motion`; reduce or disable scroll animation where appropriate.
- Scroll reveals should use no more than 20px vertical translation.
- Reserve GSAP for hero orchestration, scroll reveals, and pinned storytelling.
- Use CSS transitions for buttons, links, hover states, and active press feedback.

## Responsive Behavior

Desktop:

- Use 12-column asymmetric grids.
- Let the hero and storytelling sections breathe with large spacing.

Tablet:

- Preserve asymmetry but reduce oversized display type.
- Keep pinned section readable and avoid cramped SVG details.

Mobile:

- Collapse into one-column editorial flow.
- Disable or simplify pinning if it harms usability.
- Preserve large typography hierarchy without clipping or horizontal scrolling.

## Accessibility

- Use semantic HTML landmarks.
- Maintain high text contrast.
- Ensure keyboard-visible focus states.
- Use real buttons and links.
- Provide labels for form fields.
- Do not rely on animation alone to communicate meaning.
- Respect reduced-motion preferences.

## Verification Criteria

The implementation should pass:

- `npm run build`
- No TypeScript errors.
- No browser console errors.
- Visual check at desktop and mobile widths.
- GSAP pinned section works without blank SVG/canvas states.
- No emojis in rendered UI or source copy.
- No generic raw primary color utility usage.

## Open Content Items

The following can be filled later without blocking the first build:

- Real office address.
- Real phone and WhatsApp number.
- Real attorney names and OAB numbers.
- Real years of practice or case volume, if the client wants to publish them.
- Real testimonials, only if legally and ethically appropriate.

Until supplied, the site should use neutral institutional language and avoid unsupported claims.
