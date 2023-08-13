import Title from '../components/Title';
import { skills } from '../utils/data';
import { motion } from 'framer-motion';

const items = skills.map((skill) => (
  <div key={skill.name}>
    <img src={skill.img} alt='skills' className='skill' />
  </div>
));

function Skills() {
  return (
    <main key='skills' className='skillsMain'>
      <Title>Skills</Title>
      <div className='skillsContainer'>{items}</div>
    </main>
  );
}

export default Skills;
