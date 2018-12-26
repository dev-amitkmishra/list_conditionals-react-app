import React from 'react';
import classes from './Person.css';
import FontAwesome from 'react-fontawesome';

const Person = (props) => {
    return (
        <div className={classes.Person}>
        <FontAwesome name='trash' className={classes.remove} onClick={props.clicked}/>
            <p>my name is {props.name}</p>
            <input type="text" onChange={props.changed} defaultValue={props.name}/>
        </div>
    )
}

export default Person;