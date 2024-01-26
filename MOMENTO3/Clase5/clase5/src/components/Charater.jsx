import { useState } from "react";

export default function CharacterStats(){
    const [character, setCharacter] = useState({
        name: 'Gandalf',
        strength: 10,
        intelligence: 18,
        charisma: 16
    });

    function handleChange(e){
        setCharacter({
            ...character,
            [e.target.name]: e.target.value
        });
    }

    return(
        <label>
            Strength:
            <input 
                name="strength"
                value={character.strength}
                onChange={handleChange}
            />
        </label>
    )
}