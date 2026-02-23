import React from "react";
import Authcontainer from "./Authcontainer";

const Signup = () => {
  return (
    <Authcontainer>
      <h2>Create Account</h2>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
    </Authcontainer>
  );
};

export default Signup;