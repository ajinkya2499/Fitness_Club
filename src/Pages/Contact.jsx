import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  Grid,
  InputAdornment,
  Link,
  Paper,
} from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Contact = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handlePhoneChange = (value) => {
    setForm((prev) => ({ ...prev, phone: value }));
  };

  const handleSubmit = () => {
    console.log(form);
    // Add form validation and API submission logic here
  };

  return (
    <Box sx={{ p: 4, display: 'flex', justifyContent: 'center' }}>
      <Paper elevation={0} sx={{ p: 4, maxWidth: 600, width: '100%' }}>
        <Typography variant="overline" sx={{ color: 'primary.main' }}>
          Contact Us
        </Typography>

        <Typography variant="h4" sx={{ fontWeight: 700, mt: 1 }}>
          Let’s Get In Touch.
        </Typography>

        <Typography variant="body1" sx={{ mt: 1, mb: 3 }}>
          Or just reach out manually to{' '}
        </Typography>

        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <TextField
              fullWidth
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Enter your full name..."
              label="Full Name"
              style={{marginRight:'35px'}}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlineIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={8}>
            <TextField
              fullWidth
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email address..."
              label="Email Address"
              style={{marginRight:'35px'}}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          </Grid>

          <Grid columns={12}>

         <Grid item xs={10}>
            <TextField
              fullWidth
              name="message"
              value={form.message}
              onChange={handleChange}
              label="Message"
              placeholder="Enter your main text here..."
              multiline
              rows={4}
              style={{marginTop:'10px'}}
              inputProps={{ maxLength: 300 }}
              helperText={`${form.message.length}/300`}
            />
          </Grid>

</Grid>
          

          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  name="agree"
                  checked={form.agree}
                  onChange={handleChange}
                  color="primary"
                />
              }
              label={
                <>
                  I hereby agree to our{' '}
                  <Link href="#" underline="hover">
                    Privacy Policy
                  </Link>{' '}
                  terms.
                </>
              }
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSubmit}
              endIcon={<ArrowForwardIcon />}
              sx={{ py: 1.2, borderRadius: 99 }}
            >
              Submit Form
            </Button>
          </Grid>
        
      </Paper>
    </Box>
  );
};

export default Contact;
