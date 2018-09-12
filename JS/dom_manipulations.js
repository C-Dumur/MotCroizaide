
// contient les actions de manipulation du DOM

/**
 * Créer un objet input pouvant contenir une lettre, doit être ajouter au DOM
 * @param {number} id l'indice de la lettre dans le mot recherché
 * @returns {Object|p5.Element}
 */
function createInputLetter(id) {
    let inp = createInput('');
    inp.attribute('size', 1);
    inp.attribute('maxlength', '1');
    inp.attribute('id', 'l' + id);
    inp.class('letter');
    return inp;
}

/**
 * Ajoute un input de lettre au DOM 
 */
function addLetter() {
    idCurrentLastLetter++;
    let inp = createInputLetter(idCurrentLastLetter);
    inputList.child(inp);
}

/**
 * Supprime le dernier input du mot recherché
 */
function deleteLetter() {
    // On recupère l'id de la dernière lettre
    let idToRemove = '#l' + idCurrentLastLetter;
    let inputToRemove = select(idToRemove);
    inputToRemove.remove();
    idCurrentLastLetter--;
}

/**
 * Efface la liste le contenu de la liste de résultat
 */
function clearResultList() {
    let resDiv = select('#res');
    resDiv.remove();
}

/**
 * Efface la zone de recherche et en créer une nouvelle avec 4 lettres
 * Efface la zone d'affichage des resultats
 */
function reset(){
    if(select('#res')){
        clearResultList();
    }

    let letters = selectAll('.letter');

    for (let i = 0; i < letters.length; i++) {
        letters[i].remove();
    }

    let inp;
    for (let j = 1; j < 5; j++) {
        inp = createInputLetter(j)
        inputList.child(inp);
    }

    idCurrentLastLetter = 4;
}

/**
 * Créer la structure de la div res et renvoie l'objet p5
 * @returns {Object|p5.Element}
 */
function createResultDiv(){

    // Div englobant les résultats
    let res = createDiv();
    res.attribute('id', 'res');

    // Titre de la div
    res.child(createElement('h3', 'Mots trouvés'));

    // Div englobant les résultats
    let row = createDiv();
    row.addClass('row');
    res.child(row);

    // Création des trois colonnes
    for(let i=1; i<=3; i++){
        let col = createDiv();
        col.addClass('col-md-4');
        col.attribute('id', 'col-'+ i);

        let list = createElement('ul');
        list.attribute('id', 'liste-' + i);
        col.child(list);
        row.child(col);
    }

    return res;
}
/**
 * 
 * @param {Array[string]} array_res 
 * Affiche les mot trouvés dans 3 colones de même taille 
 * Si la longuere de la liste n'est pas divisible par 3
 * Les colonne 1 et 2 seront plus longues que la troisieme 
 */
function fillList(array_res){

    let lenArray = array_res.length

    // Les trois colonne contiennent un nombre de mot égal au quotient entier de lenArray par 3
    let nbWorldPerList = Math.trunc(lenArray / 3);
    let rest = lenArray % 3;

    // On créer un tableau contenant la longueur de chaque colonne
    let arrayNbWorldPerList = [nbWorldPerList, nbWorldPerList, nbWorldPerList]

    // Si il y a un reste on ajoute les mots aux colonnes 1 et 2
    if( rest == 1){
        arrayNbWorldPerList[0] ++;
    }else if(rest == 2 ){
        arrayNbWorldPerList[0]++;
        arrayNbWorldPerList[1]++;
    }

    let indiceList = 0; // Indice de la colonne en cours de remplissage
    let tabList =[0,0,0] // longeur actuelle de chaque colonne
    let arrayDOMList = [select('#liste-1'), select('#liste-2'), select('#liste-3')];

    for(let i=0; i<lenArray; i++){
        if(arrayNbWorldPerList[indiceList] == tabList[indiceList]){
            indiceList ++;
        }
        word = array_res[i].replace('\n', '');
        arrayDOMList[indiceList].child(createElement('li', word));
        tabList[indiceList] ++;
    }
}