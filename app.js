/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("mobile-btn");
    const menu = document.getElementById("mobile-menu");
    const closeBtn = document.getElementById('mobileMenuClose');

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
    
    // close menu
    closeBtn.addEventListener('click', () => {
        menu.classList.add('max-h-0', 'opacity-0', '-translate-y-2');
        
        // hide fully after animation is over
        setTimeout(() => {
            menu.classList.add('hidden');
        }, 300);
    });

});

function getExcerpt(text, limit = 120) {
    if (text.length <= limit) {
        return text;
    }

    // Cut the string at the limit
    let cut = text.substring(0, limit);

    // Roll back to the last space so we don’t cut mid-word
    const lastSpace = cut.lastIndexOf(" ");

    if (lastSpace > -1) {
        cut = cut.substring(0, lastSpace);
    }

    return cut.trim() + "...";
}

document.querySelectorAll(".excerpt").forEach(el => {
    const fullText = el.textContent;
    el.textContent = getExcerpt(fullText, 100); // Adjust character limit
});
