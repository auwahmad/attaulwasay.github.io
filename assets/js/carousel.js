/**
 * Image Carousel Handler
 */

function initCarousels() {
  const carousels = document.querySelectorAll('.carousel-container');
  
  carousels.forEach(carousel => {
    const slides = carousel.querySelectorAll('.carousel-slide');
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');
    
    if (slides.length <= 1) {
      if(prevBtn) prevBtn.style.display = 'none';
      if(nextBtn) nextBtn.style.display = 'none';
      return;
    }
    
    let currentIndex = 0;
    
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          currentIndex = (currentIndex - 1 + slides.length) % slides.length;
          showSlide(currentIndex);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          currentIndex = (currentIndex + 1) % slides.length;
          showSlide(currentIndex);
        });
    }
  });
}
