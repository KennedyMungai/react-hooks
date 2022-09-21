import React, { useRef } from 'react';


const UseRef = () => {
    const inputRef = useRef(null);

    const onClick = () => {
        
    };

    return (
        <div>
            <h1>Pedro</h1>
            <input type="text" name="" id="" placeholder='Ex...' ref={inputRef} />
            <button>Change Name</button>
        </div>
    )
}

export default UseRef;