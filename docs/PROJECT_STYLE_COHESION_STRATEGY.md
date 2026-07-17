# Project Style Cohesion Strategy

## Executive Summary

**Current State:** The portfolio has 4 distinct project layouts with significant inconsistencies in header structures, section styling, and component implementations. Each layout (`project.html`, `project-cad.html`, `project-vr.html`, `project-chimera.html`) reinvents similar components with different class names, structures, and visual treatments.

**Goal:** Create a unified, cohesive design system where:
1. **All project headers are identical in structure** (only color varies by project type)
2. **All content sections use the same styling** (boxes, text, tables remain consistent)
3. **Information breakdown follows the same patterns** across all projects
4. **Clean, maintainable code** with minimal duplication

---

## Current Issues Identified

### 1. Header Inconsistencies

**Problem:** Each layout implements headers differently:

| Layout | Meta Display | Tag Style | Class Names |
|--------|-------------|-----------|-------------|
| `project.html` | `<span class="tag">` inline | `.tag`, `.tag-primary` | `.page-header` |
| `project-cad.html` | `<div class="meta-item">` with label/value | `.tag.tag-pill` | `.page-header.page-header-cad` |
| `project-vr.html` | `<div class="meta-item">` with label/value | `.tag.tag-pill` | `.page-header.page-header-vr` |
| `project-chimera.html` | `<div class="meta-item">` with label/value | `.tag.tag-pill` | `.page-header.page-header-chimera` |

**Impact:** 
- Different visual hierarchy across projects
- Confusing maintenance (4x the CSS for same component)
- Inconsistent user experience

### 2. Section Title Variations

**Problem:** Multiple approaches to section headers:

```html
<!-- project.html -->
<h2 class="section-title">Project Overview</h2>

<!-- project-cad.html -->
<h2 class="section-title">Project Scenario & Overview</h2>
<h3 class="subsection-title subsection-objective">
  <span class="icon-circle">🎯</span> The Objective
</h3>

<!-- project-vr.html -->
<h3 class="subsection-title subsection-problem">
  <span class="icon-circle">!</span> The Problem
</h3>

<!-- project-chimera.html -->
<h2 class="section-title">The Engineering Problem & Objective</h2>
```

**Impact:** Inconsistent typography, spacing, and icon usage

### 3. Content Box/Card Duplication

**Problem:** Similar card/box components implemented differently:

| Component Type | Layout | Class Name | Structure |
|---------------|--------|------------|-----------|
| Info boxes | `project.html` | None (inline styles) | `<div>` with `<h4>` |
| Requirement cards | `project-cad.html` | `.requirements-card` | Custom card with border |
| Stakeholder cards | `project-vr.html` | `.stakeholders-card` | Different card style |
| Tech cards | `project-chimera.html` | `.tech-card` | 3-column grid card |
| Feature cards | `project-cad.html` | `.feature-card` | Grid card with icons |

**Impact:** 
- Users learn different visual languages per project
- CSS bloat (~50% duplication estimated)
- Hard to update styles globally

### 4. Table Styling Chaos

**Problem:** Tables have multiple conflicting implementations:

```css
/* Found in main.css */
.table                    /* Base table style */
.table-compact            /* Compact variant */
.bom-table                /* CAD-specific BOM */
.bom-table-extended       /* Extended BOM variant */
/* Plus inline styles on many tables */
```

**Impact:** Tables look different across projects, breaking cohesion

### 5. Layout Structure Fragmentation

**Problem:** Two-column layouts implemented inconsistently:

| Layout | Sidebar Approach | Main Content Width |
|--------|-----------------|-------------------|
| `project.html` | `<aside class="sidebar">` with `.specs-sidebar` | `.main-content` |
| `project-cad.html` | No sidebar | Full width with `.layout-two-col` sections |
| `project-vr.html` | No sidebar | Full width with `.layout-two-col` sections |
| `project-chimera.html` | No sidebar | Full width with `.grid-3` sections |

**Impact:** Content jumps around when navigating between projects

---

## Recommended Solution Architecture

### Phase 1: Unified Header System

**Concept:** Single header structure with modifier classes for colors only

