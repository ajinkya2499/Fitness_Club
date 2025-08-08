import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Box,
  Typography
} from '@mui/material';
import LOGO from '../../assets/Images/FreeSample-Vectorizer-io-fitness_logo.svg'

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#111', px: 2 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>

        {/* Left: Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={LOGO} // ✅ Adjust your logo path
            alt="Logo"
            style={{ height: 40, marginRight: 8 }}
          />
          <Typography variant="h6" sx={{ color: 'white' }}>
            TheFitFlex
          </Typography>
        </Box>

        {/* Right: Links */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button component={Link} to="/home" sx={{ color: 'white' }}>
            Home
          </Button>

          {/* Services Dropdown */}
          <Box>
            <Button
              onClick={handleMenuOpen}
              sx={{ color: 'white' }}
            >
              Services *
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{
                sx: {
                  marginTop:'20px',
                   backgroundColor: '#fffde7', }
              }}
            >
              <MenuItem
                component={Link}
                to="/diet"
                onClick={handleMenuClose}
                sx={{ '&:hover': { backgroundColor: '#fff176' } }}
              >
                Diet
              </MenuItem>

              <MenuItem
                component={Link}
                to="/trainer"
                onClick={handleMenuClose}
                sx={{ '&:hover': { backgroundColor: '#fff176' } }}
              >
                Personal Trainer
              </MenuItem>

              <MenuItem
                component={Link}
                to="/workout"
                onClick={handleMenuClose}
                sx={{ '&:hover': { backgroundColor: '#fff176' } }}
              >
                Workout
              </MenuItem>

            </Menu>
          </Box>

          <Button component={Link} to="/product" sx={{ color: 'white' }}>
            Products
          </Button>

          <Button
            variant="contained"
            to="/SignUpForm"
            sx={{
              backgroundColor: 'yellow',
              color: '#111',
              '&:hover': { backgroundColor: '#fdd835' },
            }}
          >
            Join Now
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
