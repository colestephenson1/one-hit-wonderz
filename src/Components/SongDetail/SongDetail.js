import React from "react";


const SongDetail = ({song}) => {
    const {song_name, artist, genre, Moods, release_date, bio, cover_image} = song
    return (
        <div>
            <img src={cover_image}/>
            <h2>{song_name}</h2>
            <p>{bio}{artist}{genre}{Moods}{release_date}</p>
        </div>
    )
}

export default SongDetail