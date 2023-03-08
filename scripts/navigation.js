const menuButton = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (typeof onIndex == 'undefined') {
    var onIndex;
}
let mediaQueryInfo540 = window.matchMedia("(max-width: 540px)");
window.addEventListener('resize', () => {
    // check if media query condition is met
    if (!mediaQueryInfo540.matches) {
        navLinks.removeAttribute('style');
        navLinks.style.display = 'flex';
    }
});
    
menuButton.addEventListener('click', () => {
    if (menuButton.getAttribute('active') == 'false') {
        navLinks.removeAttribute('style');
        navLinks.style.display = 'flex';
        setTimeout(() => {
            navLinks.style.right = '0em';
            menuButton.style.backgroundImage = "url('./resources/images/x-icon.png')";
            menuButton.setAttribute('active', 'true');
            menuButton.setAttribute('aria-expanded', 'true');
        }, 50);
        
    } else {
        navLinks.style.right = '-9em';
        setTimeout(() => {
            navLinks.style.display = 'none';
        }, 300);
        menuButton.style.backgroundImage = "url('./resources/images/hamburger-menu.png')";
        menuButton.setAttribute('active', 'false');
        menuButton.setAttribute('aria-expanded', 'false');
    }
})