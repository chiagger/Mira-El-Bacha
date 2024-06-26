const titles = [
  "PVC Real Estate",
  "Datura Daydreams",
  "Rise Like Water",
  "Morning After",
  "Fragile",
];
const credits = [
  "directed by Holly Hunter",
  "directed by Jonah Garrett-Bannister",
  "directed by Jonah Garrett-Bannister",
  "directed by Saoirse D. Byrne",
  "directed by Laura Esteban",
];
const briefPlot = [
  "A music video for the song PVC Real Estate by Shelf Lives.",
  "Sam is bored of hookup culture, and while trying to find the balance between superficial appearance and genuine attraction he discovers an escape: an ugly thorned flower where he convinces himself the man of his dreams resides.",
  "Lena comes across a group of nomads in London who help her come to terms with her troubled past by connecting her to spirit and balance. By turning her back on the establishment, she ultimately sees her connection to the natural world and learns the need to fight for it.",
  "Three queer friends make their way home from a night out. Throughout the film, they will question their own self-censorship, and the place in which it is coming from – is it out of fear, embarrassment, self-preservation, or a combination of the three? And how can we liberate ourselves from this judgment not only from others but from ourselves, and become comfortable in being unapologetically queer?",
  "A music video for the song Fragile by Noor Mandviwalla.",
];

document.addEventListener("DOMContentLoaded", function () {
  const dropdownIcon = document.getElementById("dropdown-icon");
  const sidebar = document.querySelector(".sidebar");
  const header = document.querySelector("header");
  const dropdownDiv = document.querySelector(".dropdownicon");

  dropdownIcon.addEventListener("click", () => {
    sidebar.classList.toggle("active");
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

document.addEventListener("DOMContentLoaded", function () {
  // Get all grid items
  const gridItems = document.querySelectorAll(".grid-item");

  // Loop through each grid item
  gridItems.forEach((item, index) => {
    const slideshow = item.querySelector(".slideshow");
    const images = slideshow.querySelectorAll("img");
    let currentIndex = 0;

    // Function to show the current image and hide others
    function showCurrentImage() {
      images.forEach((image, i) => {
        if (i === currentIndex) {
          image.style.display = "block";
        } else {
          image.style.display = "none";
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
    item.querySelector(".next-btn").addEventListener("click", (event) => {
      event.stopPropagation(); // Prevent the click from reaching the grid item
      nextImage();
    });

    item.querySelector(".prev-btn").addEventListener("click", (event) => {
      event.stopPropagation(); // Prevent the click from reaching the grid item
      prevImage();
    });

    item.addEventListener("click", (event) => {
      // Check if the click was on the navigation buttons
      const isNavButtonClick =
        event.target.classList.contains("next-btn") ||
        event.target.classList.contains("prev-btn");

      if (!isNavButtonClick) {
        openPopup(images, currentIndex, index);
      }
    });

    // Initial display of images
    showCurrentImage();
  });
});

function openPopup(images, currentIndex, gridItemIndex) {
  const popup = document.getElementById("popup");
  const imagesPopup = images;
  const nextBtn = popup.querySelector(".next-btn-popup");
  const prevBtn = popup.querySelector(".prev-btn-popup");

  let currentPopupIndex = currentIndex;

  //let filmNr;

  function showCurrentPopupImage() {
    const activePopup = document.querySelector(".active-popup");
    imagesPopup.forEach((image, index) => {
      if (index === currentPopupIndex) {
        activePopup.src = image.src;
        image.style.display = "block";
        setImageInfo(gridItemIndex);
      } else {
        image.style.display = "none";
      }
    });
  }

  function setImageInfo(gridItemIndex) {
    const popupInfo = document.querySelector(".popup-info");
    popupInfo.querySelector("h2").textContent = titles[gridItemIndex];
    popupInfo.querySelector("h4").textContent = credits[gridItemIndex];
    popupInfo.querySelectorAll("p")[0].textContent = briefPlot[gridItemIndex];
  }

  function nextPopupImage() {
    currentPopupIndex = (currentPopupIndex + 1) % images.length;
    showCurrentPopupImage();
  }

  function prevPopupImage() {
    currentPopupIndex = (currentPopupIndex - 1 + images.length) % images.length;
    showCurrentPopupImage();
  }

  nextBtn.addEventListener("click", nextPopupImage);
  prevBtn.addEventListener("click", prevPopupImage);

  showCurrentPopupImage();

  popup.style.display = "flex";
}

function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
}
