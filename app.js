/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("mobile-btn");
    const menu = document.getElementById("mobile-menu");

    btn.addEventListener("click", () => {
        // Toggle visibility
        menu.classList.toggle("hidden");

        // Animate height
        if (menu.classList.contains("hidden")) {
            menu.style.maxHeight = "0";
            menu.style.opacity = "0";
            menu.style.transform = "translateY(-10px)";
        } else {
            menu.style.maxHeight = menu.scrollHeight + "px";
            menu.style.opacity = "1";
            menu.style.transform = "translateY(0)";
        }
    });
});
