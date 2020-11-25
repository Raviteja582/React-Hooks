import React from 'react';

function UseStateProblem() {
    
    let greet = 'hello World';
    const Update = () => {
        /* 2. After having the event, the title value is changed */
        greet = 'hi world';
        console.log(greet);
    }
    return (
        <div>
            {/* 3. After the button event, still the title don't render as per the event change. */}
            {greet} <br />
            {/* 1. when user click the button, */}
            <button type="button" onClick={Update}>Click me</button>
        </div>
    );
}

export default UseStateProblem;