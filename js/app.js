// ------------ Navbar ------------
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


var sidebar = document.querySelector('#sidebar')
var buyBtn = document.querySelector('#buy-btn');

buyBtn.addEventListener('click',()=>{
    sidebar.style.display='block';
})

