# Portfolio Strategy: The Engineer-Artist

## Executive Summary
This document outlines the strategic pivot from a purely engineering-focused portfolio to a unified "Engineer-Artist" showcase. The goal is to present a cohesive narrative that blends technical precision with creative expression, catering to recruiters who value multidisciplinary talent. The site will feature a dark, modern gallery aesthetic that allows the work (images, audio, code) to provide the color, while the UI remains neutral and elegant.

**Current Status:** Phase 2 Complete - Directory structure created, placeholder content added for Music/Textiles/Photography, all engineering projects updated with `category` and `featured` front matter, homepage updated to reflect new persona and skills.

---

## 1. Core Concept & Persona
- **Persona:** The Engineer-Artist. A professional who applies systems thinking to art and creative intuition to engineering.
- **Tagline:** "Building Systems. Crafting Art. Solving Problems."
- **Visual Metaphor:** A modern, dark-mode gallery/studio where engineering schematics sit comfortably alongside sheet music and textile patterns.
- **Target Audience:** Recruiters and hiring managers (primary mobile users) looking for versatile problem-solvers.

---

## 2. Information Architecture

### Navigation Structure
- **Home:** Curated intro, featured projects (3 hardcoded), skills summary.
- **Projects (Unified):** The central hub containing ALL work (Engineering, Music, Textiles, Photography).
  - *Filter System:* [All] [Engineering] [Music] [Textiles] [Photography]
  - *Behavior:* Client-side filtering with smooth fade transitions.
- **About:** Personal story, background, philosophy (separate page).
- **Contact:** Contact form/info (separate page, existing content preserved).

### Content Categories
| Category | Content Type | Key Attributes | Display Style |
| :--- | :--- | :--- | :--- |
| **Engineering** | Case Studies | Tech Stack, Challenges, Results | Standard Card + Detailed Page |
| **Music** | Audio Tracks | Title, Instrument, Duration, MP3 | Album Art + Custom Player |
| **Textiles** | Visual Gallery | Materials, Process, Images | Hero Image + Detail Grid |
| **Photography** | Collections | Location, Trip Name, Gallery | Collection Grid + Lightbox |

### Project Front Matter Schema
All projects now use unified schema:
```yaml
---
layout: project
theme: [robotics|vr|cad|chimera|music|textiles|photography]
category: [engineering|music|textiles|photography]
title: "Project Title"
featured: true/false
tags: [list]
# Category-specific fields:
audio_file: path.mp3 (Music)
instruments: [list] (Music)
duration: "mm:ss" (Music)
images: [list] (Photography, Textiles)
location: string (Photography)
materials: [list] (Textiles)
---
```

---

## 3. Design System Specifications

### Visual Theme: "Modern Gallery Dark"
- **Backgrounds:** Deep charcoal (`#121212`), Soft Black (`#1e1e1e`).
- **Text:** Off-white (`#e0e0e0`) for readability, never pure white.
- **Accents:** Neutral, desaturated tones derived from materials (Sand, Slate, Clay, Sage).
- **Philosophy:** "UI recedes, Content shines." No bold UI colors; color comes from the project media itself.

### Typography
- **Headings (Creative):** Elegant Serif (e.g., *Playfair Display* or *Merriweather*). Conveys artistry and tradition.
- **Body/Data (Clean):** Geometric Sans-Serif (e.g., *Inter* or *Roboto*). Conveys engineering precision and readability.
- **Balance:** The pairing creates the "Mixed Artistic/Engineering" feel.

### Layout & Interaction
- **Homepage:** Asymmetric 3-project showcase (1 from each core category: Eng, Music, Photo/Textile).
- **Project Grid:** Masonry-style or flexible grid that adapts to aspect ratios (especially for photography).
- **Transitions:** Smooth Fade (Option B) for filtering. No jarring snaps.
- **Mobile Nav:** Hamburger menu to maximize screen real estate for content.

---

## 4. Technical Implementation Plan

### Phase 1: Foundation & Design System
- [ ] Define CSS Variables for Dark Theme (Backgrounds, Text, Neutral Accents).
- [ ] Import and configure Typography (Serif/Sans-Serif pair).
- [ ] Update `_layouts/default.html` and `project.html` for dark mode base.
- [ ] Implement global reset and base styles for the new aesthetic.

