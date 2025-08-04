import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // fake credentials for demo purposes
    const hardcodedUsername = 'admin';
    const hardcodedPassword = 'password';
    if (username === hardcodedUsername && password === hardcodedPassword) {
      setIsAuthenticated(true);
      navigate('/dashboard'); // Redirect to dashboard on successful login
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" /><br />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" /><br />
        <button type="submit">Login</button>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </form>
    </div>
  );
};

export default Login;