import About from "../components/About";
import ProfilePicture from "../components/ProfilePicture";

function Home() {
  return (
    <>
      {/*<div className="blur"></div>*/}
      <div className="homeContainer">
        <ProfilePicture />
        <About />
      </div>
    </>
  );
}

export default Home;
