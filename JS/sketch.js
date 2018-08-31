let dico; // contient le dictionnaire (string)
let idCurrentLastLetter = 4; // indice de la dernière lettre du mot recherché
let inputList; // liste des input de lettre

function preload() {
    dico = loadStrings('JS/liste_fr.txt');
}

function setup() {
    noCanvas();
    dico = join(dico, '\n');

    inputList = select('#inputList');

    // Ajouter lettre
    let addBtn = select('#addLetterButton');
    addBtn.mouseClicked(addLetter);

    // Supprimer lettre
    let deleteBtn = select('#deleteLetterButton');
    deleteBtn.mouseClicked(deleteLetter);

    // Valider la recherche
    let searchBtn = select("#searchBtn");
    searchBtn.mouseClicked(search);
}

/**
 * Récupère les information saisies dans les inputs
 * Effectue la recherche de mots correspondant dans le dico
 * Affiche les 12 premiers résultats
 * 
 */
function search() {
    // Récupération des inputs
    let letters = selectAll('.letter')
    let value;
    let valRegex = ""

    // Formatage de l'input pour etre utilsé par la fonction inputToRegex
    for (let i = 0; i < letters.length; i++) {
        value = letters[i].value();
        if (value == "") {
            value = "."
        }
        else {
            value = value.toLowerCase();
        }
        valRegex += value;
    }


    let regex = prepareRegex(inputToRegex(valRegex));
    maRegex = new RegExp(regex, "g");
    let array_res = dico.match(maRegex);

    // Création de la div d'affichage des résultats
    let div = createDiv('Liste de mot possibles');
    div.attribute('id', 'res');


    let liste = createElement('ul');

    let indice_last_word = 12;
    let word;

    if (array_res.length <= 12) {
        let indice_last_word = array_res.length;
    }

    for (let i = 0; i < indice_last_word; i++) {
        // Creation d'element de liste
        word = array_res[i].replace('\n', '');
        liste.child(createElement('li', word));
    }

}