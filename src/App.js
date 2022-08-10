import React, { Component } from 'react';
import './App.css';
import News from './components/News';
import NavBar from './UI/NavBar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


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
    } else {
      this.setState({
        mode: null,
        buttonText: "Enable Dark Mode"
      });
    }

  }

  render() {
    return (
      <Router>
        <div className="App" style={this.state.mode}>
          <NavBar toggleMode={this.toggleMode} buttonText={this.state.buttonText}></NavBar>
          <Routes>
            <Route exact path="/general" element={<News key="general" style={this.state.mode} category="general" />}/>
            <Route exact path="/" element={<News key="general" style={this.state.mode} category="general" />}/>
            <Route exact path="/science" element={<News key="science" style={this.state.mode} category="science" />} />
            <Route exact path="/business" element={<News key="business" style={this.state.mode} category="business" />} />
            <Route exact path="/sports" element={<News key="sports" style={this.state.mode} category="sports" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" style={this.state.mode} category="entertainment" />} />
            <Route exact path="/health" element={<News key="health" style={this.state.mode} category="health" />} />
            <Route exact path="/technology" element={<News key="technology" style={this.state.mode} category="technology" />} />
          </Routes>
        </div>
      </Router>
    )
  }
}
