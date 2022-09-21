import React, { useState } from 'react';


const UseState = () => {
    const [inputValue, setInputValue] = useState("Shapoopie");

    const onChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <input type="text" placeholder='Enter some text....' onChange={onChange} />
            {inputValue}
        </div>
    )
}

export default UseState;