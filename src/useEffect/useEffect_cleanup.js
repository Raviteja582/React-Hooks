import React, { useState, useEffect } from 'react';

const Clean = () => {

    const [size, setSize] = useState(window.innerWidth);
    
    const changeSize = () => {
        setSize(window.innerWidth);
    }

    /* In these every time we re-rendering the component, we automatically adding new event listener to the component
        which decrease the performance and increase the memory consumption.
        for this we add clean up funtion before adding new listener.
    */
    
    useEffect(() => {
        window.addEventListener('resize', changeSize);
    });

    useEffect(() => {
        window.addEventListener('resize', changeSize);
        
        /* It performs clean up activity by removing the event listener after rendering the component. */
        
        return () => {
            window.removeEventListener('resize', changeSize);
        }
    })

    return (
        <div>
            <h1>window Size</h1>
            <h3>{size}</h3>
        </div>
    );
}

export default Clean;
