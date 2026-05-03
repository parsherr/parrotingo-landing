# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server
pnpm build      # Production build
pnpm lint       # ESLint
```

No test suite is configured.

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** with `@theme inline` for custom tokens
- **Nunito** (Google Fonts) as the sole typeface — set via CSS variable `--font-nunito`
- **pnpm** as package manager

## Architecture

All routes live under `src/app/` (App Router). Shared components are in `src/components/`; blog-specific ones are nested in `src/components/blog/`. Static data (blog posts metadata + HTML content strings) lives in `src/data/`.

**Blog system** — two data files work together:
- `src/data/blogPosts.ts` — metadata array (`BlogPost` type: slug, category, title, excerpt, date, readTime, accent color)
- `src/data/blogContents.ts` — `Record<slug, htmlString>` for article bodies rendered via `dangerouslySetInnerHTML`

Adding a new post requires entries in both files. The slug page at `src/app/blog/[slug]/page.tsx` uses `generateStaticParams` to pre-render all known slugs.

## Design System

@.claude/style.md

The site uses a **cartoon neo-brutalist** style:
- Thick `border-[3px] border-black` on cards/buttons
- Hard shadow offset: `shadow-[5px_5px_0px_0px_#000]`, shifts to `[2px_2px]` on hover
- Slight card rotations (e.g. `rotate(-1.2deg)`) for a hand-drawn feel
- Background palette: `bg-brand-blue` (#0F2A4A) for dark sections, `bg-[#E8E0D8]` (warm cream) for content areas
- Gradient transitions between sections: `bg-gradient-to-b from-brand-blue to-brand-orange`
- Rounded section tops: `rounded-[3rem]` creates the pill/wave section breaks

**Custom CSS classes** (defined in `globals.css`):
- `prose-parrotingo` — article typography (h2 with orange left border, star-bullet lists, styled blockquotes)
- `animate-bob` — mascot float animation
- `text-gradient-orange` — orange gradient text
- `scrollbar-hide` — hides scrollbar on filter chip rows

**Brand tokens** (Tailwind v4 `@theme inline`):
- `brand-orange`: #E8651A
- `brand-orange-light`: #D4843A
- `brand-blue`: #0F2A4A

The `Highlighter` component (`src/components/ui/highlighter.tsx`) wraps `rough-notation` for animated underlines on headings — used throughout with `color="#F0944D"`, `strokeWidth={3}`, `isView` (triggers on scroll).
