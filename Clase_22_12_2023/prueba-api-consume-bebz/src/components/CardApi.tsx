import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import { fetchUrbanDictionaryDefinition } from '../ApiService';
import { fetchSuperheroData } from '../ApiService'; // Asegúrate de tener la ruta correcta

interface CardApiProps {
  term: string;
}

const CardApi: React.FC<CardApiProps> = ({ term }) => {
  const [definition, setDefinition] = useState<string | null>(null);
  const [superheroData, setSuperheroData] = useState<any | null>(null); // Cambia 'any' por un tipo más específico si conoces la estructura

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urbanDictionaryData = await fetchUrbanDictionaryDefinition(term);
        setDefinition(urbanDictionaryData.list[0].definition);

        // Ahora, realizamos la solicitud a la API de Superhero
        const superheroData = await fetchSuperheroData('someCharacterId'); // Sustituir con el ID real del personaje
        setSuperheroData(superheroData.data);
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
        <h4>Segunda Api:</h4>
        {superheroData ? (
          <>
            <p>Nombre: {superheroData.name}</p>
            {/* Agrega aquí otras propiedades del superhéroe según la estructura de la API */}
          </>
        ) : (
          <p>Cargando información del superhéroe...</p>
        )}
      </Card>
    </div>
  );
};

export default CardApi;
