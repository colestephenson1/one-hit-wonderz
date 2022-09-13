import React from 'react';
import DecadeCard from '../DecadeCard/DecadeCard'
import { NavLink } from 'react-router-dom'
import './DecadeContainer.css'
import Form from '../Form/Form';

const DecadeContainer = ({songs}) => {

    const decadeKeys = Object.keys(songs);
    const decadeCards = decadeKeys.map(key => {
      
    let coverIndex = Math.floor(Math.random() * songs[key].length);
    let song = songs[key][coverIndex]

      return <DecadeCard
        picture={song.cover_image}
        decade={key}
        key={Math.random()}
        />
    })

    return (

      <div className='decade-body'>
        <div className='decade-container'>
         {decadeCards}
        </div>
      </div>
    )

}





export default DecadeContainer;
