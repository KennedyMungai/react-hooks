import React, { useLayoutEffect, useEffect, useRef } from 'react';


const useLayoutEffectFunc = () => {
    const inputRef = useRef(null);

    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    }, [])

    return (
        <div>
            <input type="text" value={"PEDRO"} ref={inputRef} />
        </div>
    )
}

export default useLayoutEffectFunc;