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

document.addEventListener('DOMContentLoaded', function () {
    const resumeImage = document.getElementById('resumeImage');
    resumeImage.addEventListener('click', function () {
        if (resumeImage.src.includes('resume2000.jpg')) {
            resumeImage.src = 'resume2_2000.jpg';
            changeHeadingColor('lightpink'); 
        } else {
            resumeImage.src = 'resume2000.jpg';
            changeHeadingColor('orchid'); 
        }
    });
});

function changeHeadingColor(color) {
    let heading = document.querySelector('h1'); //DOM query. select heading 
    heading.style.color = color; 
}
