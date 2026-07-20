# Portfolio Implementation Plan - Critical Fixes

## Executive Summary
This document outlines the immediate action plan to fix critical issues preventing project pages from displaying correctly on the GitHub Pages portfolio. The site targets engineering internship recruiters and must showcase both technical and creative work professionally.

**Timeline:** Less than 1 month to full deployment  
**Priority:** Fix display issues → Ensure functionality → Polish UX → Deploy

---

## Critical Issues Identified

### 1. Missing Layout Files for Creative Projects
**Problem:** Music, Textiles, and Photography projects reference `layout: project` which doesn't exist.
- `_projects/music-nocturne.md` → `layout: project`
- `_projects/textiles-journal.md` → `layout: project`
- `_projects/photography-tokyo.md` → `layout: project`

**Impact:** These pages fail to render or use incorrect default layout.

**Solution:** Create three specialized layouts:
- `_layouts/project-music.html` - Audio player + composition details
- `_layouts/project-textiles.html` - Gallery + materials/process documentation
- `_layouts/project-photography.html` - Fullscreen gallery + lightbox integration

---

### 2. Robotics Layout Uses `{{ content }}` Instead of YAML Variables
**Problem:** `project-robotics.html` contains `{{ content }}` on line 59, but engineering projects store ALL content in YAML front matter with NO body content.

**Current Code (BROKEN):**
```html
<div class="container section">
  {{ content }}
</div>
```

**Impact:** Robotics project page displays header only, no project content.

**Solution:** Replace `{{ content }}` with explicit YAML variable mapping:
```html
<div class="container section">
  {% if page.problem %}
  <section class="problem-section">
    <h2>Problem</h2>
    <p>{{ page.problem }}</p>
  </section>
  {% endif %}
  
  {% if page.solution %}
  <section class="solution-section">
    <h2>Solution</h2>
    <p>{{ page.solution }}</p>
  </section>
  {% endif %}
  
  <!-- Continue for all YAML variables -->
</div>
```

---

### 3. Missing CSS Styles for Project Components
**Problem:** Layout files use CSS classes that don't exist in `main.css`:
- `.project-container`
- `.project-header`
- `.project-title`
- `.project-subtitle`
- `.project-meta`
- `.meta-badge`
- `.project-tags`
- `.tag-cohesive`

**Impact:** Even if layouts render, styling will be broken or missing entirely.

**Solution:** Add comprehensive CSS styles to `main.css` before creating layouts.

---

### 4. Same Issue Applies to All Engineering Layouts
**Problem:** VR, CAD, and Chimera layouts likely have the same `{{ content }}` issue.

**Solution:** Audit and fix all four engineering layouts with proper YAML variable mapping.

---

## Implementation Steps (Priority Order)

### Phase 1: CSS Foundation (IMMEDIATE - 2 hours)
**File:** `/workspace/assets/css/main.css`

Add the following CSS sections before the closing comment:
1. **Project Container & Header Styles**
   - `.project-container` - Main wrapper
   - `.project-header` - Title area with theme support
   - `.project-title`, `.project-subtitle` - Typography
   - `.project-meta`, `.meta-badge` - Metadata display
   - `.project-tags`, `.tag-cohesive` - Tag styling

2. **Content Section Styles**
   - `.problem-section`, `.solution-section`
   - `.specs-section`, `.challenges-section`
   - `.gallery-section`, `.testing-section`
   - Tables, lists, and code blocks

3. **Theme-Specific Accents**
   - `.theme-robotics`, `.theme-vr`, `.theme-cad`, `.theme-chimera`
   - `.theme-music`, `.theme-textiles`, `.theme-photography`

---

### Phase 2: Fix Engineering Layouts (CRITICAL - 3 hours)
**Files:** 
- `/workspace/_layouts/project-robotics.html`
- `/workspace/_layouts/project-vr.html`
- `/workspace/_layouts/project-cad.html`
- `/workspace/_layouts/project-chimera.html`

For each layout: 
1. Remove `{{ content }}` reference
2. Map ALL YAML variables to HTML structure using Liquid
3. Use conditional rendering (`{% if page.variable %}`)
4. Iterate over lists with `{% for item in page.list %}`
5. Maintain consistent styling across all four layouts 


**YAML Variables to Map (Robotics Example):**
- `page.title`, `page.subtitle`
- `page.role`, `page.timeline`, `page.team`
- `page.tags` (array)
- `page.problem`, `page.solution`
- `page.requirements`, `page.constraints`
- `page.metrics` (array of objects)
- `page.sensing`, `page.actuation`, `page.mechanical`
- `page.components` (array of objects)
- `page.fabrication`, `page.gallery` (array of objects)
- `page.testing`, `page.test_results` (array of objects)
- `page.worked`, `page.failed`, `page.next_steps`
- `page.specs` (nested object)

---

### Phase 3: Create Creative Layouts (HIGH - 3 hours)
**Files to Create:**
1. `/workspace/_layouts/project-music.html`
2. `/workspace/_layouts/project-textiles.html`
3. `/workspace/_layouts/project-photography.html`

