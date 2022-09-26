// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()
let current = new Date(); //Fonction pour creer une horloge = (base sur le 01/01/1970 en Milieme de secondes)

//Stocker l'heure , minute , seconde  dans des varaiables
let heures = current.getHours();
let minutes = current.getMinutes();
let secondes = current.getSeconds();

// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré
let rotationHeures = 30 * heures + (30 / 60) * minutes + (30 / 3600) * secondes;
let rotationMinutes = 6 * minutes + (6 / 60) * secondes;
let rotationSecondes = 6 * secondes;

// Déplacer les aiguilles
function demarrerLaMontre() {
  rotationHeures += 30 / 3600;
  rotationMinutes += 6 / 60;
  rotationSecondes += 6;

  AIGUILLEHR.style.transform = `rotate(${rotationHeures}deg)`;
  AIGUILLEMIN.style.transform = `rotate(${rotationMinutes}deg)`;
  AIGUILLESEC.style.transform = `rotate(${rotationSecondes}deg)`;
}
// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);
