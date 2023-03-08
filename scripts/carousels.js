const carousels = document.querySelectorAll('.carousel');
const leftCarouselNavs = document.querySelectorAll('.image-nav-left');
const rightCarouselNavs = document.querySelectorAll('.image-nav-right');
const indicators = document.querySelectorAll('.image-indicator');
let imageWidth;
for (let carousel of carousels) {
    let carouselImages = carousel.children;
    imageWidth = carouselImages[0].getBoundingClientRect().width;
    for (let i = 0; i < carouselImages.length; i++) {
        carouselImages[i].style.transform = `translateX(${imageWidth * i}px)`;
        carouselImages[i].setAttribute('place', i);
    }
}

for (let imageNavRight of rightCarouselNavs) {
    imageNavRight.addEventListener('click', (e) => {
        let carousel = e.target.parentElement.parentElement.querySelector('.carousel');
        let carouselNav = e.target.parentElement.parentElement.querySelector('.carousel-nav');
        //show left button
        e.target.previousElementSibling.style.visibility = 'visible';
        let carouselImages = carousel.children;
        for (let carouselImage of carousel.children) {
            carouselImage.style.transition = 'transform .25s linear';
        }
        currentImage = carousel.querySelector('[active="true"]');
        currentPlace = Number(currentImage.getAttribute('place'));
        newCurrentImage = currentImage.nextElementSibling;
        imageWidth = currentImage.getBoundingClientRect().width;
        for (let i = 0; i < carouselImages.length; i++) {
            carouselImages[i].style.transform = `translateX(${imageWidth * (i - (currentPlace + 1))}px)`;
        }
        newCurrentImage.setAttribute('active', true);
        currentImage.setAttribute('active', false);
        for (let indicator of carouselNav.children) {
            indicator.setAttribute('active', false);
            if (indicator.getAttribute('place') == newCurrentImage.getAttribute('place')) {
                indicator.setAttribute('active', true);
            }
        }
        if (newCurrentImage.getAttribute('place') == carouselImages.length - 1) {
            e.target.style.visibility = 'hidden';
        }
    });
}

for (let imageNavLeft of leftCarouselNavs) {
    imageNavLeft.addEventListener('click', (e) => {
        let carousel = e.target.parentElement.parentElement.querySelector('.carousel');
        let carouselNav = e.target.parentElement.parentElement.querySelector('.carousel-nav');
        //show right button
        e.target.nextElementSibling.style.visibility = 'visible';
        let carouselImages = carousel.children;
        for (let carouselImage of carousel.children) {
            carouselImage.style.transition = 'transform .25s linear';
        }
        currentImage = carousel.querySelector('[active="true"]');
        currentPlace = Number(currentImage.getAttribute('place'));
        newCurrentImage = currentImage.previousElementSibling;
        imageWidth = currentImage.getBoundingClientRect().width;
        for (let i = 0; i < carouselImages.length; i++) {
            carouselImages[i].style.transform = `translateX(${imageWidth * (i - (currentPlace - 1))}px)`;
        }
        newCurrentImage.setAttribute('active', true);
        currentImage.setAttribute('active', false);
        for (let indicator of carouselNav.children) {
            indicator.setAttribute('active', false);
            if (indicator.getAttribute('place') == newCurrentImage.getAttribute('place')) {
                indicator.setAttribute('active', true);
            }
        }
        if (newCurrentImage.getAttribute('place') == 0) {
            e.target.style.visibility = 'hidden';
        }
    });
}

for (let indicator of indicators) {
    indicator.addEventListener('click', () => {
        let carousel = indicator.parentElement.parentElement.querySelector('.carousel');
        for (let carouselImage of carousel.children) {
            carouselImage.style.transition = 'transform .25s linear';
        }
        let carouselImages = carousel.children;
        let currentImage = carousel.querySelector('[active="true"]');
        imageWidth = currentImage.getBoundingClientRect().width;
        let newPlace = Number(indicator.getAttribute('place'));
        currentImage.setAttribute('active', false);
        for (let i = 0; i < carouselImages.length; i++) {
            carouselImages[i].style.transform = `translateX(${imageWidth * (i - newPlace)}px)`;
            if (carouselImages[i].getAttribute('place') == newPlace) {
                carouselImages[i].setAttribute('active', true);
            }
        }
        indicator.parentElement.querySelector('[active="true"').setAttribute('active', false);
        indicator.setAttribute('active', true);
        if (indicator.getAttribute('place') == 0) {
            carousel.parentElement.querySelector('.image-nav-left').style.visibility = 'hidden';
            carousel.parentElement.querySelector('.image-nav-right').style.visibility = 'visible';
        } else if (indicator.getAttribute('place') == carouselImages.length - 1) {
            carousel.parentElement.querySelector('.image-nav-right').style.visibility = 'hidden';
            carousel.parentElement.querySelector('.image-nav-left').style.visibility = 'visible';
        } else {
            carousel.parentElement.querySelector('.image-nav-left').style.visibility = 'visible';
            carousel.parentElement.querySelector('.image-nav-right').style.visibility = 'visible';
        }

    })
}
// Make carousel responsive so images stay in the right place during window resizing
window.addEventListener('resize', () => {
    for (let carousel of carousels) {
        for (let carouselImage of carousel.children) {
            carouselImage.style.transition = 'transform 0s linear';
        }
        let currentImage = carousel.querySelector('[active="true"]');
        imageWidth = currentImage.getBoundingClientRect().width;
        let place = Number(currentImage.getAttribute('place'));
        let carouselImages = carousel.children;
        for (let i = 0; i < carouselImages.length; i++) {
            carouselImages[i].style.transform = `translateX(${imageWidth * (i - place)}px)`;
        }
    }
})