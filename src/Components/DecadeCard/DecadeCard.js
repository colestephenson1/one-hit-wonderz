import './DecadeCard.css'
import React from 'react';

const DecadeCard = ({picture, decade}) => {

  return (
    <div className={decade}>
      <img src={picture} alt={decade} />
      <h2>{decade}</h2>
    </div>
  )

}

export default DecadeCard;
