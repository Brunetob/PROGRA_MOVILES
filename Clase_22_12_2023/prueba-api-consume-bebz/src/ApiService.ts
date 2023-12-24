const API_URL = 'https://mashape-community-urban-dictionary.p.rapidapi.com/define';
// const MARVEL_API_URL = 'https://marvel-heroic-api-unlock-the-mcu-legendary-characters.p.rapidapi.com/name';

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

/*interface MarvelAppearance {
    movie: string;
    year: number;
}*/

interface MarvelCharacter {
    name: string;
    description: string;
    powers: string[];
    /*appearances: MarvelAppearance[];
    quotes: string[];
    allies: string[];
    enemies: string[];
    affiliation: string;
    firstAppearance: string;
    creator: string;
    aka: string[];*/
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

export interface MarvelApiResponse extends Array<MarvelCharacter> {}

export const fetchMarvelCharacterData = async (characterName: string): Promise<MarvelApiResponse> => {
    const headers = new Headers({
        'X-RapidAPI-Key': '2d46d63b4bmshcd8575c8b874ceap1bd115jsn892cf66b3433',
        'X-RapidAPI-Host': 'marvel-heroic-api-unlock-the-mcu-legendary-characters.p.rapidapi.com'
    });

    const url = new URL(`https://marvel-heroic-api-unlock-the-mcu-legendary-characters.p.rapidapi.com/name?q=${characterName}`);
    const response = await fetch(url.toString(), { method: 'GET', headers });
    const data = await response.json();

    return data;
};