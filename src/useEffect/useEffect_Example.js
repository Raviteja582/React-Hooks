import React, { useState, useEffect } from 'react';

const Example = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async() => {
        const response = await fetch('https://api.github.com/users');
        const users = await response.json();
        setUsers(users);
        console.log(users);
    }

    /* If we doesn't mention empty dependency list in the useEffect 
        by calling getUser it will fetch the users and update state variable
        and whenever the state variable is updated useEffect is called in which the state variable is present.
        hence again getUser funtion will called and again fetch the users and again update the state variable 
        and again call useEffect.

            Hence it will form infinite recursion. Hence dependency list maku sure it will fetch the data at once.
     */
    useEffect(() => {
        getUsers(); 
    },[]);
    
    return (
        <div>
            {
                users.map((user) => {
                    return (
                        <div id={user.id}>
                            <h5>{user.node_id}</h5>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Example;
