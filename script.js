// Pre-stored images (replace with your actual image paths or URLs)
const preloadedImages = [
    "images/OG Blue.jpg",
    "images/OG Red.jpg",
    "images/OG Green.jpg",
];

const pickButton = document.getElementById('pickButton');
const imagePreview = document.getElementById('imagePreview');

// Event listener for picking a random image
pickButton.addEventListener('click', () => {
    if (preloadedImages.length === 0) {
        alert('No images available!');
        return;
    }
    const randomIndex = Math.floor(Math.random() * preloadedImages.length);
    const randomImage = preloadedImages[randomIndex];
    displayImage(randomImage);
});

// Function to display an image
function displayImage(imagePath) {
    imagePreview.innerHTML = `<img src="${imagePath}" alt="Random Image">`;
}
