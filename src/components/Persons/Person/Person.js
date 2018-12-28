import React, { Component } from 'react';
import propTypes from 'prop-types';
import classes from './Person.css';
import FontAwesome from 'react-fontawesome';
import AcceptClasses from '../../../hoc/acceptClasses';
import Aux from '../../../hoc/_Aux';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('Person.js inside constructor', props);
      }
    
      componentWillMount() {
        console.log('Person.js inside componentWillMount');
      }
    
      componentDidMount() {
        console.log('Person.js inside componentDidMount');
        // if () {
        //     this.userInputElement
        // }
      }
    render() {
        console.log('Person.js inside render');
        return (
            <Aux>
                <FontAwesome name='trash' className={classes.remove} onClick={this.props.clicked}/>
                <p>my name is {this.props.name} and age is {this.props.age}</p>
                <input 
                    type="text" 
                    ref={(input) => {this.userInputElement = input}}
                    onChange={this.props.changed} 
                    defaultValue={this.props.name}/>
            </Aux>
        )
    }
}

Person.propTypes = {
    click: propTypes.func,
    name: propTypes.string,
    age: propTypes.number,
    changed: propTypes.func
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