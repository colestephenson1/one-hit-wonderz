import './DecadeCard.css'
import React from 'react';
import { Link } from 'react-router-dom'

const DecadeCard = ({picture, decade}) => {

  return (
    <Link to={`/${decade}`}>
      <div className={decade}
        style={{
          backgroundImage: `url(${picture})`, 
          backgroundPosition: "left", 
          backgroundRepeat: "no-repeat",
          backgroundSize: "150px 150px"}}>
        {/* <img src={picture} alt={decade} className="cover-image"/> */}
        <h2>{decade.toUpperCase()}</h2>
      </div>
    </Link>
  )

}

export default DecadeCard;
