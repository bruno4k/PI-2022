window.onclick = function () {
    document.getElementById("ativar").onclick = () => {
        document.getElementById("tabela").style.borderStyle = "dotted";
    }

    document.getElementById("desativar").onclick = () => {
        document.getElementById("tabela").style.borderStyle = "solid";
    }
}