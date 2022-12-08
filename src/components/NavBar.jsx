import React, {Fragment, useState} from 'react'
import {HiSearch} from 'react-icons/hi'
import '../style/NavBarStyle.css'

function NavBar() {
    const[toggle, setToggle] = useState(true)
  return (
    <Fragment>
        <nav className={toggle ? '' : 'navBarColor'}>
            <div className='nav-options'>
                <h1 id={toggle ? '' : 'heading'}>SOKUFLIX</h1>
                <span id={toggle ? '' : 'MoviesLight'}>Movies</span>
                <span id={toggle ? '' : 'MoviesLight'}>Tv Shows</span>
                <span id={toggle ? '' : 'MoviesLight'}>Trending</span>
                <span id={toggle ? '' : 'MoviesLight'}>Pricing</span>
            </div>
            <div className="input-group">
                <input type="text" placeholder="Search Whatever You Want" />
                <HiSearch fontSize={21} color="black" id='search' />
                <div id="Color-switcher" onClick={() => setToggle(!toggle)}>
                    <div id={toggle ? 'Color-switcher-mover' : 'Color-switcher-moved'}></div>
                </div>
            </div>
        </nav>
    </Fragment>
  )
}

export default NavBar