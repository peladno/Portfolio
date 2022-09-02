import Button from "../components/Button";
import Title from "../components/Title";
import { skills, portfolio } from "../utils/data";
import { motion } from "framer-motion";

const portfolioItems = portfolio.map((item) => (
  <motion.main
    className="divPortfolio"
    key={item.id}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <h2>{item.name}</h2>
    <img className="portfolioImg" src={item.img} alt={item.name} />
    <ul className="imgSkills">
      {item.skills.map((skill) => {
        const findSkills = skills.find((element) => element.name == skill);
        return (
          <li key={findSkills.name}>
            <img src={findSkills.img} alt={findSkills.name} />
          </li>
        );
      })}
    </ul>
    <p className="itemDescription">{item.description}</p>
    <div className="divButtons">
      <a href="">
        <Button
          type="button"
          buttonStyle="btn--primary"
          buttonSize="btn--medium"
        >
          Github
        </Button>
      </a>
      <a href="">
        <Button
          type="button"
          buttonStyle="btn--primary"
          buttonSize="btn--medium"
        >
          Web
        </Button>
      </a>
    </div>
  </motion.main>
));

function Portfolio() {
  return (
    <main className="mainPortfolio">
      <Title>Portfolio</Title>
      <div className="portfolioContainer">{portfolioItems}</div>
    </main>
  );
}

export default Portfolio;
