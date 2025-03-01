import React from "react";

const UserProfile = ({ user }) => {
  return (
    <div className="profile-section">
        <div className="profile-cover relative">
          <img className="profile-avatar absolute" src={user.avatar} alt={user.name} />
        </div>
        <div className="profile-info px-6 pb-3 text-center">
          <h3 className="f-18 fw-5 primary-text-black m-1">{user.name}</h3>
          <p className="fw-4 f-14 primary-text-black m-1">{user.headline}</p>
          <p className="f-13 secondary-text-grey m-1">{user.location}</p>
        </div>
      </div>
  );
};

export default UserProfile;