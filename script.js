// JavaScript for password-protected download
function checkPassword(event) {
    event.preventDefault();
    const inputPassword = document.getElementById('password').value;
    const correctPassword = "Saharsh-Harshu-2001-2024-2030";

    if (inputPassword === correctPassword) {
        document.getElementById('resume-link').style.display = 'block'; // Show the download link
    } else {
        alert("Incorrect password, please try again.");
    }
}

// Function to open the lightbox with the selected image
function openLightbox(imageSrc) {
   const lightbox = document.getElementById('lightbox');
   const lightboxImg = document.getElementById('lightbox-img');
   lightboxImg.src = imageSrc; // Set the source of the image to display
   lightbox.style.display = 'flex'; // Show the lightbox
}

// Function to close the lightbox
function closeLightbox() {
   const lightbox = document.getElementById('lightbox');
   lightbox.style.display = 'none'; // Hide the lightbox
}
