import Title from "../components/Title";
import { motion } from "framer-motion";

function Experience() {
  return (
    <motion.main
      className="experienceMain"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Title>Experience</Title>
      <div className="experienceContainer">
        <h2>Error 404</h2>
        <p>Experience not found :(, I'm looking for my first job.</p>
      </div>
    </motion.main>
  );
}

export default Experience;
