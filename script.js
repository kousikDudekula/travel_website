document.addEventListener("DOMContentLoaded", function () {
    const places = document.querySelectorAll(".place");

    // Hover animation
    places.forEach(place => {
        place.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.1)";
        });

        place.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });

    // Search functionality
    document.getElementById("searchBox").addEventListener("input", function (event) {
        const searchValue = event.target.value.toLowerCase();

        places.forEach(place => {
            const placeName = place.querySelector("h2").textContent.toLowerCase();
            if (placeName.includes(searchValue)) {
                place.style.display = "block";
            } else {
                place.style.display = "none";
            }
        });
    });
});


