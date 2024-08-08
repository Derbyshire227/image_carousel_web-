let currentIndex = 0;

function showImage(index) {
    const images = document.querySelectorAll('.carousel-images img');
    const totalImages = images.length;

    if (index >= totalImages) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalImages - 1;
    } else {
        currentIndex = index;
    }

    const imageWidth = document.querySelector('.carousel-container').offsetWidth;
    const offset = -currentIndex * imageWidth;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}px)`;
}

function nextImage() {
    showImage(currentIndex + 1);
}

function prevImage() {
    showImage(currentIndex - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showImage(currentIndex);
    window.addEventListener('resize', () => showImage(currentIndex)); // Adjust position on resize
});
