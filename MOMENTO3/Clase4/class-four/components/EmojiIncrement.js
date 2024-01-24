import { useState } from "react";

export default function EmojiIncrement() {
    const [emojiString, setEmojiString] = useState("🐶");

    function prevEmoji() {
        setEmojiString(prevEmoji => prevEmoji + "🐶");
    }

    return (
        <>
            <h1>{emojiString}</h1>
            <button onClick={() => {
                prevEmoji();
                prevEmoji();
                prevEmoji();
            }}>Add 3 Dogs</button>
        </>
    );
};


/*export default function EmojiIncrement(){
    const [emojiString, setEmojiString] = useState("🐶");

    return(
        <>
            <h1>{emojiString}</h1>
            <button onClick={() => {
                setEmojiString(prevEmoji => + "🐶");
                setEmojiString(prevEmoji => + "🐶🐶");
                setEmojiString(prevEmoji => + "🐶🐶🐶");
            }}>Add 3 Dogs</button>
        </>
    );
};*/