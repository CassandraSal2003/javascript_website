function collapseMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
}

document.addEventListener('DOMContentLoaded', function () {
    collapseMenu();
});



