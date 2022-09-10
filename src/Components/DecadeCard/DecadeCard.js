import './DecadeCard.css'
import React from 'react';
import { NavLink } from 'react-router-dom'

const DecadeCard = ({picture, decade}) => {

  return (
    <NavLink to={`/${decade}`}>
      <div className={decade}>
        <img src={picture} alt={decade} className="cover-image"/>
        <h2>{decade}</h2>
      </div>
    </NavLink>
  )

}

export default DecadeCard;
