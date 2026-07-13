// ==========================================================================
// Main JavaScript - Mechanical Engineering Portfolio
// Handles lightbox, filtering, and utility functions
// ==========================================================================

// --------------------------------------------------------------------------
// LIGHTBOX FUNCTIONALITY
// For viewing project images at full size
// --------------------------------------------------------------------------

/**
 * Open the lightbox with the specified image
 * @param {string} src - Image source URL
 * @param {string} caption - Image caption text
 */
function openLightbox(src, caption) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  
  if (lightbox && lightboxImg) {
    lightboxImg.src = src;
    lightboxImg.alt = caption || 'Project image';
    
    if (lightboxCaption) {
      lightboxCaption.textContent = caption || '';
    }
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  }
}

/**
 * Close the lightbox
 */
function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  
  if (lightbox) {
    lightbox.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
  }
}

// Close lightbox when clicking outside the image
document.addEventListener('DOMContentLoaded', function() {
  const lightbox = document.getElementById('lightbox');
  
  if (lightbox) {
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox || e.target.classList.contains('lightbox-content')) {
        closeLightbox();
      }
    });
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    });
  }
});

// --------------------------------------------------------------------------
// PROJECT FILTERING
// For the projects index page
// --------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  if (filterButtons.length > 0 && projectCards.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Update active state on buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        const filterValue = this.getAttribute('data-filter');
        
        // Filter projects
        projectCards.forEach(card => {
          const cardTags = card.getAttribute('data-tags') || '';
          
          if (filterValue === 'all' || cardTags.includes(filterValue)) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }
});

// --------------------------------------------------------------------------
// SMOOTH SCROLL FOR ANCHOR LINKS
// Enhanced smooth scrolling for navigation
// --------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      
      if (targetId !== '#' && targetId !== '#!') {
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          e.preventDefault();
          
          const headerOffset = 80; // Account for sticky header
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
});

// --------------------------------------------------------------------------
// RESPONSIVE NAVIGATION TOGGLE
// Placeholder for mobile menu functionality
// --------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.nav-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  }
});

// --------------------------------------------------------------------------
// LAZY LOADING IMAGES
// Native lazy loading with fallback
// --------------------------------------------------------------------------

if ('loading' in HTMLImageElement.prototype === false) {
  // Fallback for browsers that don't support native lazy loading
  document.addEventListener('DOMContentLoaded', function() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    lazyImages.forEach(img => {
      img.src = img.dataset.src || img.src;
    });
  });
}

// --------------------------------------------------------------------------
// PRINT STYLES ENHANCEMENT
// Add print-specific behaviors
// --------------------------------------------------------------------------

window.addEventListener('beforeprint', function() {
  // Expand any collapsed sections before printing
  const expandedSections = document.querySelectorAll('details');
  expandedSections.forEach(section => {
    section.setAttribute('data-was-open', section.open);
    section.open = true;
  });
});

window.addEventListener('afterprint', function() {
  // Restore collapsed sections after printing
  const expandedSections = document.querySelectorAll('details[data-was-open]');
  expandedSections.forEach(section => {
    section.open = section.getAttribute('data-was-open') === 'true';
    section.removeAttribute('data-was-open');
  });
});

console.log('Portfolio JavaScript loaded successfully');
