import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import "./styles/styles.scss";
import WebRoutes from "./components/WebRoutes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/*" element={<WebRoutes />} />
      </Routes>
    </>
  );
}

export default App;
