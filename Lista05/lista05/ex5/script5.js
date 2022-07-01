window.onclick = function () {
    document.getElementById("btn").onclick = () => {
        let text = document.getElementById("text-input").value;
        document.getElementById("text-p").innerHTML = text;
        document.getElementById("text-input").value = "";
    }

    document.getElementById("color-input").onblur = () => {
        document.getElementById("text-p").style.color = document.getElementById("color-input").value;
    }
}