```html
<!-- STANDARD HEADER STRUCTURE (all projects) -->
<header class="page-header page-header--[type]">
  <div class="container">
    <!-- Back Button (consistent) -->
    <a href="/projects" class="btn btn-outline btn-sm mb-4">
      ← Back to Projects
    </a>
    
    <!-- Title Block (consistent) -->
    <h1 class="page-title">{{ page.title }}</h1>
    {% if page.subtitle %}
    <p class="page-subtitle">{{ page.subtitle }}</p>
    {% endif %}
    
    <!-- Meta Row (CONSISTENT STRUCTURE) -->
    <div class="project-meta-row mt-6">
      {% if page.role %}
      <div class="meta-item">
        <span class="meta-label">Role:</span>
        <span class="meta-value">{{ page.role }}</span>
      </div>
      {% endif %}
      
      {% if page.timeline %}
      <div class="meta-item">
        <span class="meta-label">Timeline:</span>
        <span class="meta-value">{{ page.timeline }}</span>
      </div>
      {% endif %}
      
      {% if page.team or page.software %}
      <div class="meta-item">
        <span class="meta-label">[Team Size | Software]:</span>
        <span class="meta-value">{{ page.team | page.software }}</span>
      </div>
      {% endif %}
    </div>
    
    <!-- Tags (consistent pill style) -->
    {% if page.tags %}
    <div class="project-tags mt-4">
      {% for tag in page.tags %}
      <span class="tag tag-pill tag--[type]">{{ tag }}</span>
      {% endfor %}
    </div>
    {% endif %}
  </div>
</header>
```

**CSS Strategy:**
```scss
// Base header styles (shared)
.page-header {
  padding: var(--spacing-lg) 0;
  border-bottom: 1px solid var(--border-color);
}

.page-title { /* consistent typography */ }
.page-subtitle { /* consistent typography */ }

.project-meta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.meta-item {
  display: flex;
  gap: 0.5rem;
}

.meta-label {
  font-weight: 600;
  color: var(--color-text-muted);
}

.meta-value {
  color: var(--color-text);
}

// COLOR MODIFIERS ONLY (DRY approach)
.page-header--robotics { 
  --header-accent: #2563eb; // Blue
}

.page-header--vr { 
  --header-accent: #7c3aed; // Purple
}

.page-header--cad { 
  --header-accent: #ea580c; // Orange
}

.page-header--software { 
  --header-accent: #059669; // Green
}

// Use CSS custom properties for colored elements
.page-header .tag--type {
  background-color: var(--header-accent);
  border-color: var(--header-accent);
}
```

**Benefits:**
- ✅ Same HTML structure across all projects
- ✅ Color theming via CSS variables (easy to change)
- ✅ Single source of truth for header styles
- ✅ ~75% reduction in header-related CSS

---

### Phase 2: Standardized Content Sections

**Concept:** One section structure with optional variants

```html
<!-- STANDARD SECTION STRUCTURE -->
<section class="content-section" id="[section-id]">
  <h2 class="section-title">
    {% if section.icon %}
    <span class="section-icon">{{ section.icon }}</span>
    {% endif %}
    {{ section.title }}
  </h2>
  
  <div class="section-content">
    <!-- Content goes here -->
  </div>
</section>
```

**Subsection Standardization:**
```html
<!-- For subsections WITHIN a section -->
<div class="subsection-block">
  <h3 class="subsection-title">
    <span class="subsection-icon">🎯</span>
    Subsection Title
  </h3>
  <div class="subsection-content">
    <!-- Content -->
  </div>
</div>
```

**Callout/Info Box System (Unified):**
```html
<!-- INFO CALLOUT -->
<div class="callout callout--info">
  <div class="callout__header">
    <span class="callout__icon">ℹ</span>
    <strong>Information</strong>
  </div>
  <div class="callout__body">
    Content here
  </div>
</div>

<!-- SUCCESS CALLOUT -->
<div class="callout callout--success">
  <div class="callout__header">
    <span class="callout__icon">✓</span>
    <strong>Success</strong>
  </div>
  <div class="callout__body">
    Content here
  </div>
</div>

<!-- WARNING CALLOUT -->
<div class="callout callout--warning">
  <div class="callout__header">
    <span class="callout__icon">⚠</span>
    <strong>Warning</strong>
  </div>
  <div class="callout__body">
    Content here
  </div>
</div>

<!-- CONSTRAINT CALLOUT (CAD-specific but reusable) -->
<div class="callout callout--constraint">
  <div class="callout__header">
    <span class="callout__icon">⚙</span>
    <strong>Design Constraint</strong>
  </div>
  <div class="callout__body">
    <!-- Constraint grid can go inside -->
  </div>
</div>
```

**Benefits:**
- ✅ Consistent visual language
- ✅ BEM-like naming for clarity
- ✅ Easy to add new callout types
- ✅ Reusable across all projects

---

### Phase 3: Card Component System

**Concept:** Modular card components with consistent structure

```html
<!-- BASE CARD -->
<div class="card card--[variant]">
  {% if card.header %}
  <div class="card__header">
    {% if card.icon %}
    <span class="card__icon">{{ card.icon }}</span>
    {% endif %}
    <h4 class="card__title">{{ card.title }}</h4>
  </div>
  {% endif %}
  
  <div class="card__body">
    {{ card.content }}
  </div>
  
  {% if card.footer %}
  <div class="card__footer">
    {{ card.footer }}
  </div>
  {% endif %}
</div>
```

