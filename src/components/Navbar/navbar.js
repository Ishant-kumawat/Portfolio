import React from 'react'
import './navbar.css';
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
  <nav className='navbar'>
   <div className='navmenu'>
   <Link className='navlist' ><p id='point'>01.</p>About</Link>
   <Link className='navlist'><p id='point'>02.</p>Experience</Link>
   <Link className='navlist'><p id='point'>03.</p>Work</Link>
   <Link className='navlist'><p id='point'>04.</p>Contact</Link>
   </div>
   <div id='navbtn'>
   <button className='navbtn'>Resume</button>
   <span id='navspan'></span>
   </div>
    
  </nav>
  )
}

export default Navbar
