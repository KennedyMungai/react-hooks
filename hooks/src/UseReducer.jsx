import React, { useReducer } from 'react';


const reducer = (state, action) => {
    
};

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0, showText: true});

    return (
        <div>
            
        </div>
    )
}

export default UseReducer;