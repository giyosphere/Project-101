import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '../components/common/Button';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
export default function LoginPage() {

   const { login } = useAuth();

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');



  const navigate = useNavigate();

  const handleLogin = () => {

    const success = login(username, password);
   if(success){
    navigate('/dashboard');
  
  }else{
    alert('invalid Credentials')
   }

  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          bgcolor: 'background.paper',
          width: 320,
        }}
      >
        <LockOutlinedIcon sx={{alignSelf: 'center'}}/>
        <Typography variant="h5" textAlign="center">
          POS
        </Typography>
        <Typography variant="subtitle" textAlign="center" sx={{color: 'grey'}}>
          Sign in to continue
        </Typography>

        <TextField
          required
          id="username-input"
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <TextField
          required
          id="password-input"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button label="Sign In" fullWidth onClick={handleLogin} />
      </Box>
    </Box>
  );
}