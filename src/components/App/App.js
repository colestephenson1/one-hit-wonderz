import React, { Component } from "react";
import songData from "../../mockData"
import Form from "../../Form";
import DecadeContainer from "../DecadeContainer/DecadeContainer";

class App extends Component {
  constructor() {
    super()
    this.state = {
      oneHits: songData
    }
  }
  render() {
    return (
      <div>
        <h1>One Hit Wonderzz</h1>
        <Form />
        <DecadeContainer songData={this.state.oneHits}/>
      </div>
    )
  }
}

export default App;
