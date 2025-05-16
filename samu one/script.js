const section = document.getElementById("background-section");

// Array of background images
const images = [
  "https://i.ibb.co/qdNYG0P/image1.jpg",
  "https://i.ibb.co/3mSynTt/image2.jpg"
];

let currentIndex = 0;

// Function to swap background images
function swapBackgroundImage() {
  section.style.backgroundImage = `url(${images[currentIndex]})`;
  currentIndex = (currentIndex + 1) % images.length;
}

// Initial background set
swapBackgroundImage();

// Change background every 5 seconds
setInterval(swapBackgroundImage, 5000);
