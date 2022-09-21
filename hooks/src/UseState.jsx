import React, { useState } from 'react';


const UseState = () => {
    const [counter, setCounter] = useState(0);

    const counterFunc = () => {
        setCounter(counter + 1);
    };

    return (
        <div>
            <button onClick={counterFunc}>{counter}</button>
        </div>
    )
}

export default UseState;