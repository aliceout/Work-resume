var sidenav = document.getElementById("navList");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
    sidenav.classList.add("active");
    openBtn.classList.remove("active");
    closeBtn.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    sidenav.classList.remove("active");
    openBtn.classList.add("active");
    closeBtn.classList.remove("active");
}