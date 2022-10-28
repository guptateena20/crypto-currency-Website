import React from 'react'
import { FaCoins } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
        <>
            <NavLink to="/">
                <div className='navbar'>
                    <FaCoins className='icon' />
                    <h1>Coin <span className='purple'> Search</span></h1>
                </div>
            </NavLink>
        </>
    )
}

export default Navbar