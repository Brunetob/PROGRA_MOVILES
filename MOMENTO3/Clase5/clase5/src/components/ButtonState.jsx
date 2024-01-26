import { useState } from "react";

export default function ButtonUpdate(){
    const [message, setMessage] = useState("Act 1");

    return(
        <>
            <h1>{message}</h1>
            <button onClick={() => {
                setMessage(message + "😁");
            }}>Add something</button>
        </>
    );
}