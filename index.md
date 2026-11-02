---
layout: default
title: Home
---
<section class="studio-hero">
  <div class="container studio-hero-grid">
    <div class="studio-hero-copy">
      <p class="eyebrow"><span class="status-dot" aria-hidden="true"></span> Manwe Castro / Mechanical Engineering</p>
      <h1>Ideas on paper.<br>Systems in <em>motion.</em></h1>
      <p class="studio-hero-description">I'm a mechanical engineering student at Arizona State University. I design, build, and test things that connect the digital world to the physical one.</p>
      <div class="hero-actions"><a href="{{ '/projects/' | relative_url }}" class="btn btn-primary">Explore my work <span aria-hidden="true">→</span></a><a href="{{ site.resume_url | relative_url }}" class="text-link">View résumé <span aria-hidden="true">↗</span></a></div>
      <div class="hero-footnote"><span>CAD &amp; fabrication</span><span>Embedded systems</span><span>Creative technology</span></div>
    </div>
    <figure class="portrait-study"><div class="portrait-image"><img src="{{ '/assets/images/headshot.jpg' | relative_url }}" alt="Manwe Castro" width="640" height="800" fetchpriority="high"><span class="portrait-cross portrait-cross-top" aria-hidden="true">+</span><span class="portrait-cross portrait-cross-bottom" aria-hidden="true">+</span></div><figcaption><span>Curious by nature.<br>Hands-on by practice.</span><span class="mono">Tempe, AZ<br>Arizona State University</span></figcaption></figure>
  </div>
</section>
<section class="section selected-work" id="selected-work">
  <div class="container">
    <div class="section-heading-row"><div><span class="eyebrow">01 / Selected work</span><h2>From concept to something real.</h2></div><a class="text-link" href="{{ '/projects/' | relative_url }}">View all projects →</a></div>
    <div class="project-grid">
      {% assign selected_projects = site.projects | where: 'display', true | where: 'featured', true | sort: 'date' | reverse %}
      {% for project in selected_projects limit: 3 %}{% include projects/card.html project=project number=forloop.index %}{% endfor %}
    </div>
  </div>
</section>
<section class="section practice-section">
  <div class="container">
    <div class="section-heading-row"><div><span class="eyebrow">02 / How I work</span><h2>Think it through.<br>Then get your hands on it.</h2></div><p>My work moves between mechanical design, electronics, software, and creative practice. Each gives me another way to approach a problem.</p></div>
    <div class="practice-grid">
      <div class="practice-item"><span class="practice-number">01</span><h3>Design with purpose.</h3><p>Start with the person, the constraints, and the question worth solving.</p><ul class="skill-list"><li>SolidWorks &amp; Fusion 360</li><li>2D drafting &amp; GD&amp;T</li><li>Unity Game Engine</li></ul></div>
      <div class="practice-item"><span class="practice-number">02</span><h3>Build to understand.</h3><p>Prototype the parts that matter. Learn from the fit, the wiring, and the first run.</p><ul class="skill-list"><li>3D printing &amp; laser cutting</li><li>Electronics assembly</li><li>Arduino/C++ &amp; automotive repair</li></ul></div>
      <div class="practice-item"><span class="practice-number">03</span><h3>Keep refining.</h3><p>Measure what happens, question the assumptions, and make the next iteration better.</p><ul class="skill-list"><li>Python &amp; data pipelines</li><li>Sewing &amp; photography</li><li>Piano, violin, guitar &amp; jarana/requinto</li></ul></div>
    </div>
  </div>
</section>
<section class="section home-about"><div class="container home-about-grid"><div><span class="eyebrow">03 / Beyond the workbench</span><h2>Engineering is one part<br>of the picture.</h2></div><div><p>Music, sewing, photography, and community work keep me curious about how things are made—and who they're made for. I'm interested in clean energy, sustainable infrastructure, and practical ideas that improve everyday life.</p><a class="text-link" href="{{ '/about/' | relative_url }}">More about me →</a></div></div></section>
<section class="container opportunity-strip"><span class="status-dot" aria-hidden="true"></span><p>Seeking a <strong>Summer 2027 engineering internship.</strong></p><a href="{{ '/contact/' | relative_url }}">Let's connect ↗</a></section>
