import { useContext } from 'react';
import picture from '../assets/images/profile.jpg';
import { DarkModeContext } from '../context/ThemeContext';

function ProfilePicture() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={`pictureContainer ${darkMode && 'drk-pictureContainer'}`}>
      <div>
        <img src={picture} alt='profile' />
      </div>
    </div>
  );
}

export default ProfilePicture;
