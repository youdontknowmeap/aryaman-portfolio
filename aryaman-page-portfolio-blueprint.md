# ARYAMAN PAGE — PORTFOLIO WEBSITE
## Complete Creative Production Blueprint
### Version 1.0 — For Internal Studio Use

**Classification:** Creative Direction + Technical Architecture Document
**Studio Concept:** "THE ARCHIVE" — A living, breathing record of a mind that builds experiences
**Platform:** Google Antigravity (Primary) + Custom Extensions (Where Required)

---

# TABLE OF CONTENTS

1. BRD — Business Requirements Document
2. TRD — Technical Requirements Document
3. UX Strategy
4. Experience Architecture
5. Motion Design System
6. UI Design System
7. Interaction Principles
8. Creative Direction
9. Page-by-Page Breakdown
10. Animation + Microinteraction Guidelines
11. Technology Stack Recommendations
12. Developer Handoff Documentation
13. Performance Optimization
14. SEO + Accessibility Strategy
15. Sound Design
16. Scroll Behavior Logic
17. Transition Logic Between Sections
18. Loading Screen Concepts
19. Cursor Interaction Concepts
20. Interactive Storytelling Concepts

---

# 01 — BUSINESS REQUIREMENTS DOCUMENT (BRD)

## 1.1 Project Overview

**Project Name:** Aryaman Page — Personal Portfolio Experience
**Project Type:** Multidisciplinary Creative Portfolio Website
**Primary Build Environment:** Google Antigravity
**Target Launch:** TBD

## 1.2 Business Objectives

- Position Aryaman Page as a **premium multidisciplinary creative** — not a service provider
- Attract **high-caliber clients** in product design, brand identity, and digital experience
- Attract **collaborators** in music, film, motion, and cultural projects
- Serve as a **living creative document** that evolves alongside the work
- Win industry recognition (Awwwards, FWA, CSS Design Awards)
- Function as a **conversation starter**, not just a credential document

## 1.3 Target Audience

| Segment | Profile | Goal |
|---|---|---|
| **Primary** | Startup founders, creative directors, brand leads | Hire Aryaman for design work |
| **Secondary** | Recruiters at top-tier studios (IDEO, Instrument, Ueno) | Evaluate for senior/lead roles |
| **Tertiary** | Cultural collaborators — musicians, filmmakers, artists | Propose creative partnerships |
| **Quaternary** | Design community peers | Engage, share, cite as reference |

## 1.4 Success Metrics

- **Dwell time:** >3.5 minutes average
- **Scroll depth:** >80% of visitors reach the work section
- **Contact conversions:** >4% of unique visitors initiate contact
- **Bounce rate:** <35%
- **Awards:** 1+ major award nomination within 6 months of launch
- **Community shares:** Organic sharing via design Twitter/X, LinkedIn, design community forums

## 1.5 Constraints

- Primary build tool is **Google Antigravity** — all native capabilities should be leveraged first
- Custom code should be minimized but not avoided when the experience demands it
- Site must be **fully functional on mobile** (iOS Safari, Android Chrome)
- Must load critical content within **2.5 seconds** on 4G connection
- Must **respect prefers-reduced-motion** system preference

## 1.6 Deliverables

- Full website (5–7 core sections + project case studies)
- Antigravity project file (native)
- Custom JS/CSS extension files (where required)
- Asset library (optimized video, images, fonts)
- Sound design file set
- Handoff documentation (this document)

---

# 02 — TECHNICAL REQUIREMENTS DOCUMENT (TRD)

## 2.1 Platform Architecture

```
PRIMARY LAYER: Google Antigravity
├── Scene management
├── Layout composition
├── Motion orchestration (built-in)
├── Responsive breakpoint system
├── Asset delivery pipeline
└── Publishing infrastructure

EXTENSION LAYER: Custom Code Blocks
├── Advanced cursor logic (vanilla JS)
├── Scroll velocity calculations
├── Audio API integration
├── Canvas-based grain overlay
└── Magnetic interaction formulas

EMBEDDED LAYER: Third-Party Components
├── Spline scenes (3D elements) → iFrame embed
├── Custom WebGL shaders → Canvas overlay
└── Lottie animations → JSON asset imports
```

## 2.2 Build Layer Decision Matrix

| Feature | Native Antigravity | Custom Extension | Embedded 3rd Party |
|---|---|---|---|
| Scroll animations | ✅ | — | — |
| Parallax layers | ✅ | — | — |
| Hover transitions | ✅ | — | — |
| Cursor dot | ✅ | — | — |
| Magnetic cursor effect | — | ✅ JS | — |
| Film grain overlay | — | ✅ Canvas | — |
| 3D hero object | — | — | ✅ Spline |
| WebGL distortion | — | ✅ GLSL | — |
| Audio player / ambient | — | ✅ Web Audio API | — |
| Text scramble effect | — | ✅ JS | — |
| Kinetic ticker | ✅ | — | — |
| Project video autoplay | ✅ | — | — |
| Smooth scroll inertia | ✅ (built-in) | Lenis as fallback | — |
| Page transitions | ✅ | — | — |
| Preloader animation | ✅ | — | — |

## 2.3 Browser Targets

- Chrome 110+ (primary)
- Safari 16+ (iOS + macOS)
- Firefox 115+
- Edge 110+
- Samsung Internet 20+

## 2.4 Performance Targets

| Metric | Target |
|---|---|
| LCP | < 2.5s |
| FID / INP | < 100ms |
| CLS | < 0.1 |
| TTI | < 3.5s |
| Total page weight | < 4MB on initial load |
| Video assets | WebM primary, MP4 fallback |
| Images | WebP/AVIF with PNG fallback |

## 2.5 Hosting & Delivery

- Antigravity native publish (primary)
- Custom domain: `aryamanpage.com` (recommended)
- CDN: Cloudflare (for asset delivery if needed)
- Video hosting: Self-hosted WebM via Cloudflare R2, or Mux for premium streaming

---

# 03 — UX STRATEGY

## 3.1 The Core Experience Principle

> **"Every scroll is a reveal. Every hover is a reaction. Every section is a scene."**

The site is not a portfolio. It is a **directed experience** — closer in structure to a short film than a document. The user is the audience. Aryaman is the auteur.

