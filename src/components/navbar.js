import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import '../css/navbar.css'

class NavBar extends Component {

    render () {
        return (
            <div className='navBarContainer'>
                <div className='leftNav'>
                    <NavLink className='homeLink' to={ '/' }>
                        <img className='homeImg' src='https://i.imgur.com/9lzUu2x.png' alt='home link' />
                    </NavLink>
                </div>
                <div className='navText'>
                    <div className='title'>
                        Take a hike!
                    </div>
                    <p className='smallTitle navSTitle'>
                        Find a trail near you
                    </p>
                </div>
            </div>
        )
    }
}

export default NavBar