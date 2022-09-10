import React from 'react';
import DecadeCard from '../DecadeCard/DecadeCard'
import { NavLink } from 'react-router-dom'
import './DecadeContainer.css'
import Form from '../Form/Form';

const DecadeContainer = ({songs}) => {

    const decadeKeys = Object.keys(songs);
    const decadeCards = decadeKeys.map(key => {
      return <DecadeCard
        picture={songs[key][0].cover_image}
        decade={key}
        key={Math.random()}
        />
    })

    return (
    
      <div className='decade-container'>
        <Form />
        {decadeCards}
      </div>
    )

}





export default DecadeContainer;
