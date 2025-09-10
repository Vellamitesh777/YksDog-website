document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const closeBtn = document.querySelector(".closeBtn");

  // Use event delegation for better performance with many images
  document.querySelector(".gallery").addEventListener("click", (e) => {
    if (e.target.tagName === "IMG" && e.target.closest(".thumb")) {
      const imgSrc = e.target.src;
      modalImg.src = imgSrc;
      modal.style.display = "flex";

      gsap.fromTo(
        modalImg,
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "power3.out" }
      );
    }
  });

  // Close button click
  closeBtn.addEventListener("click", closeModal);

  // Click outside image closes modal
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  function closeModal() {
    gsap.to(modalImg, {
      scale: 0.5,
      opacity: 0,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        modal.style.display = "none";
        modalImg.src = ""; // clear image to reduce memory usage
      }
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const thumbs = document.querySelectorAll('.thumb');

  thumbs.forEach((thumb) => {
    thumb.classList.add('skeleton');
    const img = thumb.querySelector('img');

    if (img.complete) {
      // Already loaded (from cache)
      thumb.classList.remove('skeleton');
      img.style.opacity = 1;
    } else {
      img.addEventListener('load', () => {
        thumb.classList.remove('skeleton');
        img.style.opacity = 1;
      });

      img.addEventListener('error', () => {
        thumb.classList.remove('skeleton'); // Still remove skeleton
        thumb.innerHTML = "<p style='color:white;text-align:center;'>⚠️ Failed</p>";
      });
    }
  });

  // Optional: Modal logic
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const closeBtn = document.querySelector(".closeBtn");

  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      const imgSrc = thumb.querySelector("img").src;
      modalImg.src = imgSrc;
      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

