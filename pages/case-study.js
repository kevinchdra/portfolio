document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".images img");

  images.forEach((img, index) => {
    const delay = index * 100; // 200ms delay between each image

    if (img.complete) {
      setTimeout(() => {
        img.classList.add("loaded");
      }, delay);
    } else {
      img.addEventListener("load", () => {
        setTimeout(() => {
          img.classList.add("loaded");
        }, delay);
      });
    }
  });
});