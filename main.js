const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
// Get the scroll-to-top button
const scrollToTopBtn = document.getElementById("scrollToTop");




menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// Scroll event to fix navbar
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 0) {
        nav.classList.add('fixed');
    } else {
        nav.classList.remove('fixed');
    }
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container p", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
    delay: 500,
});

// about container
ScrollReveal().reveal(".about__image img", {
    ...scrollRevealOption,
    origin: "left",
});

ScrollReveal().reveal(".about__content .section__subheader", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".about__content .section__description", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".about__btn", {
    ...scrollRevealOption,
    delay: 2000,
});

// room container
ScrollReveal().reveal(".room__card", {
    ...scrollRevealOption,
    interval: 500,
});

// service container
ScrollReveal().reveal(".service__list li", {
    ...scrollRevealOption,
    interval: 500,
    origin: "right",
});

// Listen for scroll events
window.addEventListener("scroll", () => {
    // Check if near the end of the document
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
});

// Scroll to top on button click
scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});





// Slideshow functionality
// main.js

let currentSlide = 0;
const slides = document.querySelectorAll('.gallery-slide');

function changeSlide(step) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + step + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

// document.addEventListener("DOMContentLoaded", () => {
//     const gallerySection = document.getElementById("gallery");
//     const prevButton = document.querySelector(".prev");
//     const nextButton = document.querySelector(".next");
  
//     function toggleButtonsVisibility() {
//       if (gallerySection && gallerySection.getBoundingClientRect().top <= window.innerHeight) {
//         prevButton.style.display = "block";
//         nextButton.style.display = "block";
//       } else {
//         prevButton.style.display = "none";
//         nextButton.style.display = "none";
//       }
//     }
  
//     window.addEventListener("scroll", toggleButtonsVisibility);
//     toggleButtonsVisibility(); // Check visibility initially
//   });
  

// Function to go to the next slide
// function nextSlide() {
//   currentSlide = (currentSlide + 1) % slides.length;
//   showSlide(currentSlide);
// }

// Initialize the slideshow to change every 3 seconds
// setInterval(nextSlide, 3000);

// Zoom functionality
const overlay = document.getElementById("overlay");
const zoomedImage = document.getElementById("zoomedImage");

// Add click event to each slide for zooming
slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    zoomedImage.src = slide.querySelector("img").src;
    overlay.style.display = "flex";
  });
});

// Close the overlay when clicking outside the image
overlay.addEventListener("click", () => {
  overlay.style.display = "none";
});





document.addEventListener("DOMContentLoaded", function () {
    const text = "Make Yourself At Home";
    const typedText = document.getElementById("typed-text");
    let index = 0;
    let isDeleting = false;
    
    function type() {
        if (isDeleting) {
            typedText.innerHTML = text.substring(0, index--);
            if (index === 0) isDeleting = false;
        } else {
            typedText.innerHTML = text.substring(0, index++);
            if (index === text.length) {
                isDeleting = true;
                setTimeout(type, 2000); // Pause before deleting
                return;
            }
        }
        setTimeout(type, isDeleting ? 100 : 150);
    }
    
    type();
});





// // Get the modal, buttons, and forms
// const authModal = document.getElementById("authModal");
// const closeModalBtn = document.getElementById("close-modal");
// const showLoginBtn = document.getElementById("show-login");
// const showSignupBtn = document.getElementById("show-signup");
// const loginForm = document.getElementById("login-form");
// const signupForm = document.getElementById("signup-form");

// // Show the modal when the page loads or based on your own conditions
// window.onload = () => {
//     authModal.classList.add("show");
// };

// // Close the modal
// closeModalBtn.addEventListener("click", () => {
//     authModal.classList.remove("show");
// });

// // Show the sign-up form
// showSignupBtn.addEventListener("click", () => {
//     loginForm.style.display = "none";
//     signupForm.style.display = "block";
// });

// // Show the login form
// showLoginBtn.addEventListener("click", () => {
//     signupForm.style.display = "none";
//     loginForm.style.display = "block";
// });



document.addEventListener("DOMContentLoaded", function () {
    // Tab Switching Logic
    const personalBtn = document.getElementById("personalBtn");
    const myBizBtn = document.getElementById("myBizBtn");
    const personalForm = document.getElementById("personalForm");
    const myBizForm = document.getElementById("myBizForm");

    // Switch to Personal Account Form
    personalBtn.addEventListener("click", function () {
        personalBtn.classList.add("active-tab");
        myBizBtn.classList.remove("active-tab");
        personalForm.classList.add("active-form");
        myBizForm.classList.remove("active-form");
    });

    // Switch to MyBiz Account Form
    myBizBtn.addEventListener("click", function () {
        myBizBtn.classList.add("active-tab");
        personalBtn.classList.remove("active-tab");
        myBizForm.classList.add("active-form");
        personalForm.classList.remove("active-form");
    });

    // Slideshow logic
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");

    function showSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove("active");
            if (index === slideIndex) {
                slide.classList.add("active");
            }
        });
        slideIndex = (slideIndex + 1) % slides.length;
    }

    showSlides();
    setInterval(showSlides, 3000); // Change slide every 3 seconds
});




document.addEventListener("DOMContentLoaded", function () {
    const modal = document.querySelector(".modal");
    const closeButton = document.querySelector(".close-btn");

    // Close modal on button click
    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Optional: Close modal when clicking outside of modal content
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});





document.addEventListener("DOMContentLoaded", function () {
    const modal = document.querySelector(".modal");
    const closeButton = document.querySelector(".close-btn");
    const continueButtons = document.querySelectorAll(".continue-btn");
    const navLinks = document.querySelector(".nav_btns");

    // Close modal on button click
    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Optional: Close modal when clicking outside of modal content
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Handle login/signup success
    continueButtons.forEach((button) => {
        button.addEventListener("click", function () {
            // Simulate successful login/signup
            const userName = "Hi Noraiz"; // Replace this with the actual user's name after authentication
            
            // Close modal
            modal.style.display = "none";

            // Update navbar
            const userDropdown = document.createElement("li");
            userDropdown.classList.add("dropdown");
            userDropdown.innerHTML = `
                <a href="#" class="dropdown-btn">${userName} ▼</a>
                <ul class="dropdown-menu">
                    <a href="#profile">My Profile</a></li>
                    <a href="#bookings">My Bookings</a></li>
                    <a href="#" id="logout-btn">Log Out</a></li>
                </ul>
            `;

            navLinks.appendChild(userDropdown);

            // Log out functionality
            const logoutBtn = document.getElementById("logout-btn");
            logoutBtn.addEventListener("click", function () {
                userDropdown.remove(); // Remove user dropdown
                modal.style.display = "flex"; // Show login/signup modal again
            });
        });
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const themeSwitch = document.getElementById("theme-switch");
    const body = document.body;

    // Check local storage for the saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.classList.add(savedTheme);
        themeSwitch.checked = savedTheme === "dark-mode";
    }

    // Toggle the theme on switch
    themeSwitch.addEventListener("change", function () {
        if (themeSwitch.checked) {
            body.classList.add("dark-mode");
            body.classList.remove("light-mode");
            localStorage.setItem("theme", "dark-mode"); // Save preference
        } else {
            body.classList.add("light-mode");
            body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light-mode"); // Save preference
        }
    });
});











  


  
  
  

