const imageInput = document.getElementById('imageInput');
const pickButton = document.getElementById('pickButton');
const imagePreview = document.getElementById('imagePreview');

let images = [];

imageInput.addEventListener('change', (event) => {
    images = Array.from(event.target.files); // Store selected files
});

pickButton.addEventListener('click', () => {
    if (images.length === 0) {
        alert('Please upload some images first!');
        return;
    }
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    displayImage(randomImage);
});

function displayImage(imageFile) {
    const reader = new FileReader();
    reader.onload = (e) => {
        imagePreview.innerHTML = `<img src="${e.target.result}" alt="Random Image">`;
    };
    reader.readAsDataURL(imageFile);
}
