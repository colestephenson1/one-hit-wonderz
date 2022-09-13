import React from 'react'
import logo from '../../images/logo-ohw.png'
import Form from '../Form/Form'
import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = ({clearState}) => {
    return (
        <div className="full-header">
            <div>
                <NavLink to="/">
                    <img src={logo} alt='logo' className='logo' onClick={() => clearState()}/>
                </NavLink>
            </div>
        </div>
    )
}

export default Header
