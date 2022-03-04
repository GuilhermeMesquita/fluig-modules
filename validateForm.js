function validateForm(form) {
    var numState = getValue('VKNumState');

    if (numState == 0) {

        // Lista de IDs de inputs da atividade -> numState
        var inputsIdList = ['user_name', 'user_passowrd'];
        
        // lista de NAMEs de inputs da atividade -> numState
        var inputsNamesList = ['User Name', 'User Password'];

        // captura entradas vazias do formulário na atividade -> numState
        var emptyInputs = getEmptyInputs(form, inputsIdList);

        // gera/exibe mensagem ao usuario
        if (emptyInputs > 0)
            throw generateMessageEmptyInputs(form, inputsIdList, inputsNamesList);
    }

}