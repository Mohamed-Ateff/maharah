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

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default anchor click behavior

    const targetId = this.getAttribute("href").substring(1); // Get the target section ID
    const targetElement = document.getElementById(targetId); // Find the target element by ID

    if (targetElement) {
      const offset = -150; // Offset value
      const bodyRect = document.body.getBoundingClientRect().top; // Top position of the page
      const elementRect = targetElement.getBoundingClientRect().top; // Top position of the target section
      const elementPosition = elementRect - bodyRect; // Actual position of the section on the page
      const offsetPosition = elementPosition + offset; // Position with the offset applied

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth", // Smooth scrolling
      });
    }
  });
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
