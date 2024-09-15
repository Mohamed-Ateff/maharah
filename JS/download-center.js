document.addEventListener("DOMContentLoaded", () => {
  const sectionHeaders = document.querySelectorAll(".section-header");
  const subCheckboxes = document.querySelectorAll(".sub-checkbox");
  const downloadAllButton = document.getElementById("download-all");
  const downloadSelectedButton = document.getElementById("download-selected");
  const langButton = document.getElementById("languageToggle");

  langButton.addEventListener("click", () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  });

  sectionHeaders.forEach((header) => {
    header.addEventListener("change", () => {
      const section = header.closest(".section");
      const checkboxes = section.querySelectorAll(".sub-checkbox");
      checkboxes.forEach((checkbox) => {
        checkbox.checked = header.checked;
      });
    });
  });

  subCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const section = checkbox.closest(".section");
      const header = section.querySelector(".section-header");
      const allChecked = Array.from(
        section.querySelectorAll(".sub-checkbox")
      ).every((cb) => cb.checked);
      header.checked = allChecked;
    });
  });

  downloadAllButton.addEventListener("click", () => {
    const bodyLang = document.body.lang;

    if (bodyLang === "en") {
      downloadFiles(["/pdfs/Full Report.pdf"]);
    } else {
      console.log("inside arabic full report");
      downloadFiles(["/pdfs/Full Report_Arabic.pdf"]);
    }
  });

  downloadSelectedButton.addEventListener("click", () => {
    const bodyLang = document.body.lang;
    let selectedFiles;

    if (bodyLang === "en") {
      selectedFiles = Array.from(
        document.querySelectorAll(".english-item:checked")
      ).map((cb) => cb.dataset.file);
      console.log("selectedFiles are ", selectedFiles);
    } else {
      selectedFiles = Array.from(
        document.querySelectorAll(".arabic-item:checked")
      ).map((cb) => cb.dataset.file);
      console.log("selectedFiles are ", selectedFiles);
    }

    downloadFiles(selectedFiles);
  });

  function downloadFiles(files) {
    if (files.length === 0) {
      alert("لم يتم تحديد ملفات للتنزيل.");
      return;
    }

    files.forEach((file) => {
      setTimeout(() => {
        const link = document.createElement("a");
        link.href = file;
        link.setAttribute("download", "");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, 500);
    });
  }
});
