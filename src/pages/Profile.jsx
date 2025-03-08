import React, { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.id]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile Updated:", profile);
    alert("Profile Updated Successfully!");
  };

  return (
    <>
      <h2 className="heading">Profile</h2>

      <div className="profile-container">
        <img src="ppic.png" alt="Profile Icon" className="profile-icon" />

        <form className="input-group" onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" value={profile.firstName} onChange={handleChange} />

          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" value={profile.lastName} onChange={handleChange} />

          <label htmlFor="mobile">Mobile Number:</label>
          <input type="text" id="mobile" value={profile.mobile} onChange={handleChange} />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={profile.email} onChange={handleChange} />

          <button type="submit">Save Changes</button>
        </form>
      </div>
    </>
  );
};

export default Profile;
