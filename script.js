
    document.getElementById("bookingForm").addEventListener("submit", function(e) {
      e.preventDefault();
      alert("🎉 Your turf has been booked successfully!");
      this.reset();
    });

    window.addEventListener("scroll", function(){
      const header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 50);
    });

  
    function revealOnScroll() {
      const form = document.querySelector("form");
      const galleryImages = document.querySelectorAll(".gallery-grid img");

      const triggerBottom = window.innerHeight * 0.85;

      if (form.getBoundingClientRect().top < triggerBottom) {
        form.classList.add("show");
      }

      galleryImages.forEach(img => {
        if (img.getBoundingClientRect().top < triggerBottom) {
          img.classList.add("show");
        }
      });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
  