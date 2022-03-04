/*
    Recebe o formulário e uma lista de IDs de inputs
    Verifica se há inputs vazios
    Retorna o número de inputs vazios
*/

/**
 * 
 * @param {Array} idList
 */

function getEmptyInputs(form, idList) {
    var emptyInputs = 0;

    for (var index = 0; index < idList.length; index++) {
        if (form.getValue(idList[index]) == '')
            emptyInputs++
    }

    return emptyInputs;
}