## 3.2 Mental Model

**Inspiration drawn from wtfruchit.com:**
After analyzing wtfruchit.com, the following principles make it emotionally effective:

1. **Pacing through scene changes** — the site breathes; it doesn't rush
2. **Typography as protagonist** — type does more work than imagery
3. **Horizontal energy in a vertical medium** — marquees, sliders, and sweeping motion create left-right momentum
4. **Texture as atmosphere** — overlays, noise, and grain give the site a physical quality
5. **Boldness as confidence** — the work is presented without apology

**Where we evolve beyond it:**
- Ruchit's site leans maximalist-loud. Aryaman's should be **maximalist-precise** — more Daft Punk than Lil Uzi.
- Less cluttered, more *cinematic*
- More **emotional narrative arc** — the site tells a story from intro to CTA
- Stronger **silence** — knowing when not to animate is as important as knowing when to
- **Music influence** is more explicit — the visual rhythm should feel like a produced track, with drops, builds, and moments of quiet

## 3.3 User Journey Map

```
ARRIVAL
└── Preloader ("THE ARCHIVE IS LOADING") → sense of ritual
    
    ↓

CHAPTER 01 — HERO
└── Identity statement + kinetic headline + ambient motion
    Goal: Immediate emotional capture

    ↓

CHAPTER 02 — MANIFESTO
└── "I don't make interfaces. I make moments."
    Goal: Establish philosophy before work

    ↓

CHAPTER 03 — DISCIPLINES
└── Scrolling reveal of each discipline with motion demo
    Goal: Communicate range without overwhelming

    ↓

CHAPTER 04 — SELECTED WORK
└── Projects as scenes — not cards
    Goal: Desire to see more, trigger click-through

    ↓

CHAPTER 05 — ABOUT
└── Cinematic self-portrait + context
    Goal: Human connection, cultural alignment

    ↓

CHAPTER 06 — THE PROCESS
└── Brief, rhythmic glimpse at how Aryaman works
    Goal: Build trust with collaborators

    ↓

CHAPTER 07 — CONTACT
└── Invitation, not a form
    Goal: Conversion with warmth

EXIT → Social links + loop back to top
```

## 3.4 Information Architecture

```
/ (Home — single-page scrolling experience)
├── /work/[project-slug] (individual case study pages)
├── /about (optional standalone — or absorbed into homepage)
└── /lab (optional: experimental/playground page)
```

---

# 04 — EXPERIENCE ARCHITECTURE

## 4.1 Scene Structure

The homepage is divided into **7 Chapters** (scenes), each with its own emotional register, motion language, and typographic voice.

| Chapter | Name | Emotional Register | Motion Language |
|---|---|---|---|
| 00 | Preloader | Ritual / Anticipation | Slow build, counter tick |
| 01 | HERO | Impact / Confidence | Type slam + ambient drift |
| 02 | MANIFESTO | Provocation / Philosophy | Slow scroll-scrub text reveal |
| 03 | DISCIPLINES | Range / Energy | Hover-reveal kinetic grid |
| 04 | SELECTED WORK | Desire / Immersion | Cinematic project cards |
| 05 | ABOUT | Humanity / Context | Soft parallax portrait |
| 06 | PROCESS | Intelligence / Craft | Numbered sequential reveal |
| 07 | CONTACT | Warmth / Urgency | Pulsing invitation |

## 4.2 Navigation Architecture

**Primary Nav:** Hidden by default. Lives as a floating minimal bar — top right. On hover or scroll-up, expands.

**Menu Open State:** Full-screen overlay — not a sidebar. When opened:
- Background blurs to near-black
- Chapter names appear one by one (staggered entry)
- Large ambient number (current chapter) glows in background
- Each nav item has a micro-preview of its section on hover

**Progress Indicator:** A thin vertical line on the right edge of the viewport. Fills as you scroll. Chapter labels appear at thresholds.

---

# 05 — MOTION DESIGN SYSTEM

## 5.1 Motion Philosophy

> Motion should feel **inevitable** — as though each element arrives exactly when it should, not a frame earlier or later.

Three motion categories govern the entire site:

| Category | Description | Easing |
|---|---|---|
| **Structural** | Layout shifts, section reveals | `cubic-bezier(0.16, 1, 0.3, 1)` — Expo Out |
| **Expressive** | Type animations, kinetic elements | `cubic-bezier(0.76, 0, 0.24, 1)` — Quart InOut |
| **Ambient** | Continuous background motion, grain, noise | No easing — linear or sine wave |

## 5.2 Duration System

| Size | Duration | Use Case |
|---|---|---|
| **XS** | 150ms | Button states, cursor reactions |
| **S** | 300ms | Hover reveals, icon transitions |
| **M** | 600ms | Element entrances, section intros |
| **L** | 900ms | Scene transitions, project reveals |
| **XL** | 1400ms | Full-screen transitions, hero entrance |
| **XXL** | 2000ms+ | Preloader, cinematic moments |

## 5.3 Signature Motion Patterns

### Pattern 01 — THE SLAM
Large display text enters from below, overshoots slightly, settles.
- Use: Hero headline
- Duration: 1200ms
- Easing: Expo Out with 8px overshoot

### Pattern 02 — THE CRAWL
Text or image enters from a horizontal offset (80px) with opacity fade.
- Use: Supporting copy, subtitle reveals
- Duration: 800ms
- Easing: Quart Out

