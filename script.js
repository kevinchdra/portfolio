
const carousel = document.getElementById('carousel');
const slides = document.querySelectorAll('.slide');
const featuredItems = document.querySelectorAll('.featured ul li');
const projectItems = document.querySelectorAll('.projects ul li');
const allListItems = [...featuredItems, ...projectItems];

let currentSlide = 0;
let isMobile = window.matchMedia("(max-width: 768px)").matches;

function updateCarousel(index) {
  if (!carousel || slides.length === 0) return;

  const offset = -index * (slides[0].offsetWidth + 100); // 100 includes margin spacing
  carousel.style.transform = `translateX(${offset}px)`;

  if (!isMobile) {
    allListItems.forEach((item, i) => {
      item.classList.toggle('active', i === index);
    });
  }

  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function scrollHandler(e) {
  if (isMobile || !carousel) return;
  e.preventDefault();
  if (e.deltaY > 0 && currentSlide < slides.length - 1) {
    currentSlide++;
  } else if (e.deltaY < 0 && currentSlide > 0) {
    currentSlide--;
  }
  updateCarousel(currentSlide);
}

if (!isMobile) {
  window.addEventListener('wheel', scrollHandler, { passive: false });
}

window.addEventListener('resize', () => {
  isMobile = window.matchMedia("(max-width: 768px)").matches;
});

slides.forEach((slide, index) => {
  setTimeout(() => {
    slide.classList.add('loaded');
  }, index * 100);
});

// Restore previous hover behavior using index attribute
const projectLinks = document.querySelectorAll('.project-link');
projectLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    if (!isMobile) {
      const index = parseInt(link.getAttribute('data-index'), 10);
      currentSlide = index;
      updateCarousel(index);
    }
  });
});

document.querySelectorAll('.back-to-top').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

updateCarousel(0);

const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});