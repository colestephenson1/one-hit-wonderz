import React from 'react'
import './App.css'
import '../../images/background-image.png'
import Header from '../Header/Header'
import DecadeContainer from '../DecadeContainer/DecadeContainer';
import oneHitWonders from '../../mockData.js'
import { Route } from 'react-router-dom'
import SongContainer from '../SongContainer/SongContainer'
import SongDetail from '../SongDetail/SongDetail';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      songs: oneHitWonders,
      filteredSongs: [],
    }
  }

  filteredSongs = (mood, decade) => {
    const filtered = this.state.songs[decade].filter(song => {
      return song.moods.includes(mood)


    })
    this.setState({filteredSongs: filtered})
  }

  clearState = () => {
    this.setState({filteredSongs: []})
  }

  render() {

    return (
      <div className="App">
        <Header />
        <Route exact path="/" render={() => <DecadeContainer songs={this.state.songs} />}/>
        <Route exact path="/:decade" render={({match}) => <SongContainer decade={match.params.decade} method={this.filteredSongs} filteredSongs={this.state.filteredSongs} />} />
        <Route exact path="/:decade/:song_name" render={({match}) => {
          const decadeKeys = Object.keys(this.state.songs)
          const foundSong = decadeKeys.map(key => {
            let findings = this.state.songs[key].find(song => song.song_name === match.params.song_name)
            return findings
          }).find(finding => finding)
          return <SongDetail song={foundSong}/>}
        }/>
      </div>
    )
  }
}

export default App
