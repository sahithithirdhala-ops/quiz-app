import { Link } from "react-router-dom";
import "./QuizLobby.css";

function QuizLobby() {
    const nickname = localStorage.getItem("quizlyNickname") || "Player";
    const gamePin =
  localStorage.getItem("quizlyGamePin") || "------";
  const savedQuiz = JSON.parse(
  localStorage.getItem("quizlyCreatedQuiz")
);

const quizTitle = savedQuiz?.title || "Quizly Quiz";
  return (
    <div className="lobby-page">
      <div className="lobby-card">

        <div className="lobby-logo">
          <span>Q</span>
          Quizly
        </div>

        <div className="lobby-icon">
          🎮
        </div>

       <h1>You're in, {nickname}!</h1>

<p className="lobby-message">
  You've successfully joined the quiz.
</p>

        <div className="waiting-box">
  <h2>{quizTitle}</h2>

  <strong>Game PIN: {gamePin}</strong>

  <span>Waiting for the host to start the quiz...</span>
</div>

<Link to="/quiz" className="start-demo">
  Start Quiz
</Link>

<Link
  to="/"
  className="leave-quiz"
  onClick={() => {
    localStorage.removeItem("quizlyNickname");
    localStorage.removeItem("quizlyGamePin");
  }}
>
  Leave Quiz
</Link>
      </div>
    </div>
  );
}

export default QuizLobby;