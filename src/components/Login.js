import React, { useContext, useState } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import alertContext from "../context/AlertContext";

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
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
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });

      console.log(response);

      const json = await response.json();
      if (json.success) {
        localStorage.setItem("token", json.authtoken);
        navigate("/");
        showAlert("Successfully logged in", "success");
      } else {
        showAlert("Sign up or enter right credentails", "danger");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-div">
      <div className="form-details">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
}
