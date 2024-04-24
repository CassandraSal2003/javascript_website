let profilePic = document.querySelector(".profilePic"); //DOM query 
profilePic.addEventListener('click', changePic);

function changePic() {
    if (profilePic.src.endsWith('profile1000.jpg')) {
        profilePic.src = 'side_profile.jpg';
        changeHeadingColor('lightpink'); 
    } else {
        profilePic.src = 'profile1000.jpg';
        changeHeadingColor('orchid'); 
    }
}

function changeHeadingColor(color) {
    let heading = document.querySelector('h1'); //DOM query. select heading 
    heading.style.color = color; 
}

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

