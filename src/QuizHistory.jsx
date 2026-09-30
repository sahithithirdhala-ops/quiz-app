import { Link } from "react-router-dom";
import "./QuizHistory.css";

function QuizHistory() {
  const history =
    JSON.parse(localStorage.getItem("quizlyHistory")) || [];

  return (
    <div className="history-page">
      <div className="history-card">

        <div className="history-logo">
          <span>Q</span>
          Quizly
        </div>

        <h1>Quiz History</h1>

        {history.length === 0 ? (
          <p className="no-history">
            You haven't completed any quizzes yet.
          </p>
        ) : (
          <div className="history-list">
            {history.map((result, index) => (
              <div className="history-item" key={index}>
                <div>
                  <strong>{result.nickname}</strong>
                  <span>{result.date}</span>
                </div>

                <div className="history-score">
                  {result.score} / {result.total}
                  <small>{result.percentage}%</small>
                </div>
              </div>
            ))}
          </div>
        )}

        <Link to="/" className="history-home">
          ← Back to Home
        </Link>

      </div>
    </div>
  );
}

export default QuizHistory;