import React from 'react';
import DecadeCard from '../DecadeCard/DecadeCard'

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
        {decadeCards}
      </div>
    )

}





export default DecadeContainer;
