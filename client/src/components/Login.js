// src/components/Login.js
import React, { useState } from "react";
import api from "../api"; // Import the api instance
import { useNavigate, Link } from 'react-router-dom';
import "../App.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Email is not valid";
    }

    if (!password.trim()) {
      validationErrors.password = "Password is required";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await api.post('/login', {
          email,
          password
        });
        console.log(response.data);
        if (response.data.token) {
          alert("Login Successful. You will now be redirected to the home page.");
          navigate('/home');
        } else {
          setErrors({ api: "Invalid email or password" });
        }
      } catch (error) {
        console.error("Error logging in user:", error);
        setErrors({ api: "An error occurred while logging in. Please try again." });
      }
    }
  };

  return (
    <div className="form-container" style={{ textAlign: 'center' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <button className="button-container" type="submit">Login</button>
        <div className="form-group">
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
        {errors.api && <div className="error">{errors.api}</div>}
      </form>
    </div>
  );
};

export default Login;
