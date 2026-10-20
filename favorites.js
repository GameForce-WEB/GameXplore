let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

let container = document.getElementById("favorites-container");

favorites.forEach(function(photo) {

    let card = document.createElement("div");
    card.classList.add("favorite-card");

    let img = document.createElement("img");
    img.src = photo;

    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";

    removeButton.onclick = function() {
        removeFavorite(photo, card);
    };

    card.appendChild(img);
    card.appendChild(removeButton);

    container.appendChild(card);
});


function removeFavorite(photo, card) {

    // Remove the photo from the array
    favorites = favorites.filter(function(item) {
        return item !== photo;
    });

    // Save the updated favorites
    localStorage.setItem("favorites", JSON.stringify(favorites));

    // Remove it from the page
    card.remove();
}

const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll(".main-nav a");

navLinks.forEach(function(link) {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active");
    }
});