import { useState } from "react";
import { Link } from "react-router-dom";
import "./JoinQuiz.css";

function JoinQuiz() {
  const [pin, setPin] = useState("");
  const [nickname, setNickname] = useState("");

  const handleJoin = (e) => {
    e.preventDefault();

    if (!pin || !nickname) {
  alert("Please enter the Quiz PIN and nickname.");
  return;
}

const savedQuiz = JSON.parse(
  localStorage.getItem("quizlyCreatedQuiz")
);

if (!savedQuiz) {
  alert("No quiz found. Please create a quiz first.");
  return;
}

if (pin !== savedQuiz.gamePin) {
  alert("Invalid Game PIN. Please check and try again.");
  return;
}
   localStorage.setItem("quizlyNickname", nickname);
localStorage.setItem("quizlyGamePin", pin);

window.location.href = "/lobby";
  };

  return (
    <div className="join-page">
      <div className="join-card">

        <Link to="/" className="join-logo">
          <span>Q</span>
          Quizly
        </Link>

        <h1>Join a Quiz</h1>

        <p className="join-subtitle">
          Enter the game PIN to join the quiz.
        </p>

        <form onSubmit={handleJoin}>

          <label>Game PIN</label>

          <input
            type="text"
            placeholder="Enter game PIN"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />

          <label>Nickname</label>

          <input
            type="text"
            placeholder="Enter your nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />

          <button type="submit">
            Join Quiz
          </button>

        </form>

        <Link to="/" className="back-home">
          ← Back to home
        </Link>

      </div>
    </div>
  );
}

export default JoinQuiz;