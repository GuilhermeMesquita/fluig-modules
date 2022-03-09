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

    } else {/**Se não for pai X filho. */

        if (selectedItem.inputId == "ID_CAMPO_ZOOM") {
            document.querySelector("#campo").value = selectedItem.id;
        }
        else if (selectedItem.inputId == "ID_CAMPO_ZOOM_2") {
            document.querySelector("#campo2").value = selectedItem.id;
        }
    }
}