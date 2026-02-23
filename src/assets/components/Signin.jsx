import React from "react";
import Authcontainer from "./Authcontainer";

const Signin = () => {
  return (
    <Authcontainer>
      <h2>Sign In</h2>
      <form>
        <input type="email" placeholder="Enter Email" required />
        <input type="password" placeholder="Enter Password" required />
        <button type="submit">Login</button>
      </form>
    </Authcontainer>
  );
};

export default Signin;