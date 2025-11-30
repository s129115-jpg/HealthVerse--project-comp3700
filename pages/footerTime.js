// footerTime.js
document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("welcomeBanner");
    if (!banner) return; 

    const now = new Date();

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    };

    const dateTimeString = now.toLocaleString("en-GB", options);

    banner.textContent = `Welcome to Health Verse | Today is ${dateTimeString}`;
});
