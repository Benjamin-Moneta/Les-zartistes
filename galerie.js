function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

const grandeImg = document.querySelectorAll(".carte");
const bouton1 = document.querySelectorAll(".bouton1");
const bouton2 = document.querySelectorAll(".bouton2");
const cadre = document.querySelectorAll(".carte section");
let indexImg = 1;
let deplacement = 0;

console.log(cadre);
grandeImg[1].style.transform = "scale(1.2)";
cadre[1].style.display = "flex";

for (let i = 0; i < bouton1.length; i++) {
  bouton1[i].addEventListener("click", function () {
    if (indexImg > 0) {
      indexImg--;

      if (window.matchMedia("(max-width: 414px)").matches) {
        deplacement = deplacement + 96;
      } else {
        deplacement = deplacement + 30;
      }

      for (let i = 0; i < grandeImg.length; i++) {
        grandeImg[i].style.transform = `translateX(${deplacement}vw)`;
      }
      grandeImg[
        indexImg
      ].style.transform = `translateX(${deplacement}vw) scale(1.2)`;
      cadre[indexImg + 1].style.display = "none";
      cadre[indexImg].style.display = "flex";
      grandeImg[indexImg + 1].style.zIndex = "0";
      grandeImg[indexImg].style.zIndex = "100";
    }
  });
}

for (let i = 0; i < bouton2.length; i++) {
  bouton2[i].addEventListener("click", function () {
    if (indexImg < grandeImg.length - 1) {
      indexImg++;
      if (window.matchMedia("(max-width: 414px)").matches) {
        deplacement = deplacement - 96;
      } else {
        deplacement = deplacement - 30;
      }

      for (let i = 0; i < grandeImg.length; i++) {
        grandeImg[i].style.transform = `translateX(${deplacement}vw)`;
      }
      grandeImg[
        indexImg
      ].style.transform = `translateX(${deplacement}vw) scale(1.2)`;
      cadre[indexImg - 1].style.display = "none";
      cadre[indexImg].style.display = "flex";
      grandeImg[indexImg - 1].style.zIndex = "0";
      grandeImg[indexImg].style.zIndex = "100";
    }
  });
}
