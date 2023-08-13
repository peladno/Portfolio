import { motion } from 'framer-motion';
import Button from './Button';

const PortfolioItems = ({
  portfolio,
  darkMode,
  pulsing,
  imageLoaded,
  imageLoading,
  skills,
}) => {
  return portfolio?.map((item) => (
    <div className='divPortfolio' key={item.id}>
      <h2 className={darkMode ? 'drk-item-portfolio-title' : ''}>
        {item.name}
      </h2>
      <div className={`img-container ${pulsing ? 'pulse' : ''} loadable`}>
        <motion.img
          className={'portfolioImg'}
          src={item.img}
          alt={item.name}
          loading='lazy'
          initial={{ opacity: 0 }}
          animate={{
            opacity: imageLoading ? 0 : 1,
          }}
          transition={{ opacity: { delay: 0.5, duration: 0.4 } }}
          onLoad={imageLoaded}
        />
      </div>
      <ul className='imgSkills'>
        {item?.skills.map((skill) => {
          const findSkills = skills.find((element) => element.name === skill);
          return (
            <li key={findSkills.name}>
              <img src={findSkills.img} alt={findSkills.name} />
            </li>
          );
        })}
      </ul>
      <p
        className={`itemDescription ${
          darkMode ? 'drk-item-portfolio-title' : ''
        }`}
      >
        {item.description}
      </p>
      <div className='divButtons'>
        {item?.github ? (
          <a href={item.github}>
            <Button
              type='button'
              buttonStyle={`${darkMode ? 'drk-btn--primary' : 'btn--primary'}`}
              buttonSize='btn--medium'
            >
              Github
            </Button>
          </a>
        ) : (
          <Button
            type='button'
            buttonStyle={`${darkMode ? 'drk-btn--primary' : 'btn--primary'}`}
            buttonSize='btn--medium'
            disabled
          >
            Github
          </Button>
        )}
        {item?.web ? (
          <a href={item.web}>
            <Button
              type='button'
              buttonStyle={`${darkMode ? 'drk-btn--primary' : 'btn--primary'}`}
              buttonSize='btn--medium'
            >
              Web
            </Button>
          </a>
        ) : (
          <Button
            type='button'
            buttonStyle={`${darkMode ? 'drk-btn--primary' : 'btn--primary'}`}
            buttonSize='btn--medium'
            disabled
          >
            Web
          </Button>
        )}
      </div>
    </div>
  ));
};

export default PortfolioItems;
