import { Chrono } from 'react-chrono';
import Title from '../components/Title';
import { motion } from 'framer-motion';
import { experience } from '../utils/data';

function Experience() {
  return (
    <motion.main
      className='experienceMain'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Title>Experience</Title>
      <div className='experienceContainer'>
        {/* <h2>Error 404</h2>
        <p>Experience not found :(, I'm looking for my first job.</p> */}
        <div className='timeline'>
          <Chrono
            items={experience}
            mode='VERTICAL_ALTERNATING'
            theme={{
              primary: 'rgba(22, 83, 107, 1)',
              secondary: 'rgba(237, 60, 31, 1)',
              cardBgColor: 'white',
              titleColor: 'black',
              titleColorActive: 'rgba(234, 224, 205, 1)',
              cardTitleColor: 'rgba(22, 83, 107, 1)',
            }}
          />
        </div>
      </div>
    </motion.main>
  );
}

export default Experience;
