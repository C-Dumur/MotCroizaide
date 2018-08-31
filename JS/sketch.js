let dico; // contient le dictionnaire (string)

function preload() {
    dico = loadStrings('JS/liste_fr.txt');
}

function setup() {
    noCanvas();
    dico = join(dico, '\n');
}