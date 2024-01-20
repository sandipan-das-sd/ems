
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const OTPVerificationForm = () => {
  const [inputValues, setInputValues] = useState(['', '', '', '']);
  const [buttonActive, setButtonActive] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Focus the first input on component mount
    document.getElementById('input-0').focus();

    // Extract confirmationResult from location state
    if (location.state && location.state.confirmationResult) {
      setConfirmationResult(location.state.confirmationResult);
    } else {
      // If confirmationResult is not available, navigate back to login
      navigate('/login');
    }
  }, [location.state, navigate]);

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);

    // Enable the next input and focus on it
    if (index < inputValues.length - 1 && value !== '') {
      document.getElementById(`input-${index + 1}`).removeAttribute('disabled');
      document.getElementById(`input-${index + 1}`).focus();
    }

    // Disable the previous input and focus on it
    if (index > 0 && value === '') {
      document.getElementById(`input-${index - 1}`).setAttribute('disabled', true);
      document.getElementById(`input-${index - 1}`).focus();
    }

    // Check if the fourth input is not empty and enable the button
    if (!document.getElementById('input-3').disabled && inputValues[3] !== '') {
      setButtonActive(true);
    } else {
      setButtonActive(false);
    }
  };

  const handleBackspace = (index, e) => {
    if (e.key === 'Backspace' && index > 0 && inputValues[index] === '') {
      document.getElementById(`input-${index - 1}`).removeAttribute('disabled');
      document.getElementById(`input-${index - 1}`).focus();
    }
  };

  const handleInputFocus = (index) => {
    document.getElementById(`input-${index}`).select();
  };

  
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#fff',
        padding: '30px 65px',
        borderRadius: '12px',
        rowGap: '20px',
        boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Poppins, sans-serif',
        minHeight: '100vh',
      }}
    >
      <header
        style={{
          height: '65px',
          width: '65px',
          background: '#4070f4',
          color: '#fff',
          fontSize: '2.5rem',
          borderRadius: '50%',
        }}
      >
        <i className="bx bxs-check-shield"></i>
      </header>
      <h4 style={{ fontSize: '1.25rem', color: '#333', fontWeight: '500' }}>Enter OTP Code</h4>
      <form  style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <div style={{ display: 'flex', flexDirection: 'row', columnGap: '10px', justifyContent: 'center' }} className="input-field">
    {inputValues.map((value, index) => (
      <input
        key={index}
        id={`input-${index}`}
        type="text"
        value={value}
        onChange={(e) => handleInputChange(index, e.target.value)}
        onKeyDown={(e) => handleBackspace(index, e)}
        onFocus={() => handleInputFocus(index)}
        maxLength="1"
        style={{
          height: '45px',
          width: '42px',
          borderRadius: '6px',
          outline: 'none',
          fontSize: '1.125rem',
          textAlign: 'center',
          border: '1px solid #ddd',
        }}
      />
    ))}
  </div>
  <button
    type="submit"
    className={buttonActive ? 'active' : ''}
    style={{
      marginTop: '25px',
      width: '20%',
      color: '#fff',
      fontSize: '1rem',
      border: 'none',
      padding: '15px 0',
      cursor: 'pointer',
      borderRadius: '6px',
      pointerEvents: buttonActive ? 'auto' : 'none',
      background: buttonActive ? '#4070f4' : '#6e93f7',
      transition: 'all 0.2s ease',
    }}
  >
    Verify OTP
  </button>
</form>

    </div>
  );
};

export default OTPVerificationForm;
