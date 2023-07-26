document.addEventListener("DOMContentLoaded", function() {
    const burgerMenu = document.querySelector(".burger-menu");
    const sideMenu = document.querySelector(".side-menu");
    const closeButton = document.querySelector(".close-button");
    burgerMenu.addEventListener("click", function() {
        // Toggle the side menu on click
        if (sideMenu.style.left === "-300px") {
            sideMenu.style.left = "0";
        } else {
            sideMenu.style.left = "-300px";
        }
    });
    closeButton.addEventListener("click", function() {
        // Close the side menu when the close button is clicked
        sideMenu.style.left = "-300px";
    });
});