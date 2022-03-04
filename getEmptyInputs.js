/*
    Recebe o formulário e uma lista de NAMEs e Referências de inputs
    Verifica se há inputs vazios
    Retorna quantidade de inputs vazios
    Retorna lista/mensagem de inputs vazios
*/

/**
 * 
 * @param {Array} nameList
 * @param {Array} idList
 */


function getEmptyInputs(form, idList, nameList) {
    var emptyInputs = 0;

    var message = 'Os seguintes campos são obrigatórios!\n';

    for (var index = 0; index < nameList.length; index++) {
        if (form.getValue(idList[index]) == '') {
            emptyInputs++;
            message += (index + 1) + ' - ' + nameList[index] + '.\n';
        }

    }

    return { emptyInputs, message }
}