const ul = document.querySelector("ul");

function getData() {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=21`)
        .then((response) => response.json())
        .then((data) => {
            data.results.forEach((pokemon) => {
                clickPokemon(pokemon.name, pokemon.url);
            });
        });
}

function clickPokemon(name, url) {
    const li = document.createElement("li");
    ul.append(li);
    li.className = "list";
    li.innerText = name;
    li.addEventListener("click", () => {
        getPokemon(url, li);
    });
}

function getPokemon(url, li) {
    fetch(url)
        .then((res) => res.json())
        .then((res) => {
            aboutPokemon(res, li);
        });
}

function aboutPokemon(res, li) {
    const urlImage = res.species.url.split("/")[6];
    const namePoke = res.name;
    const weight = res.weight;
    const height = res.height;
    const types = res.types[0].type.name;
    const imgWeight = `<img src =  "./images/weighttt.png" class = "icon"> `;
    const imgHeight = `<img src =  "./images/height.png" class = "icon"> `;
    const imgType = `<img src =  "./images/typee.png" class = "icon"> `;

    li.style.flexDirection = "column";

    li.innerHTML = `
    <img src = "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${urlImage}.svg" class= "imgPoke"/>
    <div class = "info1">  Имя:  ${namePoke}  </div>
    <span class = "info2"> ${imgWeight}.......................${weight}</span>
    <span class = "info3"> ${imgHeight}..........................${height} </span>
    <span class = "info4"> ${imgType} .................... ${types} </span>

`;
}

export { getData };
