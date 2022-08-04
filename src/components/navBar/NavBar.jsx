import React from "react";
import logo from "../../assets/images/logo.svg";
import Burguer from "../buttons/Burguer";
import useToggle from "../../customHooks/useToggle";
import Close from "../buttons/Close";

function NavBar() {
  const [value, toggleValue] = useToggle(false);

  return (
    <>
    <Burguer toggleValue={toggleValue} />
      <nav className={`navBarContainer ${value? '' : 'hide'}`}>
        <Close toggleValue={toggleValue}/>
        <img className="logo" src={logo} alt="logo" />
        <ul className="navBarLinks">
          <li>Home</li>
          <li>Experience</li>
          <li>Skills</li>
          <li>Porfolio</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
