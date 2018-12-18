import React from 'react';
import classes from './Person.css'

// const Person = (props) => {
//     console.log(props);
//     if (props.children) {
//         return (
//             <div>
//                 <p>{props.data}</p>
//                 <p>{props.children.props.paragraphData}-{props.children.props.children}</p>
//             </div>
//         )
//     } else {
//         return (
//             <div>
//                 <p>{props.data}</p>
//             </div>
//         )
//     }
// }

const Person = (props) => {
    return (
        <div className={classes.Person}>
            <p onClick={props.clickHandler}>my name is {props.name}</p>
            <input type="text" onChange={props.changeHandler} defaultValue={props.name}/>
        </div>
    )
}

export default Person;