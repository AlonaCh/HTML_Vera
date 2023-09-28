const backButton = document.querySelector('#backToTop');

const getToTop = () => {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}



backButton.addEventListener('clock', getToTop);