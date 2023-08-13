import { Link } from 'react-router-dom';
import Button from '../components/Button';
import indexLogo from '../assets/images/indexLogo.svg';
import indexLogoDark from '../assets/images/logo-dark.svg';
import { useContext } from 'react';
import { DarkModeContext } from '../context/ThemeContext';
import Switch from '../components/Switch';

function Index() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <>
      <main className={`indexMain ${darkMode && 'drk-indexMain'}`}>
        <div className='switch-container'>
          <Switch />
        </div>
        <img src={darkMode ? indexLogoDark : indexLogo} alt='' />
        <Link to='/home' style={{ textDecoration: 'none' }}>
          <Button
            type='button'
            buttonStyle={`${darkMode ? 'drk-btn--primary' : 'btn--index'}`}
            buttonSize='btn--medium'
          >
            Enter
          </Button>
        </Link>
      </main>
    </>
  );
}

export default Index;
