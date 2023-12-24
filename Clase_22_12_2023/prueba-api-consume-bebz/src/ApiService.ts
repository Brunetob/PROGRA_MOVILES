const API_URL = 'https://mashape-community-urban-dictionary.p.rapidapi.com/define';
const BASE_URL_SUPERHERO = 'https://superheroapi.com/api/3611272735812273';

// Declaración de Interfaces y estructuras para ambas api's
interface UrbanDictionaryEntry {
    definition: string;
    /*permalink: string;
    thumbs_up: number;
    author: string;
    word: string;
    defid: number;
    current_vote: string;
    written_on: string;
    example: string;
    thumbs_down: number;*/
}

interface UrbanDictionaryResponse {
    list: UrbanDictionaryEntry[];
}

interface SuperheroEntry {
    name: string;
}

interface SuperheroResponse {
    data: SuperheroEntry;
}

// Funciones a mostrar la promesa

export const fetchUrbanDictionaryDefinition = async (term: string): Promise<UrbanDictionaryResponse> => {
    
    const headers = new Headers({
        'X-RapidAPI-Key': '2d46d63b4bmshcd8575c8b874ceap1bd115jsn892cf66b3433',
        'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
    });

    const url = new URL(API_URL);
    url.searchParams.append('term', term);

    const response = await fetch(url.toString(), { method: 'GET', headers });
    const data = await response.json();

    return data;
};

export const fetchSuperheroData = async (characterId: string): Promise<SuperheroResponse> => {
    const url = `${BASE_URL_SUPERHERO}/${characterId}/name`;

    const response = await fetch(url, { method: 'GET' });
    const data = await response.json();

    return data;
};
