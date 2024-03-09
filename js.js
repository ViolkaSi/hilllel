const carousel = document.querySelector('.carousel');
const prevBtn = carousel.querySelector('.prev');
const nextBtn = carousel.querySelector('.next');
const inner = carousel.querySelector('.carousel-inner');
const articles = carousel.querySelectorAll('article');

let currentIndex = 0;

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < articles.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

function updateCarousel() {
  const offset = -currentIndex * articles[0].offsetWidth;
  inner.style.transform = `translateX(${offset}px)`;

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === articles.length - 1;
}


document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('.disccover__list').classList.toggle('active');
});
document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('.nav__list').classList.toggle('active');
});