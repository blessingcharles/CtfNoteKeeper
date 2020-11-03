import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = ()=>{
    return(
        <nav className='nav-wrapper red darken-3'>
            <div className='container'>
                <ul className='right'>
                    <li><Link to='/home'>home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar