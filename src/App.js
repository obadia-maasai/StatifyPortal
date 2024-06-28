import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import ForgotPasswordPage from './Components/ForgotPasswordPage';
// import SignUpPage from './Components/SignupPage';
import SignUp1 from './Components/SignUp';
import HomePage from './Components/HomePage';
import Navbar from './Components/NavbarPage';


function App() {
  return (
    // <Router>
      <div>
        {/* <h1>Hello World!</h1> */}
        <Navbar/>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp1/>} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/" element={<LoginPage />} /> 
          <Route path="/home" element={<HomePage/>} />
        </Routes>
      </div>
    // </Router>
  );
}

export default App;
