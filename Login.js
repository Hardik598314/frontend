import React from "react";

const Login = ({ title, onLogin }) => {
  return (
    <div className="login-page">
      <h1>{title}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onLogin();
        }}
      >
        <input type="text" placeholder="Enter Username" required />
        <input type="password" placeholder="Enter Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;