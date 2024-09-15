// Add this script tag to your HTML file, just before the closing </body> tag
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js"></script>

// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animate header content
gsap.from('.header-content', {
  opacity: 0,
  y: 100,
  duration: 1,
  scrollTrigger: {
    trigger: 'header',
    start: 'top center',
    end: 'bottom center',
    toggleActions: 'play none none reverse'
  }
});

// Animate skill cards
gsap.from('.skill-card', {
  opacity: 0,
  y: 50,
  stagger: 0.2,
  duration: 0.8,
  scrollTrigger: {
    trigger: '#skills',
    start: 'top center+=100',
    end: 'bottom center',
    toggleActions: 'play none none reverse'
  }
});

// Animate project cards
gsap.from('.project-card', {
  opacity: 0,
  x: -100,
  stagger: 0.3,
  duration: 0.8,
  scrollTrigger: {
    trigger: '#projects',
    start: 'top center+=100',
    end: 'bottom center',
    toggleActions: 'play none none reverse'
  }
});

// Animate experience and education sections
gsap.from('#experience .section-content, #education .section-content', {
  opacity: 0,
  y: 50,
  duration: 0.8,
  scrollTrigger: {
    trigger: '#experience',
    start: 'top center+=100',
    end: 'bottom center',
    toggleActions: 'play none none reverse'
  }
});

// Animate social links
gsap.from('.social-links a', {
  opacity: 0,
  scale: 0.5,
  stagger: 0.2,
  duration: 0.5,
  scrollTrigger: {
    trigger: '#contact',
    start: 'top center+=100',
    end: 'bottom center',
    toggleActions: 'play none none reverse'
  }
});

// Parallax effect for background patterns
gsap.utils.toArray('.pattern').forEach(pattern => {
  gsap.to(pattern, {
    y: () => -100 * Math.random(),
    ease: "none",
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1
    }
  });
});

// Scroll indicator animation
gsap.to('.scroll-indicator', {
  scaleX: 1,
  transformOrigin: 'left center',
  ease: 'none',
  scrollTrigger: {
    trigger: 'body',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 0.3
  }
});