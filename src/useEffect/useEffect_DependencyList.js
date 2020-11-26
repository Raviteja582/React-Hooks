import React, { useState,useEffect}from 'react';

const Dependency = () => {

    const [value, setValue] = useState(0);

    /* Here we place a Empty dependecy list, so that below use Effect runs only once after component render. 
        Since the condition of value>=7, it doesn't re-render in the component.
    */
    useEffect(() => {
        if (value >= 7) {
            document.title = `Raviteja (${value})`;
        }
        document.title = `New Value (${value})`;
    }, []);

    /*  Here the dependency list has state variable which is rendered every time
        when there is change in the value.
    */
    useEffect(() => {
        if (value >= 7) {
            document.title = `Raviteja (${value})`;
        }
    }, [value]);
    return (
        <div>
            <h1>{value}</h1>
            <button type="button" onClick={() => setValue(value+1)}>Increase</button>
        </div>  
    );

}

export default Dependency;