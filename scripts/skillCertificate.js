const skills = document.querySelectorAll('.skill-list-item');
const eyeIcon = document.getElementById('eye');
const certificate = document.getElementById('certificate');
const certificates = [
    {id: 'angular-js', source: './resources/images/angular.png'},
    {id: 'async-javascript', source: './resources/images/async-javascript.png'},
    {id: 'bootstrap', source: './resources/images/bootstrap.png'},
    {id: 'building-javascript-sites', source: './resources/images/building-interactive-javascript-sites.png'},
    {id: 'code-foundations', source: './resources/images/code-foundations.png'},
    {id: 'css', source: './resources/images/css.png'},
    {id: 'devops', source: './resources/images/devops.png'},
    {id: 'express', source: './resources/images/express.png'},
    {id: 'git-github', source: './resources/images/git-github.png'},
    {id: 'html', source: './resources/images/html.png'},
    {id: 'intermediate-javascript', source: './resources/images/intermediate-javascript.png'},
    {id: 'java', source: './resources/images/java.png'},
    {id: 'java-oop', source: './resources/images/java-object-oriented-programming.png'},
    {id: 'javascript', source: './resources/images/javascript.png'},
    {id: 'node', source: './resources/images/node.png'},
    {id: 'node-sqlite', source: './resources/images/node-sqlite.png'},
    {id: 'react', source: './resources/images/react.png'},
    {id: 'spring', source: './resources/images/spring.png'},
    {id: 'sql', source: './resources/images/sql.png'},
    {id: 'typescript', source: './resources/images/typescript.png'},
    {id: 'vue', source: './resources/images/vue.png'}
]
let courseName = 'Angular JS 1.X';
let mediaQueryInfo750 = window.matchMedia("(max-width: 750px)");
//display certificate to match the skill and move certificate to stay near the skill element
for (let skill of skills) {
    skill.addEventListener('mouseover', () => {
        if (eyeIcon.parentElement != skill) {
            courseName = skill.innerHTML;
        }
        let firstSkillY = skills[0].getBoundingClientRect().y;
        eyeIcon.parentElement.setAttribute('in-view', false);
        skill.append(eyeIcon);
        skill.setAttribute('in-view', true);
        let targetCertificate = certificates.filter(item => {
            if (item.id == skill.getAttribute('id')) {
                return true;
            }
        });
        certificate.setAttribute('src', targetCertificate[0].source);
        certificate.setAttribute('alt', `Codecademy certificate of completion for ${courseName} course`);
        if (!mediaQueryInfo750.matches) {
            let skillY = skill.getBoundingClientRect().y;
            certificate.style.transform = `translateY(${(skillY - firstSkillY)/1.8}px)`;
        }
    });
    skill.addEventListener('click', () => {
        if (eyeIcon.parentElement != skill) {
            courseName = skill.innerHTML;
        }
        let firstSkillY = skills[0].getBoundingClientRect().y;
        eyeIcon.parentElement.setAttribute('in-view', false);
        skill.append(eyeIcon);
        skill.setAttribute('in-view', true);
        let targetCertificate = certificates.filter(item => {
            if (item.id == skill.getAttribute('id')) {
                return true;
            }
        });
        certificate.setAttribute('src', targetCertificate[0].source);
        certificate.setAttribute('alt', `Codecademy certificate of completion for ${courseName} course`);
        if (!mediaQueryInfo750.matches) {
            let skillY = skill.getBoundingClientRect().y;
            certificate.style.transform = `translateY(${(skillY - firstSkillY)/1.8}px)`;
        }
    });
}