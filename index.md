---
layout: default
title: Home
---

<div class="portfolio-header">
  <h2>Engineering Projects Portfolio</h2>
  <p>Welcome to my collection of undergraduate engineering projects. Browse below to learn about my work in design, analysis, and innovation.</p>
</div>

<h3 style="margin-top: 2rem;">My Projects</h3>

<div class="project-grid">
  {% for project in site.projects %}
    <div class="project-card">
      {% if project.image %}
        <img src="{{ project.image | relative_url }}" alt="{{ project.title }}">
      {% else %}
        <img src="/assets/images/placeholder.png" alt="{{ project.title }}">
      {% endif %}
      
      <div class="project-card-content">
        <h3>{{ project.title }}</h3>
        <p>{{ project.excerpt | truncatewords: 20 }}</p>
        <a href="{{ project.url | relative_url }}">View Project →</a>
      </div>
    </div>
  {% endfor %}
</div>
