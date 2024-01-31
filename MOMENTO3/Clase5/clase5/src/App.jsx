import  { useState } from 'react';
import './App.css'

function CharacterStats() {
  const [character, setCharacter] = useState({
    name: 'Gandalf',
    strength: 10,
    intelligence: 18,
    charisma: 16
  });

  function handleChange(e) {
    setCharacter({
      ...character,
      [e.target.name]: e.target.value
    });
  }

  // Mío
  function handleSave() {
    localStorage.setItem('character', JSON.stringify(character));
    alert('Datos guardados en el localStorqage')
  }

  return (
    <>
      <h1>Actualizar un objeto con useState</h1>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={character.name}
          onChange={handleChange}
        />

        Strength:
        <input
          type="number"
          name="strength"
          value={character.strength}
          onChange={handleChange}
        />

        Intelligence:
        <input
          type="number"
          name="intelligence"
          value={character.intelligence}
          onChange={handleChange}
        />

        Charisma:
        <input
          type="number"
          name="charisma"
          value={character.charisma}
          onChange={handleChange}
        />
      </label>

      <button onClick={handleSave}>Save</button>
    </>
  );
}

export default CharacterStats;
