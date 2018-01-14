import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserComponents/UserInput';
import UserOutput from './UserComponents/UserOutput';

class App extends Component {
  state={
    username: 'abc'
  }
  inputChangeHandler=(event)=>{
    this.setState(
      {username: event.target.value}
    );
  }

  render() {
    return (
      <div className="App">
        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username}/>
        <UserInput inputChangeHandler={this.inputChangeHandler} username={this.state.username}/>
      </div>
    );
  }
}

export default App;
