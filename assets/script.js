const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Sélectionner les éléments HTML pertinents
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

// Ajouter un événement de click à la flèche gauche
leftArrow.addEventListener("click", function (event) {
	console.log ("click sur la flèche de gauche")
});

// Ajouter un événement de click à la flèche droite
rightArrow.addEventListener("click", function (event) {
	console.log ("click sur la flèche de droite")
});