import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    password: '',
    confirmPassword: '',
    height: '',
    weight: ''
  });

  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('userData');
    if (storedUser) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    // Store user data
    localStorage.setItem('userData', JSON.stringify(formData));
    alert('Registered successfully!');
    navigate('/'); // go to login
  };

  const handleLogout = () => {
    localStorage.removeItem('userData');
    alert('Logged out!');
    navigate('/');
  };

  return (
    <div style={{ maxWidth: 500, margin: '0 auto' }}>
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <br /><br />
        <input name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
        <br /><br />
        <input name="height" placeholder="Height" value={formData.height} onChange={handleChange} required />
        <br /><br />
        <input name="weight" placeholder="Weight" value={formData.weight} onChange={handleChange} required />
        <br /><br />
        <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <br /><br />
        <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <br /><br />
        <input name="confirmPassword" type="password" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
        <br /><br />
        <button type="submit">Register</button>
      </form>

      {isLoggedIn && (
        <>
          <br />
          <button onClick={handleLogout}>Logout</button>
        </>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Signup;
