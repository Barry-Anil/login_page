import React from "react";
import Input from "./input";

function Login() {
  return (
    <div className="container">
      <form className="form">
        <Input type="text" placeholder="username" />
        <Input type="password" placeholder="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
