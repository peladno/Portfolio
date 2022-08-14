import Button from "../buttons/Button";

function About() {
  return (
    <div className="aboutContainer">
      <div className="about">
        <h1>About me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          accusamus libero ex possimus quisquam sed debitis recusandae,
          obcaecati, deserunt, consequatur dolore nihil sunt voluptas quaerat
          est! Veritatis odio quod ut velit dolore, eligendi nam fuga
          perspiciatis dignissimos, vel reprehenderit at exercitationem harum
          culpa quos sequi, dolorem ipsum? Dicta, facilis optio.
        </p>
      </div>
      <div className="certifications">
        <h2>Certifications</h2>
        <ul>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
        <Button>Download CV</Button>
      </div>
    </div>
  );
}

export default About;