### Pattern 03 — THE STRIP
A color strip sweeps across an element revealing it beneath (clip-path animation).
- Use: Project card reveals, image entrances
- Duration: 700ms per sweep
- Colors: Use accent color (#FE651A or equivalent)

### Pattern 04 — THE DRIFT
Slow, near-imperceptible float — 3–5px vertical oscillation over 6–8 seconds.
- Use: Hero background elements, 3D objects
- Duration: 6000ms, infinite
- Easing: Sine InOut

### Pattern 05 — THE GLITCH
Rapid RGB split (2–3px offset on R and B channels) for 80–150ms.
- Use: Section transitions, easter eggs, hover on name
- Duration: 120ms burst
- **Implementation:** Custom CSS/Canvas extension required in Antigravity

### Pattern 06 — THE UNRAVEL
Text characters revealed one by one or in groups, with a slight Y offset per character.
- Use: Manifesto text, discipline names
- Duration: 40ms stagger per character
- **Implementation:** Custom JS text-splitting required

## 5.4 Scroll-Triggered Motion Rules

All scroll animations in Antigravity should be configured with:
- **Threshold:** Begin at 15% element visibility
- **Duration:** Match to Structural timing (600–900ms)
- **Once-only:** Yes — elements do not re-animate on scroll-up
- **Stagger:** 80ms between sibling elements

---

# 06 — UI DESIGN SYSTEM

## 6.1 Color System

```
FOUNDATION
━━━━━━━━━━━━━━━━━━━━━━
--void:         #080808   Background (near-black, not pure)
--surface-01:   #111111   Elevated surface
--surface-02:   #1A1A1A   Cards, overlays
--border:       #242424   Dividers

SIGNAL
━━━━━━━━━━━━━━━━━━━━━━
--fire:         #FE651A   Primary accent (Aryaman's signature orange)
--cold:         #A8E6F0   Secondary accent (ice blue — cinematic contrast)
--bone:         #F0EDE6   Light text, highlights
--ghost:        #707070   Secondary text

STATE
━━━━━━━━━━━━━━━━━━━━━━
--glow-fire:    rgba(254,101,26,0.15)    Orange glow bloom
--glow-cold:    rgba(168,230,240,0.10)   Blue glow bloom
--grain:        url(#noise-filter)       Global grain overlay
```

## 6.2 Typography System

### Typeface Selection

| Role | Font | Weight | Notes |
|---|---|---|---|
| **Display** | Neue Haas Grotesk Display | 700, 900 | Commanding, editorial |
| **Display Alt** | Editorial New | Ultralight, Italic | For counterpoint moments |
| **Body** | Suisse Int'l | 300, 400 | Clean, legible |
| **Mono / Code** | Space Mono | 400 | UI labels, metadata |
| **Accent** | Migra Italic | 400 Italic | Emotional punctuation |

*Fallback stack: GT America, Helvetica Neue, sans-serif*

### Type Scale

```
--text-xs:     11px / 1.4    (labels, metadata, UI chrome)
--text-sm:     14px / 1.6    (body supporting)
--text-base:   16px / 1.7    (primary body)
--text-lg:     20px / 1.5    (intro paragraphs)
--text-xl:     28px / 1.3    (section headers)
--text-2xl:    40px / 1.2    (medium display)
--text-3xl:    64px / 1.1    (large display)
--text-4xl:    96px / 0.95   (hero scale)
--text-5xl:    140px / 0.9   (cinematic — full bleed)
--text-6xl:    200px+ / 0.85 (typographic installation)
```

### Typography Rules

1. **Display type is never center-aligned** — always left or full-bleed right
2. **Headlines use tracked-tight** (`letter-spacing: -0.02em` to `-0.04em`)
3. **The --fire accent appears in type sparingly** — one word per hero section maximum
4. **Mixed weight within a line is a design choice**, not an error (e.g., "**ARYAMAN** *Page*")
5. **Uppercase for impact, mixed-case for intimacy**
6. **No body text wider than 65ch** — comfort measure for reading

## 6.3 Spacing System

Based on an 8px base unit:

```
--space-1:   4px
--space-2:   8px
--space-3:   12px
--space-4:   16px
--space-5:   24px
--space-6:   32px
--space-7:   48px
--space-8:   64px
--space-9:   96px
--space-10:  128px
--space-11:  192px
--space-12:  256px
```

## 6.4 Grid System

- **Desktop:** 12-column, 24px gutters, 80px outer margins
- **Tablet:** 8-column, 20px gutters, 40px margins
- **Mobile:** 4-column, 16px gutters, 20px margins
- **Full bleed moments** deliberately break this grid (hero, manifesto, project covers)

## 6.5 Component Library

### Button System
```
Primary CTA:
  - No traditional "button" shape
  - Text with animated underline that fills (left to right on hover)
  - Color: --bone to --fire on hover
  - Arrow icon that shifts 4px right on hover

Secondary CTA:
  - Bordered — thin 1px --border
  - Background fills to --surface-02 on hover
  - Scale: 1.02 on hover

Destructive / Accent:
  - --fire fill
  - Text: --void
  - Slight glow bloom on hover
```

### Tag / Label
- Monospaced text (--text-xs)
- Border: 1px --border
- Padding: 4px 10px
- Uppercase, 0.1em tracking
- Used for: year, discipline category, project type

### Divider
- 1px line, --border color
- Or: character divider using "—" or "×"

---

# 07 — INTERACTION PRINCIPLES

## 7.1 The 5 Interaction Laws

1. **Every interactive element must respond visibly within 100ms** — dead zones kill trust
2. **Reactions must be proportional** — a small hover gets a small response; a click gets drama
3. **Motion communicates hierarchy** — fast = important/urgent, slow = atmospheric/ambient
4. **Nothing should feel accidental** — every animation has a reason and a direction
5. **The cursor is a character** — it participates in the experience, not just navigates it

## 7.2 Hover State System

| Element | Hover Behavior |
|---|---|
| Navigation links | Underline sweeps in from left; text color shifts to --bone |
| Project cards | Image scales 1.03, overlay lifts, title slides up, tagline fades in |
| Discipline items | Line draws across element; accent color appears |
| CTA / links | Arrow nudges; color transitions; cursor transforms |
| Name / wordmark | Glitch burst (80ms), then settles — Custom Extension |
| Social icons | Icon scale 1.1, glow bloom appears |

## 7.3 Scroll Interaction Laws

- **Inertia scroll:** Smooth deceleration (Antigravity native or Lenis override)
- **Scroll velocity detection:** Fast scroll suppresses animations; slow scroll triggers full choreography (Custom JS)
- **Scroll-scrub elements:** Some text/images tied directly to scroll position — not triggered, but *controlled* by scroll progress
- **No horizontal scroll** unless explicitly designed (project showcase only, with arrow navigation)

## 7.4 Click / Tap Interactions

- **Project card click:** Full-screen transition — current scene "zooms into" the project (scale + clip-path expansion)
- **Menu open:** Current scene dims and desaturates; menu overlay rises
- **CTA click:** Small pulse-ring effect emanates from click point before navigation

---

# 08 — CREATIVE DIRECTION

## 8.1 The Big Idea

### "THE ARCHIVE"

Aryaman's portfolio is not a showroom. It is **an archive of moments where design met culture**.

The site's visual language is drawn from:
- **The physical quality of vinyl record sleeves** — dense information, luxurious materials
- **Rap album rollout aesthetics** — the build-up, the drop, the statement
- **Industrial cinema grade** — grain, contrast ratio, silence before sound
- **Editorial fashion magazines** — the confidence to leave white space (or black space)
- **Futuristic operating systems** — clean UI logic beneath expressive surfaces

### The Feeling to Achieve

When a visitor arrives, they should feel what you feel when:
- A film opens with a single held note before the score drops
- You open a luxury product and the packaging alone justifies the price
- A DJ's first track choice tells you this whole set will be worth staying for
- You see a piece of design that makes you think "I don't understand everything happening here — but I need to see more"

## 8.2 Visual Tone Board

**Mood keywords:** Nocturnal. Precise. Alive. Textured. Earned. Cinematic.

**Visual references (mood only, not copy):**
- Kanye West — *My Beautiful Dark Twisted Fantasy* album art (maximalist precision)
- Bottega Veneta editorial campaigns (luxury meets rawness)
- *2049* (Blade Runner) UI language (layered, glowing, purposeful)
- NFL x Supreme collaborations (culture collision aesthetics)
- *Aphex Twin* — *Selected Ambient Works* cover art (texture, darkness, suggestion)

## 8.3 Photography / Visual Content Direction

- All imagery should be **high contrast, low saturation by default**
- Color moments should feel like **light leaks** — unexpected, precise, brief
- Process photos / behind-the-scenes: shot in contrasty black and white
- Project mockups: always shown in **context** (hand, device, environment) — never floating on white
- Screen recordings: treated with a **subtle film scan LUT** before embedding

## 8.4 Language / Copy Voice

| Context | Voice |
|---|---|
| Headlines | Bold. Declarative. Short. ("I BUILD WHAT OTHERS IMAGINE.") |
| Subheadings | Conversational but sharp. ("Not a designer. An architect of attention.") |
| Body copy | Direct. Intelligent. No filler words. |
| Labels / metadata | Clinical, monospaced — contrast to expressive headlines |
| CTAs | Invitation, not instruction. ("Let's make something real.") |
| Error states | Human and slightly wry. ("This page doesn't exist. But the work does.") |

---

# 09 — PAGE-BY-PAGE BREAKDOWN

## Chapter 00 — PRELOADER

**Duration:** 2.5–3.5 seconds (skippable after 1.5s)

**Concept A — "THE SIGNAL"**
A single horizontal line scans the viewport (like an EKG or radar sweep). A counter ticks from 000 to 100. The site name appears character by character in monospace. At 100%, the line transforms into a full-bleed brightness flash — then cuts directly to the hero.

**Concept B — "TITLE CARD"**
Black screen. The words "AN ARYAMAN PAGE EXPERIENCE" appear in small caps, center-aligned, in the style of a film title card. Sits for 1.2 seconds. Wipes clean.

**Concept C — "FRAME ZERO"**
The first frame of the hero bleeds in from pure black, as if exposure is being dialed up on a camera. Text resolves into clarity last.

**Recommended:** Concept A (most original, establishes the "signal" language used throughout)

**Antigravity Implementation:** Native preloader scene + progress bar component
**Note:** Skip button after 1.5s — text reads "SKIP ›" in --ghost color, top-right corner

---

## Chapter 01 — HERO

**Layout:** Full viewport height and width (100vh × 100vw). No visible header on arrival.

**Content Elements:**

```
[TOP LEFT]
ARYAMAN PAGE                ← Monospace, --text-xs, --ghost color
UI/UX · MOTION · CINEMA    ← Tag string

[CENTER-LEFT, DOMINANT]
"I DON'T MAKE             ← --text-5xl, Neue Haas, 900 weight
 INTERFACES.              ← Line 2
 I MAKE                   ← Line 3
 MOMENTS."                ← Line 4, --fire color on "MOMENTS"

[BOTTOM RIGHT]
Year established / Location  ← Small metadata
Scroll indicator              ← Custom animated downward arrow

[BACKGROUND]
A Spline 3D scene           ← Abstract, slowly rotating form
                             (geometric — not organic)
Film grain overlay           ← Custom Canvas extension
Ambient glow — orange        ← Bottom-left bloom, --glow-fire
```

**Entrance Sequence:**
1. Background loads first (black with grain)
2. 3D element fades in over 800ms
3. Top-left metadata sweeps in from left (800ms)
4. Headline lines slam in one at a time, 200ms stagger
5. Scroll indicator pulses in last (1200ms delay)

**Motion:** Headline lines use THE SLAM pattern. 3D object uses THE DRIFT.

**Antigravity Implementation:** Spline scene embedded via iframe or component. Headline text with staggered reveal. Grain as custom Canvas extension injected into page.

---

## Chapter 02 — MANIFESTO

**Layout:** Full viewport height. Single text column, breaking grid intentionally.

**Content:**
A long-form statement that reads as poetic and declarative. Not a biography. A philosophy.

```
Example copy:

"DESIGN IS NOT
THE PROBLEM BEING SOLVED.
IT'S HOW THE WORLD
LEARNS TO FEEL
ABOUT THE PROBLEM.

I BUILD FOR BOTH."
```

**Motion:** Text is revealed in scroll-scrub mode — as the user scrolls, words/lines emerge from --void. The text appears to be "written" by the act of scrolling.

**Visual Treatment:**
- Lines alternate between display weight and ultralight italic
- Key phrases highlighted in --fire (1 or 2 maximum)
- Faint vertical typographic texture in background (large ghosted letterform)

**Antigravity Implementation:** Scroll-triggered text reveal, line by line. Each line is its own element with scroll threshold.

---

## Chapter 03 — DISCIPLINES

**Layout:** Full-width, alternating between horizontal and stacked layouts.

**Disciplines to Feature:**
- UI/UX Design
- Motion Design
- Cinematography
- Video Editing
- Visual Storytelling
- Creative Direction

**Card Structure per Discipline:**
- Large number (01–06) in --surface-02
- Discipline name in --text-3xl
- Short descriptor (1 line)
- A looping micro-video or Lottie animation representing the discipline
- On hover: video expands slightly, name transforms color, a "VIEW WORK ›" link appears

**Scroll Behavior:**
Cards enter from alternating sides (left/right) with stagger — not all from the same direction. This creates visual rhythm.

**Antigravity Implementation:** Grid layout with hover states and scroll-triggered entrance. Video assets loop natively. Hover states configured in interaction panel.

---

## Chapter 04 — SELECTED WORK

**Layout:** This section has two modes depending on scroll state.

**Mode A — Grid View (default):**
A 2-column grid. Each project occupies different aspect ratios (not uniform cards). Creates editorial tension.

**Mode B — Feature View (on scroll into section):**
The first project automatically expands to near-full-width on scroll entry, cycling through featured projects as the user scrolls.

**Project Card Anatomy:**
```
[ VIDEO THUMBNAIL — looping, muted ]
  ↓ On hover:
[ Video plays, slight scale up (1.03) ]
[ Project name — large, bottom left ]
[ Year — monospace, bottom right ]
[ Tags — discipline labels ]
[ ↗ Arrow — appears on hover, top right ]
```

**Project Click / Reveal:**
When a project card is clicked, the card expands to fill the screen using a clip-path animation (not a route change — an in-place expansion). The case study content loads inside this expanded view.

**Antigravity Implementation:** Grid layout native. Hover + scale animations native. Clip-path expansion: Custom JS extension required. Video autoplay native.

---

## Chapter 05 — ABOUT

**Layout:** Two-column on desktop: image left, text right. Full-bleed on mobile.

**Image Treatment:**
A cinematic portrait — high contrast, slightly desaturated. Treated with film grain. On scroll into view, the image "develops" from left to right using a reveal strip (THE STRIP motion pattern).

**Text Content:**
Not a biography. A self-portrait in language.

```
"I grew up between screens and speakers.

Trained in design.
Self-taught in everything else.

I work at the intersection of craft, culture,
and computation.

Based in India.
Thinking everywhere."
```

**Accent Detail:** A short horizontal rule in --fire separates sections of the about copy.

**Below text:** 2–3 key stats or facts in large monospaced display:
- "6+ years building"
- "20+ shipped products"
- "3 countries, 1 timezone"

**Antigravity Implementation:** Two-column layout native. Image reveal with scroll trigger. Stats counter animation on scroll entry.

---

## Chapter 06 — THE PROCESS

**Layout:** Numbered list, but dramatically designed.

**Numbers:** Large, background-opacity (--surface-01 treatment) — so large they bleed off-frame
**Step names:** Display size, left-aligned
**Descriptors:** 1–2 sentences, --text-base, --ghost color

```
01 — LISTEN
Before anything else, understand what's actually being asked.

02 — DECODE
Strip the brief down to its emotional core.

03 — CONSTRUCT
Build the structure that the idea demands.

04 — INTENSIFY
Layer until the work earns its impact.

05 — SHIP
Send it. Then start again.
```

**Animation:** Each step is revealed as the user scrolls into it. The large number appears first, then slides behind the text as the text enters. This creates a z-axis layering effect.

**Antigravity Implementation:** Scroll-triggered entrance with z-index layering. Numbered elements as background design vs. foreground text.

---

## Chapter 07 — CONTACT

**Layout:** Near-full-viewport. Centered emotional invitation.

**Visual Treatment:**
Dark background. A single glowing element — either a Spline object or a CSS-animated radial glow in --fire. The glow pulses slowly (THE DRIFT motion).

**Content:**
```
[ Top — small label ]
"READY TO CREATE SOMETHING REAL?"

[ Center — massive display ]
"LET'S
TALK."

[ Below — email address ]
hello@aryamanpage.com   ← Clicking copies to clipboard

[ Below — or book a call ]
[ Secondary link to Calendly or equivalent ]

[ Bottom strip — social links with icons ]
```

**Easter Egg:** If user hovers over "TALK." for 3+ seconds, the period after TALK begins pulsing like a cursor. The word subtly reshuffles letters for 200ms before resettling. Suggests "the idea is alive."

**Antigravity Implementation:** Glow animation native. Email click-to-copy: Custom JS. Easter egg: Custom JS.

---

## Footer

Minimal. Single line.
```
"© 2025 ARYAMAN PAGE — DESIGNED IN INDIA, MADE FOR EVERYWHERE"
```
Left-aligned metadata. Right-aligned scroll-to-top arrow (animated, loops upward).

---

# 10 — ANIMATION + MICROINTERACTION GUIDELINES

## 10.1 Text Animations (Implementation Priority Order)

| # | Animation | Trigger | Implementation |
|---|---|---|---|
| 1 | Word slam (hero) | Page load | Antigravity native |
| 2 | Line reveal (manifesto) | Scroll scrub | Antigravity native |
| 3 | Character stagger | Scroll entry | Custom JS (text split) |
| 4 | Text glitch | Hover on name | Custom JS |
| 5 | Counter count-up | Scroll entry | Custom JS or Antigravity |
| 6 | Scramble + resolve | Hover, Easter egg | Custom JS |

## 10.2 Visual Microinteractions

| Element | Microinteraction |
|---|---|
| Project cards | Thumbnail scale + overlay lift on hover |
| Nav links | Underline left-to-right fill |
| CTA arrows | 4px X-axis nudge on hover |
| Social icons | Scale 1.1 + glow bloom |
| Tag/labels | Border color shifts to --fire on hover |
| Scroll indicator | Bounces softly every 3s if user hasn't scrolled |
| Cursor | Grows on hover, shrinks on click, transforms on CTA |

## 10.3 Global Ambient Animations (Always Running)

| Effect | Description | Implementation |
|---|---|---|
| Film grain | Animated noise texture overlay | Custom Canvas (requestAnimationFrame) |
| Background drift | 3D scene subtle rotation | Spline native |
| Ticker / marquee | Bottom or top horizontal text scroll | Antigravity native |
| Glow pulse | Radial bloom on accent elements | CSS keyframe, Antigravity |

---

# 11 — TECHNOLOGY STACK RECOMMENDATIONS

## 11.1 Primary Stack (Antigravity-First)

```
BUILD PLATFORM
└── Google Antigravity
    ├── Scene composition
    ├── Motion orchestration
    ├── Responsive layouts
    ├── Publishing pipeline
    └── Asset management

3D / IMMERSIVE
└── Spline (spline.design)
    ├── Hero 3D scene
    ├── Contact section ambient object
    └── Embedded via Spline Viewer component

MOTION (Custom Extensions)
└── GSAP (GreenSock)
    ├── Complex scroll-scrub sequences
    ├── Text character animations
    └── Clip-path transitions
└── Lenis (smooth scroll override, if Antigravity native insufficient)

CREATIVE EXTENSIONS
└── Vanilla JS / CSS
    ├── Custom cursor logic
    ├── Magnetic interactions
    ├── Film grain canvas
    └── Audio API integration
└── GLSL Shaders (if distortion effects needed)
    └── Deployed as inline Canvas element

ANIMATION ASSETS
└── Lottie (discipline icons, micro-animations)
└── WebM video (project previews, background loops)
```

## 11.2 What NOT to Use

- ❌ React/Next.js — overkill for Antigravity-first build, adds complexity
- ❌ Framer — conflicts with Antigravity workflow
- ❌ Heavy Three.js scenes in-page — use Spline instead for maintainability
- ❌ Full CMS — unnecessary unless work section becomes very large (10+ projects)

## 11.3 Custom Extension Code: Priority List

**Priority 1 (Must Build):**
- Custom cursor system (40 lines JS)
- Film grain canvas overlay (30 lines JS)
- Text scramble on hover (50 lines JS)
- Email click-to-copy (10 lines JS)

**Priority 2 (High Impact):**
- Magnetic button effect (60 lines JS)
- Scroll velocity detection (40 lines JS)
- Clip-path project expand transition (80 lines JS)

**Priority 3 (Easter Eggs / Delight):**
- Cursor trail on fast movement (40 lines JS)
- Konami code easter egg (20 lines JS)
- Sound toggle with ambient layer (50 lines JS)

---

# 12 — DEVELOPER HANDOFF DOCUMENTATION

## 12.1 Antigravity Scene Structure

```
PROJECT: aryaman-page-portfolio
├── GLOBAL
│   ├── _styles (CSS variables, font imports)
│   ├── _cursor (custom cursor component)
│   ├── _grain (canvas overlay)
│   └── _nav (floating navigation)
│
├── PRELOADER (scene-00)
│   ├── Progress line
│   ├── Counter text
│   └── Name reveal
│
├── HERO (scene-01)
│   ├── Background (Spline embed)
│   ├── Headline group (4 lines, staggered)
│   ├── Metadata (top-left)
│   └── Scroll indicator
│
├── MANIFESTO (scene-02)
│   └── Scroll-scrub text group
│
├── DISCIPLINES (scene-03)
│   └── Grid (6 cards with video + hover)
│
├── WORK (scene-04)
│   └── Project grid (variable aspect ratios)
│
├── ABOUT (scene-05)
│   ├── Portrait image
│   └── Bio text + stats
│
├── PROCESS (scene-06)
│   └── Numbered list, 5 steps
│
├── CONTACT (scene-07)
│   ├── Glow element
│   ├── CTA text
│   └── Email + social
│
└── FOOTER
```

## 12.2 Custom Code Injection Points

All custom JS files should be injected via Antigravity's "Custom Code" or "Embed" block at the bottom of each relevant scene.

```
Scene 01 (Hero):      inject grain.js, cursor.js
Scene 01 (Hero):      inject spline-viewer (via component)
Scene 04 (Work):      inject project-expand.js
Scene 07 (Contact):   inject copy-email.js, easter-egg.js
Global:               inject magnetic.js, scroll-velocity.js
```

## 12.3 Asset Specifications

**Video files:**
- Format: WebM (primary), MP4 (fallback)
- Max resolution: 1280×720 for background loops
- Max file size: 5MB per clip
- Loop: Yes, muted, autoplay

**Images:**
- Format: WebP (primary), JPEG (fallback)
- Max size: 800KB per image
- Portrait: 800×1000px minimum
- Project thumbnails: 1200×800px minimum

**Fonts:**
- Hosted: Self-hosted via Antigravity asset upload
- Format: WOFF2 (primary)
- Preloaded: Display fonts only (performance)

**Spline scenes:**
- Exported as Spline Viewer embed
- Max polygon count: 50k per scene
- No real-time physics (performance)

---

# 13 — PERFORMANCE OPTIMIZATION

## 13.1 Loading Strategy

**Critical path (loads before interaction):**
1. CSS variables and font declarations
2. Above-fold HTML structure
3. Hero background (WebM, preloaded)
4. Navigation component

**Deferred (loads post-interaction):**
1. Spline 3D scene (loads during preloader)
2. Project video thumbnails (lazy-load on scroll)
3. Case study content (loads on click)
4. Sound assets (loads only on opt-in)

## 13.2 Animation Performance Rules

- All animations use `transform` and `opacity` — never `top`, `left`, `width`, `height`
- GPU compositing forced on animated elements: `will-change: transform`
- Canvas grain uses `requestAnimationFrame` with delta-time throttling (cap at 24fps)
- Spline scene paused when not in viewport (IntersectionObserver)
- Videos pause when scrolled out of view
- GSAP ScrollTrigger instances killed on mobile if device is low-power

## 13.3 Mobile Optimization

- Grain overlay: reduce opacity by 40% on mobile, lower frame rate to 12fps
- 3D Spline scene: replaced with a **static image + CSS filter** on mobile (no iframe)
- Project cards: no video autoplay on mobile — replaced with static poster frame
- Magnetic effects: disabled on touch devices
- Cursor system: disabled on touch devices

## 13.4 Reduced Motion Handling

```css
@media (prefers-reduced-motion: reduce) {
  /* Disable: slam animations, glitch effects, parallax scroll, grain overlay */
  /* Keep: basic opacity fades (300ms max), color transitions, hover states */
  /* Add: static versions of animated elements */
}
```

---

# 14 — SEO + ACCESSIBILITY STRATEGY

## 14.1 SEO Without Compromising Visuals

**Semantic structure:**
- All decorative text rendered as real HTML (not images), including large display headlines
- Heading hierarchy maintained even within cinematic layouts (H1 → H2 → H3)
- Project names as H2 elements within work section
- Image alt text for all visual assets (descriptive, not ornamental)

**Meta setup:**
```
Title: Aryaman Page — UI/UX Designer & Creative Director
Description: Portfolio of Aryaman Page — multidisciplinary designer working across UI/UX, motion, cinematography, and visual storytelling.
OG Image: Custom-designed 1200×630 preview card matching site aesthetic
Twitter Card: summary_large_image
```

**Structured data:** Person schema + CreativeWork schema for projects

## 14.2 Accessibility

**Visual:**
- All text maintains minimum 4.5:1 contrast ratio against background
- --fire (#FE651A) on --void (#080808): contrast tested (adjust shade if needed)
- Focus states styled to match the aesthetic — glowing outline in --fire color

**Motor:**
- All interactive elements keyboard navigable
- Tab order logical with scroll position
- Skip-to-content link (visually hidden, shown on focus)

**Cognitive:**
- Preloader skip option after 1.5s
- No auto-playing audio without user opt-in
- Motion respects `prefers-reduced-motion`

**Screen readers:**
- `aria-label` on all icon-only interactions
- `aria-live` regions for dynamic content (counter animations)
- Project expand/collapse managed with `aria-expanded`

---

# 15 — SOUND DESIGN

## 15.1 Sound Philosophy

Sound is **opt-in only**. A small sound toggle exists in the navigation (speaker icon). Default state: **off**.

When enabled, the site gains an additional dimension — but should never feel intrusive.

## 15.2 Sound Layers

**Layer 01 — Ambient Field:**
A subtle, continuous ambient texture. Think: low-frequency drone + slight tape hiss. Inspired by hip-hop production beds. Volume: very low (10–15%). Loops continuously.

**Layer 02 — Interaction Sounds:**
Micro-sounds attached to interactions:
- Navigation hover: brief, dry click (3ms, 800Hz)
- CTA click: subtle low thud + tail (40ms)
- Project reveal: short whoosh sweep (200ms)
- Section transition: brief sub-bass pulse (100ms)
- Glitch effect: static burst (80ms)

**Layer 03 — Easter Egg Audio:**
If user discovers the Konami code or specific hidden interaction: a 3-second audio clip plays — ideally a recognizable sample from hip-hop/rap culture (properly licensed, or original composition).

## 15.3 Implementation

- Web Audio API (Custom JS extension)
- Audio files: MP3, 48kHz, normalized to -14 LUFS
- Total audio asset weight: < 2MB
- All audio respects system volume and browser audio permissions

---

# 16 — SCROLL BEHAVIOR LOGIC

## 16.1 Scroll System

**Primary:** Antigravity native scroll with inertia
**Override option:** Lenis (if Antigravity scroll lacks sufficient smoothness)

```
Scroll characteristics:
  Damping: 0.08 (soft, cinematic deceleration)
  Duration: 1.2s full deceleration
  Ease: Exponential
  Overscroll: Disabled
  Touchpad sensitivity: 1.0 (no modification)
  Wheel sensitivity: 0.8 (slightly reduced)
```

## 16.2 Scroll-Triggered Event Map

| Scroll Position | Event |
|---|---|
| 0–5vh | Navigation appears (fades in) |
| 0–100vh | Hero parallax: background drifts at 0.5x scroll speed |
| 100–200vh | Manifesto: text reveals 1 line per ~30px scrolled |
| 200–350vh | Disciplines section: cards stagger-reveal |
| 350–600vh | Work section: project feature sequence |
| 600–700vh | About: portrait strips in, stats count up |
| 700–800vh | Process: steps reveal sequentially |
| 800–900vh | Contact: glow intensifies as user approaches |

## 16.3 Scroll Velocity Behavior

- **Slow scroll (< 20px/frame):** Full animation choreography plays
- **Fast scroll (> 80px/frame):** Animations snap to end state — no mid-animation freezes
- **Implementation:** Custom JS IntersectionObserver + velocity calculation

---

# 17 — TRANSITION LOGIC BETWEEN SECTIONS

## 17.1 Section-to-Section Transitions

Each chapter transition uses a different "wipe" or "cut" style — like editing choices in a film:

| Transition | From → To | Style |
|---|---|---|
| 01 | Preloader → Hero | **Hard cut** — immediate, like a film starting |
| 02 | Hero → Manifesto | **Cross-dissolve** — background fades through |
| 03 | Manifesto → Disciplines | **Color wipe** — --fire strip sweeps across |
| 04 | Disciplines → Work | **Zoom cut** — last discipline card zooms into work section |
| 05 | Work → About | **Defocus** — work blurs out, portrait sharpens in |
| 06 | About → Process | **Type cut** — a single large letter bridges sections |
| 07 | Process → Contact | **Fade to glow** — screen dims, contact glow brightens |

## 17.2 Page-to-Page Transitions (Case Studies)

When navigating from the home page to a case study:
1. Clicked project card expands to full screen (clip-path, 600ms)
2. Brief black frame (100ms) — like a cut
3. Case study header loads in
4. On return: reverse clip-path collapse back to grid position

**Implementation:** Custom JS clip-path animation. Antigravity handles the page routing and content.

---

# 18 — LOADING SCREEN CONCEPTS (DETAILED)

## Concept A — "THE SIGNAL" (Recommended)

```
FRAME 1 (0–500ms):
  Black screen.
  A single 1px horizontal white line appears at center.
  Grain overlay active.

FRAME 2 (500ms–1500ms):
  Line scans downward slowly, like a radar sweep.
  Counter appears, top-right: "000"
  Counter increments to 100 as assets load.

FRAME 3 (1500ms–2500ms):
  When counter hits 100:
  Line pulses once (scales up to 3px, back to 1px).
  "ARYAMAN PAGE" types in monospace, left-aligned.
  Subtitle: "UI/UX · MOTION · CINEMA"

FRAME 4 (2500ms):
  Everything whites out for 80ms (exposure flash).
  Cuts to Hero.
```

**Skip option:** After 1.5s, "SKIP ›" appears top-right in --ghost.

---

## Concept B — "TITLE CARD"

Black screen. White text center:
```
AN ARYAMAN PAGE EXPERIENCE
```
Sits 1.4 seconds. Fades. Hero emerges.

---

# 19 — CURSOR INTERACTION CONCEPTS

## 19.1 Cursor System Architecture

**Default state:** Dot cursor — 8px diameter, --bone color, no border.
**Default trail:** Slightly larger circle, 24px diameter, follows with 60ms lag (like a magnet).

**State transformations:**

| Context | Cursor State |
|---|---|
| Default / body | 8px dot + 24px trailing ring |
| Hovering link/CTA | Ring expands to 48px, fills to --fire at 20% opacity |
| Hovering project card | Ring fills with --fire at 30%, small "VIEW" text appears inside ring |
| Hovering image | Ring becomes a crosshair (2px lines, no circle) |
| Clicking | Dot compresses to 4px, ring compresses to 16px, then releases |
| Drag state | Ring becomes rectangular (wider), rotates 15deg |
| Hovering name/wordmark | Cursor shatters into 3 particles for 120ms, reforms |

## 19.2 Magnetic Interactions

Elements that pull the cursor when in proximity (30px radius):
- Primary CTA button
- Email address in contact section
- Navigation items
- Social icons

**Effect:** Cursor (and the element itself) shift slightly toward each other — the element moves 4–6px, the cursor moves 2–3px.

**Implementation:** Custom JS extension required. Uses `mousemove` event + distance calculation + transform interpolation.

## 19.3 Mobile Cursor

No custom cursor on touch devices. Touch interactions use:
- Scale feedback (0.95 on press)
- Ripple effect on tap (custom, --fire color)

---

# 20 — INTERACTIVE STORYTELLING CONCEPTS

## 20.1 The Manifesto Scroll Theatre

As the user scrolls through Chapter 02, the background doesn't just sit still. Lines of philosophy are revealed one at a time, but between them, **brief visual fragments** flash at low opacity — a frame from a video edit, a UI screenshot, a film still. These appear for 200–400ms and dissolve. The text continues.

**Effect:** The words feel backed by evidence. The visuals are subliminal, not literal.
**Implementation:** Scroll-triggered opacity bursts on background image elements. Custom scroll listener.

## 20.2 The Project "Before/After" Reveal

On the project case study pages, before showing the final design, a brief moment shows the **initial sketch / wireframe / problem state** — which then transforms (using a CSS clip-path wipe) into the polished final work.

**Effect:** Communicates process, builds credibility, creates satisfying reveal.

## 20.3 The Name as Interface

On the hero section, "ARYAMAN PAGE" (in small monospace, top-left) is not just a label. Hovering it triggers:
1. A 120ms glitch effect
2. The words scatter (character-level transform: slight X/Y displacement)
3. Reforms 400ms later
4. The subtitle line updates to a randomized tagline from a list:
   - "UI/UX · MOTION · CINEMA"
   - "DESIGN · CULTURE · OBSESSION"
   - "CRAFT · RHYTHM · INTENT"

## 20.4 Chapter Number Easter Egg

In the bottom-right of each chapter, the chapter number is visible in large --surface-02 text. If a user types the chapter number on their keyboard while viewing that chapter, a **hidden extra element** appears: a brief behind-the-scenes clip, sketch, or note from Aryaman's process for that section. Disappears after 5 seconds.

## 20.5 The Timeline Drawer

An optional "TIMELINE" mode accessible from the navigation. When triggered:
- Page zooms to bird's-eye view
- All chapter headings become visible as a vertical timeline
- User can jump to any chapter instantly
- Creates a map of the experience
- Closes with a smooth zoom back to current position

**Implementation:** Custom JS scale transform on scroll container + Chapter label display. Antigravity routing + Custom JS extension.

## 20.6 Konami Code

The classic Konami code (↑↑↓↓←→←→BA) triggers:
- A full-screen "UNLOCKED" moment in cinematic style
- Brief audio clip
- A hidden project or personal project not in the main portfolio
- Closes with a wink — "Now you know."

---

# APPENDICES

## Appendix A — Font Sources

| Font | Source | License |
|---|---|---|
| Neue Haas Grotesk | Adobe Fonts / fonts.com | Commercial license required |
| Editorial New | Pangram Pangram | Free for personal, commercial license for commercial |
| Suisse Int'l | Swiss Typefaces | Commercial license required |
| Space Mono | Google Fonts | Free (OFL) |
| Migra | Pangram Pangram | Free and commercial options |

## Appendix B — Spline Resources

- Hero object: Commission or create in Spline — abstract geometric form (dodecahedron or faceted sphere)
- Material: Matte black with edge highlight in --fire color
- Export: Spline Viewer web component
- File size target: < 8MB

## Appendix C — Motion Reference Videos

For briefing motion designers:
- Reference 01: Apple iPhone 16 Pro intro video (cinematic product pacing)
- Reference 02: Bottega Veneta SS24 campaign (editorial rhythm)
- Reference 03: Nike React ISPA web experience (scroll choreography)
- Reference 04: Loewe product reveal animations (restrained luxury motion)

## Appendix D — Quick-Reference Naming Conventions

```
Antigravity scenes:    scene-00-preloader, scene-01-hero, etc.
Custom JS files:       ap-cursor.js, ap-grain.js, ap-magnetic.js, ap-expand.js
CSS variable prefix:   --ap-[token]
Image assets:          hero-portrait.webp, work-[slug]-thumb.webm
Font files:            NeueHaasDisplay-Black.woff2, etc.
Spline files:          hero-object.spline, contact-glow.spline
```

---

*Document prepared for: Aryaman Page Portfolio Project*
*Creative Director: Aryaman Page*
*Document version: 1.0*
*Status: For Review + Execution*

---

**"THE ARCHIVE. COMING SOON."**
