import React from 'react'
import './App.css'
import '../../images/background-image.png'
import Header from '../Header/Header'
import DecadeContainer from '../DecadeContainer/DecadeContainer';
import oneHitWonders from '../../mockData.js'
import { Route } from 'react-router-dom'
import SongContainer from '../SongContainer/SongContainer'

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
        <Route exact path="/" render={() => <DecadeContainer songs={this.state.songs} />}/>
        <Route exact path="/:decade" render={({match}) => <SongContainer decade={match.params.decade} />} />
      </div>
    )
  }
}

export default App
