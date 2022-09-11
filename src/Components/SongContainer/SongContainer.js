import React from 'react'
import oneHitWonders from '../../mockData.js'
import './SongContainer.css'
import Spotify from '../Spotify/Spotify'
import Form from '../Form/Form.js'

const SongContainer = ({decade, method, filteredSongs}) => {


    const spotifyCards = oneHitWonders[decade].map(song => {
        return <Spotify
            decade={decade}
            songKey={song.spotify_key}
            key={Math.random()}
            songName={song.song_name}
        />
    })

    const filteredSongCards = filteredSongs.map(song => {
      return <Spotify
          decade={decade}
          songKey={song.spotify_key}
          key={Math.random()}
          songName={song.song_name}
      />
    })

    const which = filteredSongs.length ? filteredSongCards : spotifyCards;


    return (
        <div className='body'>
            <Form method={method} decade={decade} />
            <div className='song-container'>
            <h2>Decade Title</h2>
            {which}
            </div>
        </div>
    )
}

export default SongContainer
