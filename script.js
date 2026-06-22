document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Contact form submitted.");
        });
    }

    const studentForm = document.getElementById("studentForm");

    if (studentForm) {
        studentForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Registration received.");
        });
    }

    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.getElementById("mainNav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function () {

            mainNav.classList.toggle("is-open");

            const expanded =
                mainNav.classList.contains("is-open");

            menuToggle.setAttribute(
                "aria-expanded",
                expanded
            );

            menuToggle.textContent =
                expanded ? "Close" : "Menu";
        });

        document.querySelectorAll("#mainNav a")
            .forEach(function (link) {

                link.addEventListener("click", function () {

                    mainNav.classList.remove("is-open");

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    menuToggle.textContent = "Menu";
                });

            });
    }

});