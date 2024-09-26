const options = {
   origin: "left", 
   distance: "100px", 
   duration: 1000,
   easing: "ease-in-out",
   reset: true,
   delay: 300,
};
ScrollReveal().reveal(".project-card", options);
ScrollReveal().reveal(".about-content", {...options,origin:"top"});
ScrollReveal().reveal(".contact-section", {...options,origin:"right"});
ScrollReveal().reveal(".skill-category", options);

