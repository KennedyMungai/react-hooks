import React, { useState } from 'react';


const UseState = () => {
    const [inputValue, setInputValue] = useState("Shapoopie");

    return (
        <div>
            <input type="text" placeholder='Enter some text' />
            {inputValue}
        </div>
    )
}

export default UseState;