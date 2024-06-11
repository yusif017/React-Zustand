import React, { useState } from 'react';
import useAuthStore from './store';

const Login = () => {
  const [username, setUsername] = useState('');
  const setToken = useAuthStore((state) => state.setToken);

  const handleLogin = async () => {
    // Burada real login API çağırışını yerinə yetiririk
    // Aşağıdakı kodu öz API-ə uyğunlaşdırın
 
      setToken(username); // Token-i Zustand mağazasına qeyd edirik
   
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Token"
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
