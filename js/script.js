document.addEventListener('DOMContentLoaded', function() {
  // Бургер-меню
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  menuToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });

  // Фото слайдер
  const sliderItems = document.querySelector('.slider-items');
  const photos = document.querySelectorAll('.slider-photo');
  const prevBtn = document.querySelector('.slider-btn.prev');
  const nextBtn = document.querySelector('.slider-btn.next');


  let currentPosition = 0;
  let slideWidth = photos[0].offsetWidth + 20; // ширина слайда + margin-right
  const sliderWrapper = document.querySelector('.slider-wrapper');
  let visibleCount = Math.floor(sliderWrapper.offsetWidth / slideWidth);
  let maxPosition = -(slideWidth * (photos.length - visibleCount));

  function updateSlider() {
    sliderItems.style.transform = `translateX(${currentPosition}px)`;
  }

  prevBtn.addEventListener('click', () => {
    if (currentPosition < 0) {
      currentPosition += slideWidth;
      if (currentPosition > 0) currentPosition = 0;
      updateSlider();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentPosition > maxPosition) {
      currentPosition -= slideWidth;
      if (currentPosition < maxPosition) currentPosition = maxPosition;
      updateSlider();
    }
  });

  window.addEventListener('resize', () => {
    slideWidth = photos[0].offsetWidth + 20;
    visibleCount = Math.floor(sliderWrapper.offsetWidth / slideWidth);
    maxPosition = -(slideWidth * (photos.length - visibleCount));
    if (currentPosition < maxPosition) currentPosition = maxPosition;
    if (currentPosition > 0) currentPosition = 0;
    updateSlider();
  });

  updateSlider();
});
