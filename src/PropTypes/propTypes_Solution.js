import React from 'react';

import PropTypes from 'prop-types';

const Student = ({id,name,roll,sub}) => {

    /* to fix the sub.oe we use short circuit*/
    const oe = sub && sub.oe;

    return (
        <div id={id}>
            <h3>Name: {name}  Roll: {roll}</h3>
            <h6>OE: {oe || 'No Subject'}</h6>
        </div>
    )
}

Student.prototype = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    roll: PropTypes.string.isRequired,
    sub: PropTypes.object.isRequired
}

Student.defaultProps = {
    name: 'No Name',
    sub: 'No Subject',
    roll: 'Not Enrolled',
    id: 'Undefined'
}

export default Student;