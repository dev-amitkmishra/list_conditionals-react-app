import React, {
    Component
} from 'react';
import Person from './Person/Person';

class Persons extends Component {
    constructor(props) {
        super(props);
        console.log('Persons.js inside constructor', props);
        // props.title
    }

    componentWillMount() {
        console.log('Persons.js inside componentWillMount');
    }

    componentDidMount() {
        console.log('Persons.js inside componentDidMount');
    }
    componentWillUnmount() {
        // Component is about to get removed => Perform any cleanup work here!
        console.log('I\'m about to be removed! from Persons');
    }
    componentWillReceiveProps(nextProps) {
        console.log('update persons.js inside componentWillReceiveProps');
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('update persons.js inside shouldComponentUpdate');
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('update persons.js inside componentWillUpdate');
    }
    componentDidUpdate() {
        console.log('update persons.js inside componentDidUpdate');
    }
    render() {
        console.log('Persons.js inside render');
        return this.props.users.map((user, index) => {
            return <Person
            name = {
                user.name
            }
            age = {
                user.age
            }
            key = {
                user.id
            }
            changed = {
                (event) => this.props.changed(event, user.id)
            }
            clicked = {
                () => this.props.clicked(index)
            }
            />
        });
    }
}
// const Persons = (props) =>
//     props.users.map((user, index) => {
//         return <Person 
//                 name={user.name} 
//                 key= {user.id} 
//                 changed={(event) => props.changed(event, user.id)} 
//                 clicked={() => props.clicked(index)}/>
//     });
export default Persons;