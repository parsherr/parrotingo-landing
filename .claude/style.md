# Parrotingo Design System — Style Guide

This document is the authoritative reference for Parrotingo's visual language. Every new component, section, or UI element must follow these rules.

---

## Brand Identity

**Product:** Parrotingo — a YDT (Turkish university entrance exam) English vocabulary learning app.
**Audience:** Turkish students preparing for YDT.
**Tone:** Friendly, energetic, slightly playful. Like a helpful tutor who's also fun.
**Visual character:** Cartoon neo-brutalism — bold outlines, hard shadows, warm colors, hand-drawn feel.

---

## Color Palette

### Brand Tokens (Tailwind v4 `@theme inline` in `globals.css`)

| Token | Hex | Usage |
|---|---|---|
| `brand-orange` | `#E8651A` | Primary CTA buttons, accents, highlights |
| `brand-orange-light` | `#D4843A` | Hero CTA button, gradient text, secondary orange |
| `brand-orange-hover` | `#C75510` | Hover state for orange links |
| `brand-blue` | `#0F2A4A` | Hero section, blog section background |
| `brand-blue-dark` | `#0A1F3A` | Footer, dark CTA buttons |
| `brand-blue-darker` | `#061528` | Deepest blue, rare use |
| `#E8E0D8` | warm cream | WhyUs section, card backgrounds, mobile menu, header on scroll |
| `#E69A16` | golden yellow | Logo pill background |

### Text Opacity Conventions
- Body text on dark: `text-white/75` or `text-white/50`
- Muted on dark: `text-white/40`, `text-white/25`
- Body text on light: `text-foreground/85`
- Muted on light: `text-foreground/55`, `text-foreground/45`, `text-foreground/30`
- Footer section headings: `text-white/60`

---

## Typography

**Font:** Nunito (Google Fonts only) — loaded via `--font-nunito` CSS variable.

### Scale & Weights

| Role | Size | Weight | Class |
|---|---|---|---|
| Hero H1 | `text-5xl` → `text-7xl` (responsive) | 800 | `font-extrabold` |
| Section H2 | `text-4xl` → `text-5xl` | 800 | `font-extrabold` |
| Card H3 | `text-lg` | 800 | `font-extrabold` |
| Body large | `text-lg` → `text-2xl` | 400 | normal |
| Body standard | `text-base` / `text-sm` | 500–600 | `font-medium` / `font-semibold` |
| Category badges | `text-[11px]` | 700 | `font-bold uppercase tracking-wider` |
| Footer nav headings | `text-xs` | 700 | `font-bold uppercase tracking-wider` |
| Logo | `text-xl` | 900 | `font-black tracking-tight` |

### Heading style rules
- Always `tracking-tight` on headings.
- H1/H2 always `leading-tight` or `leading-[1.1]`.
- Brand name "Parrotingo" in headings gets `text-gradient-orange` + `Highlighter` underline.
- Key words in headings get `Highlighter` animation (see below).

---

## The Neo-Brutalist Button System

All interactive buttons follow a strict pattern. **Never deviate** from this.

### Primary (Orange) — CTA buttons
```
rounded-full bg-brand-orange text-white text-base font-extrabold
border-[3px] border-black
shadow-[4px_4px_0px_0px_#000]
hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px]
active:shadow-none active:translate-x-[4px] active:translate-y-[4px]
transition-all duration-100
```

### Dark (Navy) — Secondary/info buttons
```
rounded-full bg-brand-blue-dark text-white text-base font-extrabold
border-[3px] border-black
shadow-[5px_5px_0px_0px_#000]
hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-[3px] hover:translate-y-[3px]
active:shadow-none active:translate-x-[5px] active:translate-y-[5px]
transition-all duration-100
```

### Hero large variant — adds `px-12` or `px-10 py-4` for extra padding.

### Input fields (newsletter)
```
rounded-full bg-[#E8E0D8] text-foreground
border-[3px] border-black shadow-[4px_4px_0px_0px_#000]
focus:shadow-[2px_2px_0px_0px_#000] focus:translate-x-[2px] focus:translate-y-[2px]
transition-all duration-100
```

The hover/active interaction — button visually "presses down" by reducing shadow and translating — is the defining neo-brutalist interaction. Always use `duration-100` (fast snap).

---

## Cards

Blog cards and content cards follow this pattern:

```
bg-[#E8E0D8] rounded-2xl
border-[3px] border-black
shadow-[5px_5px_0px_0px_#000]
hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-[3px] hover:translate-y-[3px]
transition-all duration-150
```

### Hand-drawn rotation
Blog cards get a slight CSS rotation via inline style for a "tossed on a desk" feel:
```js
const cardRotations = [-1.2, 0.6, -0.8]; // degrees
style={{ transform: `rotate(${cardRotations[i]}deg)` }}
```
Use small rotations (±0.5° to ±1.5°) — never more than 2°.

### Color accent strip
Cards have a `h-2.5 w-full` colored top strip using the post's `accent` color (orange, navy, or orange-light).

### Category badge on cards
```
self-start text-[11px] font-bold uppercase tracking-wider
px-3 py-1 rounded-full border-2 border-black text-white
```
Background = the card's accent color.

---

## Section Layout System

### Background color flow (top → bottom of page)
1. **Hero** — `bg-brand-blue` (dark navy)
2. **Why Us** — cream `bg-[#E8E0D8]`, wrapped in a `bg-brand-blue` outer that provides the color transition
3. **Blog** — `bg-brand-blue` with `bg-gradient-to-b from-brand-blue to-brand-orange` outer
4. **Newsletter** — `bg-brand-orange` with `bg-gradient-to-b from-brand-orange to-brand-blue-dark` outer
5. **Footer** — `bg-brand-blue-dark`

