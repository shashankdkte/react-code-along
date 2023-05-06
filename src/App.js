import "./App.css";
import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monster: users }));
  }
  render() {
    return (
      <div className="App">
        <CardList monster={this.state.monster}></CardList>
      </div>
    );
  }
}
export default App;
