"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchCharacters() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://rickandmortyapi.com/api/character");
        const data = yield response.json();
        displayCharacters(data.results);
    });
}
function displayCharacters(characters) {
    const container = document.getElementById('characters-container');
    if (container) {
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
