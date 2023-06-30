import React, { useState, useEffect } from 'react';
import './darkMode.css';
import AppModeSwitch from './AppModeSwitch';

function AppTheme() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'dark'
  );
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`AppTheme ${theme}`}>
      <div onClick={toggleTheme}><AppModeSwitch /></div>
    </div>
  );
}
export default AppTheme;