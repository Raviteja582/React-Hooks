import React, {createContext,useContext} from 'react';
import Data from './data';

const PersonProvider = createContext()

const PropDrilling = () => {

    const [persons, setPersons] = React.useState(Data);

    /* This remove person is useful in SinglePerson component but not in List Person component
        But we have to pass to Single person through only List component.
        So to made the this funtion directly to the required component which is in depth of component 
        levels we make use of useContext API.
    */
    
    const removePerson = (id) => {
        setPersons((persons) => {
            return persons.filter((person) => person.id !== id)
        })
    }

    return (
        /* The value provided in the Context used by all the components which are sub components
            to the corresponding components.
            In previous Component we send removePerson and data as props to all intermediate components
            to react destination components
            We can also send Data to the components.
         */
        <PersonProvider.Provider value={{ removePerson, persons }}>
            <section>
                <List />
            </section>   
        </PersonProvider.Provider>
    );
}

const List = () => {
    const { persons } = useContext(PersonProvider)
    return (
        <div>
            {
                persons.map((person) => {
                    return <SinglePerson {...person}/>
                })
            }
        </div>  
    );
}

const SinglePerson = ({ id, name, roll }) => {
    const { removePerson } = useContext(PersonProvider)
    return (
        <div id={id}>
            <h5>{name}</h5>
            <button onClick={() => removePerson(id)}>remove</button>
        </div>
    );
}

export default PropDrilling;