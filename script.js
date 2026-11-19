
// GET NAVIGATION ELEMENTS

const menuToggle = document.getElementById("menuToggle");

const navMenu = document.getElementById("navMenu");


// OPEN AND CLOSE MOBILE MENU

menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

    const isOpen = navMenu.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";

});


// CLOSE MENU WHEN A LINK IS CLICKED

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.textContent = "☰";

    });

});
