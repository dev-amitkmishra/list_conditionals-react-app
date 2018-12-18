import React from 'react';
import './Person.css'
import Radium from 'radium';

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
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }
    return (
        <div className="Person" style={style}>
            <p onClick={props.clickHandler}>my name is {props.name}</p>
            <input type="text" onChange={props.changeHandler} defaultValue={props.name}/>
        </div>
    )
}

export default Radium(Person);