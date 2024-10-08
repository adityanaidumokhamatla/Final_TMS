import React from 'react';
import Swal from 'sweetalert2';
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormLabel, TextField, Typography, Stack, Card, Link, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import './Login.css';

// Styled component for the Card
const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '450px',
  },
  boxShadow: 'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
}));

// Styled component for the container
const Container = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: '10vh',
  position: 'relative',
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage: 'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
      backgroundImage: 'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
  },
}));

export default function Login() {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  
  const handleLogin = (e) => {
    e.preventDefault();
    
    const isLoginSuccessful = true; // Replace with actual logic

    if (isLoginSuccessful) {
      Swal.fire({
        title: 'Success!',
        text: 'You have logged in successfully!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Login failed. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  const validateInputs = () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    return isValid;
  };

  return (
    <Container direction="column" justifyContent="center">
      <StyledCard variant="outlined">
        <Typography component="h1" variant="h4" sx={{ fontSize: 'clamp(2rem, 10vw, 2.15rem)', textAlign: 'center' }}>
          Login
        </Typography>
        <Box component="form" onSubmit={handleLogin} noValidate sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}>
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <TextField
              error={emailError}
              helperText={emailErrorMessage}
              id="email"
              type="email"
              name="email"
              placeholder="your@email.com"
              autoComplete="email"
              required
              fullWidth
              variant="outlined"
              color={emailError ? 'error' : 'primary'}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <TextField
              error={passwordError}
              helperText={passwordErrorMessage}
              name="password"
              placeholder="••••••"
              type="password"
              id="password"
              autoComplete="current-password"
              required
              fullWidth
              variant="outlined"
              color={passwordError ? 'error' : 'primary'}
            />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={validateInputs}
          >
            Login
          </Button>
          <Typography sx={{ textAlign: 'center' }}>
            Don&apos;t have an account?{' '}
            <Link href="/signup" variant="body2">
              Sign Up
            </Link>
          </Typography>
        </Box>
        <Divider>or</Divider>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Button
            type="button"
            fullWidth
            variant="outlined"
            onClick={() => alert('Sign in with Google')}
            startIcon={<GoogleIcon />}
          >
            Sign in with Google
          </Button>
          <Button
            type="button"
            fullWidth
            variant="outlined"
            onClick={() => alert('Sign in with Facebook')}
            startIcon={<FacebookIcon />}
          >
            Sign in with Facebook
          </Button>
        </Box>
      </StyledCard>
    </Container>
  );
}
