function validateForm(form) {
    var numState = getValue('WKNumState');

    if (numState == 0) {

        // Lista de NAMEs/IDs de inputs da atividade -> numState
        var nameInputList = ['user_name', 'user_passowrd'];

        // lista de Referências (labels) de inputs da atividade -> numState
        var referenceInputList = ['User Name', 'User Password'];

        var { numEmptyInputs, message } = emptyInputs(form, nameInpuyList, referenceInputList);

        if (numEmptyInputs > 0)
            throw message;
    }

}