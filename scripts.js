document.getElementById('instagram-icon').addEventListener('click', function() {
    window.open('https://www.instagram.com/bijina.neupaney_/', '_blank');
});

document.getElementById('facebook-icon').addEventListener('click', function() {
    window.open('https://www.facebook.com/bijinaneupane', '_blank');
});

document.getElementById('github-icon').addEventListener('click', function() {
    window.open('https://github.com/Bijinaneupane', '_blank');
});

// Toggle Dark Mode
const toggleSwitch = document.getElementById('toggle-switch');
const body = document.body;

toggleSwitch.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

const menuBtn = document.getElementById('menu-btn');
const navMenu = document.querySelector('.navmenu ul');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Add animations using Typed.js or any other library
const typedText = document.querySelector('.typedText');

new Typed(typedText, {
    strings: ['Bijina Neupane', 'Literature Enthusiast'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});
