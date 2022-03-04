# fluig-modules

Visto que <em><strong>desenvolvedores Fluig</strong></em> apresentam uma grande dificuldade durante
o desenvolvimento no ciclo de vida de um projeto/produto no inicio de suas carreiras, 
este repositório tem como objetivo disponibilizar uma coleção de modulos e scripts que
irão <em><strong>aumentar a sua produtividade no desenvolvimento dentro da plataforma Fluig</strong></em>.

> Validate Form

<details>
<summary>1. Capturar entradas vazias em inputs</summary>

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

</details>

<details>
<summary>
2. Gerar mensagem de entradas vazias em inputs 
</summary>

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
</details>

<details>
<summary>
3. Exemplo de uso no validateForm.js
</summary>

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
</details>
    