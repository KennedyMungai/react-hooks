import React, { useState } from 'react';


const UseState = () => {
    let number = 0;
    const [counter, setCounter] = useState(0);

    number = counter;

    return (
        <div>
            <button onClick={() => setCounter(number++)}>{counter}</button>
        </div>
    )
}

export default UseState;