const dropdownIcon = document.getElementById("dropdown-icon");
const sidebar = document.querySelector('.sidebar');
const header = document.querySelector("header");

dropdownIcon.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    header.classList.toggle("active");
});

