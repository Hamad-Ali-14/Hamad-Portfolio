/*==========================================================
                PORTFOLIO JAVASCRIPT
        Hamad Ali | Data Analyst Portfolio
==========================================================*/

/*==========================
        SELECTORS
==========================*/

const body = document.body;

const header = document.getElementById("header");

const navLinks = document.querySelectorAll(".nav-links a");

const sections = document.querySelectorAll("section");

const themeToggle = document.getElementById("themeToggle");

// const menuBtn = document.querySelector(".menu-btn");

const navMenu = document.querySelector(".nav-links");

const counters = document.querySelectorAll(".counter");

const filterButtons = document.querySelectorAll(".filter-buttons button");

const projects = document.querySelectorAll(".project-card");

const preloader = document.getElementById("preloader");

const backToTop = document.getElementById("backToTop");

const cursor = document.querySelector(".cursor");

const cursorDot = document.querySelector(".cursor-dot");

/*==========================================================
                    PRELOADER
==========================================================*/

window.addEventListener("load", () => {

    preloader.style.opacity = "0";

    preloader.style.pointerEvents = "none";

    setTimeout(() => {

        preloader.remove();

    }, 500);

});

/*==========================================================
                DARK / LIGHT THEME
==========================================================*/

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    body.classList.add("light");

}

themeToggle.addEventListener("click", () => {

    body.classList.toggle("light");

    localStorage.setItem(

        "theme",

        body.classList.contains("light")

            ? "light"

            : "dark"

    );

});



/*==========================================================
                NAVBAR SCROLL
==========================================================*/

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

/*==========================================================
                ACTIVE NAVIGATION
==========================================================*/

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        const height = section.offsetHeight;

        if (scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*==========================================================
                SMOOTH SCROLL
==========================================================*/

navLinks.forEach(link => {

    link.addEventListener("click", e => {

        e.preventDefault();

        const target = document.querySelector(

            link.getAttribute("href")

        );

        target.scrollIntoView({

            behavior: "smooth"

        });

        navMenu.classList.remove("active");

    });

});

/*==========================================================
                COUNTER ANIMATION
==========================================================*/

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = +counter.dataset.target;

        let count = 0;

        const speed = target / 80;

        function update() {

            count += speed;

            if (count < target) {

                counter.innerText = Math.floor(count);

                requestAnimationFrame(update);

            } else {

                counter.innerText = target + "+";

            }

        }

        update();

        counterObserver.unobserve(counter);

    });

}, {

    threshold: .6

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/*==========================================================
                PROJECT FILTERS
==========================================================*/

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const filter = button.dataset.filter;

        projects.forEach(card => {

            if (filter === "all" || card.classList.contains(filter)) {

                card.style.removeProperty("display");

                card.style.opacity = "1";
                card.style.transform = "scale(1)";

            } else {

                card.style.opacity = "0";
                card.style.transform = "scale(.95)";

                setTimeout(() => {

                    card.style.display = "none";

                }, 250);

            }

        });

    });

});

/*==========================================================
                SCROLL REVEAL
==========================================================*/

const revealElements = document.querySelectorAll(

    ".bento-card,.skill-card,.project-card,.contact-card"

);

const reveal = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .15

});

revealElements.forEach(item => {

    item.classList.add("hidden");

    reveal.observe(item);

});

/*==========================================================
                BACK TO TOP
==========================================================*/

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("visible");

    }

    else {

        backToTop.classList.remove("visible");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*==========================================================
                CURSOR
==========================================================*/

if (window.innerWidth > 992) {

    document.addEventListener("mousemove", e => {

        cursor.style.left = e.clientX + "px";

        cursor.style.top = e.clientY + "px";

        cursorDot.style.left = e.clientX + "px";

        cursorDot.style.top = e.clientY + "px";

    });

    document.querySelectorAll(

        "a,button,.project-card,.skill-card"

    ).forEach(item => {

        item.addEventListener("mouseenter", () => {

            cursor.classList.add("hover");

        });

        item.addEventListener("mouseleave", () => {

            cursor.classList.remove("hover");

        });

    });

}

/*==========================================================
                IMAGE LAZY LOADING
==========================================================*/

const images = document.querySelectorAll("img");

const imageObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const img = entry.target;

            img.loading = "lazy";

            imageObserver.unobserve(img);

        }

    });

});

images.forEach(img => {

    imageObserver.observe(img);

});


/*==========================================================
                CURRENT YEAR
==========================================================*/

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}

/*==========================================================
                CONSOLE MESSAGE
==========================================================*/

console.log(

"%cDesigned & Developed by Hamad Ali",

"color:#4f8cff;font-size:18px;font-weight:bold;"

);


//  new addition

const menuToggle = document.getElementById("menu-toggle");
const mobileNav = document.querySelector(".nav-links");

if (menuToggle && mobileNav) {

    menuToggle.addEventListener("click", () => {

        mobileNav.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (mobileNav.classList.contains("active")) {
            icon.className = "ri-close-line";
        } else {
            icon.className = "ri-menu-line";
        }

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            mobileNav.classList.remove("active");
            menuToggle.querySelector("i").className = "ri-menu-line";

        });

    });

}