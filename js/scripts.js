function initCarousel() {
    var myCarousel = document.querySelector('.carousel')

    if (!myCarousel) {
        return;
    }

    return new bootstrap.Carousel(myCarousel, {
        interval: 10 *  1000,
    });
}


function onPageLoad() {
    initCarousel();
}


document.addEventListener('DOMContentLoaded', onPageLoad);

