// Contient les fonctions relative à la recherche de mots dans le dico

/**
 * Transforme une chaine de caractère venant de l'utilisateur en regex
 * Exemple : "A..B" deviendra "A.{2}B"
 * @param {string} input chaine à convertir
 * @returns {string}
 */
function inputToRegex(input) {
    let unknow = false; // lettre connue par l'utilisateur
    let cptUnknow = 0; // nombre de lettre inconnue à la suite
    let res = "";

    for (let i = 0; i < input.length; i++) {
        if (input[i] === '.') {
            // La lettre est inconnue
            if (!unknow) {
                unknow = true;
                cptUnknow = 1;
            } else {
                cptUnknow += 1;
            }
        } else {
            // La lettre est connue
            if (unknow) {
                // On assigne a la regex le nombre de jetons
                res += '.{' + cptUnknow + '}';
                unknow = false;
            }
            res += input[i];
        }
    }
    // Si la dernière lettre est inconnue, on ajoute la fin de l'expression 
    if (unknow) {
        res += '.{' + cptUnknow + '}';
    }
    return res;
}

/**
 * Prépare la regex pour être utilisée dans dans new RegExp
 * @param {string} regex la regex à préparer
 */
function prepareRegex(regex) {
    return '\\n' + regex + '\\n';
}