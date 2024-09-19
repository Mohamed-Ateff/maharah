$(".counter").counterUp({
  delay: 10,
  time: 1000,
});

//p4 img animation
const imageWrapper = document.querySelector('.image-wrapper');
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target); 
    }
  });
}, { threshold: 0.5 }); 

observer.observe(imageWrapper);
