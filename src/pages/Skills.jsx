import Title from "../components/title/Title";
import { skills } from "../utils/data";

const items = skills.map((skill) => (
  <div key={skill.name}>
    <img src={skill.img} alt="skills" className="skill" />
  </div>
));

function Skills() {
  return (
    <main className="skillsMain">
      <Title>Skills</Title>
      <div className="skillsContainer">{items}</div>
    </main>
  );
}

export default Skills;
