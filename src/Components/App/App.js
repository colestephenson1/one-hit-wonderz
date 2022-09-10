import React from 'react'
import './App.css'
import '../../images/background-image.png'
import Header from '../Header/Header'

class App extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    )
  }
}

export default App
