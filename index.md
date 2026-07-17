---
layout: default
title: Home
---

<!-- Hero Section -->
<section class="hero">
  <div class="container">
    <h1 class="hero-title">Manwe Castro</h1>
    <p class="hero-subtitle">Engineer & Artist | Building Systems. Crafting Art. Solving Problems.</p>
    <p class="hero-description">
      Passionate about designing and building innovative mechanical systems, 
      composing music, capturing moments through photography, and creating with textiles.
      Seeking hands-on internships in design, manufacturing, robotics, and prototyping.
    </p>
    <div class="hero-actions">
      <a href="{{ '/projects' | relative_url }}" class="btn btn-primary">View All Work</a>
      <a href="{{ site.resume_url | default: 'assets/Resume Jul 2026 Draft 2.pdf' | relative_url }}" class="btn btn-secondary" download>View Resume</a>
    </div>
  </div>
</section>

<!-- Featured Projects Section -->
<section class="section">
  <div class="container">
    <h2 style="margin-bottom: 2rem;">Featured Work</h2>
    
    <div class="grid grid-3">
      {% assign featured_projects = site.projects | where: "featured", true | limit: 3 %}
      {% for project in featured_projects %}
      <a href="{{ project.url | relative_url }}" class="project-card" data-category="{{ project.category | default: 'engineering' }}">
        {% if project.image %}
        <img src="{{ project.image | relative_url }}" alt="{{ project.title }}" class="project-card-image" loading="lazy">
        {% else %}
        <div class="project-card-image" style="background-color: #2a2a2a; display: flex; align-items: center; justify-content: center; color: #666;">
          No Image
        </div>
        {% endif %}
        <div class="project-card-content">
          <span class="project-card-category">{{ project.category | default: 'Engineering' }}</span>
          <h3 class="project-card-title">{{ project.title }}</h3>
          <p class="project-card-summary">
            {% if project.subtitle %}{{ project.subtitle }}{% else %}{{ project.excerpt | strip_html | truncate: 100 }}{% endif %}
          </p>
          {% if project.tags %}
          <div class="project-card-tags">
            {% for tag in project.tags limit: 3 %}
            <span class="tag">{{ tag }}</span>
            {% endfor %}
          </div>
          {% endif %}
        </div>
      </a>
      {% endfor %}
    </div>
    
    <div style="text-align: center; margin-top: 3rem;">
      <a href="{{ '/projects' | relative_url }}" class="btn btn-outline">View All Work →</a>
    </div>
  </div>
</section>

<!-- Skills Matrix Section -->
<section class="section" style="background-color: #1a1a1a; border-top: 1px solid #333; border-bottom: 1px solid #333;">
  <div class="container">
    <h2 style="margin-bottom: 2rem;">Skills & Practices</h2>
    
    <div class="skills-matrix">
      <!-- Engineering & Technical -->
      <div class="skill-category">
        <h3 class="skill-category-title">Engineering & Technical</h3>
        <ul class="skill-list">
          <li class="skill-item">SolidWorks</li>
          <li class="skill-item">AutoCAD Fusion 360</li>
          <li class="skill-item">2D Drafting & GD&T</li>
          <li class="skill-item">Python</li>
          <li class="skill-item">Arduino/C++</li>
          <li class="skill-item">Unity Game Engine</li>
        </ul>
      </div>
      
      <!-- Fabrication & Hands-On -->
      <div class="skill-category">
        <h3 class="skill-category-title">Fabrication & Making</h3>
        <ul class="skill-list">
          <li class="skill-item">3D Printing (FDM/SLA)</li>
          <li class="skill-item">Laser Cutting</li>
          <li class="skill-item">Electronics Assembly</li>
          <li class="skill-item">Automotive Repair</li>
          <li class="skill-item">Hand Sewing & Textiles</li>
          <li class="skill-item">Bookbinding</li>
        </ul>
      </div>
      
      <!-- Creative & Artistic -->
      <div class="skill-category">
        <h3 class="skill-category-title">Creative & Artistic</h3>
        <ul class="skill-list">
          <li class="skill-item">Piano</li>
          <li class="skill-item">Violin</li>
          <li class="skill-item">Guitar</li>
          <li class="skill-item">Jarana & Requinto</li>
          <li class="skill-item">Photography</li>
          <li class="skill-item">Music Composition</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- Call to Action Section -->
<section class="section">
  <div class="container text-center">
    <h2 style="margin-bottom: 1rem;">Interested in Collaboration?</h2>
    <p style="max-width: 600px; margin: 0 auto 2rem; color: #6b7280;">
      I'm actively seeking internship opportunities for Summer 2027. 
      Let's discuss how I can contribute to your team.
    </p>
    <a href="{{ '/contact' | relative_url }}" class="btn btn-primary">Get In Touch</a>
  </div>
</section>
