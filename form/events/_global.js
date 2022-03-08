/*
    Recebe o formulário e uma lista de NAMEs e Referências de inputs
    Verifica se há inputs vazios
    Retorna quantidade de inputs vazios
    Retorna lista/mensagem de inputs vazios
*/

/**
 * 
 * @param {Array} nameList
 * @param {Array} referenceList
 */


 function emptyInputs(form, nameList, referenceList) {
    var numEmptyInputs = 0;


    var message = 'Os seguintes campos são obrigatórios!\n';

    for (var index = 0; index < nameList.length; index++) {
        if (form.getValue(nameList[index]) == '') {
            numEmptyInputs++;
            message += (index + 1) + ' - ' + String(referenceList[index]).toUpperCase() + '.\n';
        }

    }

    return { 
        numEmptyInputs: numEmptyInputs, 
        message: message 
    }
}