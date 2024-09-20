$(document).ready(function () {
  // Handle navbar toggler click
  $(".navbar-toggler").click(function () {
    $(".navbar-collapse").slideToggle(300);
  });

  // Initial setup
  handleResize();

  // Debounced resize handler
  let resizeTimeout;
  $(window).resize(function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(handleResize, 100);
  });
});

// Cache selectors
const $subMenus = $(".sub-menu");
const $menuLinks = $(".menu-link");

// Handle resize
function handleResize() {
  if ($(window).innerWidth() <= 992) {
    // Bind click event to menu links for small screens
    $menuLinks.off("click").on("click", function (e) {
      const $submenu = $(this).next(".sub-menu");
      if ($submenu.length) {
        e.preventDefault(); // Prevent default action only if there is a submenu
        $submenu.slideToggle();
      }
    });
  } else {
    // Unbind click event for larger screens
    $menuLinks.off("click");
    // Reset sub-menus display
    $subMenus.each(function () {
      $(this).css("display", "");
    });
  }
}

// Prevent default action for menu links only if they have a submenu
$menuLinks.each(function () {
  const $submenu = $(this).next(".sub-menu");
  if (!$submenu.length) {
    $(this)
      .off("click")
      .on("click", function (e) {
        window.location.href = $(this).attr("href"); // Ensure navigation happens
      });
  }
});

// Header Ends

document.addEventListener("DOMContentLoaded", function () {
  // Check if the page has a hash in the URL (on load or after navigating)
  if (window.location.hash) {
    scrollToSection(window.location.hash);
  }

  // Add event listeners to all anchor links that reference sections
  document
    .querySelectorAll('a[href^="#"], a[href*=".html#"]')
    .forEach((anchor) => {
      anchor.addEventListener("click", function (event) {
        const href = this.getAttribute("href");

        // If it's a same-page link (e.g., #sectionId)
        if (href.startsWith("#")) {
          event.preventDefault();
          scrollToSection(href); // Smooth scroll to section
        } else if (href.includes(".html#")) {
          // Handle cross-page links like p1.html#sectionId
          event.preventDefault();
          const [page, sectionId] = href.split("#"); // Extract page and section
          window.location.href = `${page}#${sectionId}`; // Navigate to the new page
        }
      });
    });

  // Function to smooth scroll to a section
  function scrollToSection(target) {
    const targetElement = document.querySelector(target); // Find the target element by ID

    if (targetElement) {
      const headerOffset = 250; // Offset for the navbar or space you want at the top
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset; // Calculate the scroll position with offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth", // Enable smooth scrolling
      });

      // Add active class to the section (if needed for styling)
      setTimeout(() => {
        document
          .querySelectorAll("section")
          .forEach((sec) => sec.classList.remove("active-section"));
        targetElement.classList.add("active-section");
      }, 500); // Delay to allow smooth scroll before adding class
    }
  }
});



//

const outer = document.querySelector(".outer");
const cards = document.querySelectorAll(".card");
let currentIndex = 0;

// Get the buttons
const slideUpButton = document.getElementById("slideUp");
const slideDownButton = document.getElementById("slideDown");

// Initially disable the "Go Up" button
slideUpButton.classList.add("inactive");
slideUpButton.disabled = true;

// Show the initial card
showCards(currentIndex);

slideUpButton.addEventListener("click", () => {
  moveSlider(-1);
});

slideDownButton.addEventListener("click", () => {
  moveSlider(1);
});

function moveSlider(direction) {
  currentIndex += direction;

  // Update "Go Up" button state
  if (currentIndex <= 0) {
    currentIndex = 0;
    slideUpButton.classList.add("inactive");
    slideUpButton.classList.remove("active");
    slideUpButton.disabled = true;
  } else {
    slideUpButton.classList.add("active");
    slideUpButton.classList.remove("inactive");
    slideUpButton.disabled = false;
  }

  // Update "Go Down" button state
  if (currentIndex >= cards.length - 1) {
    currentIndex = cards.length - 1;
    slideDownButton.classList.add("inactive");
    slideDownButton.classList.remove("active");
    slideDownButton.disabled = true;
  } else {
    slideDownButton.classList.add("active");
    slideDownButton.classList.remove("inactive");
    slideDownButton.disabled = false;
  }

  showCards(currentIndex);
}
function showCards(index) {
  const isMobile = window.innerWidth <= 992;

  // Reset styles for all cards
  cards.forEach((card, i) => {
    card.style.opacity = 0;
    card.style.pointerEvents = "none";
    card.style.display = "none"; // Hide all cards initially

    if (isMobile) {
      // Mobile view: only show the current card
      if (i === index) {
        card.style.display = "block";
        card.style.opacity = 1;
        card.style.pointerEvents = "auto";
      }
    } else {
      // PC view: Show 3 cards
      card.style.transform = `translateY(${(i - index) * (100 + 0)}%)`; // Adjust for margin
      card.style.display = "block";

      if (i === index) {
        card.style.opacity = 1;
        card.style.pointerEvents = "auto";
      } else if (i === index + 1 || i === index + 2) {
        card.style.opacity = 0.4;
        card.style.pointerEvents = "auto";
      }
    }
  });
}

// Header on Scroll

window.addEventListener("scroll", function () {
  const header = document.getElementById("mainHeader");
  const logo = document.getElementById("logo");
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  if (scrollPosition > 655) {
    // Change 700 to your desired scroll position
    header.classList.add("scrolled");
    logo.src = "images/Logo.png"; // Change to the new logo path
  } else {
    header.classList.remove("scrolled");
    logo.src = "images/White-logo.png"; // Original logo path
  }
});
