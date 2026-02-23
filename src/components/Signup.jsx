import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("user", JSON.stringify(formData));
    alert("Signup Successful!");
    navigate("/dashboard");
  };

  return (
    <div style={cardStyle}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} />
        <br />
        <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
        <br />
        <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
        <br />
        <button type="submit">Register</button>
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

export default Signup;