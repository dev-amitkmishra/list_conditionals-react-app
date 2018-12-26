import React from 'react';
import classes from '../../containers/App.css'

const cockpit = (props) => {
    let btnClass = classes.Red;
    return (
        <div>
            <h1>React App</h1>
            <p className=''>App is working with React!</p>
            <button className={btnClass} onClick={props.toggle}>Click Me</button>
        </div>
    )
};

export default cockpit;