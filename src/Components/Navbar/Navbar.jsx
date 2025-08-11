import { useState } from 'react';
import { Link,useNavigate,useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Box,
  Typography
} from '@mui/material';
import LOGO from '../../assets/Images/icons8-zendesk-100.png'
import DropdownLogo from '../../assets/Images/icons8-dropdown-50 (1).png'

function Navbar() {
  const Location=useLocation();
  console.log("location :: ",Location.pathname);
  
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    console.log("menu opened"); 
  };

  const HandleWorkout=()=>{
    navigate('/WorkoutTrainer');
    console.log("Workout Clicked");
     setAnchorEl(null);
  }


  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const HandleJoin=()=>{
    navigate('/SignUpForm');
  }

  const HandleProducts=()=>{
    navigate('/products')
    console.log("Products Clicked");  
  }

    // Hide Join Now button if already on SignUpForm page
  const hideJoinNow = location.pathname === "/SignUpForm";

  return (
    <AppBar position="static" sx={{ backgroundColor: '#111', px: 2 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>

        {/* Left: Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={LOGO} // ✅ Adjust your logo path
            alt="Logo"
            style={{ height: 50, marginRight: 8 ,color: 'white'}}
          />
          <Typography variant="h6" sx={{ color: 'white' }}>
            TheFitFlex
          </Typography>
        </Box>

        {/* Right: Links */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button component={Link} to="/home" sx={{ color: 'white','&:hover': { backgroundColor: '#ede89aff',color:'black' }, borderRadius: '30px' }}>
            Home
          </Button>

          {/* Services Dropdown */}
          <Box>
            <Button
              onClick={handleMenuOpen}
              sx={{ color: 'white' }}
            >
                            Services 
              <img src={ DropdownLogo} alt="" color='white' style={{width:'20px', fontSize:'bold'}}/>
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
                onClick={HandleWorkout}
                sx={{ '&:hover': { backgroundColor: '#fff176' } }}
              >
                Workout
              </MenuItem>

            </Menu>
          </Box>

          <Button sx={{ color: 'white' }} onClick={HandleProducts}>
            Products
          </Button>

         {!hideJoinNow && (
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'yellow',
              color: '#111',
              '&:hover': { backgroundColor: '#fdd835' }}}
              onClick={HandleJoin}
          >
            Join Now
          </Button>
            )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
