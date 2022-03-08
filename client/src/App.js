
import './App.css';

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import Auth from './hoc/auth'

const NewLandingPage = Auth(LandingPage,null,true);
const NewLoginPage = Auth(LoginPage,false);
const NewRegisterPage = Auth(RegisterPage,false);
function App() {

  return (
      <Routes>
        <Route path="/" exact ={true} element = {<NewLandingPage />} />
        <Route path="/login" exact ={true} element={<NewLoginPage />} />
        <Route path="/register" exact ={true} element={<NewRegisterPage />} />
      </Routes>
    
);

}

export default App;

