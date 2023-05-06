import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
class App extends Component {
  constructor() {
    super();
    this.state = {
      string: "Hello User",
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.string}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button
            className="App-link"
            onClick={() => this.setState({ string: "Hello Jack" })}
          >
            Learn world
          </button>
        </header>
      </div>
    );
  }
}
export default App;
