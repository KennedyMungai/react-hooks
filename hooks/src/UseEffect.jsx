import React, { useEffect, useState } from 'react';
import axios from 'axios';


const UseEffect = () => {
    useEffect(() => {
        const comments = axios.get("https://jsonplaceholder.typicode.com/comments")
                        .then((response) => { console.log(response.data) });
    }, []);
    

    return (
        <div>
            
        </div>
    )
}

export default UseEffect;