import React from 'react'
import './navbar.css';
import contact from '../../assets/contact.png'
import { Link } from 'react-scroll';
import Menu from '../../assets/Menu.png'
import { useState } from 'react';


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navbar">
            <h1>SHALINI SINGH</h1>
            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
                <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Projects</Link>
            </div>
            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}>
                <img src={contact} alt='' className='desktopMenuImg' />Contact Me
            </button>

            <img src={Menu} alt="Menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
            <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Projects</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Contact</Link>
            </div>

        </nav>
    )
}

export default Navbar;
