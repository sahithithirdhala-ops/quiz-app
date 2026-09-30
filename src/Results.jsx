import { Link, useLocation } from "react-router-dom";
import "./Results.css";

function Results() {
  const location = useLocation();

  const score = location.state?.score || 0;
  const total = location.state?.total || 0;

  const percentage = total
    ? Math.round((score / total) * 100)
    : 0;
    const nickname =
  localStorage.getItem("quizlyNickname") || "Player";

const quizResult = {
  nickname,
  score,
  total,
  percentage,
  date: new Date().toLocaleString(),
};

const previousResults =
  JSON.parse(localStorage.getItem("quizlyHistory")) || [];

const alreadySaved = previousResults.some(
  (result) =>
    result.score === score &&
    result.total === total &&
    result.nickname === nickname
);

if (!alreadySaved) {
  previousResults.push(quizResult);

  localStorage.setItem(
    "quizlyHistory",
    JSON.stringify(previousResults)
  );
}
    let resultMessage = "Keep practicing!";

if (percentage === 100) {
  resultMessage = "Excellent! Perfect score!";
} else if (percentage >= 75) {
  resultMessage = "Great job! You're doing well!";
} else if (percentage >= 50) {
  resultMessage = "Good effort! Keep improving!";
}

  return (
    <div className="results-page">
      <div className="results-card">

        <div className="results-logo">
          <span>Q</span>
          Quizly
        </div>

        <div className="results-icon">
          🏆
        </div>

        <h1>Quiz Completed!</h1>

<p className="completion-text">
  Thanks for playing, {localStorage.getItem("quizlyNickname") || "Player"}!
</p>

        <p className="results-message">
  {resultMessage}
</p>

        <div className="score-box">
  <div className="score-label">
    Your Score
  </div>

  <div className="final-score">
    {score} / {total}
  </div>

  <div className="percentage">
    {percentage}%
  </div>
</div>

        <div className="results-buttons">

          <Link to="/quiz" className="play-again">
            Play Again
          </Link>

          <Link to="/" className="home-button">
            Back to Home
          </Link>

        </div>

      </div>
    </div>
  );
}

export default Results;