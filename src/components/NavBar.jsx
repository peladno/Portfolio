import logo from '../assets/images/logo.svg';
import Burguer from './Burguer';
import useToggle from '../customHooks/useToggle';
import Close from './Close';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../context/ThemeContext';

function NavBar() {
  const { darkMode, toggleTheme } = useContext(DarkModeContext);
  const [value, toggleValue] = useToggle(false);

  console.log(darkMode);

  const handleToggle = () => {
    toggleTheme();
  };

  document.body.style.overflow = `${value ? 'hidden' : 'visible'}`;

  return (
    <>
      <Burguer toggleValue={toggleValue} />
      <div className={`${value ? 'navBarBlur' : ''}`}>
        <nav className={`navBarContainer ${value ? 'show' : 'hide'}`}>
          <Close toggleValue={toggleValue} />
          <Link to='/home'>
            <img className='logo' src={logo} alt='logo' />
          </Link>
          <ul className='navBarLinks'>
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
            {/* <label class='switch'>
              <input type='checkbox' onChange={handleToggle} />
              <span class='slider'></span>
            </label> */}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
