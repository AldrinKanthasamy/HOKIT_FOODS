// script.js

// Carousel Functionality
let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide .service');
const totalSlides = slides.length;

function updateCarousel() {
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-slide').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
}

// Automatic slide transition every 3 seconds
let autoSlide = setInterval(nextSlide, 3000); // Adjust timing as needed

// Optional: Pause automatic sliding when hovering over carousel
document.querySelector('.carousel-container').addEventListener('mouseover', () => {
    clearInterval(autoSlide);
});

document.querySelector('.carousel-container').addEventListener('mouseout', () => {
    autoSlide = setInterval(nextSlide, 3000);
});
