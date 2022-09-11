import React from 'react'
import oneHitWonders from '../../mockData.js'
import './SongContainer.css'
import Spotify from '../Spotify/Spotify'
import Form from '../Form/Form.js'

const SongContainer = ({decade}) => {

    const spotifyCards = oneHitWonders[decade].map(song => {
        return <Spotify 
            decade={decade}
            songKey={song.spotify_key}
            key={Math.random()}
            songName={song.song_name}
        />
    })

    return (
        <div className='body'>
            <Form />
            <div className='song-container'>
            <h2>Decade Title</h2>
            {spotifyCards}
            </div>
        </div>
    )
}

export default SongContainer 