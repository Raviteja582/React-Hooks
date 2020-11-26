import React from 'react'
const Short = () => {
    const [val, setVal] = React.useState('');

    /* if val is false or empty string:
        then || operator gives the other string, not val
             && operator gives the val string, not other.

       else if val is true or not empty string
            || operator gives the val string, not val
            && operator gives the other string not val
     */

    const firstName = val || 'No first Name';
    const LastName = val && 'Gotcha';
    const change = () => {
        setVal('Ravi');
    }
    return (
        <div>
            first Name : <h1>{firstName}</h1> <br />
            last Name  : <h1>{LastName }</h1> <br/>
            <button onClick={change}>Change</button> <br/>

            {/* same as programming:
                in OR if any one is true then it excute, so val is false go after || or else print val 
                in AND if both true then it excute, so val is true then go after && else stop at val. */}
            {val || <h1>No name</h1>}
            {val && <h1>{val}</h1>}
        </div>  
    );
}

export default Short;