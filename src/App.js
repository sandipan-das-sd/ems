import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router, Routes, Route,  Navigate, } from 'react-router-dom';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Login from '../src/components/Login/Login';
import OTPVerificationForm from './components/Login/OTPVerificationForm';
import Error from './components/Login/Error';
import AddStaff from './components/AddStaff';
import ViewStaff from './components/ViewStaff';
import EditStaff from './components/EditStaff';

import { auth } from './firebase';
import StaffList from './components/StaffList';



function App() {
  const [userName, setUserName] = useState("");


  //--------------------Auth Handeling-----------------------
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


  //------Authentication Complete -------------------------------------------



  return (
    <div className="App">



      {/* ----------------------Routes Selting----------------------- */}



      <Router>
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <Home name={userName} /> : <Navigate to="/login" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/error" element={<Error />} />
          <Route path="/otp_verify" element={<OTPVerificationForm />} />
          <Route path="/staffList" element={<StaffList />} />
          <Route path="/staffAddForm" element={<AddStaff />} />
          <Route path="/viewStaff/:id" element={<ViewStaff />} />
          <Route path="/editStaff" element={<EditStaff />} />

        </Routes>
      </Router>
      {/*---------------- If any routes Remaing Dont paste below this line *--------------------/}

{/*-------- -----------Ends of Routes ---------------------------------- */}
    </div>
  );
}

export default App;
