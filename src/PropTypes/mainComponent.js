import React from 'react';
import Data from './data';
import Problem from './propsTypes_Problem';
import Solution from './propTypes_Solution';
const Main = () => {

    return (
        <div>
            {
                Data.map((person) => {
                    return <Solution {...person} />
                })
            }      
        </div>
    );
}

export default Main;