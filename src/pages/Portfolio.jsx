import { useContext, useState } from 'react';
import Title from '../components/Title';
import { skills, portfolio } from '../utils/data';
import { DarkModeContext } from '../context/ThemeContext';
import PortfolioItems from '../components/PortfolioItems';

function Portfolio() {
  const { darkMode } = useContext(DarkModeContext);
  const [imageLoading, setImageLoading] = useState(true);
  const [pulsing, setPulsing] = useState(true);

  const imageLoaded = () => {
    setImageLoading(false);
    setTimeout(() => setPulsing(false), 600);
  };

  return (
    <main key='portfolio' className='mainPortfolio'>
      <Title>Portfolio</Title>
      <div className='portfolioContainer'>
        <PortfolioItems
          portfolio={portfolio}
          darkMode={darkMode}
          imageLoaded={imageLoaded}
          imageLoading={imageLoading}
          pulsing={pulsing}
          skills={skills}
        />
      </div>
    </main>
  );
}

export default Portfolio;
