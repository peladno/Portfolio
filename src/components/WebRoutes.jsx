import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import AnimatedRoutes from "./AnimatedRoutes";

function WebRoutes() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/*" element={<AnimatedRoutes />} />
      </Routes>
      <Footer />
    </>
  );
}

export default WebRoutes;