### The "pill section break" pattern
Each section's inner content `div` uses `rounded-[3rem]` to create curved top/bottom edges, giving a wave-like separation between sections. The outer `section` tag holds the gradient transition color, the inner `div` holds the section's main background.

```jsx
<section className="bg-gradient-to-b from-[prev-color] to-[next-color]">
  <div className="w-full bg-[section-color] rounded-[3rem] px-6 py-20 lg:py-28">
    <div className="mx-auto max-w-5xl">
      {/* content */}
    </div>
  </div>
</section>
```

### Max width & padding
- `max-w-5xl` on all inner content containers.
- Section horizontal padding: `px-6`.
- Section vertical padding: `py-20 lg:py-28`.

---

## The Highlighter Component

`src/components/ui/highlighter.tsx` wraps `rough-notation` for hand-drawn animations.

### Usage patterns
```jsx
// Orange underline on heading keyword — most common
<Highlighter action="underline" color="#F0944D" strokeWidth={3} animationDuration={800} isView>
  smart way
</Highlighter>

// Orange underline on brand name with gradient text
<Highlighter action="underline" color="#E8651A" strokeWidth={3} animationDuration={800} isView>
  <span className="text-gradient-orange">Parrotingo</span>
</Highlighter>

// Subtle highlight/background on inline text
<Highlighter action="highlight" color="#E8651A22" strokeWidth={2} isView>
  YDT
</Highlighter>

// White box outline on dark/orange backgrounds
<Highlighter action="box" color="#FFFFFF99" strokeWidth={2.5} animationDuration={800} isView>
  newsletter!
</Highlighter>
```

Always use `isView` — triggers animation when element scrolls into view.
Never add Highlighter to body text — headings and key terms only.

---

## Mascot & Imagery

### The bird mascot
- An orange cartoon parrot wearing glasses.
- Two variants: `bird-2.png` (flying/energetic, used in Hero), `parrotingo-mascot-1.png` (studying with books, used in Why Us).
- Hero bird uses `animate-bob` CSS animation (gentle float + slight rotation, 3.5s loop).
- Mascot sizes: `w-64 h-64 sm:w-80 sm:h-80 xl:w-96 xl:h-96`.
- Always `object-contain`.

### Star icons
- `star1.png`, `star2.png` — hand-drawn star bullet icons used in feature lists.
- Size: `w-7 h-7`.
- Can be rotated for variety: `style={{ transform: 'rotate(45deg)' }}`.

### Branch / dal
- `dal.png` — decorative branch element positioned below the hero bird.

---

## Header

- Fixed, `z-50`.
- Transparent on top (`py-5`), transitions to `bg-[#E8E0D8]` on scroll (`py-3`, `backdrop-blur-md`).
- Logo: golden pill (`bg-[#E69A16] rounded-2xl px-4 py-1 border-[3px] border-black/30`).
- Nav links: `text-sm font-semibold`, white on dark hero, `text-foreground/70` on scrolled.
- CTA button: orange neo-brutalist pill (see button system above).

---

## Custom CSS Classes (`globals.css`)

| Class | Description |
|---|---|
| `animate-bob` | Mascot float: `translateY(0→-10px) + rotate(-1→1deg)`, 3.5s ease-in-out infinite |
| `animate-bounce-down` | Scroll arrow: `translateY(0→6px)`, 1.2s ease-in-out infinite |
| `text-gradient-orange` | Orange gradient text via `linear-gradient(135deg, #E8651A, #D4843A)` + `-webkit-background-clip` |
| `prose-parrotingo` | Article body typography: h2 with orange left border, star bullets (★), orange blockquote, orange links |
| `scrollbar-hide` | Hides scrollbar on filter chip rows |

---

## Blog Article Typography (`prose-parrotingo`)

- Body: `color: rgba(0,0,0,0.65)`, `font-size: 1.05rem`, `line-height: 1.85`
- H2: `font-size: 1.6rem`, `font-weight: 800`, orange left border `4px solid #E8651A`, `padding-left: 1rem`
- H3: `font-size: 1.25rem`, `font-weight: 700`
- Blockquote: orange-tinted background, left border `4px solid #D4843A`, rounded right corners
- List bullets: `★` character in orange (`#E8651A`)
- Links: orange `#E8651A`, bold, underlined

---

## Footer

- `bg-brand-blue-dark` full width.
- Logo pill (same as header).
- Three link columns: Product / Company / Support.
- Footer group title: `text-white/60 font-bold text-xs uppercase tracking-wider`.
- Footer links: `text-white/40 hover:text-white text-sm`.

---

## Do's and Don'ts

**Do:**
- Keep all buttons pill-shaped (`rounded-full`) with thick black borders and hard shadows.
- Use `font-extrabold` (800) for all CTAs and headings.
- Rotate cards/elements slightly for the hand-drawn feel.
- Keep section transitions via the rounded inner div + gradient outer pattern.
- Use `Highlighter` on 1–2 words per heading maximum.
- Always animate buttons with the press-down shadow shift on hover/active.

**Don't:**
- Use `border-radius` smaller than `rounded-xl` on major UI elements — everything is rounded.
- Use subtle/soft shadows — shadows must be hard offsets (no blur: `0px 0px` blur).
- Use fonts other than Nunito.
- Add dark mode variants — the site is light/cream + dark navy, not a standard light/dark toggle.
- Use `shadcn/ui` Button component for visible CTAs — use the custom neo-brutalist inline pattern instead.
- Use more than ±1.5° rotation on cards.