import React from "react";
import github from "../../assets/images/github.svg";
import linkedin from "../../assets/images/linkedin.svg";
import {Link} from "react-router-dom"

function Footer() {
  return (
    <>
      <footer className="footerContainer">
        <div className="footerContent">
          <ul className="footerLinks">
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
          <ul className="socialMedia">
            <li>
              <img src={linkedin} alt="linkein" />
            </li>
            <li>
              <img src={github} alt="github" />
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
