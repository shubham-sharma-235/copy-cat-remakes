// ------------ Navbar ------------
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


var sidebar = document.querySelector('#sidebar')
var buyBtn = document.querySelector('#buy-btn');

var remakeDescriptionSection = document.querySelector('.remake-description');

buyBtn.addEventListener('click',()=>{
    sidebar.style.display = 'block';
    remakeDescriptionSection.style.display = 'none';
})
