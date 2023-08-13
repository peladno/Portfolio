import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from '../pages/Home';
import Experience from '../pages/Experience';
import Skills from '../pages/Skills';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route
          path='/home'
          element={
            <AnimatePage>
              <Home />
            </AnimatePage>
          }
        />
        <Route
          path='/experience'
          element={
            <AnimatePage>
              <Experience />
            </AnimatePage>
          }
        />
        <Route
          path='/skills'
          element={
            <AnimatePage>
              <Skills />
            </AnimatePage>
          }
        />
        <Route
          path='/portfolio'
          element={
            <AnimatePage>
              <Portfolio />
            </AnimatePage>
          }
        />
        <Route
          path='/contact'
          element={
            <AnimatePage>
              <Contact />
            </AnimatePage>
          }
        />
        <Route
          path='/*'
          element={
            <AnimatePage>
              <NotFound />
            </AnimatePage>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

// Component to handle animation of each page
function AnimatePage({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedRoutes;
