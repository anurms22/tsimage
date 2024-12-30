// Pre-stored images (replace with your actual image paths or URLs)
const preloadedImages = [
    "images/Original Blue.jpg",
    "images/Original Red.jpg",
    "images/Original Green.jpg",
    "images/Original Yellow.jpg",
    "images/Sunset.jpg",
    "images/Sunrise Boulevard.jpg",
    "images/Betta Fish.jpg",
    "images/Bright Pink.jpg",
    "images/Ocean Blue.jpg",
    "images/Koi Fish.jpg",
    "images/Betta Fish.jpg",
    "images/Bright Pink.jpg",
    "images/Supernova.jpg",
];

const pickButton = document.getElementById('pickButton');
const imagePreview = document.getElementById('imagePreview');
const message = document.getElementById('message');
const header = document.getElementById('header'); // Grab the header element
const splashImage = document.getElementById('splashImage');

// Event listener for picking a random image
pickButton.addEventListener('click', () => {
    if (preloadedImages.length === 0) {
        message.textContent = 'No images available!';
        return;
    }
    const randomIndex = Math.floor(Math.random() * preloadedImages.length);
    const randomImage = preloadedImages[randomIndex];
    displayImage(randomImage);
    message.textContent = `Your surprise song outfit is ${randomImage.split('/').pop().replace(/\.[^/.]+$/, "")}!`;

    // Hide the header after the image is selected
    header.style.display = 'none';  // Hide the header

    splashImage.style.display = 'none'; // Remove the splash image after button is clicked
});

// Function to display an image
function displayImage(imagePath) {
    imagePreview.style.display = 'inline-block';  // Make the image box visible
    imagePreview.innerHTML = `<img src="${imagePath}" alt="Random Image">`;
}