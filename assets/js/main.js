AOS.init();

var typed = new Typed("#typed-text", {
    strings: ["Web Developer.", "PHP Specialist.", "WordPress Expert."],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true
});



// Initialize AOS
AOS.init({
  duration: 1000,
  once: true
});

// GSAP Animations on Load
gsap.from("header", {
  y: -100,
  opacity: 0,
  duration: 1.5,
  ease: "bounce"
});

gsap.from(".section", {
  scrollTrigger: {
    trigger: ".section",
    start: "top 80%",
    toggleActions: "play none none none"
  },
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.3
});

gsap.utils.toArray(".reveal").forEach(elem => {
  gsap.from(elem, {
    scrollTrigger: {
      trigger: elem,
      start: "top 85%",
    },
    opacity: 0,
    y: 20,
    duration: 1.2,
    ease: "power2.out"
  });
});
