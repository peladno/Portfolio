import { useContext } from "react";
import { DarkModeContext } from "../context/ThemeContext";

function Switch() {
  const { darkMode, toggleTheme } = useContext(DarkModeContext);

  return (
    <>
      <label className="switch">
        <input type="checkbox" onClick={toggleTheme()}/>
        <span className="slider"></span>
      </label>
    </>
  );
}

export default Switch;
