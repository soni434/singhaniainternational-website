// Search functionality for the search bar

document.addEventListener("DOMContentLoaded", function () {
    const searchBtn = document.getElementById("srch-btn");
  
    if (searchBtn) {
      searchBtn.addEventListener("click", function (e) {
        e.preventDefault();
  
        const query = document.getElementById("srch-bar").value.toLowerCase();
  
        const searchIndex = [
          { keywords: ["ferro", "ferro alloys", "alloys"], page: "ferro-alloys.html" },
          { keywords: ["ore", "minerals", "coal", "ores minerals coal"], page: "ore-min-coal.html" },
          { keywords: ["fasteners", "bolts and nuts", "hardware fasteners"], page: "#" },
          { keywords: ["anchor", "anchor bolt", "anchors"], page: "anchors.html" },
          { keywords: ["high tensile", "tensile anchor", "high tensile anchor"], page: "high-tensile-anchor.html" },
          { keywords: ["nut", "nuts"], page: "nuts.html" },
          { keywords: ["screw", "screws"], page: "screws.html" },
          { keywords: ["washer", "washers"], page: "washers.html" },
          { keywords: ["bolt", "bolts"], page: "bolt.html" },
          { keywords: ["stud", "studs"], page: "studs.html" },
          { keywords: ["wire", "wires", "steel wires", "spring steel wire", "spring wire"], page: "steel-wires.html" },
          { keywords: ["chemical", "chemicals", "industrial chemicals"], page: "chemicals.html" },
          { keywords: ["non ferrous", "non ferrous metal", "brass", "copper"], page: "non-ferrous-metal.html" },
          { keywords: ["long product", "long steel"], page: "long-product.html" },
          { keywords: ["sheet metal", "metal sheets", "steel sheet"], page: "sheet-metal.html" }
        ];
  
        let matched = false;
  
        for (const entry of searchIndex) {
          for (const keyword of entry.keywords) {
            if (query.includes(keyword)) {
              window.location.href = entry.page;
              matched = true;
              break;
            }
          }
          if (matched) break;
        }
  
        if (!matched) {
          alert("No matching product found.");
        }
      });
    }
  });
// search functionality script ends here 




//   Scroll to top button functionality

document.addEventListener("DOMContentLoaded", function () {
    // Get the button
    var mybutton = document.getElementById("scrollUpBtn");
  
    // Check if button exists to avoid errors
    if (mybutton) {
      // Show/hide button on scroll
      window.addEventListener("scroll", function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          mybutton.style.display = "block";
        } else {
          mybutton.style.display = "none";
        }
      });
  
      // Add click event to scroll to top
      mybutton.addEventListener("click", function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      });
    }
  });
  
//   Scroll to top button functionality end here 



// Email subscription functionality using EmailJS

  document.addEventListener("DOMContentLoaded", function () {
    // Initialize EmailJS with your public key
    if (typeof emailjs !== "undefined") {
      emailjs.init("75FB0nHsOD4SFPb0k");
    } else {
      console.error("EmailJS is not loaded. Please include the EmailJS SDK.");
      return;
    }
  
    // Form submit handler
    const newsletterForm = document.getElementById("newsletter-form");
  
    if (newsletterForm) {
      newsletterForm.addEventListener("submit", function (e) {
        e.preventDefault();
  
        // Optional: log form data
        const formData = new FormData(this);
        formData.forEach((value, key) => {
          console.log(key, value);
        });
  
        // Send form via EmailJS
        emailjs.sendForm("service_8s7yqvw", "template_12gjopr", this)
          .then(function (response) {
            alert("Subscribed Successfully!");
            console.log("Email sent:", response);
          }, function (error) {
            alert("Something went wrong. Please try again.");
            console.error("EmailJS Error:", error);
          });
      });
    } else {
      console.warn("newsletter-form not found in DOM.");
    }
  });
  // Email subscription functionality using EmailJS ends here 



//   Counter functionality for statistics section in Quote Page
  document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");
  
    counters.forEach(counter => {
      counter.innerText = "0";
  
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / 200;
  
        if (count < target) {
          counter.innerText = `${Math.ceil(count + increment)}`;
          setTimeout(updateCount, 10);
        } else {
          counter.innerText = target;
        }
      };
  
      updateCount();
    });
  });
  //   Counter functionality for statistics section in Quote Page ends here



// Search functionality for certificates in the Certificates Page
  document.addEventListener("DOMContentLoaded", function () {
    const searchBtn = document.getElementById("searchBtn");
  
    if (searchBtn) {
      searchBtn.addEventListener("click", function (e) {
        e.preventDefault();
  
        const query = document.getElementById("searchBar").value.toLowerCase().trim();
  
        const certificateMap = [
          { keywords: ["udyam", "msme", "aadhar", "udyam aadhar"], link: "udyam-aadhar.jpg" },
          { keywords: ["star export", "export house", "star certificate"], link: "star_exporthouse.jpg" },
          { keywords: ["aeo", "customs", "indian customs"], link: "AEO-T2-CERTIFICATE.jpg" },
          { keywords: ["zed", "silver", "zed silver"], link: "ZED-SILVER-scaled.jpg" },
          { keywords: ["iso 45001", "health safety", "occupational"], link: "ISO-45001-2018.jpg" },
          { keywords: ["iso 14001", "environment", "environmental"], link: "ISO-14001.jpg" },
          { keywords: ["ce", "ce certificate", "europe"], link: "CE-certificate.jpg" },
          { keywords: ["iatf", "16949", "iatf 16949"], link: "IATF-16949.jpg" },
          { keywords: ["iso 9001", "quality", "iso 9001 2023"], link: "ISO-9001-2023-26.jpg" },
          { keywords: ["material", "mrai", "recycling", "association"], link: "Material-Recycling-Association-of-India.jpg" }
        ];
  
        let found = false;
  
        for (const cert of certificateMap) {
          for (const keyword of cert.keywords) {
            if (query.includes(keyword)) {
              window.open(cert.link, "_blank");
              found = true;
              break;
            }
          }
          if (found) break;
        }
  
        if (!found) {
          alert("No matching certificate found. Please try different keywords.");
        }
      });
    }
  });
 // Search functionality for certificates in the Certificates Page end here 



// Pagination functionality for the Products Page
 document.addEventListener("DOMContentLoaded", function () {
    const nextBtn = document.querySelector(".next-page");
    const prevBtn = document.querySelector(".prev-page");
    const pageNumberText = document.querySelector(".page-number");
  
    let currentPage = 1;
    const totalPages = 5; // Adjust as needed
  
    function updatePageDisplay() {
      pageNumberText.textContent = `Page ${currentPage} of ${totalPages}`;
    }
  
    if (nextBtn) {
      nextBtn.addEventListener("click", function () {
        if (currentPage < totalPages) {
          currentPage++;
          updatePageDisplay();
        } else {
          alert("No Page Found");
        }
      });
    }
  
    if (prevBtn) {
      prevBtn.addEventListener("click", function () {
        if (currentPage > 1) {
          currentPage--;
          updatePageDisplay();
        }
      });
    }
  
    updatePageDisplay();
  });
// Pagination functionality for the Products Page ends here  