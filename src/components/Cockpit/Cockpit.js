import React from 'react';
import classes from '../../containers/App.css';
import Aux from '../../hoc/_Aux';

const cockpit = (props) => {
    let btnClass = classes.Red;
    return (
        <Aux>
            <div>
                <h1>{props.appTitle}</h1>
                <p className=''>App is working with React!</p>
                <button className={btnClass} onClick={props.toggle}>Click Me</button>
                <button onClick={props.login}>Log In</button>
            </div>
        </Aux>
    )
};

export default cockpit;