import Title from "../components/Title";
import { skills } from "../utils/data";
import { motion } from "framer-motion";

const items = skills.map((skill) => (
  <div key={skill.name}>
    <img src={skill.img} alt="skills" className="skill" />
  </div>
));

function Skills() {
  return (
    <motion.main
      className="skillsMain"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Title>Skills</Title>
      <div className="skillsContainer">{items}</div>
    </motion.main>
  );
}

export default Skills;
