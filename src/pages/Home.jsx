import React from "react";
import About from "../components/about/About";
import ProfilePicture from "../components/profilePicture/ProfilePicture";



function Home() {
  return (
    <div className="homeContainer">
      <ProfilePicture />
      <About/>

    </div>
  );
}

export default Home;
