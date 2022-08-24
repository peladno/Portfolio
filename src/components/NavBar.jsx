import logo from "../assets/images/logo.svg";
import Burguer from "./Burguer";
import useToggle from "../customHooks/useToggle";
import Close from "./Close";
import { Link } from "react-router-dom";

function NavBar() {
  const [value, toggleValue] = useToggle(false);

  return (
    <>
      <Burguer toggleValue={toggleValue} />
      <nav className={`navBarContainer ${value ? "" : "hide"}`}>
        <Close toggleValue={toggleValue} />
        <Link to="/home">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <ul className="navBarLinks">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/experience">Experience</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
