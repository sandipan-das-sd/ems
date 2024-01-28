import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router, Routes, Route,  Navigate, } from 'react-router-dom';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Login from '../src/components/Login/Login';
import OTPVerificationForm from './components/Login/OTPVerificationForm';
import Error from './components/Login/Error';
import StaffAddForm from './components/Home/StaffAddForm';
import ViewStaff from './components/Home/ViewStaff';
import EditStudent from './components/Home/EditStaff';
import { auth } from './firebase';



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
         <Route path="/staffAddForm" element={<StaffAddForm />} />
         <Route path="/pages/Viewstaff" element={<ViewStaff />} />
         <Route exact path='/pages/EditStudent/:id' element={<EditStudent />}></Route>
        </Routes>
      </Router>
      {/*---------------- If any routes Remaing Dont paste below this line *--------------------/}

{/*-------- -----------Ends of Routes ---------------------------------- */}
    </div>
  );
}

export default App;
