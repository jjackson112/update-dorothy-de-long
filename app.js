/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    const showMenuItems = document.getElement(".menu-list");
    if (showMenuItems.style.display === "block") {
      showMenuItems.style.display = "none";
    } else {
      showMenuItems.style.display = "block";
    }
  }