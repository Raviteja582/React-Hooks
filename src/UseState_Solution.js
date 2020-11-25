import React, { useState } from 'react';

function UseStateSolution() {

    /* To render the content dynamically whenever there is change in the variable value we use 
        useState funtion which binds the function to the variable to the state preservance.    
    */
    const [text, setText] = useState('Hello world');
    const [des, setDes] = useState(true);
    const changeVar = () => {
        if (des) {
            setText('Namaskar India');
            setDes(false);
        } else {
            setText('Hello World');
            setDes(true);
        }
    }
    return (
        <div>
            {text} <br/>
            <button type="button" onClick={changeVar}>Click me</button>
        </div>  
    );
}

export default UseStateSolution;