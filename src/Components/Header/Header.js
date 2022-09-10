import React from 'react'
import logo from '../../images/logo-ohw.png'
import Form from '../Form/Form'
import './Header.css'

const Header = () => {
    return (
        <div className="full-header">
            <div>
                <img src={logo} alt='logo' className='logo'/>
            </div>
            <div>
                <Form />
            </div>
        </div>
    )
}

export default Header