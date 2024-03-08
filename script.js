const phrases = [
    "Réfléchis à 3 choses pour lesquelles tu peux te réjouir pour cette année",
    "Prends le temps d’être attentionné envers toi-même",
    "Sème la joie autour de toi en faisant des choses attentionnées pour les autres",
    "Fais la liste des choses pour lesquelles tu es reconnaissant et explique pourquoi",
    "Bouge ! Pratique une activité physique (idéalement en extérieur)",
    "Trouve quelque chose de positif à dire à chaque personne que tu rencontres aujourd’hui",
    "Prends 10 minutes pour rester assis et pour simplement respirer",
    "Cherche en chacun de ce qu’il y a de meilleur et remarque leurs points forts",
    "Apprends quelque chose de nouveau puis partage ton expérience",
    "Remercie 3 personnes en leurs expliquant pourquoi",
    "Discute de façon amicale avec un inconnu",
    "Eteins tout appareil électronique deux heures avant de te coucher",
    "Soi aimable envers toi-même quand tu fais une erreur",
    "Prends un chemin différent aujourd’hui et note ce que tu vois",
    "Change de perspective par rapport à un souci et essaie de t’en détacher",
    "Sors et fait attention à 5 belles choses",
    "Nourris-toi vraiment sainement aujourd’hui",
    "Fais bouger les choses pour une bonne cause",
    "Reprends contact avec un ancien ami qui te manque",
    "Va au lit de bonne heure pour vraiment recharger tes batteries",
    "Fais un petit pas en avant dans la direction d’un but qui t’est important",
    "Essaye quelque chose de nouveau afin d’élargir ta zone de confort",
    "Décide de motiver les autres plutôt que de les décourager",
    "Fais quelque chose de joyeux et encourage les autres à y participer aussi",
    "Mets tes appareils électroniques de côté et concentre-toi vraiment sur ceux qui t’entourent",
    "Dis bonjour à un voisin et fais un peu mieux connaissance",
    "Challenge tes idées négatives en cherchant le positif",
    "Compte combien de personnes tu peux faire sourire aujourd’hui",
    "Mets à profit un de tes points forts d’une nouvelle façon",
    "Demande autour de toi ce qui leur a apporté du plaisir récemment",
    "Ecris les espoirs et les plans que tu as pour le futur",
];

const calendar = document.getElementById('calendar');
const prevMonthBtn = document.getElementById('prevMonth');
const nextMonthBtn = document.getElementById('nextMonth');
const yearDisplay = document.querySelector('.year');

let currentMonth = 2; // Mars
let currentYear = 2024;

function fillCalendar(month, year) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startingDay = new Date(year, month, 1).getDay();

    calendar.innerHTML = '';

    for (let i = 0; i < startingDay; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.classList.add('month');
        calendar.appendChild(emptyDay);
    }

    for (let i = 1; i <= daysInMonth; i++) {
        const day = document.createElement('div');
        day.classList.add('month', 'day');
        day.textContent = i;
        day.setAttribute('data-phrases', phrases[Math.floor(Math.random() * phrases.length)]);
        calendar.appendChild(day);
    }

    updateYearAndMonth(month, year);
}

fillCalendar(currentMonth, currentYear);

function updateYearAndMonth(month, year) {
    const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    yearDisplay.textContent = year + ' - ' + months[month];
}

prevMonthBtn.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    fillCalendar(currentMonth, currentYear);
});

nextMonthBtn.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    fillCalendar(currentMonth, currentYear);
});

calendar.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('day')) {
        const phraseContainer = document.getElementById('phraseContainer');
        phraseContainer.classList.remove('hidden');

        const phraseContent = document.getElementById('phraseContent');
        phraseContent.textContent = e.target.getAttribute('data-phrases');

        document.body.classList.add('blur-background');
    }
});

calendar.addEventListener('click', (e) => {
    if (e.target.classList.contains('day')) {
        const randomPhrase = e.target.getAttribute('data-phrases');
        alert(randomPhrase);
    }
});
