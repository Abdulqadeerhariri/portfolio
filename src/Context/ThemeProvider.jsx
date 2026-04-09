import React, { useState } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => setDark(prev => !prev);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      <div className={dark ? 'dark-mode bg-slate-950 text-white min-h-screen transition-colors duration-500' : 'light-mode bg-slate-50 text-black min-h-screen transition-colors duration-500'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
