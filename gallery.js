document.addEventListener("DOMContentLoaded", function () {
    console.log("Gallery JavaScript Loaded!");

    let carouselIndex = 0;
    const images = document.querySelectorAll('.carousel-images img');

    if (images.length > 0) {
        images[carouselIndex].classList.add('active');

        function showNextImage() {
            images[carouselIndex].classList.remove('active');
            carouselIndex = (carouselIndex + 1) % images.length;
            images[carouselIndex].classList.add('active');
        }

        setInterval(showNextImage, 3000);
    }
});
