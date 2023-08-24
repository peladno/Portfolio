import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import './styles/styles.scss';
import WebRoutes from './components/WebRoutes';
import { DarkModeProvider } from './context/ThemeContext';
import * as amplitude from '@amplitude/analytics-browser';
import { AMPLITUDE } from './API/URL';

function App() {
  amplitude.init(AMPLITUDE);

  return (
    <>
      <DarkModeProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/*' element={<WebRoutes />} />
          </Routes>
        </BrowserRouter>
      </DarkModeProvider>
    </>
  );
}

export default App;
