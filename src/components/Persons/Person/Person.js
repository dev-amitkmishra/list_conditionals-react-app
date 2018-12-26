import React from 'react';
import classes from './Person.css'

const Person = (props) => {
    return (
        <div className={classes.Person} onClick={props.clicked}>
            <p>my name is {props.name}</p>
            <input type="text" onChange={props.changed} defaultValue={props.name}/>
        </div>
    )
}

export default Person;