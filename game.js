

function addFavorite(photo) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    // Don't add the same photo twice
    if (!favorites.includes(photo)) {
        favorites.push(photo);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
}


const searchInput = document.getElementById("gameSearch");
const gameCards = document.querySelectorAll(".game-card");

searchInput.addEventListener("input", function() {

    const searchText = searchInput.value.toLowerCase();

    // Reset the first match every time you search
    let firstMatch = null;

    gameCards.forEach(function(card) {

        const heading = card.querySelector("h3");
        const gameName = heading.textContent.toLowerCase();

        const matches = gameName.includes(searchText);

        if (matches) {
            card.style.display = "";

            // Save the first matching card
            if (firstMatch === null) {
                firstMatch = card;
            }

        } else {
            card.style.display = "none";
        }

    });

    // Scroll to the first matching card
    if (firstMatch) {
        firstMatch.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }

});


const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll(".main-nav a");

navLinks.forEach(function(link) {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active");
    }
});