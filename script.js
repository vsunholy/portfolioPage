/* script.js */
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Materialize components (Sidenav, ScrollSpy, etc.)
    const sidenavElems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenavElems);
    
    const scrollSpyElems = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(scrollSpyElems, {
      scrollOffset: 50
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a, .sidenav a').forEach(anchor => {
      anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
    
    // Trigger animations on scroll
    const animatedElements = document.querySelectorAll('.animate');
    
    // Immediately show elements in the viewport on page load
    animatedElements.forEach(elem => {
      const rect = elem.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        elem.style.animationPlayState = 'running';
      }
    });
    
    // Then set up the observer for scrolling
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(elem => {
      observer.observe(elem);
    });
});