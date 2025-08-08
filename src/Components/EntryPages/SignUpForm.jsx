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
import { Link } from 'react-router-dom';

function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleTogglePassword = () => setShowPassword(!showPassword);
  const handleToggleConfirm = () => setShowConfirm(!showConfirm);

  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: 'auto',
        mt: 6,
        mb:6,
        p: 4,
        // border: '1px solid #e0e0e0',
        // borderRadius: 2,
        // boxShadow: 2,
        backgroundColor: 'white',
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom align="center">
        Sign Up
      </Typography>
      <Typography variant="body2" mb={3} align="center" color='grey'>
        Let's get started with your 30 days free trial
      </Typography>

      <Grid container spacing={2}>
        <Grid item size={12}>
          <TextField label="First Name" fullWidth variant="outlined" />
        </Grid>
        <Grid item size={12}>
          <TextField label="Last Name" fullWidth variant="outlined" />
        </Grid>
        <Grid item size={12}>
          <TextField label="Email" fullWidth variant="outlined" />
        </Grid>
        <Grid item size={12}>
          <TextField label="Birth Date" type="date" fullWidth InputLabelProps={{ shrink: true }} />
        </Grid>
        <Grid item size={12}>
          <TextField label="Phone Number" fullWidth variant="outlined" />
        </Grid>
        <Grid item size={12}>
          <TextField
            label="Password"
            type={showPassword ? 'text' : 'password'}
            fullWidth
            variant="outlined"
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
        <Grid item size={12}>
          <TextField
            label="Confirm Password"
            type={showConfirm ? 'text' : 'password'}
            fullWidth
            variant="outlined"
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
          <Button fullWidth variant="contained" sx={{ mt: 1, backgroundColor: '#1a237e'}}>
            Sign Up
          </Button>
        </Grid>
      </Grid>

      <Typography variant="body2" align="center" mt={2} color='grey'>
        Already have an account?{' '}
        <Link to="/" style={{ color: '#1a237e', textDecoration: 'none' }}>
          Log In
        </Link>
      </Typography>
    </Box>
  );
}

export default SignUpForm;
