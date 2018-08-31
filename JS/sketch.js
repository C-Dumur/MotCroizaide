let dico; // contient le dictionnaire (string)
let idCurrentLastLetter = 4; // indice de la dernière lettre du mot recherché
let inputList; //liste des input de lettre

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
}