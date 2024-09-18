document.addEventListener("DOMContentLoaded", function () {
  const charts = document.querySelectorAll(".chart-container");

  // Check if element is in viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top + rect.height / 2 <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom - rect.height / 2 >= 0 &&
      rect.left + rect.width / 2 <=
        (window.innerWidth || document.documentElement.clientWidth) &&
      rect.right - rect.width / 2 >= 0
    );
  }

  // Function to trigger animations and make charts visible
  function triggerAnimations() {
    charts.forEach((chart) => {
      if (isElementInViewport(chart)) {
        if (!chart.classList.contains("animate-bars")) {
          chart.classList.add("animate-bars"); // Trigger bar animation first

          // Delay line chart animation by 2 seconds after bars start
          setTimeout(() => {
            if (!chart.classList.contains("animate-line")) {
              chart.classList.add("animate-line");
            }
          }, 2000); // 2-second delay
        }
      }
    });
  }

  // Event listener for scroll and resize
  window.addEventListener("scroll", triggerAnimations);
  window.addEventListener("resize", triggerAnimations);

  // Initial check in case any chart is already in the viewport
  triggerAnimations();
});
