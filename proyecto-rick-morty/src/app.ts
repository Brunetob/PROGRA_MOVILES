async function fetchCharacters() {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();

    displayCharacters(data.results);
}

interface Character {
    img: "",
    name: "",
    species: ""

}

function displayCharacters(characters: any[]){
    const container = document.getElementById('characters-container');
    if(container){
        characters.forEach(character => {
            container.innerHTML += `
                <div class="character-card">
                    <img src="${character.image}" alt="${character.name}">
                    <h2>${character.name}</h2>
                    <p>${character.species}</p>
                </div>
            `;
        });
    }
}

fetchCharacters();