import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Login from '../src/components/Login/Login';
import OTPVerificationForm  from './components/Login/OTPVerificationForm';
import Error from './components/Login/Error';
import { auth } from './firebase';

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []); // Empty dependency array to run the effect only once on mount

  const isAuthenticated = userName !== "";

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <Home name={userName} /> : <Navigate to="/login" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/error" element={<Error/>}/>
          <Route path="/otp_verify" element={<OTPVerificationForm/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
