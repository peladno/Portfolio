import { useContext } from 'react';
import { DarkModeContext } from '../context/ThemeContext';

function Title({ children }) {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={`title `}>
      <h1 className={darkMode ? 'drk-title' : ''}>{children}</h1>
    </div>
  );
}

export default Title;
