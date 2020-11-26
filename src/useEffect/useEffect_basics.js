import React from 'react'


const UseEffect = () => {

    const [value, setValue] = React.useState(0);
    React.useEffect(() => {
        console.log('Calling useEffect');
        if (value >= 7)   //using of conditionals in Hooks. 
            document.title = `Ravi Teja (${value})`;
        document.title = `Value(${value})`;
    })
    return (
        <div>
            <h1>{value}</h1>
            <button type="button" onClick={()=>setValue(value+1)}>Increase</button>
        </div>  
    );
}

export default UseEffect;