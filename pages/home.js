// ============================
// Slideshow for Photo Gallery
// ============================

// slideIndex to track which slide is currently visible
let slideIndex = 0;

// Start the slideshow when the page loads
slideShow();

function slideShow() {
    // Get all elements with class "mySlide"
    let slides = document.getElementsByClassName("mySlide");

    // Hide all slides by adding Bootstrap "d-none" class
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add("d-none");
    }

    // Move to the next slide
    slideIndex++;

    // If slideIndex is greater than the number of slides, reset it to 1
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Show the current slide by removing "d-none"
    slides[slideIndex - 1].classList.remove("d-none");

    // Call slideShow again after 3 seconds (3000 ms)
    setTimeout(slideShow, 3000);
}

// ======================================
// Dynamic Text Banner with Date & Time
// ======================================

function updateBanner() {
    const banner = document.getElementById("welcomeBanner");
    const now = new Date();

    // Convert date/time to readable format
    const dateStr = now.toLocaleDateString();
    const timeStr = now.toLocaleTimeString();

    // Set the text for the moving banner
    banner.textContent =
        "Welcome to Health Verse – Your Guide to Balanced Health. Today is " +
        dateStr + ", and the time is " + timeStr + ".";
}

// Initial call and then update every second
updateBanner();
setInterval(updateBanner, 1000);