### Phase 2: Data Structure & Content Architecture
- [ ] Create directory structure: `/assets/audio/`, `/assets/images/photography/`, `/assets/images/textiles/`.
- [ ] Define Front Matter schema for new types (`music`, `photography`, `textiles`).
- [ ] Create placeholder content files (1 per category) with `featured: true`.
- [ ] Verify existing engineering projects fit the new schema.

### Phase 3: Unified Filtering System
- [ ] Develop `filter.js` for client-side category sorting.
- [ ] Build responsive Filter Button component (horizontal scroll on mobile).
- [ ] Create Unified Project Card component (adapts icon/layout based on type).
- [ ] Implement "Smooth Fade" CSS transitions for filter actions.

### Phase 4: Specialized Project Templates
- [ ] **Music:** Build custom HTML5 audio player (styled, manual play only).
- [ ] **Photography:** Implement Lightbox component for collection viewing.
- [ ] **Textiles:** Create 2-column layout (Hero + Details).
- [ ] **Engineering:** Refine existing table/spec layouts to match dark theme.

### Phase 5: Homepage Curation
- [ ] Update `index.html` to query `featured: true` projects.
- [ ] Design asymmetric grid for the 3 featured items.
- [ ] Preserve existing "One-Liner", "Skills", and "Links" sections.

### Phase 6: Mobile Optimization & Polish
- [ ] Ensure touch targets >44px (filters, play buttons).
- [ ] Implement Lazy Loading for images and audio.
- [ ] Test hamburger menu functionality.
- [ ] Final accessibility audit (contrast, focus states in dark mode).

---

## 5. Decision Log

| Decision Point | Option Selected | Rationale |
| :--- | :--- | :--- |
| **Nav Structure** | Keep "Projects", Separate Pages for About/Contact | Maintains familiarity while expanding scope. |
| **Music Hosting** | Local MP3s (`/assets/audio/`) | Total control, no external dependencies, better branding. |
| **Photo Organization** | Grouped by "Collections" (Trips) | Prevents grid clutter, tells a stronger narrative. |
| **Hybrid Projects** | Defer to Phase 2 | Focus on core categories first; can add later. |
| **Featured Logic** | Hardcoded (Front Matter `featured: true`) | Ensures absolute best work is always shown. |
| **Color Palette** | Neutral/Dark with Media-driven Color | Prevents visual clash between diverse project types. |
| **Typography** | Serif Headings + Sans Body | Perfectly balances "Art" vs "Engineering" vibes. |
| **Filter Animation** | Smooth Fade | Elegant, professional, less distracting than shuffle. |
| **Mobile Nav** | Hamburger Menu | Recommended for saving space on content-heavy grids. |
| **Sewing Display** | Simple Gallery (Hero + Details) | Matches complexity of content; no over-engineering. |

---

## 6. Open Questions & Future Considerations
- **Hybrid Projects:** To be brainstormed later (Electronic instruments, coded visuals).
- **Content Volume:** Plan for scaling if photography collections grow significantly (pagination vs. infinite scroll).
- **Analytics:** Future integration to track which categories get the most engagement.

---

## 7. Current Status

### Completed (Phase 1 & 2)
- ✅ CSS Variables defined for Dark Theme in `main.css`
- ✅ Typography configured (Playfair Display + Inter)
- ✅ Directory structure created (`/assets/audio/`, `/assets/images/photography/`, `/assets/images/textiles/`)
- ✅ Placeholder content files created:
  - `_projects/music-nocturne.md` (featured: true)
  - `_projects/photography-tokyo.md` (featured: true)
  - `_projects/textiles-journal.md` (featured: true)
- ✅ All engineering projects updated with `category: engineering` and `featured` flags
- ✅ Homepage (`index.md`) updated with new persona, unified featured logic, and expanded skills section
- ✅ Strategy document updated with front matter schema

### In Progress
- 🔄 Phase 3: Unified Filtering System (JavaScript implementation needed)
- 🔄 Phase 4: Specialized Project Templates (Music player, Photography lightbox)
- 🔄 Phase 6: Mobile Optimization & Polish

### Next Steps
1. Implement client-side filtering JavaScript in `assets/js/filter.js`
2. Add custom audio player component to music project template
3. Implement lightbox for photography collections
4. Test and refine mobile hamburger menu behavior
5. Final accessibility audit for dark mode contrast ratios
