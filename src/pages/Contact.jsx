import ContactForm from '../components/ContactForm';
import Title from '../components/Title';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <main key='contact' className='mainContact'>
      <Title>Contact me</Title>
      <ContactForm />
    </main>
  );
}

export default Contact;
