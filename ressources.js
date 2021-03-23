const cards = document.querySelector(".cards");

const expositions = [
  {
    name: "Exposition Peinture et Lumières à Vedène (84) au Château de Fargues",
    picture: "img/expo2.jpg",
    date: "du 27 mars au 12 avril",
    text:"Padawan vous propose de découvrir son art, le light painting. Un lieu sombre, un appareil photo, des pinceaux lumineux, il n'en faut pas plus à ce peintre en lumières pour se mettre à l’œuvre.",
    lienUrl:"https://www.laprovence.com/article/edition-vaucluse/4316537/le-pontet-une-exposition-lightpainting-et-photos-au-chateau-de-fargues.html"
  },
  {
    name: "Exposition Lézard de nuit à Enghien Les Bains (95)",
    picture: "img/lieuexpo6.jpeg",
    date: "du 11 avril au 22 juin",
    text: "Après Moscou et New York le light painting se dévoile à en région Parisienne. Le collectif Light-Painting World Allaince qui fédère des lights painteurs du monde entier, y expose plus de 130 œuvres.",
    lienUrl:"https://www.cda95.fr/fr/la-programmation"
  },
  {
    name: "Exposition Chorégraphies nocturnes à Cannes (06)",
    picture: "img/jadikan.jpg",
    date: "du 14 juin au 16 août",
    text: "Jadikan sort de l'ombre les friches industrielles. L’artiste Isérois a trouvé des décors à la hauteur de son imagination en se rendant sur les centrales hydroélectriques laissés à l’abandon.",
    lienUrl:"https://www.jadikan-lp.com"
  },

];

function createCard(title, imageUrl, date, text, lienUrl) {
  const card = document.createElement("div");
  card.classList.add("card");
  cards.appendChild(card);

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  card.appendChild(cardHeader);

  const cardImg = document.createElement("div");
  cardImg.style.backgroundImage = `url(${imageUrl})`;
  cardImg.classList.add("card-img");
  cardHeader.appendChild(cardImg);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  card.appendChild(cardBody);

  const cardTitle = document.createElement("h2");
  cardTitle.innerHTML = title;
  cardTitle.classList.add("card-title");
  cardBody.appendChild(cardTitle);
  
  const cardDate = document.createElement("h3");
  cardDate.innerHTML = date;
  cardDate.classList.add("card-date");
  cardBody.appendChild(cardDate);
  
  const cardText = document.createElement("p");
  cardText.innerHTML = text;
  cardText.classList.add("card-text");
  cardBody.appendChild(cardText);
  
  const cardButton = document.createElement("a");
  cardButton.href = lienUrl;
  cardButton.textContent = "En savoir plus";
  cardButton.classList.add("card-link");
  cardBody.appendChild(cardButton);
}

for (let i = 0; i < expositions.length; i++) {
  createCard(expositions[i].name, expositions[i].picture, expositions[i].date, expositions[i].text, expositions[i].lienUrl);
}


const cards2 = document.querySelector(".cards2");

const artistes = [
  {
    name: "Jess Blod",
    picture: "https://placekitten.com/200/287"
  },
  {
    name: "Loola",
    picture: "https://placekitten.com/200/139"
  },
  {
    name: "Romain",
    picture: "https://placekitten.com/200/90"
  },
  {
    name: "Patrick",
    picture: "https://placekitten.com/200/194"
  },
  {
    name: "Ben",
    picture: "https://placekitten.com/200/179"
  }
];
function createCard2(title2, imageUrl) {
  const card2 = document.createElement("div");
  card2.classList.add("card2");
  cards2.appendChild(card2);

  const cardHeader2 = document.createElement("div");
  cardHeader2.classList.add("card-header2");
  card2.appendChild(cardHeader2);

  const cardImg2 = document.createElement("div");
  cardImg2.style.backgroundImage = `url(${imageUrl})`;
  cardImg2.classList.add("card-img2");
  cardHeader2.appendChild(cardImg2);

  const cardBody2 = document.createElement("div");
  cardBody2.classList.add("card-body2");
  card2.appendChild(cardBody2);

  const cardTitle2 = document.createElement("h2");
  cardTitle2.innerHTML = title2;
  cardTitle2.classList.add("card-title2");
  cardBody2.appendChild(cardTitle2);

  const cardButton2 = document.createElement("button");
  cardButton2.textContent = "Site web";
  cardButton2.classList.add("card-button2");
  cardBody2.appendChild(cardButton2);
}

for (let j = 0; j < artistes.length; j++) {
  createCard2(artistes[j].name, artistes[j].picture);
}
