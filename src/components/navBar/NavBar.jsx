import logo from "../../assets/images/logo.svg";
import Burguer from "../buttons/Burguer";
import useToggle from "../../customHooks/useToggle";
import Close from "../buttons/Close";
import { Link } from "react-router-dom";

function NavBar() {
  const [value, toggleValue] = useToggle(false);

  return (
    <>
      <Burguer toggleValue={toggleValue} />
      <nav className={`navBarContainer ${value ? "" : "hide"}`}>
        <Close toggleValue={toggleValue} />
        <img className="logo" src={logo} alt="logo" />
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
