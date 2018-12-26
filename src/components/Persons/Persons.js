import React from 'react';
import Person from './Person/Person';

const Persons = (props) =>
    props.users.map((user, index) => {
        return <Person 
                name={user.name} 
                key= {user.id} 
                changed={(event) => props.changed(event, user.id)} 
                clicked={() => props.clicked(index)}/>
    });
export default Persons;