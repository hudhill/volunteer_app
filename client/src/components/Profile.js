import React from "react";
import {ageFromDOB} from "../helpers/helpers"
import '../css/Profile.css';

const Profile = ({ user }) => {
  
  if (!user) return "loading...";
  return (
    <div className="profile-detail">
      <h2>{user.fullName}</h2>
      <p><strong>Age:</strong> {ageFromDOB(new Date(user.dob))}</p>
      <h3>About Me</h3>
      <p>{user.aboutMe}</p>
      <div>
      <h3>Points</h3>
      <p>{user.noOfPoints}</p>
      </div>
    </div>
  );
};

export default Profile;
