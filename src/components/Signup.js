import React, { useState, useContext } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import alertContext from "../context/AlertContext";

export default function Signup() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { showAlert } = useContext(alertContext);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { name, email, password } = credentials;
      const response = await fetch(
        "http://localhost:5000/api/auth/createuser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        }
      );

      console.log(response);

      const json = await response.json();
      if (json.success) {
        localStorage.setItem("token", json.authtoken);
        navigate("/");
        showAlert("Account created successfully", "success");
      } else {
        showAlert("User with same credentials already exists", "danger");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-div">
      <div className="form-details" style={{ height: "64vh" }}>
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Create Password"
            onChange={handleChange}
          />
          <input
            name="confirmpassword"
            type="password"
            placeholder="Confirm Password"
          />
          <button type="submit">Signup </button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
