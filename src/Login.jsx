import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
  e.preventDefault();

  if (!email || !password) {
    alert("Please enter your email and password.");
    return;
  }

  const savedUser = JSON.parse(localStorage.getItem("quizlyUser"));

  if (!savedUser) {
    alert("No account found. Please register first.");
    return;
  }

  if (email === savedUser.email && password === savedUser.password) {
    alert("Login successful!");

localStorage.setItem("quizlyLoggedIn", "true");

window.location.href = "/";
  } else {
    alert("Invalid email or password.");
  }
};

  return (
    <div className="login-page">
      <div className="login-card">

        <Link to="/" className="login-logo">
          <span>Q</span>
          Quizly
        </Link>

        <h1>Welcome back!</h1>

        <p className="login-subtitle">
          Log in to continue playing and creating quizzes.
        </p>

        <form onSubmit={handleLogin}>
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
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Log in
          </button>
        </form>

        <p className="register-text">
          Don't have an account?{" "}
          <Link to="/register">
            Create account
          </Link>
        </p>

        <Link to="/" className="back-home">
          ← Back to home
        </Link>

      </div>
    </div>
  );
}

export default Login;