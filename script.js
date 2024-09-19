<<<<<<< HEAD
=======
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
    "Montez le son et dansez, sautez, remuez... Bougez!",
    "Partagez aussi souvent que possible. Cuisinez, des lectures...",
    " Etre capable de trouver sa joie dans la joie des autres : voilà le secret du bonheur",
    "Notez chaque jour, pendant 1 semaine, l'équivalent positif de chacune de vos pensées négatives",
    "Osez réaliser quelque chose que vous n'avez jamais fait, juste pour voir",
    "Certaines personnes placeront des pierres sur votre chemin. C'est à vous de décider ce que vous en ferez : un mur ou un pont",
    
];
>>>>>>> 44af42e555737aa760cd9149ad791270deda7424

async function fetchPhrases() {
  const response = await fetch('phrases.json');
  const phrases = await response.json();
  return phrases;
}

function generateCalendar() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const lastDay = new Date(year, month + 1, 0).getDate();
  const calendarBody = document.getElementById('calendar');

  let day = 1;
  let row = document.createElement('tr');

  // Ajuster le décalage pour que le premier jour corresponde au bon jour de la semaine
  const adjustedFirstDay = (firstDay === 0) ? 6 : firstDay - 1;  // Ajuster pour que lundi soit le premier jour (0 devient 6)
  
  for (let i = 0; i < 7; i++) {
    if (i < adjustedFirstDay) {
      const emptyCell = document.createElement('td');
      emptyCell.classList.add('empty');
      row.appendChild(emptyCell);
    } else {
      const cell = document.createElement('td');
      cell.textContent = day;
      cell.classList.add('calendar-day');
      cell.setAttribute('data-day', day);
      cell.addEventListener('click', showPhrase);
      row.appendChild(cell);
      day++;
    }
  }
  calendarBody.appendChild(row);

  // Ajouter les jours restants
  while (day <= lastDay) {
    row = document.createElement('tr');
    for (let i = 0; i < 7; i++) {
      if (day > lastDay) {
        const emptyCell = document.createElement('td');
        emptyCell.classList.add('empty');
        row.appendChild(emptyCell);
      } else {
        const cell = document.createElement('td');
        cell.textContent = day;
        cell.classList.add('calendar-day');
        cell.setAttribute('data-day', day);
        cell.addEventListener('click', showPhrase);
        row.appendChild(cell);
        day++;
      }
    }
    calendarBody.appendChild(row);
  }

  // Afficher la date actuelle
  const currentDate = document.getElementById('currentDate');
  const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
  currentDate.textContent = `Mois : ${monthNames[month]} ${year}`;
}

async function showPhrase() {
  const phrases = await fetchPhrases();
  const randomIndex = Math.floor(Math.random() * phrases.length);
  const randomPhrase = phrases[randomIndex];
  document.getElementById('popupText').textContent = randomPhrase;
  document.getElementById('popupForm').style.display = 'block';
}

function closeForm() {
  document.getElementById('popupForm').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', generateCalendar);

// raccourci des jour responsive

// Fonction pour adapter le texte en fonction de la taille de l'écran
function updateDayNames() {
  const dayNames = document.querySelectorAll('.day-name');

  // Si l'écran est petit (moins de 600px), afficher les abréviations
  if (window.innerWidth <= 600) {
    dayNames[0].textContent = "Lu";
    dayNames[1].textContent = "Ma";
    dayNames[2].textContent = "Me";
    dayNames[3].textContent = "Je";
    dayNames[4].textContent = "Ve";
    dayNames[5].textContent = "Sa";
    dayNames[6].textContent = "Di";
  } else {
    // Sinon, afficher les noms complets
    dayNames[0].textContent = "Lundi";
    dayNames[1].textContent = "Mardi";
    dayNames[2].textContent = "Mercredi";
    dayNames[3].textContent = "Jeudi";
    dayNames[4].textContent = "Vendredi";
    dayNames[5].textContent = "Samedi";
    dayNames[6].textContent = "Dimanche";
  }
}

// Mettre à jour les noms des jours lors du chargement initial
document.addEventListener('DOMContentLoaded', updateDayNames);

// Mettre à jour les noms des jours lorsqu'on redimensionne la fenêtre
window.addEventListener('resize', updateDayNames);

//COMPTAGE DES JOURS DU SITE

// Remplacer 'ton-nom-de-compteur' par une clé unique pour ton site
fetch('https://api.countapi.xyz/hit/action-calendar-helper/visits')
.then(response => response.json())
.then(data => {
  document.getElementById('visitsCount').textContent = `Nombre de visites globales : ${data.value}`;
})
.catch(error => {
  console.error('Erreur lors de la récupération du compteur de visites :', error);
});
