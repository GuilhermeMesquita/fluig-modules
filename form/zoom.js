/*
    Atribui um valor para o campo Zoom desejado.
*/
function setZoomData(instance, value) {
    window[instance].setValue(value);
}

function setSelectedZoomItem(selectedItem) {
    /* 
    Para verificarmos os valores/propriedades dentro do parâmetro,
    podemos utilizar:

    console.log("setSelectedZoomItem - selectedItem");
    console.log(selectedItem);

    console.log("setSelectedZoomItem - selectedItem.inputId");
    console.log(selectedItem.inputId);
    */

    if (selectedItem.inputId.includes('___')) {/** Se for pai X filho. */
        let input = selectedItem.inputId.split('___');
        let inputIdPaiFilho = input[0];
        let indice = input[1];

        /*
        Descomentar para ver em console o resultado:

        console.log("setSelectedZoomItem - input");
        console.log(input);

        console.log("setSelectedZoomItem - inputIdPaiFilho");
        console.log(inputIdPaiFilho);

        console.log("setSelectedZoomItem - indice");
        console.log(indice);
        */

        if (selectedItem.inputId == "ID_CAMPO_ZOOM_PAI_X_FILHO___" + indice) {
            document.querySelector("#campo").value = selectedItem.id;
        }

    } else {/**Se não for pai X filho. */

        if (selectedItem.inputId == "ID_CAMPO_ZOOM") {
            document.querySelector("#campo").value = selectedItem.id;
        }
        else if (selectedItem.inputId == "ID_CAMPO_ZOOM_2") {
            document.querySelector("#campo2").value = selectedItem.id;
        }
    }
}

function removedZoomItem(removedItem) {
    /*
    Descomentar para ver em console o resultado:

    console.log("removedZoomItem - selectedItem");
    console.log(removedItem);

    console.log("removedZoomItem - selectedItem.inputId");
    console.log(removedItem.inputId);
    */

    if (removedItem.inputId.includes('___')) {/** Se for pai X filho. */
        let input = removedItem.inputId.split('___');
        let inputIdPaiFilho = input[0];
        let indice = input[1];

        if (inputIdPaiFilho == "ID_CAMPO_ZOOM_PAI_X_FILHO") {
            document.querySelector("#campo").value = "";
        }

    } else {/**Se não for pai X filho. */

        if (removedItem.inputId == "ID_CAMPO_ZOOM") {
            document.querySelector("#campo").value = "";
        }
        else if (removedItem.inputId == "ID_CAMPO_ZOOM_2") {
            document.querySelector("#campo2").value = "";
        }
    }
}