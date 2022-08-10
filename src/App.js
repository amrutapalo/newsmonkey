import './App.css';
import News from './components/News';
import React, { Component } from 'react'
import NavBar from './UI/NavBar';
import PrevNextBar from './UI/PrevNextBar';

export default class App extends Component {

  darkMode = {
    backgroundColor: "black",
    color: "white",
    border: "0.2px solid grey"
  }

  constructor() {
    super();
    this.state = {
      mode: null,
      buttonText: "Enable Dark Mode"
    }
  }

  toggleMode = (event) => {
    console.log("toggleMode--", event.target.checked);
    if (event.target.checked) {
      this.setState({
        mode: this.darkMode,
        buttonText: "Enable Light Mode"
      });
    }else{
      this.setState({
        mode: null,
        buttonText: "Enable Dark Mode"
      });
    }

  }

  render() {
    return (
      <div className="App" style={this.state.mode}>
        <NavBar toggleMode={this.toggleMode} buttonText={this.state.buttonText}></NavBar>
        <News style={this.state.mode}></News>
      </div>
    )
  }
}
