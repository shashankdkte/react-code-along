import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monstser: [
        {
          name: "Frankestien",
          id: "1",
        },
        {
          name: "Dracula",
          id: "2",
        },
        {
          name: "Zombie",
          id: "3",
        },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.monstser.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}
export default App;
