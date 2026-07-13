---
layout: default
title: Home
---

<!-- Hero Section -->
<section class="hero">
  <div class="container">
    <h1 class="hero-title">Manwe Castro</h1>
    <p class="hero-subtitle">Mechanical Engineering Student | CAD, Robotics & Prototyping</p>
    <p class="hero-description">
      Passionate about designing and building innovative mechanical systems. 
      Seeking hands-on internships in design, manufacturing, robotics, and prototyping.
    </p>
    <div class="hero-actions">
      <a href="{{ '/projects' | relative_url }}" class="btn btn-primary">View Projects</a>
      <a href="{{ site.resume_url | default: '/assets/resume.pdf' | relative_url }}" class="btn btn-secondary" download>Download Resume</a>
    </div>
  </div>
</section>

<!-- Featured Projects Section -->
<section class="section">
  <div class="container">
    <h2 style="margin-bottom: 2rem;">Featured Projects</h2>
    
    <div class="grid grid-3">
      {% assign featured_projects = site.projects | limit: 3 %}
      {% for project in featured_projects %}
      <a href="{{ project.url | relative_url }}" class="project-card">
        {% if project.image %}
        <img src="{{ project.image | relative_url }}" alt="{{ project.title }}" class="project-card-image" loading="lazy">
        {% else %}
        <div class="project-card-image" style="background-color: #e5e7eb; display: flex; align-items: center; justify-content: center; color: #9ca3af;">
          No Image
        </div>
        {% endif %}
        <div class="project-card-content">
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
      <a href="{{ '/projects' | relative_url }}" class="btn btn-outline">View All Projects →</a>
    </div>
  </div>
</section>

<!-- Skills Matrix Section -->
<section class="section" style="background-color: #f9fafb; border-top: 1px solid #e5e7eb; border-bottom: 1px solid #e5e7eb;">
  <div class="container">
    <h2 style="margin-bottom: 2rem;">Technical Skills</h2>
    
    <div class="skills-matrix">
      <!-- CAD & Design -->
      <div class="skill-category">
        <h3 class="skill-category-title">CAD & Design</h3>
        <ul class="skill-list">
          <li class="skill-item">SolidWorks</li>
          <li class="skill-item">AutoCAD</li>
          <li class="skill-item">Fusion 360</li>
          <li class="skill-item">ANSYS</li>
          <li class="skill-item">GD&T</li>
          <li class="skill-item">DFM/DFA</li>
        </ul>
      </div>
      
      <!-- Fabrication & Hands-On -->
      <div class="skill-category">
        <h3 class="skill-category-title">Fabrication & Hands-On</h3>
        <ul class="skill-list">
          <li class="skill-item">3D Printing (FDM/SLA)</li>
          <li class="skill-item">Laser Cutting</li>
          <li class="skill-item">CNC Machining</li>
          <li class="skill-item">Manual Machining</li>
          <li class="skill-item">Welding (MIG/TIG)</li>
          <li class="skill-item">Electronics Assembly</li>
        </ul>
      </div>
      
      <!-- Programming & Controls -->
      <div class="skill-category">
        <h3 class="skill-category-title">Programming & Controls</h3>
        <ul class="skill-list">
          <li class="skill-item">Python</li>
          <li class="skill-item">MATLAB</li>
          <li class="skill-item">Arduino/C++</li>
          <li class="skill-item">ROS</li>
          <li class="skill-item">PLC Programming</li>
          <li class="skill-item">Embedded Systems</li>
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
