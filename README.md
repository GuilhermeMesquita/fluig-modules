# fluig-modules

Visto que <em>desenvolvedores Fluig</em> apresentam uma grande dificuldade durante
o desenvolvimento no ciclo de vida de um projeto/produto no inicio de suas carreiras, 
este repositório tem como objetivo disponibilizar uma coleção de modulos e scripts que
irão ajudar no desenvolvimento dentro da plataforma Fluig.

> Validate Form (<a href="./validateForm.js">Veja mais</a>)

<details>
<summary>1. Capturar entradas vazias em inputs</summary>

``` 
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
```

</details>

<details>
<summary>
2. Gera mensagem de entradas vazias em inputs 
</summary>

``` 
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
```
</details>
    


