import React, { useState } from 'react';


const UseState = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <button>{counter}</button>
        </div>
    )
}

export default UseState;