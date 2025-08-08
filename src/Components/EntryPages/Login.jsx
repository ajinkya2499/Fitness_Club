import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../EntryPages/authSlice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LOGO from '../../assets/Images/FreeSample-Vectorizer-io-fitness_logo.svg';
import RightSide from '../../assets/Images/875dfd8145685719f8cc26a4a2570b9a.jpg'
import CustomSnackbar from '../../util/CustomSnackbar'

import {
  Box,
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
  Paper,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [snackbar, setSnackbar] = useState({
  open: false,
  message: '',
  severity: 'success',
});

const showSnackbar = (message, severity = 'success') => {
  setSnackbar({ open: true, message, severity });
};

const handleCloseSnackbar = () => {
  setSnackbar((prev) => ({ ...prev, open: false }));
};



    

  const HandleSubmit = (e) => {
    e.preventDefault();
    
    // REGISTER
    if (!isLogin) {
      localStorage.setItem("userEmail", formData.email);
      localStorage.setItem("password", formData.password);
      showSnackbar("Registered successfully!", "success");
      setIsLogin(true); // Switch to login
      return;
    }

    // LOGIN
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("password");

    if (
      formData.email === storedEmail &&
      formData.password === storedPassword
    ) {
      dispatch(login({ email: formData.email, password: formData.password }));
       showSnackbar("Login successful!", "success");
      navigate('/home');
    } else {
      showSnackbar("Invalid credentials!", "error");
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const HandleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Box
      sx={{
        
        maxHeight:'100vh',
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Responsive
         overflow: "hidden",
      }}
    >
      {/* Left: Login Form */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "#040404ff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 4,
          overflow: "hidden",
          
        }}
      >
        <Paper
          elevation={6}
          sx={{
            maxWidth: 500,
            width: "100%",
            p: 3,
            borderRadius: 3,
            backgroundColor: "#1e293b",
            color: "#fff",
            marginLeft: { xs: 0, md: 5 }, // Margin for larger screens
          }}
        >
          <Box textAlign="center" mb={3}>
            <img
              src={LOGO} // ✅ Use path relative to public folder
              alt="TheFitFlex Logo"
              style={{
                width: "100px",
                height: "100%",
              }}
            />
            <Typography variant="h6" fontWeight="bold" color="#b4b9bbff">
              TheFitFlex
            </Typography>

            <Typography variant="h4" fontWeight="bold" marginTop={2}>
              {isLogin ? "Login" : "Register"}
            </Typography>
            <Typography variant="body2" color="gray">
              Welcome to TheFitFlex
            </Typography>
          </Box>

          <form onSubmit={HandleSubmit}>
            <TextField
              fullWidth
              variant="filled"
              type="email"
              label="Email Address"
              name="email"
              value={formData.email}
              onChange={HandleChange}
              sx={{ mb: 2 }}
              InputProps={{
                style: {
                  backgroundColor: "#334155",
                  color: "#fff",
                  borderRadius: "15px",
                },
              }}
              InputLabelProps={{
                style: { color: "#cbd5e1" },
              }}
            />

            <TextField
              fullWidth
              variant="filled"
              type={showPassword ? "text" : "password"}
              label="Password"
              name="password"
              value={formData.password}
              onChange={HandleChange}
              sx={{ mb: 1 }}
              InputProps={{
                style: {
                  backgroundColor: "#334155",
                  color: "#fff",
                  borderRadius: "15px",
                },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                      edge="end"
                      sx={{ color: "#fff", marginRight: "5px" }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{
                style: { color: "#cbd5e1" },
              }}
            />

            <Box textAlign="right" mb={2}>
              <Typography
                variant="caption"
                sx={{ color: "#94a3b8", cursor: "pointer" }}
              >
                Forgot Password?
              </Typography>
            </Box>

            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                background: "linear-gradient(to right, #3b82f6, #2563eb)",
                color: "#fff",
                mb: 2,
                py: 1.2,
                fontWeight: "bold",
                borderRadius: "20px",
                "&:hover": {
                  background: "linear-gradient(to right, #2563eb, #1d4ed8)",
                },
              }}
            >
              {isLogin ? "LOGIN" : "REGISTER"}
            </Button>

            {auth.isAuthenticated && (
              <Button
                fullWidth
                onClick={handleLogout}
                sx={{ color: "#ef4444" }}
              >
                Logout
              </Button>
            )}
          </form>

          <Box textAlign="center" mt={2}>
            <Button
              variant="text"
              sx={{ color: "#38bdf8", textTransform: "none" }}
              onClick={() => setIsLogin((prev) => !prev)}
            >
              <CustomSnackbar
                open={snackbar.open}
                message={snackbar.message}
                severity={snackbar.severity}
                onClose={handleCloseSnackbar}
              />
              Switch to {isLogin ? "Register" : "Login"}
            </Button>
          </Box>
        </Paper>
      </Box>

      {/* Right: Background Image */}
      <Box
        sx={{
          flex: 1,
          height: "100vh",
          backgroundImage: `url(${RightSide})`, // Replace with your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: { xs: "none", md: "block" }, // Hide on mobile
        }}
      />
    </Box>
  );
}

export default Login;
