/* Controlled forms are that the state variables are bond to the input fields.
    that is the change the input field immediately update the state variable and
    the text in the input field will display from the state variable not from the 
    keyboard we typing.
    So controlled forms uses onChange to event to first update state variable and dispaly in the text field.
*/

import React, { useState } from 'react';

const Form = () => {

    const [firstName, setName] = useState('');
    const [email, setEmail] = useState('');

    /* Adding user to list */
    
    const [users, setUser] = useState([]);

    /* we can submit the form using onSubmit method on form 
    or if we dont use form we can use button onclick method. */
    const handleInput = (e) => {
        e.preventDefault();
        if (firstName && email) {
            const person = {firstName,email}
            setUser((users) => {
                return [...users,person]
            })
            console.log(users);
            setName('');
            setEmail('');
        }
        else {
            alert("please Enter both name and Email.");
        }
    }
    return (
        <>
            <form name="login" onSubmit={handleInput}>
                <div>
                    <label htmlFor="firstName">Name : </label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={firstName}
                        onChange={(e)=>setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="Email">Email : </label>
                    <input
                        type="text"
                        name="Email"
                        id="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>

            <div>
                <table>
                    {
                        users.map((user, index) => {
                            return (
                                <tr id={index}>
                                    <td>{user.firstName}</td>
                                    <td>{ user.email}</td>
                                </tr>
                            );
                        })
                    }
                </table>
            </div>

        </>  
    );


}

export default Form;