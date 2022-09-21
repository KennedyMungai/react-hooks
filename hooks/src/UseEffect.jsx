import React, { useEffect } from 'react';
import axios from 'axios';


const UseEffect = () => {
    useEffect(() => {
        const comments = axios.get("https://jsonplaceholder.typicode.com/comments");
    }, []);
    

    return (
        <div>
            
        </div>
    )
}

export default UseEffect;