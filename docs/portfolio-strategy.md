--- docs/portfolio-strategy.md (原始)
# Portfolio Strategy: The Engineer-Artist

## Executive Summary
This document outlines the strategic pivot from a purely engineering-focused portfolio to a unified "Engineer-Artist" showcase. The goal is to present a cohesive narrative that blends technical precision with creative expression, catering to recruiters who value multidisciplinary talent. The site will feature a dark, modern gallery aesthetic that allows the work (images, audio, code) to provide the color, while the UI remains neutral and elegant.

**Current Status:** ALL PHASES COMPLETE. Engineering projects successfully integrated using YAML-based content architecture with specific layout files.

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

All projects now use unified schema:
```yaml
---
layout: project-[specific-type]
theme: [robotics|vr|cad|chimera|music|textiles|photography]
category: [engineering|music|textiles|photography]
title: "Project Title"
featured: true/false
tags: [list]
# Category-specific fields (ALL CONTENT STORED IN YAML):
overview: string
specs: [list of objects]
challenges: [list]
results: string
gallery: [list of objects]
audio_file: path.mp3 (Music)
instruments: [list] (Music)
duration: "mm:ss" (Music)
images: [list] (Photography, Textiles)
location: string (Photography)
materials: [list] (Textiles)
---
```
**CRITICAL:** Engineering projects store 100% of their content in YAML Front Matter with NO body content below the `---` separator. This requires specific layout files that explicitly map each YAML variable to HTML structure.


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

### Phase 1: Foundation & Design System ✅ COMPLETE
- [x] Define CSS Variables for Dark Theme (Backgrounds, Text, Neutral Accents).
- [x] Import and configure Typography (Serif/Sans-Serif pair).
- [x] Update `_layouts/default.html` and `project.html` for dark mode base.
- [x] Implement global reset and base styles for the new aesthetic.

### Phase 2: Data Structure & Content Architecture ✅ COMPLETE
- [x] Create directory structure: `/assets/audio/`, `/assets/images/photography/`, `/assets/images/textiles/`.
- [x] Define Front Matter schema for new types (`music`, `photography`, `textiles`).
- [x] Create placeholder content files (1 per category) with `featured: true`.
- [x] Verify existing engineering projects fit the new schema.

### Phase 3: Unified Filtering System ✅ COMPLETE
- [x] Develop `filter.js` for client-side category sorting.
- [x] Build responsive Filter Button component (horizontal scroll on mobile).
- [x] Create Unified Project Card component (adapts icon/layout based on type).
- [x] Implement "Smooth Fade" CSS transitions for filter actions.

### Phase 4: Specialized Project Templates ✅ COMPLETE
- [x] **Music:** Build custom HTML5 audio player (styled, manual play only).
- [x] **Photography:** Implement Lightbox component for collection viewing.
- [x] **Textiles:** Create 2-column layout (Hero + Details).
- [x] **Engineering:** Refine existing table/spec layouts to match dark theme.

### Phase 5: Homepage Curation ✅ COMPLETE
- [x] Update `index.html` to query `featured: true` projects.
- [x] Design asymmetric grid for the 3 featured items.
- [x] Preserve existing "One-Liner", "Skills", and "Links" sections.

### Phase 6: Mobile Optimization & Polish ✅ COMPLETE
- [x] Ensure touch targets >44px (filters, play buttons).
- [x] Implement Lazy Loading for images and audio.
- [x] Test hamburger menu functionality.
- [x] Final accessibility audit (contrast, focus states in dark mode).

### Phase 7: Engineering YAML Integration ✅ COMPLETE
- [x] Created specific layout files for each engineering project type:
  - `_layouts/project-robotics.html`
  - `_layouts/project-vr.html`
  - `_layouts/project-cad.html`
  - `_layouts/project-chimera.html`
- [x] All specific layouts include `layout: default` for proper inheritance.
- [x] Each layout explicitly maps YAML variables to HTML structure (no `{{ content }}` reliance).
- [x] Updated all engineering markdown files to reference their specific layouts.
- [x] Applied cohesive dark theme styling to all engineering project pages.

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
 **Engineering Content** | 100% YAML Front Matter | Allows structured data for complex specs/challenges without markdown formatting limitations. |
| **Engineering Layouts** | Specific per-project-type files | Enables unique formatting for Robotics vs VR vs CAD vs Chimera while maintaining cohesive styling. |
| **Content Preservation** | Zero changes to existing content | All original information, order, and details preserved exactly as written. |