#### Project Music Layout Features:
- Custom HTML5 audio player (styled, manual play only)
- Composition metadata (key, tempo, instruments, duration)
- Process description
- Reflective commentary
- Dark theme with music-specific accent color (#c4a574)

#### Project Textiles Layout Features:
- Hero image display
- Materials list with visual emphasis
- Step-by-step process documentation
- Detail grid for multiple images
- Tactile/craft-focused design
- Accent color: #7d9a8a

#### Project Photography Layout Features:
- Fullscreen gallery experience
- Lightbox integration (already exists in `_includes/lightbox.html`)
- Location and trip metadata
- Technical details (camera, lenses, processing)
- Grid layout with lazy loading
- Accent color: #a67c52

---

### Phase 4: Update Creative Project Files (MEDIUM - 1 hour)
**Files to Update:**
- `/workspace/_projects/music-nocturne.md`
- `/workspace/_projects/textiles-journal.md`
- `/workspace/_projects/photography-tokyo.md`

**Changes:**
1. Change `layout: project` to specific layouts:
   - Music → `layout: project-music`
   - Textiles → `layout: project-textiles`
   - Photography → `layout: project-photography`

2. Move markdown body content into YAML front matter where appropriate
3. Ensure all variables match layout expectations
4. Remove inline HTML from markdown bodies (layouts handle structure)

---

### Phase 5: Testing & Validation (HIGH - 2 hours)
**Local Testing:**
```bash
bundle exec jekyll serve
```

**Checklist:**
- [ ] All 7 project pages load without errors
- [ ] Engineering projects display ALL YAML content (not blank)
- [ ] Creative projects show correct layouts
- [ ] Audio player works for music project
- [ ] Image galleries work for textiles/photography
- [ ] Navigation ("Back to Projects") works on all pages
- [ ] Mobile responsiveness verified
- [ ] Dark theme consistent across all pages
- [ ] No console errors in browser dev tools

---

### Phase 6: Deployment (MEDIUM - 1 hour)
**Steps:**
1. Commit all changes to main branch
2. Push to GitHub (`manwe-123/manwe-123.github.io`)
3. Wait for GitHub Pages build (~2-3 minutes)
4. Verify live site at `https://manwe-123.github.io/`
5. Test all project links from homepage/projects page
6. Check mobile view on actual device

---

## File Structure After Fixes

```
/workspace/
├── _config.yml (baseurl: "" ✓)
├── _layouts/
│   ├── default.html ✓
│   ├── project-robotics.html (FIXED)
│   ├── project-vr.html (FIXED)
│   ├── project-cad.html (FIXED)
│   ├── project-chimera.html (FIXED)
│   ├── project-music.html (NEW)
│   ├── project-textiles.html (NEW)
│   └── project-photography.html (NEW)
├── _projects/
│   ├── 01-autonomous-robot.md (category: engineering ✓)
│   ├── 02-vr-prototyping.md (category: engineering ✓)
│   ├── 03-shock-absorber-assembly.md (category: engineering ✓)
│   ├── 04-chimera-project.md (category: engineering ✓)
│   ├── music-nocturne.md (layout: project-music)
│   ├── textiles-journal.md (layout: project-textiles)
│   └── photography-tokyo.md (layout: project-photography)
├── assets/
│   ├── css/
│   │   └── main.css (WITH NEW STYLES)
│   ├── js/
│   │   └── main.js ✓
│   ├── audio/ (placeholders)
│   └── images/
│       ├── photography/ (placeholders)
│       └── textiles/ (placeholders)
└── docs/
    └── portfolio-strategy.md (UPDATED)
```

---

## Success Criteria

✅ **All project pages render completely** (no blank content areas)  
✅ **Creative projects have visually distinct layouts** (audio player, galleries)  
✅ **Engineering projects maintain technical documentation style**  
✅ **Consistent dark theme across all pages**  
✅ **Mobile-responsive on all devices**  
✅ **Live on GitHub Pages within 1 week**  
✅ **Ready for recruiter viewing within 1 month**

---

## Risk Mitigation

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| CSS conflicts with existing styles | Low | Medium | Test incrementally, use specific selectors |
| YAML variable name mismatches | Medium | High | Cross-reference markdown files during layout creation |
| GitHub Pages build failures | Low | High | Validate locally first, check build logs |
| Image/audio paths broken | Medium | Medium | Use relative_url filter, verify asset directories |
| Mobile layout issues | Medium | Medium | Test on multiple devices early |

---

## Maintenance Notes

**For Future AI Developers:**
1. All project content lives in YAML front matter (NO body content for engineering)
2. Each project type has a dedicated layout file
3. Layouts MUST include `layout: default` in front matter
4. Use `{% if page.variable %}` for optional fields
5. Use `{% for item in page.list %}` for arrays
6. CSS classes must be defined in `main.css` before use
7. Test locally with `bundle exec jekyll serve` before deploying

**Adding New Project Categories:**
1. Create new layout file in `_layouts/`
2. Define CSS styles in `main.css`
3. Update filter system in `main.js` if needed
4. Add category color to CSS variables
5. Update markdown files to reference new layout

---

**Document Created:** Based on portfolio audit and strategy review  
**Next Action:** Begin Phase 1 (CSS Foundation) immediately
