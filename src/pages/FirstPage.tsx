import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './FirstPage.css'

const FirstPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (name && phoneNumber && email) {
      const userDetails = {
        name,
        phoneNumber,
        email,
      };
      localStorage.setItem('userDetails', JSON.stringify(userDetails));
      navigate('/second-page');
    }
    else{
      alert('Please enter your details before proceeding.');
    }
  };

  return (
    <div className='form'>
      <TextField className='text-field'
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button 
      style={{ marginTop: '20px', backgroundColor: '#007bff', color: 'white' }}
      variant="contained"
      onClick={handleSubmit}>Next</Button>
    </div>
  );
};

export default FirstPage;
