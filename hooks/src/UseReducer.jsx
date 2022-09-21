import React, { useReducer } from 'react';


const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0, showText: true});

    return (
        <div>
            
        </div>
    )
}

export default UseReducer;