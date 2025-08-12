import React, { useState } from 'react';
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  IconButton,
  InputAdornment
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link} from 'react-router-dom';


function SignUpForm() {
 
  const [fromData, setFromData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    birthdate: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleTogglePassword = () => setShowPassword(!showPassword);
  const handleToggleConfirm = () => setShowConfirm(!showConfirm);

  const handleChange = (e) => {
    setFromData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', fromData);
  };


  

  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: 'auto',
        p: 4,
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom align="center">
        Sign Up
      </Typography>
      <Typography variant="body2" mb={3} align="center" color="grey">
        Let's get started with your 30 days free trial
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item size={12}>
            <TextField
              label="First Name"
              fullWidth
              variant="outlined"
              name="firstname"
              value={fromData.firstname}
              onChange={handleChange}
            />
          </Grid>

          <Grid item  size={12}>
            <TextField
              label="Last Name"
              fullWidth
              variant="outlined"
              name="lastname"
              value={fromData.lastname}
              onChange={handleChange}
            />
          </Grid>

          <Grid item  size={12}>
            <TextField
              label="Email"
              fullWidth
              variant="outlined"
              name="email"
              value={fromData.email}
              onChange={handleChange}
            />
          </Grid>

          <Grid item  size={12}>
            <TextField
              label="Birth Date"
              type="date"
              fullWidth
              name="birthdate"
              value={fromData.birthdate}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>

          <Grid item  size={12}>
            <TextField
              label="Phone Number"
              fullWidth
              variant="outlined"
              name="phone"
              value={fromData.phone} 
              onChange={handleChange}
            />
          </Grid>

          <Grid item  size={12}>
            <TextField
              label="Password"
              type={showPassword ? 'text' : 'password'}
              fullWidth
              variant="outlined"
              name="password"
              value={fromData.password}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleTogglePassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item  size={12}>
            <TextField
              label="Confirm Password"
              type={showConfirm ? 'text' : 'password'}
              fullWidth
              variant="outlined"
              name="confirmPassword"
              value={fromData.confirmPassword}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleToggleConfirm} edge="end">
                      {showConfirm ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item size={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, backgroundColor: '#1a237e' }}
            >
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </form>

      <Typography variant="body2" align="center" mt={2} color="grey">
        Already have an account?{' '}
        <Link to="/login"  style={{ color: '#1a237e', textDecoration: 'none' }}>
          Log In
        </Link>
      </Typography>
    </Box>
  );
}

export default SignUpForm;
