import { useState } from "react";

export default function EmojiCounter(){
    const [emoji, setEmoji] = useState("😁");

    return(
        <>
            <h1>{emoji}</h1>
            <button onClick={() => {
                setEmoji(emoji + "😁");
                setEmoji(emoji + "😁😁");
                setEmoji(emoji + "😁😁😁");
            }}>Add 3 smiles</button>
        </>
    );
}