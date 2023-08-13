import { useContext } from 'react';
import { Link } from 'react-router-dom';
import github from '../assets/images/github.svg';
import linkedin from '../assets/images/linkedin.svg';
import { DarkModeContext } from '../context/ThemeContext';

function Footer() {
  const { darkMode } = useContext(DarkModeContext);

  const footerContainerClass = `footerContainer ${
    darkMode ? 'drk-footerContainer' : ''
  }`;
  const socialMediaClass = `socialMedia ${darkMode ? 'drk-socialMedia' : ''}`;

  const footerLinks = [
    { path: '/home', label: 'Home' },
    { path: '/experience', label: 'Experience' },
    { path: '/skills', label: 'Skills' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' },
  ];

  const socialMediaLinks = [
    {
      url: 'https://www.linkedin.com/in/javier-perez-u/',
      icon: linkedin,
      alt: 'LinkedIn',
    },
    { url: 'https://github.com/peladno', icon: github, alt: 'GitHub' },
  ];

  return (
    <footer className={footerContainerClass}>
      <div className='footerContent'>
        <ul className='footerLinks'>
          {footerLinks.map(({ path, label }) => (
            <li key={path}>
              <Link to={path}>{label}</Link>
            </li>
          ))}
        </ul>
        <ul className={socialMediaClass}>
          {socialMediaLinks.map(({ url, icon, alt }) => (
            <li key={url}>
              <a href={url} target='_blank' rel='noopener noreferrer'>
                <img src={icon} alt={alt} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
