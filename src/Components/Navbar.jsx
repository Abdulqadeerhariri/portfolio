import React, { useContext } from 'react';
import './component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../Context/ThemeContext';


const Navbar = () => {
  const { dark, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div className="nav min-w-dvw flex flex-row justify-around items-center pt-2.5">
        <div className="title font-bold text-xs" ><h1>Hariri.Code</h1></div>
        <div className="menu flex flex-row items-center ">
          <nav className='flex flex-row w-150 justify-between items-center text-lg font-bold [&>a]:hover:cursor-pointer [&>a]:hover:-translate-y-0.5 [&>a]:transition-all [&>a]:duration-300'>
            <Link to="/" className={dark ? '' : 'color'}>Home</Link>
            <Link to="/about" className={dark ? '' : 'color'}>About</Link>
            <Link to="/project" className={dark ? '' : 'color'}>Project</Link>
            <Link to="/profile" className={dark ? '' : 'color'}>Profile</Link>
            <Link to="/contact" className={dark ? '' : 'color'}>Contact & Resume</Link>
            <FontAwesomeIcon icon={dark ? faMoon : faLightbulb} onClick={toggleTheme} />
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navbar