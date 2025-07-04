document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".images img");
  const videos = document.querySelectorAll(".image-grid video");

  images.forEach((img, index) => {
    const delay = index * 100;

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

  videos.forEach((video, index) => {
    const delay = index * 100;

    if (video.readyState >= 2) {
      // Enough data is loaded to render the video
      setTimeout(() => {
        video.classList.add("loaded");
      }, delay);
    } else {
      video.addEventListener("loadeddata", () => {
        setTimeout(() => {
          video.classList.add("loaded");
        }, delay);
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll(".images video");

  videos.forEach((video, index) => {
    const delay = index * 100;

    if (video.readyState >= 2) {
      setTimeout(() => {
        video.classList.add("loaded");
      }, delay);
    } else {
      video.addEventListener("loadeddata", () => {
        setTimeout(() => {
          video.classList.add("loaded");
        }, delay);
      });
    }
  });
});


  const video = document.getElementById("myVideo");

  video.addEventListener("loadedmetadata", () => {
    video.currentTime = 3; // starts at 5 seconds
  });
