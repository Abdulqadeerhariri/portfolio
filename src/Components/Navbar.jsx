import React, { useContext, useState } from 'react';
import './component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faMoon, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../Context/ThemeContext';

const Navbar = () => {
  const { dark, toggleTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/project', label: 'Projects' },
    { to: '/profile', label: 'Profile' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="nav fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl text-slate-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 px-6 py-4">
        <Link to="/" className="brand inline-flex items-center gap-2 text-lg font-semibold tracking-wide">
          <span className="brand-dot inline-block h-3 w-3 rounded-full bg-emerald-400" />
          Hariri.Code
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {links.map(item => (
            <Link key={item.to} to={item.to} className="transition hover:text-emerald-300">
              {item.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            className="icon-btn rounded-full p-2 text-slate-100 hover:bg-white/10"
            aria-label="Toggle Theme"
          >
            <FontAwesomeIcon icon={dark ? faMoon : faLightbulb} />
          </button>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="icon-btn rounded-full p-2 text-slate-100 hover:bg-white/10"
            aria-label="Toggle Theme"
          >
            <FontAwesomeIcon icon={dark ? faMoon : faLightbulb} />
          </button>
          <button
            type="button"
            className="icon-btn rounded-full p-2 text-slate-100 hover:bg-white/10"
            onClick={() => setOpen(prev => !prev)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <FontAwesomeIcon icon={open ? faXmark : faBars} />
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu border-t border-white/10 bg-slate-950/95 md:hidden">
          <div className="max-w-7xl mx-auto px-6 py-4 space-y-3">
            {links.map(item => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block rounded-3xl bg-slate-900/90 px-4 py-3 text-base font-medium transition hover:bg-slate-800/95"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar