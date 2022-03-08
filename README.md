# fluig-modules

Visto que <em><strong>desenvolvedores Fluig</strong></em> apresentam uma grande dificuldade durante
o desenvolvimento no ciclo de vida de um projeto/produto no inicio de suas carreiras, 
este repositório tem como objetivo disponibilizar uma coleção de modulos e scripts que
irão <em><strong>aumentar a sua produtividade no desenvolvimento dentro da plataforma Fluig</strong></em>.

> Validate Form

<details>
<summary>1. Capturar entradas vazias em inputs e gera mensagem</summary>

```js 
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
            message += (index + 1) + ' - ' + referenceList[index] + '.\n';
        }

    }

    return { 
        numEmptyInputs: numEmptyInputs, 
        message: message 
    }
}
```
</details>

<details>
<summary>
2. Exemplo de uso no validateForm.js
</summary>

```js
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
```
</details>

> Campos 

<details>
<summary>
1. Atribuir o valor em um campo Zoom (setValue)
</summary>

```js
function setZoomData(instance, value) {
	window[instance].setValue(value);
}

// Exemplo de utilização:
setTimeout(() => {
	setZoomData("zoomFieldName", "newValue");
}, 1000);
```
</details>

    
