// Seleção dos elementos
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentSlide = 0;

// Função para mostrar o slide atual
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

// Função para avançar para o próximo slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length; // Loop para o início
  showSlide(currentSlide);
}

// Função para voltar ao slide anterior
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Loop para o final
  showSlide(currentSlide);
}

// Event Listeners para os botões
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);
