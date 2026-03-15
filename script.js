/* ============================================================
   GRIMOIRE — SHARED JAVASCRIPT
   This file runs on every page and handles small behaviors
   that require interactivity beyond what HTML/CSS can do alone.
   ============================================================ */

/* --- DOMContentLoaded ---
   This wraps all our code in a safety check.
   It waits until the full HTML has loaded before running.
   Without this, JS might try to find elements that don't exist yet. */
document.addEventListener("DOMContentLoaded", function () {

    /* =========================================================
       ACTIVE NAV LINK HIGHLIGHTING
       Problem: Every page has the same nav bar. But we want the
       current page's nav link to look different (gold color).
       
       Solution: Check the current URL, find the nav link that
       points to the same URL, and add the "active" class to it.
       ========================================================= */

    /* document.querySelectorAll returns ALL elements matching the CSS selector.
       ".top-nav a" means: every <a> tag inside an element with class "top-nav" */
    const navLinks = document.querySelectorAll(".top-nav a");

    /* window.location.href is the full URL of the current page.
       For example: "https://yourname.github.io/grimoire/topics/systemcraft/index.html" */
    const currentURL = window.location.href;

    /* Loop through every nav link and check if its href is in the current URL */
    navLinks.forEach(function (link) {
        /* link.href is the full URL the link points to */
        if (currentURL.includes(link.getAttribute("href"))) {
            link.classList.add("active");  /* add the "active" CSS class */
        }
    });


    /* =========================================================
       SIDEBAR LINK HIGHLIGHTING
       Same idea, but for the sidebar links.
       ========================================================= */
    const sidebarLinks = document.querySelectorAll(".sidebar a");

    sidebarLinks.forEach(function (link) {
        /* We compare the href attribute directly to the current page's path.
           window.location.pathname is just the path, like "/grimoire/topics/systemcraft/index.html" */
        const linkHref = link.getAttribute("href");
        if (linkHref && window.location.pathname.endsWith(linkHref.replace("../", "").replace("./", ""))) {
            link.classList.add("active");
        }
    });


    /* =========================================================
       FUTURE JAVASCRIPT GOES HERE
       As you add more interactive features — toggles, animations,
       content loaders — add them below with comments explaining what they do.
       ========================================================= */

    /* Example placeholder: 
    
    const myButton = document.getElementById("my-button");
    
    myButton.addEventListener("click", function () {
        // This runs when the button is clicked
        console.log("Button clicked!");
    });
    
    */

    console.log("Grimoire scripts loaded.");

}); // end DOMContentLoaded
