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


var gallery = (function () {
    var BASE_PATH = "/assets/img/photos/";
    var PHOTO_COUNT = 8;

    function render(elementSelector) {
        var container = document.querySelector(elementSelector);
        
        if(!container){
            console.error("failed to find element ", container);
            return;
        }

        for (var i = 1; i <= PHOTO_COUNT; i++) {
            var image = createImage(i + ".jpg");
            container.appendChild(image);
        }

        new SimpleLightbox({
            elements: '#gallery a.portfolio-box'
        });    

        document.dispatchEvent(new Event("galleryLoaded"))
    }

    function createImage(imageName) {
        var pathToImage = BASE_PATH + imageName;

        var div = document.createElement('div');
        div.classList.add('col-lg-4', 'pe-3', 'pb-3', 'col-sm-6')

        var link = document.createElement('a');
        link.classList.add('portfolio-box');
        link.setAttribute('href', pathToImage);

        var img = document.createElement('img');
        img.classList.add('img-fluid');
        img.src = pathToImage

        link.appendChild(img);
        div.appendChild(link);

        return div;
    }

    return {
        render
    }
})();
