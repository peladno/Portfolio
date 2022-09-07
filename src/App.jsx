import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import "./styles/styles.scss";
import WebRoutes from "./components/WebRoutes";
import { DarkModeProvider } from "./context/ThemeContext";

function App() {
  return (
    <>
      <DarkModeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/*" element={<WebRoutes />} />
          </Routes>
        </BrowserRouter>
      </DarkModeProvider>
    </>
  );
}

export default App;
