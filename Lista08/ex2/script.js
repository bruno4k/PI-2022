let url = "https://reef-fishes.herokuapp.com/api/";
let input = document.querySelector('#input_search');
let erro = document.querySelector("#error");
let fish = document.querySelector('.fish-card');

let fb_tips = ['1109', '3709', '46704'];
let gender_tips = ['acanthurus/coeruleus', 'acyrtops/beryllinus', 'acyrtus/artius'];

document.getElementById("fbcode_search").classList.add("p_info");
document.getElementById("gender_search").classList.add("p_info");

const search = () => {
    let search = input.value; 
    fetch(url + search)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            fish.style.display = 'flex';
            erro.innerHTML = '';
            document.getElementById("name").innerHTML = data.fish[0].Name;
            let img = data.fish[0].Img;
            document.getElementById("pic").setAttribute("src", img);
            if(data.fish[0].Price_category == 'not_targeted'){
                document.getElementById("price").innerHTML = 'Price category : -';
            }else if(data.fish[0].Price_category == 'low'){
                document.getElementById("price").innerHTML = 'Price category : $';
            }else if(data.fish[0].Price_category == 'medium'){
                document.getElementById("price").innerHTML = 'Price category : $$';
            }else if(data.fish[0].Price_category == 'high'){
                document.getElementById("price").innerHTML = 'Price category : $$$';
            }else if(data.fish[0].Price_category == 'very high'){
                document.getElementById("price").innerHTML = 'Price category : $$$$';
            }
        })
        .catch(error => {
            console.log("ERRO:" + error);
            erro.innerHTML = 'Não foi encontrado peixe relacionado';
            fish.style.display = 'none';
        })
}

document.getElementById("fbcode_search").addEventListener("click", () => {
    input.type = "number";
    document.getElementById("tip-text").innerHTML = 'QUER DICAS?';
    document.getElementById('tip-1').innerHTML = fb_tips[0];
    document.getElementById('tip-2').innerHTML = fb_tips[1];
    document.getElementById('tip-3').innerHTML = fb_tips[2];
})

document.getElementById("gender_search").addEventListener("click", () => {
    input.type = "text";
    document.getElementById("tip-text").innerHTML = 'QUER DICAS?';
    document.getElementById('tip-1').innerHTML = gender_tips[0];
    document.getElementById('tip-2').innerHTML = gender_tips[1];
    document.getElementById('tip-3').innerHTML = gender_tips[2];
})

document.getElementById("btn_search").onclick = search;