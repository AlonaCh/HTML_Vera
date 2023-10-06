const backButton = document.querySelector('#backToTop');
const mobileButton = document.querySelector('.mobMenu');
const navMenu = document.querySelector('nav ul');
const navMenuItems = document.querySelectorAll('nav ul li a');
const header = document.querySelectorAll('header');

//onscroll event triger
window.onscroll = function()
{scrollFunction()};
// code form W3S about scrolling, for two browsers
function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      backButton.style.display = "block";
    } else {
      backButton.style.display = "none";
    }
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      header.classList.add('top')
    } else {
      header.classList.remove('top')
    }
  }

const getToTop = () => {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}
const mobileMenu = () => {
    for (const item of navMenuItems) {
        item.addEventListener('click', mobileMenu) // function is calling itself
    }
if (navMenu.classList.contains('responsive')) {
    navMenu.classList.remove('responsive')
} else {
    navMenu.classList.add('responsive')
}
}

backButton.addEventListener('click', getToTop);
mobileButton.addEventListener('click', mobileMenu);