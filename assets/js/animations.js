AOS.init();

function carousel() {
    return {
        currentIndex: 0,
        totalSlides: document.querySelectorAll('.carousel-item').length,
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
        },
        prevSlide() {
            this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.carousel').forEach(element => {
        Alpine.data('carousel', () => carousel());
    });
});