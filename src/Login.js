import React from "react";

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
      class="login-form container"
      onSubmit={(e) => {
        e.preventDefault();
        login();
      }}
    >
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">
          Enter Code
        </label>
        <input
          type="password"
          class="form-control"
          placeholder="Enter password"
          autoComplete="off"
          id="password"
          required
        ></input>
      </div>

      <button type="submit" class="btn btn-dark">
        Submit
      </button>
    </form>
  );
}

export default Login;
