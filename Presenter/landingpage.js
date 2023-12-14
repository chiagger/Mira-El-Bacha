
document.addEventListener('DOMContentLoaded', function () {
    // Your code here

const dropdownIcon = document.getElementById("dropdown-icon");
const sidebar = document.querySelector('.sidebar');
const header = document.querySelector("header");
const dropdownDiv = document.querySelector(".dropdownicon");

dropdownIcon.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    header.classList.toggle("active");
    dropdownDiv.classList.toggle("active");
});


//sidebar redirects
const homeBtn = document.getElementById("home");
const CVBtn = document.getElementById("CV");
const contactBtn = document.getElementById("contact");
const currentPage = window.location.pathname;

homeBtn.addEventListener("click", () => { 
    if (currentPage !== "/index.html") {
        window.location.href = "index.html";
    }
});


CVBtn.addEventListener("click", () => {
    if (currentPage !== "/CV.html") {
        window.location.href = "CV.html";
    }
});

contactBtn.addEventListener("click", () => {
    if (currentPage !== "/contact.html") {
        window.location.href = "contact.html";
    }
});
});


document.addEventListener('DOMContentLoaded', function () {
    // Get all grid items
    const gridItems = document.querySelectorAll('.grid-item');

    // Loop through each grid item
    gridItems.forEach((item) => {
        const slideshow = item.querySelector('.slideshow');
        const images = slideshow.querySelectorAll('img');
        let currentIndex = 0;

        // Function to show the current image and hide others
        function showCurrentImage() {
            images.forEach((image, index) => {
                if (index === currentIndex) {
                    image.style.display = 'block';
                } else {
                    image.style.display = 'none';
                }
            });
        }

        // Function to switch to the next image
        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            showCurrentImage();
        }

        // Function to switch to the previous image
        function prevImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showCurrentImage();
        }

        // Set up click event listeners for navigation buttons
        item.querySelector('.next-btn').addEventListener('click', nextImage);
        item.querySelector('.prev-btn').addEventListener('click', prevImage);

        // Initial display of images
        showCurrentImage();
    });
});
