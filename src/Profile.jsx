import React from 'react';
import useAuthStore from './store';

const Profile = () => {
  const token = useAuthStore((state) => state.token);

  return (
    <div>
      {token ? <p>Token: {token}</p> : <p>No token found</p>}
    </div>
  );
};

export default Profile;
