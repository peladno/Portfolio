import { useContext } from 'react';
import { DarkModeContext } from '../context/ThemeContext';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

function Switch() {
  const { darkMode, toggleTheme } = useContext(DarkModeContext);

  const handleToggle = () => {
    toggleTheme();
  };

  return (
    <DarkModeSwitch
      checked={darkMode}
      onChange={handleToggle}
      size={30}
      sunColor='#d7a746'
    />
  );
}

export default Switch;
