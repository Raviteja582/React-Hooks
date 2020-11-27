import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Data from './data';
const Student = () => {
    //console.log(useParams()); /* Hook which gives Object consists of id of the student */

    const [name, setName] = React.useState('No student');
    const { id } = useParams();

    React.useEffect(() => {
        const stu = Data.find((student) => student.id === parseInt(id));
        setName((name) => { return stu.name });
    },[id])

    return (
        <div>
            <p>{name}</p>
            <Link to='/menu'>Back</Link>
        </div>
    )
}

export default Student;