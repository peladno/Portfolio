import { Link } from 'react-router-dom';
import luckyCat from '../assets/images/cat.svg';
import Button from '../components/Button';
import { motion } from 'framer-motion';

function NotFound() {
  return (
    <main className='notFoundMain'>
      <h2>Error 404</h2>
      <p className='notFoundP'>
        Oh no!, You have no luck... Please go back to home.
      </p>
      <img className='luckyCat' src={luckyCat} alt='cat' />
      <Link to={'/home'}>
        <Button
          type='buttn'
          buttonStyle='btn--primary'
          buttonSize='btn--medium'
        >
          Home
        </Button>
      </Link>
    </main>
  );
}

export default NotFound;
