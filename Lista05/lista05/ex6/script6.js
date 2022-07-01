window.onclick = function () {
    document.getElementById("toggle-color").onclick = () => {
        let textCollection = document.getElementsByClassName("toggle");
        for (let item of textCollection) {
            item.style.color = 'red';
        }
    }   

    document.getElementById("toggle-bg").onclick = () => {
        let textCollection = document.getElementsByClassName("toggle");
        for (let item of textCollection) {
            item.style.backgroundColor = 'pink';
        }
    }

}