import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ProfileCard.css";

const ProfileCard = ({ onClose }) => {
  const user = {
    name: "Himanshi",
    email: "himanshi@gmail.com",
    aadhar: "1234-5678-9012",
    profilePic:
      "https://e7.pngegg.com/pngimages/364/466/png-clipart-github-website-development-software-developer-programmer-github-horse-mammal.png",
  };

  // Handle Logout
  const handleLogout = () => {
    alert("Logout successfully");
    onClose(); // Hide profile card
  };

  return (
    <div className="profile-card">
      <div className="profile-header">
        <img src={user.profilePic} alt="Profile" className="profile-pic" />
        <div className="user-info">
          <h5>Hi, {user.name}</h5>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Aadhar-Card:</strong> {user.aadhar}
          </p>
        </div>
      </div>
      <button className="btn btn-sm  logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default ProfileCard;
