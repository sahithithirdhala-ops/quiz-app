import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
  e.preventDefault();

  if (!name || !email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  const user = {
    name,
    email,
    password,
  };

  localStorage.setItem("quizlyUser", JSON.stringify(user));

  alert("Account created successfully!");

  window.location.href = "/login";
};

  return (
    <div className="register-page">
      <div className="register-card">

        <Link to="/" className="register-logo">
          <span>Q</span>
          Quizly
        </Link>

        <h1>Create account</h1>

        <p className="register-subtitle">
          Create your Quizly account and start playing.
        </p>

        <form onSubmit={handleRegister}>
          <label>Name</label>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Create account
          </button>
        </form>

        <p className="login-text">
          Already have an account?{" "}
          <Link to="/login">
            Log in
          </Link>
        </p>

        <Link to="/" className="back-home">
          ← Back to home
        </Link>

      </div>
    </div>
  );
}

export default Register;