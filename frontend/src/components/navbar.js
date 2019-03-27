import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import '../stylesheets/navbar.css'

class NavBar extends Component {

    render () {
        return (
            <div className='navBarContainer'>
                <div className='leftNav'>
                    <NavLink className='homeLink' to={ '/' }>
                        <img className='homeImg' src='https://ovlc.org/wp-content/uploads/2014/07/hiking-icon.png' alt='home link' />
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default NavBar