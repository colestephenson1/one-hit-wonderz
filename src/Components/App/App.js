import React from 'react'
import './App.css'
import '../../images/background-image.png'
import Header from '../Header/Header'
import DecadeContainer from '../DecadeContainer/DecadeContainer';
import oneHitWonders from '../../mockData.js'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      songs: oneHitWonders,
    }
  }


  render() {

    return (
      <div className="App">
        <Header />
        <DecadeContainer songs={this.state.songs} />
      </div>
    )
  }
}

export default App
