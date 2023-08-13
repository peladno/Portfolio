import logo from '../assets/images/logo.svg';
import logoDark from '../assets/images/logo-dark.svg';
import Burguer from './Burguer';
import useToggle from '../customHooks/useToggle';
import Close from './Close';
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { DarkModeContext } from '../context/ThemeContext';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import Switch from './Switch';

function NavBar() {
  const { darkMode } = useContext(DarkModeContext);
  const [value, toggleValue] = useToggle(false);

  document.body.style.overflow = `${value ? 'hidden' : 'visible'}`;
  //change dark bg from body of html
  const toggleBodyClass = (isDarkMode) => {
    if (isDarkMode) {
      document.body.classList.add('darkBody');
    } else {
      document.body.classList.remove('darkBody');
    }
  };

  useEffect(() => {
    toggleBodyClass(darkMode);
  }, [darkMode]);

  return (
    <>
      <Burguer toggleValue={toggleValue} />
      <div className={`${value ? 'navBarBlur' : ''}`}>
        <nav
          className={`navBarContainer ${value ? 'show' : 'hide'} ${
            darkMode ? 'drk-navBar' : ''
          }`}
        >
          <Close toggleValue={toggleValue} />
          <Link to='/home'>
            <img className='logo' src={darkMode ? logoDark : logo} alt='logo' />
          </Link>
          <ul className={`navBarLinks ${darkMode ? 'drk-navBarLinks' : ''}`}>
            <li>
              <Link to='/home' onClick={toggleValue}>
                Home
              </Link>
            </li>
            <li>
              <Link to='/experience' onClick={toggleValue}>
                Experience
              </Link>
            </li>
            <li>
              <Link to='/skills' onClick={toggleValue}>
                Skills
              </Link>
            </li>
            <li>
              <Link to='/portfolio' onClick={toggleValue}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to='/contact' onClick={toggleValue}>
                Contact
              </Link>
            </li>
            <div className='darkmode-switch'>
              <Switch />
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
