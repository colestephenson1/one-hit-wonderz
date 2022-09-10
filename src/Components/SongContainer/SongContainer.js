import React from 'react'
import oneHitWonders from '../../mockData.js'
import './SongContainer.css'
import Spotify from '../Spotify/Spotify'

const SongContainer = ({decade}) => {

    const spotifyCards = oneHitWonders[decade].map(song => {
        return <Spotify 
            songKey={song.spotify_key}
            key={Math.random()}
        />
    })

    return (
        <div className='song-container'>
            <h2>Decade Title</h2>
            {spotifyCards}
        </div>
    )
}

export default SongContainer 