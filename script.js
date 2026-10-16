
/* ===== VINCENT KIPROP PORTFOLIO ===== */

// Display the current year automatically in the footer
const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML =
        `&copy; ${new Date().getFullYear()} Vincent Kiprop. All rights reserved.`;
}

// Add a welcome message when visitors click the logo
const logo = document.querySelector(".logo");

if (logo) {
    logo.addEventListener("click", function (event) {
        event.preventDefault();

        alert("Welcome to Vincent Kiprop's Junior Developer Portfolio!");

        document.querySelector("#home").scrollIntoView({
            behavior: "smooth"
        });
    });
}

// Highlight the navigation link for the section being viewed
const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll(".navbar nav a");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    navLinks.forEach(function (link) {
                        link.classList.toggle(
                            "active",
                            link.getAttribute("href") === "#" + entry.target.id
                        );
                    });
                }
            });
        },
        {
            threshold: 0.35
        }
    );

    sections.forEach(function (section) {
        observer.observe(section);
    });
}

// Log a message in the browser console
console.log("Vincent Kiprop's portfolio loaded successfully!");

/* ===== VINCENT KIPROP PORTFOLIO ===== */

// Display the current year automatically in the footer
const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML =
        `&copy; ${new Date().getFullYear()} Vincent Kiprop. All rights reserved.`;
}

// Add a welcome message when visitors click the logo
const logo = document.querySelector(".logo");

if (logo) {
    logo.addEventListener("click", function (event) {
        event.preventDefault();

        alert("Welcome to Vincent Kiprop's Junior Developer Portfolio!");

        document.querySelector("#home").scrollIntoView({
            behavior: "smooth"
        });
    });
}

// Highlight the navigation link for the section being viewed
const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll(".navbar nav a");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    navLinks.forEach(function (link) {
                        link.classList.toggle(
                            "active",
                            link.getAttribute("href") === "#" + entry.target.id
                        );
                    });
                }
            });
        },
        {
            threshold: 0.35
        }
    );

    sections.forEach(function (section) {
        observer.observe(section);
    });
}

// Log a message in the browser console
console.log("Vincent Kiprop's portfolio loaded successfully!");
.navbar nav a.active {
    color: #2563eb;
    border-bottom: 2px solid #2563eb;
    padding-bottom: 4px;
}.navbar nav a.active {
    color: #2563eb;
    border-bottom: 2px solid #2563eb;
    padding-bottom: 4px;
}.navbar nav a.active {
    color: #2563eb;
    border-bottom: 2px solid #2563eb;
    padding-bottom: 4px;
}