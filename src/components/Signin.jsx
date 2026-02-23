import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === loginData.email &&
      storedUser.password === loginData.password
    ) {
      alert("Login Successful!");
      navigate("/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div style={cardStyle}>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
        <br />
        <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

const cardStyle = {
  padding: "30px",
  border: "1px solid #ccc",
  width: "300px",
  margin: "auto"
};

export default Signin;