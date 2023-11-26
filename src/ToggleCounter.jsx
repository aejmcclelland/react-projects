import { useState } from 'react';
import './Toggler.css';

export default function ToggleCounter() {
    const [isHappy, setIsHappy] = useState(true);// set variable with isHappy and then state with setIsHappy
    const [count, setCount] = useState(0)
    const toggleIsHappy = () => setIsHappy(!isHappy);
    const incrementCount = () => setCount(count + 1)
    return (
        <div><button className='Toggler' onClick={toggleIsHappy}>
            {isHappy ? '😀' : '😢'}
        </button>
            <p>{count}</p>
            <button onClick={incrementCount}>+</button>
        </div>

    );
}
