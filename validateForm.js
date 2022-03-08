function validateForm(form) {
    var numState = getValue('VKNumState');

    if (numState == 0) {

        // Lista de NAMEs de inputs da atividade -> numState
        var inputsIdList = ['user_name', 'user_passowrd'];

        // lista de Referências de inputs da atividade -> numState
        var inputsNamesList = ['User Name', 'User Password'];

        var { numEmptyInputs, message } = emptyInputs(form, inputsIdList, inputsNamesList);

        if (emptyInputs > 0)
            throw message;
    }

}