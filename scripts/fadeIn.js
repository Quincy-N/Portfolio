const sections = document.querySelectorAll('section');
let sectionChildren = [];
for (let section of sections) {
    for (let i = 0; i < section.children.length; i++)
    sectionChildren.push(section.children[i]);
}
const sectionObserver = new IntersectionObserver(function(entries, sectionObserver) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            sectionObserver.unobserve(entry.target);
        }
    })
}, {threshold: 0, rootMargin: '0px 0px -250px 0px'});

for (let sectionChild of sectionChildren) {
    sectionObserver.observe(sectionChild);
}