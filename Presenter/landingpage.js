
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
const aboutBtn = document.getElementById("about");
const CVBtn = document.getElementById("CV");
const contactBtn = document.getElementById("contact");
const currentPage = window.location.pathname;

homeBtn.addEventListener("click", () => { 
    if (currentPage !== "/index.html") {
        window.location.href = "index.html";
    }
});

aboutBtn.addEventListener("click", () => {
    if (currentPage !== "/about.html") {
        window.location.href = "about.html";
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
