import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import { MarvelApiResponse, fetchUrbanDictionaryDefinition } from '../ApiService';
import { fetchMarvelCharacterData } from '../ApiService';

interface CardApiProps {
    term: string;
}

const CardApi: React.FC<CardApiProps> = ({ term }) => {
    const [definition, setDefinition] = useState<string | null>(null);
    const [marvelCharacterData, setMarvelCharacterData] = useState<MarvelApiResponse | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const urbanDictionaryData = await fetchUrbanDictionaryDefinition(term);
                setDefinition(urbanDictionaryData.list[0].definition);

                const marvelCharacterData = await fetchMarvelCharacterData(term);
                setMarvelCharacterData(marvelCharacterData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [term]);

    return (
        <div className='api-content'>
            <Card className='cardapi' title='Card Api Urban Dictionary'>
                <div className='cardheader'>
                    <img id='card-logo' alt="urban logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9m5uA9Z0IDoaTwsuL13ohx6BHbSq1UefgaWtrbuAm_A&s" />
                    <p>Término: <b>{term}</b></p>
                </div>
                <h4>Definición:</h4>
                <p>{definition}</p>
                <hr />
                <h4>API de Marvel:</h4>
                {marvelCharacterData && marvelCharacterData.length > 0 ? (
                <>
                    <p>Nombre: {marvelCharacterData[3].name}</p>
                    <p>Descripción: {marvelCharacterData[3].description}</p>
                    <p>Poderes: {marvelCharacterData[3].powers.join(', ')}</p>
                </>
                ) : (
                    <p>Cargando información del personaje de Marvel...</p>
                )}
            </Card>
        </div>
    );
};

export default CardApi;
