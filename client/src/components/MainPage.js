// MainPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className="App">
      <h2>Welcome!</h2>
      <h3>Resume Builder</h3>
      <div className="button-container">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/signup"><button>Sign Up</button></Link>
      </div>
    </div>
  );
};

export default MainPage;
