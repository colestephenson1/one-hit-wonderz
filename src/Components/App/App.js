import React from 'react'
import './App.css'
import '../../images/background-image.png'
import Header from '../Header/Header'
import DecadeContainer from '../DecadeContainer/DecadeContainer';
import oneHitWonders from '../../mockData.js'
import { Route, Switch } from 'react-router-dom'
import SongContainer from '../SongContainer/SongContainer'
import SongDetail from '../SongDetail/SongDetail';
import Error from '../Error/Error'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      songs: [],
      filteredSongs: [],
    }
  }

  filteredSongs = (mood, decade) => {
    const filtered = this.state.songs[decade].filter(song => {
      return song.moods.includes(mood)
    })
    this.fetchAllSongs()
    this.setState({filteredSongs: filtered})
  }

  clearState = () => {
    this.fetchAllSongs()
    this.setState({filteredSongs: []})
  }

  fetchAllSongs = () => {
    fetch('http://localhost:3001/api/v1/oneHitWonderz')
    .then(response => response.json())
    .then(data => {
      this.setState({songs: data})
    })
    .catch(error => console.log(error))
  }

  componentDidMount = () => {
    this.fetchAllSongs();
  }

  render() {

    return (
      <div className="App">
        <Header clearState={this.clearState} />
        <Switch>
          <Route exact path="/" render={() => <DecadeContainer songs={this.state.songs} />}/>
          <Route exact path="/oneHitWonders/:decade" render={({match}) => <SongContainer decade={match.params.decade} method={this.filteredSongs} filteredSongs={this.state.filteredSongs} defaultSongs={this.state.songs} />} />
          <Route exact path="/oneHitWonders/:decade/:song_name" render={({match}) => {
            const decadeKeys = Object.keys(this.state.songs)
            const foundSong = decadeKeys.map(key => {
              let findings = this.state.songs[key].find(song => song.song_name === match.params.song_name)
              return findings
            }).find(finding => finding)
            return <SongDetail song={foundSong}/>}
          }/>
          <Route render={() => <Error/>}/>
        </Switch>
      </div>
    )
  }
}

export default App
