# PRD — priy4zshu. Portfolio
### Product Requirements Document | Written in my own words

---

## What even is this project?

okay so basically this is my personal portfolio site. it lives at one URL, it's one single page, and it tells anyone who lands there — recruiter, developer, random internet person — who i am, what i use, what i've built, and how to reach me. no page reloads, no backend drama, just a clean scrollable experience that does the job.

the site is live at → `priyanshutechahead.github.io/portfolio/`
repo is at → `github.com/priyanshutechahead/portfolio`

---

## Why am i even building this?

- because every developer needs a place on the internet that's *theirs*. not linkedin, not github — mine.
- because i wanted to practice building something real and shipping it, not just tutorials.
- because recruiters and peers need to understand what i do in under 2 minutes without me being in the room.
- because i had three separate HTML pages before and it was a nightmare to maintain. now it's one file and one scroll.

---

## Who is going to visit this?

**Recruiter Riya** — she's on a laptop, evaluating 20 portfolios today. she wants to see: internship history, what i've built, and a way to contact me. she doesn't have 10 minutes. she needs to scan and decide fast.

**Developer Arjun** — a peer or senior dev who wants to see the actual tools i use, how i think, and whether my GitHub is worth checking. he's probably in dark mode.

**Casual Visitor** — a friend or someone who found me on Twitter. on mobile. wants to get a vibe. doesn't care about the tech stack.

---

## What does the site actually contain?

### 1. Header / Navigation
- fixed at the top so it's always visible while scrolling
- four nav links: About, Toolkit, Projects, Contact
- clicking any link smoothly scrolls to that section — no page jump, no reload
- on mobile it collapses into a hamburger menu
- the active section gets highlighted in the nav as you scroll (scroll-spy)

---

### 2. About Section (`#about`)

this is the most important section. it's the first thing people see.

**Hero + Bio**
- headline: "About Me."
- three short paragraphs: who i am, how i think about code, what i do when i'm offline
- not a resume paragraph — it's written like a person, not a template

**Manifesto Cards (4 cards)**
- 01 — i am boring → i choose depth over noise
- 02 — i am unfunny → i prefer clarity to cleverness
- 03 — i am miserable → i sit with hard problems until they become simple
- 04 — i love being alone → solitude is where the best systems are designed
- each card has a hover effect that inverts its colors (black becomes white, white becomes black)

**Currently block**
- Reading: The Design of Everyday Things
- Learning: Rust
- Building: a retro chat app inspired by the 1980s
- this needs to be updated monthly — it's the most "alive" part of the About section

**Topics I'm Interested In**
- 5 categories: Technology & Future, Programming & Problem Solving, Thinking & Decision Making, Design & Simplicity, Hobby
- each has sub-topic links (some are placeholders for now)

**Timeline**
- Jul 2025 – Sep 2025 → Python Developer Intern @ Innobyte Services
- Jun 2024 – Aug 2024 → Data Analyst @ IBM SkillBuild
- each role has bullet points with actual achievements, not just job descriptions
- update this whenever something new happens — internship, project, anything real

---

### 3. Toolkit Section (`#toolkit`)

**What it is:**
a grid of 8 tools i actually use. not a skills bar with percentages (those are useless), just tools + one honest sentence about what each one does for me.

**The 8 tools:**
- 01 — NotebookLM → AI-powered research assistant for synthesizing complex documents
- 02 — Stitch → Rapid data replication for modern data stack pipelines
- 03 — GitHub → Version control and collaboration for all source code
- 04 — Figma → Interface design and prototyping
- 05 — Opal → Focus protection, blocks distractions during deep work
- 06 — Gemini → Multimodal AI for reasoning and coding assistance
- 07 — Python → Primary language for data analysis, ML, and backend
- 08 — VS Code → Code editor with integrated terminal and Git

**How it looks:**
- responsive grid, works on mobile and desktop
- hover effect inverts each card's colors
- each tool has its own brand icon (inline SVG) that changes color on hover

---

### 4. Projects Section (`#projects`)

**What it is:**
a horizontal scroll rail with 6 project cards. shows real things i've actually built.

**The 6 projects:**
- 01 (2025) — Personal Finance Management System → full lifecycle project, auth + budgeting + SQLite
- 02 (2025) — AI Hostel Management → room allocation, student records, AI-assisted admin
- 03 (2025) — AI Legal Document Analyzer → RAG pipeline, LLM, cited answers from legal docs
- 04 (2025) — Calories Burnt Prediction → ML model, scikit-learn, training to inference
- 05 (WIP) — Retro Chat App → the 1980s-inspired slow conversation app i'm currently building
- 06 (2026) — priy4zshu. Portfolio → this site itself, meta but worth showing

**Each card shows:** project name, one-line description, and tech tags (Python, SQLite, ML, etc.)

---

### 5. Contact Section (`#contact`)

**What it is:**
a simple form. no email exposed in the HTML, no mailto link that bots can scrape.

**Form fields:**
- Name (required)
- Email (required)
- Message (not required but come on, write something)

