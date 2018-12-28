import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import UserOutput from '../components/UserOutput/UserOutput';
import UserInput from '../components/UserInput/UserInput';
import Aux from '../hoc/_Aux';
import AcceptClasses from '../hoc/acceptClasses';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App.js inside constructor', props);
    // props.title
  }

  componentWillMount() {
    console.log('app.js inside componentWillMount');
  }

  componentDidMount() {
    console.log('app.js inside componentDidMount');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('update app.js inside shouldComponentUpdate');
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('update app.js inside componentWillUpdate');
  }
  componentDidUpdate() {
    console.log('update app.js inside componentDidUpdate');
  }
  state = {
    content: 'I have started learning React.js',
    childContent: 'sample text for child',
    isToggle: false,
    users: [
      {id: 1, name: 'Amit', age: 30},
      {id: 2, name: 'Amit1', age: 31},
      {id: 3, name: 'Amit2', age: 32}
    ],
    username: [
      {
        name: 'user-kill'
      },
      {
        name: 'user-killer'
      }
    ]
  };

  clickHandler = (newName) => {
    this.setState({
      users: [
        {name: 'Amit', age: 30},
        {name: newName, age: 31},
        {name: 'Amit2', age: 32}
      ]
    })
  }

  changeHandler = (event, id) => {
    const users = [...this.state.users];

    const userIndex = users.findIndex(user => {
      return user.id === id;
    })

    let user = users[userIndex];
    user.name = event.target.value;

    this.setState({users: users});
  }

  eventHandler = (event) => {
    this.setState({
      username: [
        {
          name: event.target.value
        },
        {
          name: 'user-killer'
        }
      ]
    })
  }

  toggleEventHandler = (event) => {
    // debugger;
    const isToggle = this.state.isToggle;
    this.setState({
      isToggle : !isToggle
    })
  }

  deleteHandler = (pIndex) => {
    const users = this.state.users;
    users.splice(pIndex, 1);
    this.setState({users: users});
  }
  render() {
    console.log('app.js inside render');
    let persons = null;
    if(this.state.isToggle) {
      persons = <Persons users={this.state.users}
                  changed={this.changeHandler} 
                  clicked={this.deleteHandler}/>;
    }

    return (
        <Aux>
          <button onClick={() => {this.setState({isToggle: true})}}>Toggle Me</button>
          <Cockpit 
            appTitle= {this.props.title}
            toggle={this.toggleEventHandler}
            showPersons={this.state.showPersons}
            users={this.state.users}/>
            {persons}
            <UserOutput username={this.state.username[0].name}/>
            <UserOutput username={this.state.username[1].name} />
            <UserInput eventHandle={this.eventHandler}  name={this.state.username[0].name}/>
        </Aux>
    );
  }
}

export default AcceptClasses(App, classes.App);
