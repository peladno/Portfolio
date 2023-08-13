import About from '../components/About';
import ProfilePicture from '../components/ProfilePicture';
import { motion } from 'framer-motion';

function Home() {
  return (
    <main key='home' className='homeContainer'>
      <ProfilePicture />
      <About />
    </main>
  );
}

export default Home;
