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
  cardButton.classList.add("card-button");
  cardBody.appendChild(cardButton);
}

for (let i = 0; i < expositions.length; i++) {
  createCard(expositions[i].name, expositions[i].picture, expositions[i].date, expositions[i].text, expositions[i].lienUrl);
}


const cards2 = document.querySelector(".cards2");

const artistes = [
  {
    name: "Jadikan",
    picture: "img/jadikanportrait.jpg",
    residence:"Résidence : Isère",
    logo1Url:"img/facebook.png",
    logo2Url:"img/vimeo.png",
    lienUrllogo1:"https://www.facebook.com/Jadikan-Artist-305532205418/",
    lienUrllogo2:"https://vimeo.com/jadikanlp/",
    lienUrlsiteweb:"https://www.jadikan-lp.com/"
  },
  {
    name: "Chanette Manso",
    picture: "img/chanetteManso.jpg",
    residence:"Résidence : Paris",
    logo1Url:"img/facebook.png",
    logo2Url:"img/youtube.jpeg",
    lienUrllogo1:"https://www.facebook.com/chanette.manso",
    lienUrllogo2:"https://www.youtube.com/channel/UCbHir9SRQCXen4Cpd1PCzlA",
    lienUrlsiteweb:"https://chanettemanso.com/"
  },
  {
    name: "Tim Marsh",
    picture: "img/TimMarsh.jpg",
    residence:"Résidence : Val d’Oise",
    logo1Url:"img/facebook.png",
    logo2Url:"img/youtube.jpeg",
    lienUrllogo1:"https://www.facebook.com/TimMarshArtworks?ref=bookmarks",
    lienUrllogo2:"https://www.youtube.com/watch?v=t2tu4a1-ULs",
    lienUrlsiteweb:"https://www.t-marsh.com/"
  },
  {
    name: "Alexis Pichot",
    picture: "img/alexispichot.jpeg",
    residence:"Résidence : Paris",
    logo1Url:"img/facebook.png",
    logo2Url:"img/insta.jpg",
    lienUrllogo1:"https://www.facebook.com/alexispichotphotographe/",
    lienUrllogo2:"https://www.instagram.com/alexis_pichot/",
    lienUrlsiteweb:"https://www.alexispichot.com/"
  }

];

function createCard2(title2, imageUrl, residence, lienUrlsiteweb, logo1Url, logo2Url, lienUrllogo1, lienUrllogo2) {
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

  const cardLieu2 = document.createElement("p")
  cardLieu2.innerHTML = residence;
  cardLieu2.classList.add("card-lieu2");
  cardBody2.appendChild(cardLieu2);
  
  const cardButton2 = document.createElement("a");
  cardButton2.href = lienUrlsiteweb;
  cardButton2.textContent = "Découvrir ses réalisations";
  cardButton2.classList.add("card-button2");
  cardBody2.appendChild(cardButton2);

  const reseauxSociaux = document.createElement ("div");
  reseauxSociaux.classList.add("reseaux-sociaux")
  cardBody2.appendChild(reseauxSociaux)

  const cardLogo1 = document.createElement ("a");
  cardLogo1.style.backgroundImage = `url(${logo1Url})`;
  cardLogo1.href = lienUrllogo1;
  cardLogo1.classList.add("card-logo1")
  reseauxSociaux.appendChild(cardLogo1)

  const cardLogo2 = document.createElement ("a");
  cardLogo2.style.backgroundImage = `url(${logo2Url})`;
  cardLogo2.href = lienUrllogo2;
  cardLogo2.classList.add("card-logo2")
  reseauxSociaux.appendChild(cardLogo2)

}

for (let j = 0; j < artistes.length; j++) {
  createCard2(artistes[j].name, artistes[j].picture, artistes[j].residence, artistes[j].lienUrlsiteweb, artistes[j].logo1Url, artistes[j].logo2Url, artistes[j].lienUrllogo1, artistes[j].lienUrllogo2);
}
