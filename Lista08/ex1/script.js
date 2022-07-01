let i = 1;

const loadPokemon = () => {
    let url = 'https://pokeapi.co/api/v2/pokemon/1';
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
            document.getElementById('name').innerHTML = name;
            document.getElementById('numId').innerHTML = data['id'];
            document.getElementById('pic').setAttribute('src', data.sprites.front_default);
            let types = '';
            data.types.forEach(item => {
                types += item.type.name + "<br>";
            });
            document.getElementById("types").innerHTML = types.slice(0, -2);
        }) 
        .catch(error => {
            console.error('Error:', error);
        });
}

const pokemonAhead = () => {
    let url = 'https://pokeapi.co/api/v2/pokemon/' + i;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            fetch('https://pokeapi.co/api/v2/pokemon/' + i)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    let name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
                    document.getElementById('name').innerHTML = name;
                    document.getElementById('numId').innerHTML = data['id'];
                    document.getElementById('pic').setAttribute('src', data.sprites.front_default);
                    let types = '';
                    data.types.forEach(item => {
                        types += item.type.name + "<br>";
                    });
                    document.getElementById("types").innerHTML = types.slice(0, -2);
                })
        }) 
        .catch(error => {
            console.error('Error:', error);
        });
    i++;
}

const pokemonBehind = () => {
    let url = 'https://pokeapi.co/api/v2/pokemon/' + i;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            fetch('https://pokeapi.co/api/v2/pokemon/' + i)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    let name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
                    document.getElementById('name').innerHTML = name;
                    document.getElementById('numId').innerHTML = data['id'];
                    document.getElementById('pic').setAttribute('src', data.sprites.front_default);
                    let types = '';
                    data.types.forEach(item => {
                        types += item.type.name + "<br>";
                    });
                    document.getElementById("types").innerHTML = types.slice(0, -2);
                })
        }) 
        .catch(error => {
            console.error('Error:', error);
        });
    i--;
    if(i == 0){
        i = 1;
    }
}

window.addEventListener('load', loadPokemon);
document.getElementById('ahead').onclick = pokemonAhead;
document.getElementById('behind').onclick = pokemonBehind;