import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import '../styles/Profile.css';

const Profile = () => {
  const { authState } = useContext(AuthContext);

  if (!authState.isAuthenticated) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <div className="profile-info">
        <p><strong>Username:</strong> {authState.user.username}</p>
        <p><strong>Email:</strong> {authState.user.email}</p>
      </div>
    </div>
  );
};

export default Profile;
