/* useRef is used to get the value of the input field
    It preserves the value of the input tag
    Does NOT trigger the re-render.
    Target Dom nodes/elements
*/

import React, { useRef } from 'react';

const Ref = () => {
    const refTag = useRef(null);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(refTag.current.value);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="Name">Name : </label>
                <input type="text" name="Name" id="Name" ref={refTag}/>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>  
    );
}

export default Ref;