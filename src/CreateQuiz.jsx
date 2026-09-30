import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateQuiz.css";

function CreateQuiz() {
  const navigate = useNavigate();

  const [quizTitle, setQuizTitle] = useState("");

  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");

  const [questions, setQuestions] = useState([]);

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleAddQuestion = (e) => {
    e.preventDefault();

    if (
      !question ||
      options.some((option) => !option) ||
      !correctAnswer
    ) {
      alert("Please fill in the question, all options and correct answer.");
      return;
    }

    const newQuestion = {
      question,
      options,
      answer: correctAnswer,
    };

    setQuestions([...questions, newQuestion]);

    setQuestion("");
    setOptions(["", "", "", ""]);
    setCorrectAnswer("");

    alert("Question added successfully!");
  };

  const handleCreateQuiz = () => {
    if (!quizTitle) {
      alert("Please enter a quiz title.");
      return;
    }

    if (questions.length === 0) {
      alert("Please add at least one question.");
      return;
    }

    const gamePin = Math.floor(
  100000 + Math.random() * 900000
).toString();

const savedQuiz = {
  title: quizTitle,
  questions: questions,
  gamePin: gamePin,
  createdAt: new Date().toLocaleString(),
};
    localStorage.setItem(
      "quizlyCreatedQuiz",
      JSON.stringify(savedQuiz)
    );

    alert(`Quiz created successfully! Game PIN: ${gamePin}`);

navigate("/join");
  };

  return (
    <div className="create-quiz-page">
      <div className="create-quiz-card">

        <div className="create-quiz-logo">
          <span>Q</span>
          Quizly
        </div>

        <h1>Create a Quiz</h1>

        <p className="create-quiz-subtitle">
          Create your own quiz and add multiple questions.
        </p>

        <label>Quiz Title</label>

        <input
          type="text"
          placeholder="Enter quiz title"
          value={quizTitle}
          onChange={(e) => setQuizTitle(e.target.value)}
        />

        <form onSubmit={handleAddQuestion}>

          <label>Question</label>

          <input
            type="text"
            placeholder="Enter your question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />

          <label>Option 1</label>

          <input
            type="text"
            placeholder="Enter option 1"
            value={options[0]}
            onChange={(e) =>
              handleOptionChange(0, e.target.value)
            }
          />

          <label>Option 2</label>

          <input
            type="text"
            placeholder="Enter option 2"
            value={options[1]}
            onChange={(e) =>
              handleOptionChange(1, e.target.value)
            }
          />

          <label>Option 3</label>

          <input
            type="text"
            placeholder="Enter option 3"
            value={options[2]}
            onChange={(e) =>
              handleOptionChange(2, e.target.value)
            }
          />

          <label>Option 4</label>

          <input
            type="text"
            placeholder="Enter option 4"
            value={options[3]}
            onChange={(e) =>
              handleOptionChange(3, e.target.value)
            }
          />

          <label>Correct Answer</label>

          <select
            value={correctAnswer}
            onChange={(e) =>
              setCorrectAnswer(e.target.value)
            }
          >
            <option value="">
              Select correct answer
            </option>

            {options.map((option, index) => (
              <option
                key={index}
                value={option}
                disabled={!option}
              >
                {option || `Option ${index + 1}`}
              </option>
            ))}
          </select>

          <button type="submit">
            Add Question
          </button>

        </form>

        <div className="question-count">
          Questions added: {questions.length}
        </div>

        {questions.length > 0 && (
          <div className="added-questions">

            <h3>Added Questions</h3>

            {questions.map((item, index) => (
              <div
                className="added-question"
                key={index}
              >
                <strong>
                  {index + 1}. {item.question}
                </strong>

                <span>
                  Correct answer: {item.answer}
                </span>
              </div>
            ))}

          </div>
        )}

        <button
          className="final-create-button"
          onClick={handleCreateQuiz}
        >
          Create Quiz
        </button>

        <button
          className="create-quiz-back"
          onClick={() => navigate("/")}
        >
          ← Back to Home
        </button>

      </div>
    </div>
  );
}

export default CreateQuiz;