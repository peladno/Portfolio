import logo from "../assets/images/logo.svg";
import Burguer from "./Burguer";
import useToggle from "../customHooks/useToggle";
import Close from "./Close";
import { Link } from "react-router-dom";

function NavBar() {
  const [value, toggleValue] = useToggle(false);

  document.body.style.overflow = `${value ? "hidden" : "visible"}`;

  return (
    <>
      <Burguer toggleValue={toggleValue} />
      <div className={`${value ? "navBarBlur" : ""}`}>
        <nav className={`navBarContainer ${value ? "show" : "hide"}`}>
          <Close toggleValue={toggleValue} />
          <Link to="/home">
            <img className="logo" src={logo} alt="logo" />
          </Link>
          <ul className="navBarLinks">
            <li>
              <Link to="/home" onClick={toggleValue}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/experience" onClick={toggleValue}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="/skills" onClick={toggleValue}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="/portfolio" onClick={toggleValue}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleValue}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
