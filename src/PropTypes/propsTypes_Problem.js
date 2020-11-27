import React from 'react';
const Render = ({id,name,roll,sub}) => {

    /* when we excute this component we will got error that the some of the persons won't have
        sub key in there data.
        So due to some objects missing key values, the entire application goes down with it.
        To handle this data we use PropTypes.
    */

    return (
        <div id={id}>
            <h3>Name: {name}  Roll: {roll}</h3>
            <h6>{sub.oe}</h6>
        </div>
    )
}

export default Render;