var gallery = (function () {
    var BASE_PATH = "/assets/img/photos/";
    var PHOTO_COUNT = 8;
    var LOOP_ALL_GALLERY_ITEMS = 5;

    if (LOOP_ALL_GALLERY_ITEMS > 1) {
        console.warn("All gallery images are rendered " + LOOP_ALL_GALLERY_ITEMS + " times!");
    }

    function render(rootElSelector) {
        var container = document.querySelector(rootElSelector);

        if (!container) {
            console.error("failed to find element ", container);
            return;
        }

        container.innerHTML = renderCarouselSlider3();

        document.dispatchEvent(new Event("galleryLoaded"));

        // initCarousel2();
        initCarousel3();
    }


    function initCarousel3() {
        var main = new Splide('#main-carousel', {
            type: 'fade',
            rewind: true,
            pagination: false,
            arrows: false,
        });

        var thumbnails = new Splide('#thumbnail-carousel', {
            fixedWidth: 150,
            fixedHeight: 90,
            gap: 10,
            rewind: true,
            pagination: false,
            isNavigation: true,
            breakpoints: {
                600: {
                    fixedWidth: 60,
                    fixedHeight: 44,
                },
            },
        });

        main.sync(thumbnails);
        main.mount();
        thumbnails.mount();
    }

    function renderCarouselSlider3() {
        var listItems = "";

        for (var j = 0; j < LOOP_ALL_GALLERY_ITEMS; j++) {
            for (var i = 0; i < PHOTO_COUNT; i++) {
                listItems += renderListItem(false, i);
            }
        }

        return `
        <section id="main-carousel" class="splide">
            <div class="splide__track">
                <ul class="splide__list">
                    ${listItems}
                </ul>
            </div>
        </section>
        <section id="thumbnail-carousel" class="splide"
            aria-label="The carousel with thumbnails. Selecting a thumbnail will change the Beautiful Gallery carousel.">
            <div class="splide__track">
                <ul class="splide__list">
                    ${listItems}
                </ul>
            </div>
        </section>
        `;

        function renderListItem(isThumbnail, index) {
            var liClass = isThumbnail ? "thumbnail" : "splide__slide";
            var src = BASE_PATH + (i + 1);

            return `
                <li class="${liClass}">
                    <img src="` + src + `.jpg" alt="">
                </li>
                `;
        }
    }

    return {
        render
    }
})();