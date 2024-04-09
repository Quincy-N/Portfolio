const sections = document.querySelectorAll('section');
let sectionChildren = [];
let sectionHeights = [];
let minSectionHeight;
function getMinSectionHeight() {
    for (let i = 0; i < sections.length; i++) {
        sectionHeights.push(sections[i].getBoundingClientRect().height);
}
    for (let i = 1; i < sectionHeights.length; i++) {
        if (sectionHeights[i] < sectionHeights[i-1]) {
            minSectionHeight = sectionHeights[i];
        }
    }
}
getMinSectionHeight();
console.log(minSectionHeight);
for (let section of sections) {
    for (let i = 0; i < section.children.length; i++) {
        sectionChildren.push(section.children[i]);
    }
}
window.addEventListener('resize', () => {
    getMinSectionHeight();
})
const sectionObserver = new IntersectionObserver(function(entries, sectionObserver) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            sectionObserver.unobserve(entry.target);
        }
    })
}, {threshold: 0, rootMargin: `0px 0px -${minSectionHeight/3}px 0px`});

for (let sectionChild of sectionChildren) {
    sectionObserver.observe(sectionChild);
}
