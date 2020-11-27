import React from 'react';
import Data from './data';

const PropDrilling = () => {

    const [persons, setPersons] = React.useState(Data);


    /* This remove person is useful in SinglePerson component but not in List Person component
        But we have to pass to Single person through only List component.
    */
    const removePerson = (id) => {
        setPersons((persons) => {
            return persons.filter((person) => person.id !== id)
        })
    }

    return (
        <section>
            <List person={persons} removePerson={removePerson}/>
        </section>   
    );
}

const List = (props) => {
    return (
        <div>
            {
                props.person.map((person) => {
                    return <SinglePerson {...person} removePerson={props.removePerson}/>
                })
            }
        </div>  
    );
}

const SinglePerson = ({ id, name, roll,removePerson }) => {
    return (
        <div id={id}>
            <h5>{name}</h5>
            <button onClick={() => removePerson(id)}>remove</button>
        </div>
    );
}

export default PropDrilling;