**How it works:**
- form POSTs to Web3Forms API (serverless, no backend needed)
- while it's sending, button says "Sending..." so the user knows something's happening
- if it works → green success message, form resets
- if it fails → red error message
- either way the feedback disappears after ~5 seconds
- honeypot field is hidden to catch bots

---

### 6. Footer

- logo (priy4zshu.) that scrolls back to #about when clicked
- social links: Twitter, GitHub, LinkedIn, Instagram, Pinterest
- copyright line: © 2026 All rights reserved.

---

### 7. Dark / Light Mode Toggle

- floating button fixed on screen, always visible
- saves preference to localStorage so it remembers on reload
- theme is applied before the page paints (no flash of wrong theme)
- icon switches between sun and moon

---

## Tech Stack (what i used and why)

- **HTML5** → the structure. one index.html file, everything lives here.
- **Tailwind CSS (CDN)** → utility classes for layout and responsiveness. no build step needed.
- **Custom CSS** → for the scrollbar styling, toolkit hover colors, and form edge cases tailwind can't handle cleanly.
- **Vanilla JavaScript (ES6+)** → split into 4 files: theme-init.js, theme.js, navigation.js, contact.js. no frameworks, no npm, no build pipeline.
- **Web3Forms** → handles the contact form POST without any server. free tier works fine.
- **Google Fonts** → Inter, Lora, Playfair Display, JetBrains Mono. editorial feel.
- **Material Symbols** → icons for the menu button, theme toggle, send arrow.
- **GitHub Pages** → static hosting. free, fast, requires zero DevOps.

---

## What's not in v1 (and why)

- **Blog** → needs a content pipeline, a CMS, way more complexity. not yet.
- **Multi-language (i18n)** → English only for now. adds maintenance overhead.
- **Backend API** → Web3Forms handles the one thing i need a backend for.
- **Spotify player** → the JS files exist but the UI isn't in the current About section. maybe v2.
- **User auth / admin dashboard** → it's a static site. why would it need auth.

---

## Timeline — How long did / will it take?

### Phase 1 — Research & Design (3–4 days)
- figured out what sections i actually need (About, Toolkit, Projects, Contact)
- designed the monochrome brutalist-minimal visual direction
- wrote the bio, manifesto copy, and toolkit descriptions
- mapped out the repo structure: css/, js/, index.html, prd.md, .cursorfile

### Phase 2 — Core Build (5–7 days)
- built index.html with all four sections and correct anchor IDs
- set up Tailwind CDN + tailwind-config.js
- wrote navigation.js (smooth scroll, mobile menu, scroll-spy)
- wrote theme-init.js + theme.js (dark mode, localStorage persistence)
- built the toolkit grid with hover effects and SVG icons
- added the projects horizontal scroll rail with 6 cards

### Phase 3 — Contact + Polish (2–3 days)
- wrote contact.js with Web3Forms POST, validation feedback, form reset
- added the honeypot field for spam protection
- fixed mobile layout issues at 375px (no horizontal scroll, menu works)
- tested dark/light theme on reload
- cross-browser check: Chrome, Safari, Firefox

### Phase 4 — Deploy + Docs (1–2 days)
- pushed to GitHub, enabled GitHub Pages on main branch
- verified live URL works: priyanshutechahead.github.io/portfolio/
- wrote prd.md (this document)
- wrote .cursorfile for AI/contributor conventions
- ran the full manual test checklist (nav, form, hover, mobile, theme)

**Total estimated time: ~2 weeks** (done alongside other commitments, not full-time)

---

## Things i need to test before calling it done

- clicking About, Toolkit, Projects, Contact from the header → should scroll to the right section
- opening `...#contact` directly in a new tab → should land on the contact section
- resizing to mobile (< 768px) → hamburger menu appears, nav panel opens and closes
- scrolling slowly through the page → nav highlight follows which section i'm in
- default load → light theme (white bg, dark text)
- toggle dark mode, reload page → dark theme should still be on
- submit the form with valid info → green message, form clears
- submit with empty required fields → browser should block it before it even sends
- hover each toolkit card → invert + icon color change
- click each social link in footer → goes to the right profile
- check at 375px, 768px, 1280px widths → layout should hold at all three

---

## What could go wrong (and what i'll do)

- **Web3Forms goes down** → show the error message i already coded, add a mailto fallback in the copy so people still have a way to reach me
- **Tailwind CDN is slow or down** → layout breaks. fix in v2 by building the CSS locally and serving it from the repo instead
- **Someone spams the contact form** → honeypot catches most bots. if it gets bad, enable Web3Forms' built-in captcha option
- **I refactor a section ID** → nav breaks. keep section IDs stable and run the anchor test every time i touch the HTML
- **Timeline gets outdated** → high likelihood. i need to update this when i get a new role, finish a course, or do anything worth noting

---

## What's next after v1

- add a projects detail modal (click a card, see more about that project)
- bring back the Spotify player if i set up the UI properly
- maybe a simple blog section when i have content worth publishing
- pin/build Tailwind instead of CDN dependency
- add Google Analytics to see who's actually visiting

---

*last updated: May 2026*
*maintained by: Priyanshu (priyanshutechahead)*
