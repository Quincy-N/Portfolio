const otherGreeting =document.getElementById('greeting-other');
const greetings = [
    "A Gutn Tog",
    "Ahoj",
    "Akkam",
    "Allianchu",
    "Aloha",
    "Anyeong Haseyo",
    "Assalam u Alaikum",
    "Ayubowan",
    "Barev",
    "Bongu",
    "Bonjou",
    "Bonjour",
    "Bula",
    "Bunâ",
    "Choum Reap Sor",
    "Ciao",
    "Cześć",
    "Demat",
    "Dia Duit",
    "Dobry Dzień",
    "Dobryj Den",
    "Dumela",
    "G'day",
    "Gamarjoba",
    "Geia (γεια)",
    "Grüezi",
    "Guten tag",
    "Hallå",
    "Hallo",
    "Halló",
    "Halo",
    "Halò",
    "Hei",
    "Henda ho",
    "Hola",
    "Hyālō",
    "Ia Orana",
    "Jambo",
    "Kaixo",
    "Kamusta",
    "Khurumjari",
    "Kia Ora",
    "Kon'nichiwa",
    "Kumusta",
    "Li-hó",
    "Mālō e lelei",
    "Marhabaan",
    "Merhaba",
    "Mingalaba",
    "Moïen",
    "Molweni",
    "Moni",
    "Namaskāra",
    "Namaste",
    "Nde-ewo",
    "Nǐ hǎo",
    "Nóng gō",
    "Ola",
    "Olá",
    "Përshëndetje",
    "Privet",
    "S'mae",
    "Sabaidee",
    "Sain uu",
    "Salaam Aleekum",
    "Salam",
    "Salām",
    "Salam Alaykum",
    "Salama",
    "Salom",
    "Saluton",
    "Sannu",
    "Sata Srī Akāla",
    "Selam",
    "Selamat Pagi",
    "Servus",
    "Shalom",
    "Slav",
    "Sveika",
    "Sveiks",
    "Sveiki",
    "S̄wạs̄dī",
    "Szia",
    "Tālofa",
    "Tashi Delek",
    "Tere",
    "Vanakkam",
    "Xin Chào",
    "Ya'at'eeh",
    "Zdravo"
];
otherGreeting.style.opacity = 1;
setTimeout(() => {
    otherGreeting.style.opacity = 0;
}, 3000);
let i = 1;
setInterval(() => {
    otherGreeting.innerHTML = greetings[i];
    //adjust font-size to avoid wrapping greeting
    if (greetings[i].length > 11) {
        otherGreeting.style.fontSize = 'clamp(2em, 2.5vw + 1em, 5em)'
    } else {
        otherGreeting.style.fontSize = 'clamp(2.5em, 4vw + 1em, 6em)'
    }
    //handle fade in and fade out
    otherGreeting.style.opacity = 1;
    setTimeout(() => {
        otherGreeting.style.opacity = 0;
    }, 3000);
    i++
    if (i === greetings.length) {
        i = 0;
    }
}, 4000);