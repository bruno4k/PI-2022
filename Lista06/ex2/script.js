var lista = document.getElementById("lista-vazia");
document.getElementById("add-content").addEventListener("click", () => {
    let li = document.createElement('li');
    let element = document.getElementById("content").value;
    li.appendChild(document.createTextNode(element));
    lista.appendChild(li);
    document.getElementById("content").value = '';
})