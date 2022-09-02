import ContactForm from "../components/ContactForm";
import Title from "../components/Title";
import {motion} from "framer-motion";

function Contact() {
  return (
    <motion.main 
    className="mainContact"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
      <Title>Contact me</Title>
      <ContactForm />
    </motion.main>
  );
}

export default Contact;
