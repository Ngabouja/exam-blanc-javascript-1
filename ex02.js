let nom = window.prompt("saisir");

function afficherNom(prenom) {
	if (prenom == "philippe") {
		return "Philippe ! Je sais où tu te caches !";
	} else {
		return "Bonjour " + prenom;
	}
}

let resultat = afficherNom(nom);

console.log(resultat);
