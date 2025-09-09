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
