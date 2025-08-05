import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../Pages/EntryPages/authSlice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "" });

  
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

    

  const HandleSubmit = (e) => {
    e.preventDefault();
    
    // REGISTER
    if (!isLogin) {
      localStorage.setItem("userEmail", formData.email);
      localStorage.setItem("password", formData.password);
      alert("Registered successfully!");
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
      navigate('/home');
    } else {
      alert("Invalid credentials");
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
    <div style={{ maxWidth: 400, margin: '0 auto' }}>
      <h2>{isLogin ? 'Login' : 'Register'} Form</h2>
      <form onSubmit={HandleSubmit}>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          value={formData.email}
          onChange={HandleChange}
        /><br /><br />

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={HandleChange}
        /><br /><br />

        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
        {auth.isAuthenticated && (
          <button type="button" onClick={handleLogout}>Logout</button>
        )}
      </form>

      <hr />
      <button onClick={() => setIsLogin(prev => !prev)}>
        Switch to {isLogin ? 'Register' : 'Login'}
      </button>
    </div>
  );
}

export default Login;
