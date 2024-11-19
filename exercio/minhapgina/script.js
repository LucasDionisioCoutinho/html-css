let currentSlide = 0;

function showSlide(slideIndex) {
    const slides = document.querySelectorAll('.carousel-imagens img');
    const totalSlides = slides.length;

    // Corrige o índice caso ele saia dos limites
    if (slideIndex >= totalSlides) {
        currentSlide = 0;
    } else if (slideIndex < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = slideIndex;
    }

    // Calcula a posição de deslocamento e aplica ao estilo
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-imagens').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function previousSlide() {
    showSlide(currentSlide - 1);
}

// Inicia o carrossel na primeira imagem
showSlide(currentSlide);
