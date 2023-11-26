import { useState } from 'react';
import './ColourBox.css';

function randChoice(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

export default function ColourBox({ colours }) {
    const [colour, setColour] = useState(randChoice(colours));
    const changeColour = () => {
        const randColour = randChoice(colours);
        setColour(randColour);
    };
    return (
        <div
            className='ColourBox'
            onClick={changeColour}
            style={{ backgroundColor: colour }}></div>
    );
}
