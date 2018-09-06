
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