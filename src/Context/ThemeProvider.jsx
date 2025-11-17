import React, { useState } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => setDark(prev => !prev);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      <div className={dark ? 'bg-neutral-800 text-white min-h-dvh' : 'bg-neutral-200 text-black min-h-screen'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
