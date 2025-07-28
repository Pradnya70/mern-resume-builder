// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';

const App = () => {
  return (
    
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Home/>} />

      </Routes>
    </Router>
  );
};

export default App;
