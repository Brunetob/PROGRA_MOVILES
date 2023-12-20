// import React from 'react'
/*
const person = {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroundColor: 'black',
        color: 'pink',
    },
}

export default function Todolist() {
    return (
        <div style={person.theme}>
            <h1>{person.name}&apos;s Todos</h1>
            <img className="avatar" src="https://i.imgur.com/7vQD0fPs.jpg" alt="Gregorio Y. Zara" />
            <ul>
                <li>List 1</li>
                <li>List 2</li>
                <li>List 3</li>
            </ul>
        </div>
    );
}*/

/***********************/

interface Theme {
    backgroundColor: string;
    color: string;
}

interface PersonProps {
    name: string;
    theme: Theme;
}

const person: PersonProps = {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroundColor: 'black',
        color: 'pink',
    },
}

export default function Todolist() {
    return (
        <div style={person.theme}>
            <h1>{person.name}&apos;s Todos</h1>
            <img className="avatar" src="https://i.imgur.com/7vQD0fPs.jpg" alt="Gregorio Y. Zara" />
            <ul>
                <li>List 1</li>
                <li>List 2</li>
                <li>List 3</li>
            </ul>
        </div>
    );
}