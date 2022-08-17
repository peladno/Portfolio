import { skills, portfolio } from "../utils/data";

const portfolioItems = portfolio.map((item) => (
  <div key={item.id}>
    <h2>{item.name}</h2>
    <p>{item.description}</p>
    <ul>
      {item.skills.map((skill) => {
        const findSkills = skills.find((element) => element.name == skill);
        return <li key={findSkills.name}><img src={findSkills.img} alt={findSkills.name}/></li>;
      })}
    </ul>
  </div>
));

function Portfolio() {
  return <main>{portfolioItems}</main>;
}

export default Portfolio;
