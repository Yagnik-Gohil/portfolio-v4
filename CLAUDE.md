# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install
npm run dev      # next dev
npm run build    # next build — static export to out/ (output: 'export')
npm run lint     # eslint (flat config: next core-web-vitals + typescript)
```

There is no test suite. Run `npm run build` to check changes: it fails if a route can't be statically generated.

## Stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4 (via `@tailwindcss/postcss`, `@import "tailwindcss"` in `app/globals.css`), Framer Motion, lucide-react. Path alias `@/*` maps to the repo root (e.g. `@/app/components/...`, `@/lib/seo`).

## Architecture

**Static export.** `next.config.ts` sets `output: 'export'` and `trailingSlash: true`. That means no server runtime: no API routes, no runtime `headers()`/`cookies()`, and every dynamic route must provide `generateStaticParams`. Remote images are allowed only from `*.cloudfront.net`, where all thumbnails and profile images are hosted.

**Pages split into server and client parts.** Each route's `page.tsx` is a server component that exports `generateMetadata` (built with `makeMetadata` from `lib/seo.ts`, which sets the canonical URL on `https://yagnik.dev` plus OG/Twitter tags) and renders a sibling `"use client"` component (`About.tsx`, `Articles.tsx`, `Bookshelf.tsx`) for anything interactive or animated.

**Article system.** It has three parts that must stay in sync:
1. `app/data/seriesData.ts` holds the metadata. `allArticles` is the single source of truth (title, slug, description, tags, CloudFront `image`, display `date`, and `prev`/`next` slugs that link chapters). `allSeries` builds each series's `posts` by filtering `allArticles` on a hand-written list of slugs.
2. `app/articles/content/<slug>.tsx` holds the article body. The file name must equal the slug, because `app/articles/[slug]/page.tsx` loads it with `next/dynamic(() => import(\`../content/${slug}.tsx\`))`. Each file default-exports a component that returns plain semantic HTML (`<article><section><h2>/<p>/<ul>…`).
3. `app/articles/[slug]/page.tsx` handles layout. `BlogContent` styles the raw HTML of the body through arbitrary-variant selectors (`[&_h2]:…`, `[&_p]:…`), so content files shouldn't need Tailwind classes on basic elements. `BlogSidebar` reads `prev`/`next` to build the chapter navigation.

To add an article: create the content file, add an entry to `allArticles`, update the neighbouring article's `prev`/`next`, and add the slug to the matching series's filter list in `allSeries` (series list pages are at `/articles/series/[slug]`).

Components used inside article bodies (`app/components/`):
- `Terminal`: `data={[{ command, output? }]}`. Shell commands with a copy button. Escape line continuations inside template strings as `\\`.
- `CodeBlock`: `code`, `fileName`.
- `Alert`: `type` (`info|warning|error|success|neutral`), optional `title`, children.

**Theming.** Colors are HSL triples stored as CSS variables in `app/globals.css` (`:root`, plus a `.dark` override) and used as `hsl(var(--name))`, usually through arbitrary values like `bg-[hsl(var(--muted))]`. Fonts come from `next/font` in `app/layout.tsx` (Poppins → `--font-heading`, Inter → `--font-body`). `tailwind.config.js` is a legacy v3-style file: Tailwind v4 doesn't load it because there's no `@config`, and its `content` globs point at a non-existent `src/`. So don't rely on its theme extensions.

`app/layout.tsx` contains the site-wide metadata, the Google AdSense script, and the `Navbar`/`Footer` shell.
