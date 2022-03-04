/*
    Recebe o formulário e uma lista de IDs/NAMEs de inputs
    Verifica se há inputs vazios
    Retorna mensagem de inputs vazios com os seus names
*/

/**
 * 
 * @param {Array} nameList
 * @param {Array} idList
 */


function generateMessageEmptyInputs(form, idList, nameList) {
    var message = 'Os seguintes campos são obrigatórios!\n';

    for (var index = 0; index < nameList.length; index++) {
        if (form.getValue(idList[index]) == '')
            message += (index + 1) + ' - ' + nameList[index] + '.\n';
    }

    return message;
}