window.onclick = function () {
    document.getElementById("acender").onclick = () => {
        document.getElementById("lampada").src = "https://www.w3schools.com/js/pic_bulbon.gif";
    }

    document.getElementById("apagar").onclick = () => {
        document.getElementById("lampada").src = "https://www.w3schools.com/js/pic_bulboff.gif";
    }
}