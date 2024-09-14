import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const LoginPage = () => {
  const { setUser } = useContext(AppContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    // placeholder login logic
    if (username === 'admin' && password === 'password') {
      setUser({ username, role: 'admin' });
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h2>Login</h2>
      </Grid>
      <Grid item xs={12}>
        <TextField label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Grid>
      <Grid item xs={12}>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Login
        </Button>
      </Grid>
    </Grid>
  );
};

export default LoginPage;