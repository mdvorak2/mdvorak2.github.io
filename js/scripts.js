function initCarousel() {
    var myCarousel = document.querySelector('.carousel')

    if (!myCarousel) {
        return;
        // console.error("Failed to find .carousel element");
    }

    return new bootstrap.Carousel(myCarousel, {
        interval: 5 * 100 * 1000,
    });
}


function onPageLoad() {
    initCarousel();
}


document.addEventListener('DOMContentLoaded', onPageLoad);

