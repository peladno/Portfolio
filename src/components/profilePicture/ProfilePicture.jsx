import picture from "../../assets/images/profile.jpg";

function ProfilePicture() {
  return (
    <div className="pictureContainer">
      <div>
        <img src={picture} alt="profile" />
      </div>
    </div>
  );
}

export default ProfilePicture;
