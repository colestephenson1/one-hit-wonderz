import React, { Component } from "react";
import Form from "./Form";

class App extends Component {
  constructor() {
    super()
    this.state = {
      oneHits: []
    }
  }
  render() {
    return (
      <div>
        <h1>One Hit Wonderzz</h1>
        <Form />
      </div>
    )
  }
}

export default App;
