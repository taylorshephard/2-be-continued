import React from "react";
import "./App.css";

function Login(props) {
  function login() {
    var attemptedPassword = document.getElementById("password").value;
    if (attemptedPassword === process.env.REACT_APP_PASSWORD) {
      props.onSubmit(true);
    } else {
      alert("Wrong password");
    }
  }

  return (
    <form
      className="login-form"
      onSubmit={(e) => {
        e.preventDefault();
        login();
      }}
    >
      <p>Enter Code</p>
      <input
        type="password"
        id="password"
        placeholder="Enter password"
        autoComplete="off"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
