
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