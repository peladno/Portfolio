import Button from './Button';
import Certifications from './Certifications';
import { CV_URL } from '../API/URL';

function About() {
  const handleClick = () => window.open(`${CV_URL}`, '_blank');

  return (
    <div className='aboutContainer'>
      <div className='about'>
        <h1>About me</h1>
        <p>
          Pastry chef by profession who changed course to continue in the
          programming area. I am a driven and constantly evolving developer with
          experience in Javascript, React JS, React Native, Java, Kotlin
          (Android), MongoDB and Agile methodologies. I thrive in team
          environments and am always eager to learn and improve my skills to
          create high-quality and user-friendly solutions. I have a passion for
          building projects from the ground up and seeing them through to their
          final launch. I am looking for opportunities to apply my skills in a
          challenging and collaborative setting I am a person who loves to
          learn, I am responsible, self-taught and who knows how to work in a
          team. I'm bilingual, Spanish/English (IETLS 5.5) and curently learning
          Japanese.
        </p>
      </div>
      <div className='certifications'>
        {/* <Certifications /> */}
        <Button
          type='button'
          onClick={handleClick}
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          Download CV
        </Button>
      </div>
    </div>
  );
}

export default About;
