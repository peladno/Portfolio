import Button from "../components/Button";
import Title from "../components/Title";
import { skills, portfolio } from "../utils/data";

const portfolioItems = portfolio.map((item) => (
  <div className="divPortfolio" key={item.id}>
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
    <p>{item.description}</p>
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
  </div>
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