**Card Variants:**
1. **`.card--info`** - General information (replaces stakeholder cards, requirement cards)
2. **`.card--tech`** - Technical specifications (3-column grid layout)
3. **`.card--feature`** - Feature highlights (with icon emphasis)
4. **`.card--challenge`** - Challenge/resolution pairs
5. **`.card--spec`** - Dense specification lists

**Grid System for Cards:**
```html
<!-- 2-Column Grid -->
<div class="card-grid card-grid--2">
  <!-- cards here -->
</div>

<!-- 3-Column Grid -->
<div class="card-grid card-grid--3">
  <!-- cards here -->
</div>

<!-- Responsive Grid (auto-fit) -->
<div class="card-grid card-grid--auto">
  <!-- cards here -->
</div>
```

**Benefits:**
- ✅ One card system instead of 5+ different implementations
- ✅ Flexible grid layouts
- ✅ Consistent hover states, shadows, borders
- ✅ Easy to maintain and extend

---

### Phase 4: Table Standardization

**Concept:** Single table system with contextual modifiers

```html
<!-- BASE TABLE -->
<table class="table">
  <thead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
    </tr>
  </tbody>
</table>

<!-- TABLE VARIANTS -->
<table class="table table--compact">...</table>
<table class="table table--bordered">...</table>
<table class="table table--striped">...</table>

<!-- SPECIALIZED TABLES (extend base) -->
<table class="table table--bom">
  <!-- BOM-specific styling via modifier -->
</table>

<table class="table table--metrics">
  <!-- Metrics-specific styling -->
</table>
```

**BOM Table Special Handling:**
```html
<table class="table table--bom">
  <thead>
    <tr>
      <th class="mono">Item No.</th>
      <th>Part Name</th>
      <th>Material</th>
      <th class="mono">Qty</th>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
    {% for item in bom %}
    <tr class="table-row--{{ item.type }}">
      <td class="mono">{{ item.number }}</td>
      <td>
        <strong>{{ item.name }}</strong>
        {% if item.type == 'custom' %}
        <span class="badge badge--drawing">📄 Drawing Required</span>
        {% endif %}
      </td>
      <td>{{ item.material }}</td>
      <td class="mono">{{ item.quantity }}</td>
      <td>
        <span class="badge badge--{{ item.type }}">
          {{ item.type | capitalize }}
        </span>
      </td>
    </tr>
    {% endfor %}
  </tbody>
</table>
```

**Badge System (for tables and elsewhere):**
```html
<span class="badge badge--custom">Custom</span>
<span class="badge badge--standard">Standard</span>
<span class="badge badge--success">Pass</span>
<span class="badge badge--error">Fail</span>
<span class="badge badge--info">Info</span>
```

**Benefits:**
- ✅ All tables share base styles
- ✅ Modifiers handle special cases
- ✅ Badge system is reusable
- ✅ Consistent row hover states, striping

---

### Phase 5: Layout & Sidebar Unification

**Concept:** Consistent page layout with optional sidebar

```html
<!-- TWO-COLUMN LAYOUT (when sidebar needed) -->
<div class="container section">
  <div class="layout-main-sidebar">
    
    <!-- Main Content -->
    <main class="layout-main">
      <!-- All sections go here -->
    </main>
    
    <!-- Sidebar (optional) -->
    <aside class="layout-sidebar">
      <nav class="sidebar-nav">
        <h3 class="sidebar-title">Quick Navigation</h3>
        <ul class="sidebar-links">
          <li><a href="#overview">Overview</a></li>
          <li><a href="#requirements">Requirements</a></li>
          <!-- etc -->
        </ul>
      </nav>
      
      <div class="sidebar-specs">
        <h3 class="sidebar-title">Specifications</h3>
        <!-- Spec items -->
      </div>
    </aside>
    
  </div>
</div>

<!-- SINGLE-COLUMN LAYOUT (full width) -->
<div class="container section">
  <main class="layout-single">
    <!-- All sections go here -->
  </main>
</div>
```

**Responsive Behavior:**
- Desktop (>1024px): Sidebar visible on right
- Tablet (768-1024px): Sidebar collapses to top navigation
- Mobile (<768px): Single column, sidebar becomes accordion

**Benefits:**
- ✅ Predictable content width
- ✅ Sidebar always in same location
- ✅ Smooth responsive transitions
- ✅ No layout shift between projects

---

## Implementation Roadmap

