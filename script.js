// Pre-stored images (replace with your actual image paths or URLs)
const preloadedImages = [
    "images/OG Blue.jpg",
    "images/OG Red.jpg",
    "images/OG Green.jpg",
];

const pickButton = document.getElementById('pickButton');
const imagePreview = document.getElementById('imagePreview');
const message = document.getElementById('message');

// Event listener for picking a random image
pickButton.addEventListener('click', () => {
    if (preloadedImages.length === 0) {
        alert('No images available!');
        return;
    }
    const randomIndex = Math.floor(Math.random() * preloadedImages.length);
    const randomImage = preloadedImages[randomIndex];
    displayImage(randomImage);
    message.textContent = `Congrats! You have gotten this image: ${randomImage.split('/').pop()}`;
});

// Function to display an image
function displayImage(imagePath) {
    imagePreview.innerHTML = `<img src="${imagePath}" alt="Random Image">`;
}
