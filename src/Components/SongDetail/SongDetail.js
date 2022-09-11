import React from "react";
import './SongDetail.css'

const SongDetail = ({song}) => {
    const {song_name, artist, genre, moods, release_date, bio, cover_image} = song
    return (
        <div className='song-detail'>
            <img src={cover_image} className='cover-image'/>
            <p>
                <h2 className="song-title-details">{song_name.toUpperCase()}</h2>
                <h3>{artist}</h3>
                <br></br>
                {bio}
                <br></br>
                <br></br>
                GENRE: {genre}
                <br></br>
                MOODS: {moods.join(' · ')}
                <br></br>
                RELEASE DATE: {release_date}
            </p>
        </div>
    )
}

export default SongDetail
