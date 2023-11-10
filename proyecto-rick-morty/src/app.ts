interface Level {
    levelName: string;
    levelDifficulty: string;
    levelNumber: number;
}

//type LevelsArray = Level[];

async function fetchCharacters() {
    // const response = await fetch("https://rickandmortyapi.com/api/character");
    const response = await fetch("http://localhost:8081/LevelsModel")//agregado
    //const data = await response.json();
    const data = await response.json() as LevelsArray;//agregado
    console.log(data);//Agregado
    displayCharacters(data);
}

interface Character {
    img: "",
    name: "",
    species: ""

}

function displayCharacters(characters: any[]){
    /*const container = document.getElementById('characters-container');
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
    }*/
}

fetchCharacters();