/* ==============================
   1. CONTACT FORM
============================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = contactForm.querySelector(
            'input[type="text"]'
        ).value.trim();

        const email = contactForm.querySelector(
            'input[type="email"]'
        ).value.trim();

        const message = contactForm.querySelector(
            "textarea"
        ).value.trim();

        if (name === "" || email === "" || message === "") {

            alert("Please fill all the fields.");

            return;
        }

        alert(
            "Thank you " + name +
            "! Your message has been submitted successfully."
        );

        contactForm.reset();

    });

}


/* ==============================
   2. NAVIGATION ACTIVE LINK
============================== */

const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function(link) {

    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {

        link.style.color = "#5b5ce2";

    }

});


/* ==============================
   3. SCROLL ANIMATION
============================== */

const animatedElements = document.querySelectorAll(
    ".feature-card, .course-card"
);

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
        function(entries) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    animatedElements.forEach(function(element) {

        element.style.opacity = "0";
        element.style.transform = "translateY(25px)";
        element.style.transition = "all 0.6s ease";

        observer.observe(element);

    });

}


/* ==============================
   4. MOBILE NAVIGATION
============================== */

const navbar = document.querySelector(".navbar");

function toggleMenu() {

    if (navbar) {

        navbar.classList.toggle("mobile-active");

    }

}


/* ==============================
   5. COPYRIGHT YEAR
============================== */

const yearElement = document.getElementById("currentYear");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}

