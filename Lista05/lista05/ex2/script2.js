window.onclick = function () {
    document.getElementById("btn-toggle").onclick = () => {
        let p1 = document.getElementById("p1").innerHTML;
        let p2 = document.getElementById("p2").innerHTML;
        document.getElementById("p1").innerHTML = p2;
        document.getElementById("p2").innerHTML = p1;
    }
}