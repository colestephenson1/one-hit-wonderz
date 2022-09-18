import React from 'react';
import { Link } from 'react-router-dom'
import './Error.css'


const Error = () => {
  return (
    <Link to='/'><h4 className='error'>Invalid URL! Click this to return home.</h4></Link>
  )
}


export default Error;
