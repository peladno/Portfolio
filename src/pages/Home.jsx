import About from "../components/About";
import ProfilePicture from "../components/ProfilePicture";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.main
      className="homeContainer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ProfilePicture />
      <About />
    </motion.main>
  );
}

export default Home;