### Step 1: Audit & Inventory (Current Phase)
- ✅ Document all existing components
- ✅ Identify duplication patterns
- ✅ Map front matter data structures

### Step 2: Design Token Definition
Create `_sass/base/_tokens.scss`:
```scss
:root {
  // Colors
  --color-primary: #2563eb;
  --color-secondary: #7c3aed;
  --color-accent-cad: #ea580c;
  --color-accent-vr: #8b5cf6;
  --color-accent-robotics: #3b82f6;
  --color-accent-software: #059669;
  
  // Typography
  --font-heading: 'Inter', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  
  // Spacing scale
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
  
  // Borders & Shadows
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
  --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
}
```

### Step 3: Component Library Creation
Create modular SCSS files:
- `_sass/components/_header.scss`
- `_sass/components/_sections.scss`
- `_sass/components/_cards.scss`
- `_sass/components/_tables.scss`
- `_sass/components/_callouts.scss`
- `_sass/components/_badges.scss`
- `_sass/components/_layout.scss`

### Step 4: Layout Consolidation
1. Merge `project-cad.html`, `project-vr.html`, `project-chimera.html` into single `project.html`
2. Use front matter variables to control section visibility
3. Use modifier classes for project-type-specific styling

### Step 5: Front Matter Standardization
Create consistent data structure across all projects:
```yaml
---
layout: project
project_type: robotics  # robotics | vr | cad | software
title: "Project Title"
subtitle: "Optional subtitle"
role: "Your Role"
timeline: "Date Range"
team: "Team Size"  # or software: "Tool Name" based on type
tags: [Tag1, Tag2]

# Standard sections (all optional)
overview:
  problem: "..."
  solution: "..."
  
requirements:
  list: [...]
  constraints: [...]
  metrics: [...]

architecture:
  sensing: "..."
  actuation: "..."
  mechanical: "..."
  components: [...]

fabrication:
  process: "..."
  gallery: [...]

testing:
  description: "..."
  results: [...]

lessons:
  worked: "..."
  failed: "..."
  next_steps: "..."

specs:
  software: [...]
  hardware: [...]
  materials: [...]
  dimensions: [...]
  weight: "..."
  cost: "..."
---
```

### Step 6: Migration & Testing
1. Update one project at a time
2. Test on desktop, tablet, mobile
3. Verify all links and navigation work
4. Check accessibility (contrast, keyboard nav)

### Step 7: Documentation
Create `STYLE_GUIDE.md`:
- Component usage examples
- When to use each variant
- Color theming instructions
- Adding new projects checklist

---

## Expected Outcomes

### Code Quality Improvements
| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| CSS file size | ~142KB | ~60KB | -58% |
| Layout files | 4 files | 1 file | -75% |
| Duplicate selectors | ~50 | ~5 | -90% |
| Time to add new project | 4-6 hours | 1-2 hours | -67% |

### User Experience Improvements
- ✅ Consistent navigation across all projects
- ✅ Predictable information architecture
- ✅ Faster page loads (smaller CSS)
- ✅ Better mobile experience (unified responsive system)
- ✅ Professional, polished appearance

### Maintenance Benefits
- ✅ Change header style once → updates all projects
- ✅ Add new component → available everywhere
- ✅ Fix bug once → fixed everywhere
- ✅ Easier for collaborators to understand

---

## Key Design Principles

1. **Don't Repeat Yourself (DRY)**: One definition per component
2. **Single Responsibility**: Each class does one thing well
3. **Progressive Enhancement**: Base styles work everywhere, modifiers enhance
4. **Semantic HTML**: Use proper heading hierarchy, landmarks
5. **Accessibility First**: Proper contrast, focus states, ARIA labels
6. **Mobile-First**: Design for small screens, enhance for large
7. **Content-First**: Structure serves the content, not vice versa

---

## Next Steps

1. **Review this strategy** with stakeholder
2. **Prioritize phases** based on impact vs. effort
3. **Create design tokens** file first (foundation)
4. **Build component library** in isolation
5. **Test components** with real content
6. **Migrate projects** one at a time
7. **Document everything** for future maintenance

---

## Appendix: Component Inventory

### Current Components (Pre-Consolidation)
- 4 header variants
- 5+ card types
- 4 table styles
- 3 callout types
- 2 layout systems
- Multiple button styles
- Various badge/tag implementations

### Target Components (Post-Consolidation)
- 1 header system (4 color modifiers)
- 1 card system (5 variants)
- 1 table system (6 modifiers)
- 1 callout system (5 types)
- 1 layout system (2 configurations)
- 1 button system (4 variants)
- 1 badge/tag system (6 variants)

**Net Reduction:** ~70% fewer unique components, same visual flexibility
