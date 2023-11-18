const openNav = document.getElementById("open-nav");
const overlay = document.querySelector(".overlay");
const overlayClose = document.getElementById("close-nav");
const overlayLinks = document.querySelectorAll(".overlay-content a");
const body = document.body;

openNav.addEventListener("click", function () {
    overlay.classList.add("show-overlay");
    body.classList.add("no-scroll");
});

overlayClose.addEventListener("click", function () {
    overlay.classList.remove("show-overlay");
    body.classList.remove("no-scroll");
});

overlayLinks.forEach(link => {
    link.addEventListener("click", function () {
        overlay.classList.remove("show-overlay");
        document.body.classList.remove("no-scroll");
    });
});