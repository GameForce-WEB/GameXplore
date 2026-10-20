const galleries = document.querySelectorAll(".gallery");


galleries.forEach((gallery) => {

    // Get ONLY the images inside this carousel
    const images = Array.from(
        gallery.querySelectorAll(".g-item")
    );

    // Get ONLY the controls inside this carousel
    const controls = gallery.querySelector(".gallery-controls");

    let currentIndex = 0;


    // ========================================
    // CREATE BUTTONS
    // ========================================

    const previousButton = document.createElement("button");

    previousButton.className =
        "gallery-controls-previous";
        previousButton.style.color = "white";

    previousButton.textContent = "← Previous";


    const nextButton = document.createElement("button");

    nextButton.className =
        "gallery-controls-next";
        nextButton.style.color = "white";

    nextButton.textContent = "Next →";


    controls.appendChild(previousButton);
    controls.appendChild(nextButton);


    // ========================================
    // GET IMAGE INDEX
    // ========================================

    function getImageIndex(offset) {

        let index = currentIndex + offset;


        if (index >= images.length) {
            index -= images.length;
        }


        if (index < 0) {
            index += images.length;
        }


        return index;
    }


    // ========================================
    // UPDATE CAROUSEL
    // ========================================

    function updateCarousel() {

        // Reset every image
        images.forEach((image) => {

            image.classList.remove(
                "center",
                "left",
                "right",
                "far-left",
                "far-right"
            );

            image.classList.add("hidden");

        });


        // CENTER
        const centerImage =
            images[getImageIndex(0)];

        centerImage.classList.remove("hidden");
        centerImage.classList.add("center");


        // LEFT
        const leftImage =
            images[getImageIndex(-1)];

        leftImage.classList.remove("hidden");
        leftImage.classList.add("left");


        // RIGHT
        const rightImage =
            images[getImageIndex(1)];

        rightImage.classList.remove("hidden");
        rightImage.classList.add("right");


        // FAR LEFT
        const farLeftImage =
            images[getImageIndex(-2)];

        farLeftImage.classList.remove("hidden");
        farLeftImage.classList.add("far-left");


        // FAR RIGHT
        const farRightImage =
            images[getImageIndex(2)];

        farRightImage.classList.remove("hidden");
        farRightImage.classList.add("far-right");

    }


    // ========================================
    // NEXT
    // ========================================

    function nextSlide() {

        currentIndex++;

        if (currentIndex >= images.length) {
            currentIndex = 0;
        }

        updateCarousel();

    }


    // ========================================
    // PREVIOUS
    // ========================================

    function previousSlide() {

        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }

        updateCarousel();

    }


    // ========================================
    // BUTTON EVENTS
    // ========================================

    nextButton.addEventListener(
        "click",
        nextSlide
    );


    previousButton.addEventListener(
        "click",
        previousSlide
    );


    // ========================================
    // START
    // ========================================

    updateCarousel();

});

const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll(".main-nav a");

navLinks.forEach(function(link) {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active");
    }
});