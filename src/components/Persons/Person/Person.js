import React, { Component } from 'react';
import classes from './Person.css';
import FontAwesome from 'react-fontawesome';
import AcceptClasses from '../../../hoc/acceptClasses';
import Aux from '../../../hoc/_Aux';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('Person.js inside constructor', props);
        // props.title
      }
    
      componentWillMount() {
        console.log('Person.js inside componentWillMount');
      }
    
      componentDidMount() {
        console.log('Person.js inside componentDidMount');
      }
    render() {
        console.log('Person.js inside render');
        return (
            <Aux>
                <FontAwesome name='trash' className={classes.remove} onClick={this.props.clicked}/>
                <p>my name is {this.props.name}</p>
                <input type="text" onChange={this.props.changed} defaultValue={this.props.name}/>
            </Aux>
        )
    }
}

// const Person = (props) => {
//     return (
//         <div className={classes.Person}>
//         <FontAwesome name='trash' className={classes.remove} onClick={props.clicked}/>
//             <p>my name is {props.name}</p>
//             <input type="text" onChange={props.changed} defaultValue={props.name}/>
//         </div>
//     )
// }

export default AcceptClasses(Person, classes.Person);