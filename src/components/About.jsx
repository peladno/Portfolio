import Button from "./Button";
import Certifications from "./Certifications";
import { CV_URL } from "../API/URL";

function About() {
  const handleClick = () => window.open(`${CV_URL}`, "_blank");

  return (
    <div className="aboutContainer">
      <div className="about">
        <h1>About me</h1>
        <p>
          Pastry chef by profession who changed course to continue in the
          programming area. At this moment I am studying the FullStack developer
          career at the CoderHouse academy, managing HTML, CSS (SASS) and
          programming languages such as: Javascript and ReactJS. Right now I'm
          taking the BackEnd course learning Express JS, SQL, NodeJS, MongoDB,
          course that ends in October, I am a person who loves to learn, I am
          responsible, self-taught and who knows how to work in a team. I'm
          bilingual, Spanish/English (IETLS 5.5) and curently learning Japanese.
        </p>
      </div>
      <div className="certifications">
        <Certifications />
        <Button
          type="button"
          onClick={handleClick}
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Download CV
        </Button>
      </div>
    </div>
  );
}

export default About;
