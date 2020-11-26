/* In contolled form for every form object we have to create useState hook which is diffcult for large applications.
    Hence we use multiple inputs handler.
*/

import React, { useState } from 'react';

const Control = () => {

    /* Instead of create individual useState for each input field, we create a object for all input fields. */

    const [person, setPerson] = useState({ firstName: '', email: '', age: '' });
    
    /* List all users in an array. */
    const [users, setUsers] = useState([]);

/* Instead of handling individual input onChange event we trigger the all events at once. */
    
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPerson({ ...person, [name]: value });
    }

    /* Instead of onSubmit event we use onClick event */
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (person.firstName && person.email && person.age) {
            setUsers([...users, person])
            setPerson({ firstName: '', email: '', age: '' });
        } else {
            alert('Enter all Input Values');
        }
    }

    return (
        <>
            <form name="login">
                <div>
                    <label htmlFor="firstName">Name : </label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={person.firstName}
                        onChange={handleInput}
                    />
                </div>
                <div>
                    <label htmlFor="Email">Email : </label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={person.email}
                        onChange={handleInput}
                    />
                </div>
                <div>
                    <label htmlFor="Age">Age : </label>
                    <input
                        type="text"
                        name="age"
                        id="age"
                        value={person.age}
                        onChange={handleInput}
                    />
                </div>
                <div>
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                </div>
            </form>

            <div>
                <table>
                    {
                        users.map((user, index) => {
                            return (
                                <tr id={index}>
                                    <td>{user.firstName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                </tr>
                            );
                        })
                    }
                </table>
            </div>

        </>  
    );
}

export default Control;