---
## 6. Critical Technical Architecture: YAML-Based Engineering Projects

### The Problem
Standard Jekyll workflows use `{{ content }}` to inject markdown body content into layouts. However, our engineering projects store ALL content in YAML front matter variables (overview, specs, challenges, results, gallery) with NO body content. This means `{{ content }}` returns empty, resulting in blank pages if layouts rely on it.

### The Solution
Each engineering project type has a dedicated layout file that:
1. Includes `layout: default` in its front matter to inherit the global shell (header, nav, footer, CSS).
2. Contains explicit HTML structure that maps directly to YAML variable names.
3. Uses Liquid loops (`{% for %}`) to iterate over list-based YAML data.
4. Applies cohesive CSS classes for consistent dark theme styling.

### Example Structure
**Markdown File (`01-autonomous-robot.md`):**
```yaml
---
layout: project-robotics
category: engineering
theme: robotics
title: "Autonomous Robot"
overview: "This project demonstrates..."
specs:
  - name: "Microcontroller"
    value: "Arduino Uno"
  - name: "Sensors"
    value: "Ultrasonic, IR"
challenges:
  - "Power management in isolated environments"
  - "Sensor fusion accuracy"
results: "Successfully deployed..."
gallery:
  - image: "/assets/images/robot-1.jpg"
    caption: "Front view"
featured: true
---
```
**NO content appears below the second `---`.**

**Layout File (`_layouts/project-robotics.html`):**
```html
---
layout: default
---
<div class="project-container theme-{{ page.category }}">
  <header class="project-header">
    <h1>{{ page.title }}</h1>
    <p class="overview">{{ page.overview }}</p>
  </header>

  {% if page.specs %}
  <section class="specs-section">
    <h2>Technical Specifications</h2>
    <table>
      <thead><tr><th>Component</th><th>Detail</th></tr></thead>
      <tbody>
        {% for spec in page.specs %}
        <tr><td>{{ spec.name }}</td><td>{{ spec.value }}</td></tr>
        {% endfor %}
      </tbody>
    </table>
  </section>
  {% endif %}

  {% if page.challenges %}
  <section class="challenges-section">
    <h2>Challenges & Solutions</h2>
    <ul>
      {% for challenge in page.challenges %}
      <li>{{ challenge }}</li>
      {% endfor %}
    </ul>
  </section>
  {% endif %}

  <!-- Additional sections for results, gallery, etc. -->
</div>
```


### Key Requirements
- **Variable Name Matching:** Liquid variable names in layouts MUST exactly match YAML keys in markdown files (case-sensitive).
- **No `{{ content }}`:** Layouts must not rely on `{{ content }}` since markdown body is empty.
- **Conditional Rendering:** Use `{% if page.variable %}` to handle optional fields.
- **List Iteration:** Use `{% for item in page.list %}` for arrays of objects.
- **Inheritance:** Every specific layout must have `layout: default` to render properly.

---

## 7. Open Questions & Future Considerations
- **Hybrid Projects:** To be brainstormed later (Electronic instruments, coded visuals).
- **Content Volume:** Plan for scaling if photography collections grow significantly (pagination vs. infinite scroll).
- **Analytics:** Future integration to track which categories get the most engagement.

---

## 8. Current Status

### Completed (All Phases)
- ✅ CSS Variables defined for Dark Theme in `main.css`
- ✅ Typography configured (Playfair Display + Inter)
- ✅ Directory structure created (`/assets/audio/`, `/assets/images/photography/`, `/assets/images/textiles/`)
- ✅ Placeholder content files created:
  - `_projects/music-nocturne.md` (featured: true)
  - `_projects/photography-tokyo.md` (featured: true)
  - `_projects/textiles-journal.md` (featured: true)
- ✅ All engineering projects updated with `category: engineering` and `featured` flags
- ✅ Homepage (`index.md`) updated with new persona, unified featured logic, and expanded skills section
- ✅ Client-side filtering system implemented (`filter.js`)
- ✅ Custom audio player built for music projects
- ✅ Lightbox implemented for photography collections
- ✅ Mobile hamburger menu functional
- ✅ Specific layout files created for all engineering project types
- ✅ All layouts properly inherit from `default.html`
- ✅ YAML variables explicitly mapped in all engineering layouts
- ✅ Zero content changes made to any project information

### Next Steps
- Site is production-ready for deployment
- Future additions should follow established YAML schema and specific layout patterns
- New project categories can be added by creating corresponding layout files and updating filter system