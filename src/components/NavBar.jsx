import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css'
import Pdf from '../documents/Mikaela_Bukow_Resume.pdf';

function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

  return (
    <nav className='navbar'>
        <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>MIK</Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times': 'fa-solid fa-bars'} />
        </div>
        <ul className={click ? 'navbar-list active' : 'navbar-list'}>
          <li className='navbar-list_item'>
            <Link to="/" className='navbar-list_link' onClick={closeMobileMenu}>Home</Link>
          </li>
          <li className='navbar-list_item'>
            <Link to ="/about-me" className='navbar-list_link' onClick={closeMobileMenu}>About Me</Link>
          </li>
          <li className='navbar-list_item'> 
            <Link to="/portfolio" className='navbar-list_link' onClick={closeMobileMenu}>Portfolio</Link>
          </li>
          <li className='navbar-list_item'>
            <Link to={Pdf} target='_blank' aria-label='resume' className='navbar-list_link' onClick={closeMobileMenu}>Resume</Link>
          </li>
        </ul>
    </nav>
  )
}

export default NavBar
