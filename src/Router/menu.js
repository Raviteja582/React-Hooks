import React from 'react';
import Data from './data';
import { Link } from 'react-router-dom';

/* Here we iterate through each student and Displaying the list
    But if we want to select single student and display his property
    We will link each student with a Link tag such that each student
    will get a route point with there unique id.
*/

const Menu = () => {
    return (
        <div>
            <h3>Students List</h3>
            <ul>
                {
                    Data.map((student) => {
                        return (
                            <li>
                                <div id={student.id}>
                                    <h2> Name : {student.name}</h2>
                                    <h3> Roll Nubmer : {student.roll}</h3>
                                    {/* To link each student with a route point we use Link tag like */}
                                    <Link to={`/menu/${student.id}`}>See Details</Link>
                                </div>
                            </li>  
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default Menu;