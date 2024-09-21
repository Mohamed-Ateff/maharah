document.addEventListener("DOMContentLoaded", () => {
  const sectionHeaders = document.querySelectorAll(".section-header");
  const downloadAllButton = document.getElementById("download-all");
  const downloadSelectedButton = document.getElementById("download-selected");
  const langButton = document.getElementById("languageToggle");

  // Disable "Download Selected" initially
  disableDownloadSelectedButton();

  // Clear all checkboxes when the language toggle button is clicked
  langButton?.addEventListener("click", () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
    disableDownloadSelectedButton(); // Recheck when all checkboxes are cleared
  });

  // When the section-header checkbox is clicked, it checks/unchecks all sub-checkboxes in the section
  sectionHeaders.forEach((header) => {
    header.addEventListener("change", () => {
      const section = header.closest(".section");
      const checkboxes = section.querySelectorAll(".sub-checkbox");
      checkboxes.forEach((checkbox) => {
        checkbox.checked = header.checked;
      });
      checkDownloadSelectedButtonState(); // Check button state after section-header change
    });
  });

  // When a sub-checkbox is clicked, check if all sub-checkboxes are checked; if so, check the section-header
  document.querySelectorAll(".sub-checkbox").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const section = checkbox.closest(".section");
      const header = section.querySelector(".section-header");
      const allChecked = Array.from(
        section.querySelectorAll(".sub-checkbox")
      ).every((cb) => cb.checked);
      header.checked = allChecked;
      checkDownloadSelectedButtonState(); // Check button state after individual sub-checkbox change
    });
  });

  // Download all button functionality
  downloadAllButton.addEventListener("click", () => {
    const bodyLang = document.body.lang;

    if (bodyLang === "en") {
      downloadFiles(["pdfs/Full_Report.pdf"]);
    } else {
      downloadFiles(["pdfs/Full_Report_Arabic.pdf"]);
    }
  });

  // Download selected files based on the selected checkboxes
  downloadSelectedButton.addEventListener("click", () => {
    const bodyLang = document.body.lang;
    let selectedFiles;

    if (bodyLang === "en") {
      selectedFiles = Array.from(
        document.querySelectorAll(".english-item:checked")
      ).map((cb) => cb.dataset.file);
    } else {
      selectedFiles = Array.from(
        document.querySelectorAll(".arabic-item:checked")
      ).map((cb) => cb.dataset.file);
    }

    if (selectedFiles.length > 0) {
      downloadFiles(selectedFiles);
    } else {
      alert("لم يتم تحديد ملفات للتنزيل.");
    }
  });

  // Helper function to download files
  function downloadFiles(files) {
    files.forEach((file) => {
      const link = document.createElement("a");
      link.href = file;
      link.setAttribute("download", "");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }

  // Function to disable the "Download Selected" button and apply custom CSS
  function disableDownloadSelectedButton() {
    downloadSelectedButton.disabled = true;
    downloadSelectedButton.classList.add("disabled-button");
  }

  // Function to enable the "Download Selected" button and revert CSS
  function enableDownloadSelectedButton() {
    downloadSelectedButton.disabled = false;
    downloadSelectedButton.classList.remove("disabled-button");
  }

  // Check if any sub-checkbox is selected
  function checkDownloadSelectedButtonState() {
    const anyChecked = Array.from(
      document.querySelectorAll(".sub-checkbox")
    ).some((checkbox) => checkbox.checked);

    if (anyChecked) {
      enableDownloadSelectedButton();
    } else {
      disableDownloadSelectedButton();
    }
  }
});
