window.onclick = function () {

    const nomes = ['Bruno', 'Mike', 'Otávio', 'Eduardo', 'André', 'Aender', 'Carlos'];
    const numeros = ['9', '10', '7', '12', '13'];
    const table = document.getElementById("tabela");
    var qtdLinhas = table.rows.length;

    function inserirLinha() {
        var addLinha = table.insertRow(qtdLinhas);

        var cellNome = addLinha.insertCell(0);
        var cellNumero = addLinha.insertCell(1);
        
        cellNome.innerHTML= nomes[Math.floor(Math.random() * nomes.length)];
        cellNumero.innerHTML = numeros[Math.floor(Math.random() * numeros.length)];
    }

    function deletarLinha(){
        if(qtdLinhas > 1){
            table.deleteRow(qtdLinhas - 1);
        }
        
    }

    document.getElementById("btn-add").onclick = () => {
        inserirLinha();
    }

    document.getElementById("btn-rmv").onclick = () => {
        deletarLinha();
    }
}