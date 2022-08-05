import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navBar/NavBar";
import Index from "./pages/Index";
import Home from "./pages/Home";
import "./styles/styles.scss";
import WebRoutes from "./components/webRoutes/WebRoutes";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/index/*" element={<WebRoutes />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  );
}

export default App;
