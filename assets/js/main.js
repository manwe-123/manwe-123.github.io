// ==========================================================================
// Main JavaScript - Engineer-Artist Portfolio
// Dark Theme with Modern Gallery Aesthetic
// Handles navigation, lightbox, filtering, and utility functions
// ==========================================================================

// --------------------------------------------------------------------------
// MOBILE NAVIGATION TOGGLE
// Updated for hamburger menu functionality
// --------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      
      // Animate hamburger to X
      const spans = navToggle.querySelectorAll('span');
      if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });
  }
});

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
// PROJECT FILTERING (Enhanced for Categories)
// For the projects index page with smooth fade transitions
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
        
        // Filter projects with smooth fade
        projectCards.forEach(card => {
          const category = card.getAttribute('data-category');
          
          if (filterValue === 'all' || category === filterValue) {
            // Show with fade in
            card.classList.remove('hidden');
            setTimeout(() => {
              card.classList.remove('fade-out');
            }, 50);
          } else {
            // Hide with fade out
            card.classList.add('fade-out');
            setTimeout(() => {
              card.classList.add('hidden');
            }, 400); // Match transition-fade duration
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

console.log('Portfolio JavaScript loaded successfully');
