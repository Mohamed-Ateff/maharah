// script.js

document.addEventListener("DOMContentLoaded", function () {
  const languageToggleButtons = document.querySelectorAll(".toggle-btn"); // Select all buttons with the class 'toggle-btn'
  const body = document.body;
  const contentElements = document.querySelectorAll("[data-en]");

  // Store original Arabic inner HTML including attributes
  const originalContent = new Map();
  contentElements.forEach((element) => {
    originalContent.set(element, {
      html: element.innerHTML,
      aos: {
        fade: element.getAttribute("data-aos"),
        duration: element.getAttribute("data-aos-duration"),
      },
    });
  });

  // Check localStorage for saved language preference
  const savedLanguage = localStorage.getItem("preferredLanguage");
  if (savedLanguage) {
    setLanguage(savedLanguage);
  }

  // Add click event listeners to each toggle button
  languageToggleButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (body.classList.contains("english")) {
        setLanguage("ar");
      } else {
        setLanguage("en");
      }
    });
  });

  function setLanguage(language) {
    if (language === "en") {
      body.classList.add("english");
      updateButtonsText("عربي");
      body.setAttribute("lang", "en");
      body.setAttribute("dir", "ltr");
    } else {
      body.classList.remove("english");
      updateButtonsText("English");
      body.setAttribute("lang", "ar");
      body.setAttribute("dir", "rtl");
    }
    updateContent(language);
    localStorage.setItem("preferredLanguage", language);
  }

  function updateButtonsText(text) {
    languageToggleButtons.forEach((button) => {
      button.querySelector("span:last-child").textContent = text;
    });
  }

  function updateContent(language) {
    contentElements.forEach((element) => {
      if (language === "en") {
        element.innerHTML = element.getAttribute("data-en");
        element.classList.add("english");
      } else {
        const original = originalContent.get(element);
        element.innerHTML = original.html;
        element.setAttribute("data-aos", original.aos.fade);
        element.setAttribute("data-aos-duration", original.aos.duration);
        element.classList.remove("english");
      }
    });
    // Reinitialize AOS
    AOS.refresh();
  }
});
