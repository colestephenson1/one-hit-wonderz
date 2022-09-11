import React from 'react'
import './Spotify.css'
import { NavLink } from 'react-router-dom'

const Spotify = ({decade, songKey, songName}) => {
    return (
        <div className='spotify'>
            <iframe style={{borderRadius: "12px"}} src={`https://open.spotify.com/embed/track/${songKey}?utm_source=generator&theme=0`} width="100%" height="80" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            <NavLink to={`/${decade}/${songName}`}>
                <button className="song-details-button">VIEW SONG DETAILS</button>
            </NavLink>
        </div>
    )
}

export default Spotify