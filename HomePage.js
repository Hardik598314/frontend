import React from "react";
import { Link } from "react-router-dom";


const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to the Feedback System</h1>
      <p>Choose your role to proceed:</p>

      <div className="buttons-container">
        <Link to="/student-login">
          <button className="login-btn">Student Login</button>
        </Link>
        <Link to="/admin-login">
          <button className="login-btn">Admin Login</button>
        </Link>
        <Link to="/signup">
          <button className="signup-btn">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
