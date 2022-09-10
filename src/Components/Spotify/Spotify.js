import React from 'react'
import './Spotify.css'

const Spotify = ({songKey}) => {
    return (
        <div className='spotify'>
            <iframe style={{borderRadius: "12px"}} src={`https://open.spotify.com/embed/track/${songKey}?utm_source=generator&theme=0`} width="100%" height="380" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            <button>VIEW SONG DETAILS</button>
        </div>
    )
}

export default Spotify