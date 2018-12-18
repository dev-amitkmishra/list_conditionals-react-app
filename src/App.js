import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid #eee',
      padding: '10px',
      cursor: 'pointer'
    };
    let persons = null;

    if(this.state.isToggle) {
      persons = (
        <div>
          {this.state.users.map((user, index) => {
            // return <Person name={user.name} changeHandler={this.changeHandler} clickHandler={this.clickHandler.bind(this, 'Kumar')}/>
            return <Person name={user.name} key= {user.id} changeHandler={(event) => this.changeHandler(event, user.id)} clickHandler={this.deleteHandler.bind(this, index)}/>
          })}
          {/* <Person name={this.state.users[0].name}/>
          <Person changeHandler={this.changeHandler} clickHandler={this.clickHandler.bind(this, 'Kumar')} name={this.state.users[1].name}/>
          <Person name={this.state.users[2].name}/> */}
        </div>
      )
      style.backgroundColor = 'Red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    let classes = [];
    if (this.state.users.length <= 2) {
      classes.push('red');
    } 
    if (this.state.users.length <= 1) {
      classes.push('bold');
    }
    return (
        <div className="App">
          <h1>React App</h1>
          <p className={classes.join(' ')}>App is working with React!</p>
          <button style={style} onClick={this.toggleEventHandler}>Click Me</button>
          {persons}
          <UserOutput username={this.state.username[0].name}/>
          <UserOutput username={this.state.username[1].name} />
          <UserInput eventHandle={this.eventHandler}  name={this.state.username[0].name}/>
          {/* <Person data={this.state.content}/>
          <Person data={this.state.content}>
            <p paragraphData={this.state.childContent}>sample text</p>
          </Person> */}
        </div>
    );
  }
}

export default App;
