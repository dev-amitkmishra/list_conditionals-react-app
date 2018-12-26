import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import UserOutput from '../components/UserOutput/UserOutput';
import UserInput from '../components/UserInput/UserInput';

class App extends Component {
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

    let persons = null;
    let btnClass = '';
    if(this.state.isToggle) {
      persons = (
        <div>
          <Persons users={this.state.users}
            changed={this.changeHandler} 
            clicked={this.deleteHandler}/>
        </div>
      )
      btnClass = classes.Red;
    }

    return (
        <div className={classes.App}>
          <h1>React App</h1>
          <p className=''>App is working with React!</p>
          <button className={btnClass} onClick={this.toggleEventHandler}>Click Me</button>
          {persons}
          <UserOutput username={this.state.username[0].name}/>
          <UserOutput username={this.state.username[1].name} />
          <UserInput eventHandle={this.eventHandler}  name={this.state.username[0].name}/>
        </div>
    );
  }
}

export default App;
