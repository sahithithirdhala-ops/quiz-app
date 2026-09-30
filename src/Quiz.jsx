import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Quiz.css";

const questionBank = [
  {
    question: "Which language is used to create the structure of web pages?",
    options: ["HTML", "Python", "Java", "C++"],
    answer: "HTML",
  },
  {
    question: "Which language is mainly used to style web pages?",
    options: ["Java", "CSS", "Python", "SQL"],
    answer: "CSS",
  },
  {
    question: "Which language is commonly used to add interactivity to web pages?",
    options: ["JavaScript", "HTML", "CSS", "SQL"],
    answer: "JavaScript",
  },
  {
    question: "Which library is used to build user interfaces?",
    options: ["React", "MongoDB", "Node.js", "Express"],
    answer: "React",
  },
  {
    question: "Which database is commonly used in the MERN stack?",
    options: ["MySQL", "MongoDB", "Oracle", "SQLite"],
    answer: "MongoDB",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style System",
      "Colorful Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "Hyperlink Text Management Language",
      "Home Tool Markup Language",
    ],
    answer: "HyperText Markup Language",
  },
  {
    question: "Which company developed the JavaScript language?",
    options: ["Netscape", "Microsoft", "Google", "Apple"],
    answer: "Netscape",
  },
  {
    question: "Which symbol is used for a single-line comment in JavaScript?",
    options: ["//", "##", "<!--", "**"],
    answer: "//",
  },
  {
    question: "Which keyword declares a constant in JavaScript?",
    options: ["const", "constant", "fixed", "static"],
    answer: "const",
  },
  {
    question: "Which technology is used to run JavaScript on the server?",
    options: ["Node.js", "React", "HTML", "CSS"],
    answer: "Node.js",
  },
  {
    question: "Which framework is commonly used with Node.js to build web servers?",
    options: ["Express", "React", "Angular", "Bootstrap"],
    answer: "Express",
  },
  {
    question: "What does API stand for?",
    options: [
      "Application Programming Interface",
      "Advanced Program Integration",
      "Application Process Internet",
      "Automated Programming Interface",
    ],
    answer: "Application Programming Interface",
  },
  {
    question: "Which HTTP method is commonly used to retrieve data?",
    options: ["GET", "POST", "DELETE", "PATCH"],
    answer: "GET",
  },
  {
    question: "Which HTTP method is commonly used to create data?",
    options: ["POST", "GET", "DELETE", "HEAD"],
    answer: "POST",
  },
  {
    question: "Which data format is commonly used by REST APIs?",
    options: ["JSON", "MP3", "PNG", "EXE"],
    answer: "JSON",
  },
  {
    question: "Which language is known for the motto 'Write Once, Run Anywhere'?",
    options: ["Java", "Python", "C", "JavaScript"],
    answer: "Java",
  },
  {
    question: "Which data structure follows FIFO?",
    options: ["Queue", "Stack", "Tree", "Graph"],
    answer: "Queue",
  },
  {
    question: "Which data structure follows LIFO?",
    options: ["Stack", "Queue", "Tree", "Array"],
    answer: "Stack",
  },
  {
    question: "What is the full form of CPU?",
    options: [
      "Central Processing Unit",
      "Computer Processing Utility",
      "Central Program Unit",
      "Control Processing Unit",
    ],
    answer: "Central Processing Unit",
  },
  {
    question: "Which part of a computer performs arithmetic operations?",
    options: ["ALU", "RAM", "Hard Disk", "Keyboard"],
    answer: "ALU",
  },
  {
    question: "Which memory is volatile?",
    options: ["RAM", "ROM", "SSD", "Hard Disk"],
    answer: "RAM",
  },
  {
    question: "What is the binary representation of decimal 2?",
    options: ["10", "11", "01", "100"],
    answer: "10",
  },
  {
    question: "Which operating system is developed by Microsoft?",
    options: ["Windows", "Linux", "Android", "Ubuntu"],
    answer: "Windows",
  },
  {
    question: "Which company developed the Android operating system?",
    options: ["Google", "Apple", "Microsoft", "IBM"],
    answer: "Google",
  },
  {
    question: "Which protocol is commonly used for secure web browsing?",
    options: ["HTTPS", "FTP", "HTTP", "SMTP"],
    answer: "HTTPS",
  },
  {
    question: "What does URL stand for?",
    options: [
      "Uniform Resource Locator",
      "Universal Resource Link",
      "Uniform Reference Link",
      "Universal Routing Locator",
    ],
    answer: "Uniform Resource Locator",
  },
  {
    question: "Which device connects different networks?",
    options: ["Router", "Keyboard", "Monitor", "Printer"],
    answer: "Router",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Earth", "Venus", "Jupiter"],
    answer: "Mars",
  },
  {
    question: "Which is the largest planet in our solar system?",
    options: ["Jupiter", "Earth", "Saturn", "Neptune"],
    answer: "Jupiter",
  },
  {
    question: "How many continents are there?",
    options: ["7", "5", "6", "8"],
    answer: "7",
  },
  {
    question: "What is the capital of India?",
    options: ["New Delhi", "Mumbai", "Chennai", "Hyderabad"],
    answer: "New Delhi",
  },
  {
    question: "Which is the largest ocean on Earth?",
    options: [
      "Pacific Ocean",
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
    ],
    answer: "Pacific Ocean",
  },
  {
    question: "What is 12 × 8?",
    options: ["96", "86", "108", "88"],
    answer: "96",
  },
  {
    question: "What is the square root of 144?",
    options: ["12", "14", "10", "16"],
    answer: "12",
  },
  {
    question: "What is 25% of 200?",
    options: ["50", "25", "75", "100"],
    answer: "50",
  },
  {
    question: "Which gas do humans need for respiration?",
    options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
    answer: "Oxygen",
  },
  {
    question: "Which organ pumps blood through the human body?",
    options: ["Heart", "Lungs", "Brain", "Kidney"],
    answer: "Heart",
  },
  {
    question: "What is the chemical formula of water?",
    options: ["H₂O", "CO₂", "O₂", "NaCl"],
    answer: "H₂O",
  },
  {
    question: "Which vitamin is mainly produced when skin is exposed to sunlight?",
    options: ["Vitamin D", "Vitamin C", "Vitamin B12", "Vitamin A"],
    answer: "Vitamin D",
  },
  {
    question: "Who is known for developing the theory of relativity?",
    options: [
      "Albert Einstein",
      "Isaac Newton",
      "Galileo Galilei",
      "Nikola Tesla",
    ],
    answer: "Albert Einstein",
  },
  {
    question: "Which instrument is used to measure temperature?",
    options: ["Thermometer", "Barometer", "Hygrometer", "Speedometer"],
    answer: "Thermometer",
  },
  {
    question: "Which language is commonly used for data analysis and AI?",
    options: ["Python", "HTML", "CSS", "XML"],
    answer: "Python",
  },
  {
    question: "What does AI stand for?",
    options: [
      "Artificial Intelligence",
      "Automated Internet",
      "Advanced Integration",
      "Artificial Interface",
    ],
    answer: "Artificial Intelligence",
  },
  {
    question: "Which algorithm is commonly used for finding the shortest path?",
    options: [
      "Dijkstra's algorithm",
      "Bubble sort",
      "Binary search",
      "Linear search",
    ],
    answer: "Dijkstra's algorithm",
  },
  {
    question: "Which sorting algorithm repeatedly compares adjacent elements?",
    options: [
      "Bubble sort",
      "Merge sort",
      "Binary sort",
      "Quick search",
    ],
    answer: "Bubble sort",
  },
  {
    question: "Which SQL command is used to retrieve data?",
    options: ["SELECT", "INSERT", "DELETE", "UPDATE"],
    answer: "SELECT",
  },
  {
    question: "Which SQL command is used to add new records?",
    options: ["INSERT", "SELECT", "DROP", "ALTER"],
    answer: "INSERT",
  },
  {
    question: "Which technology is used to store code and manage versions?",
    options: ["Git", "HTML", "CSS", "MongoDB"],
    answer: "Git",
  },
  {
    question: "Which platform is widely used for hosting Git repositories?",
    options: ["GitHub", "Google Docs", "Figma", "Canva"],
    answer: "GitHub",
  },
];

function getRandomQuestions(list, count = 5) {
  const shuffled = [...list].sort(() => Math.random() - 0.5);

  return shuffled.slice(0, Math.min(count, shuffled.length));
}

function Quiz() {
  const navigate = useNavigate();

  const nickname =
    localStorage.getItem("quizlyNickname") || "Player";

  /*
   * Check whether the user created a quiz.
   */
  const savedQuiz = JSON.parse(
    localStorage.getItem("quizlyCreatedQuiz")
  );

  /*
   * Use created quiz questions if available.
   * Otherwise use random built-in questions.
   */
  const quizQuestions =
    savedQuiz && savedQuiz.questions?.length > 0
      ? getRandomQuestions(savedQuiz.questions)
      : getRandomQuestions(questionBank);

  const [questions] = useState(quizQuestions);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);

  const question = questions[currentQuestion];

  /*
   * Timer
   */
  useEffect(() => {
    setTimeLeft(20);

    const timer = setInterval(() => {
      setTimeLeft((time) => {
        if (time <= 1) {
          clearInterval(timer);

          if (currentQuestion === questions.length - 1) {
            navigate("/results", {
              state: {
                score,
                total: questions.length,
              },
            });
          } else {
            setCurrentQuestion((prev) => prev + 1);
            setSelectedAnswer("");
          }

          return 0;
        }

        return time - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestion, navigate, questions.length]);

  /*
   * Select answer
   */
  const handleAnswer = (option) => {
    if (selectedAnswer) {
      return;
    }

    setSelectedAnswer(option);

    if (option === question.answer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  /*
   * Next question
   */
  const handleNext = () => {
    if (!selectedAnswer) {
      alert("Please select an answer.");
      return;
    }

    if (currentQuestion === questions.length - 1) {
      const finalScore =
        selectedAnswer === question.answer
          ? score + 1
          : score;

      navigate("/results", {
        state: {
          score: finalScore,
          total: questions.length,
        },
      });

      return;
    }

    setCurrentQuestion((prev) => prev + 1);
    setSelectedAnswer("");
  };

  return (
    <div className="quiz-page">

      <div className="quiz-header">

        <div className="quiz-logo">
          <span>Q</span>
          Quizly
        </div>

        <div className="quiz-progress">
          Question {currentQuestion + 1} of {questions.length}
        </div>

        <div className="quiz-timer">
          ⏱ {timeLeft}s
        </div>

        <div className="timer-bar">
          <div
            className="timer-progress"
            style={{
              width: `${(timeLeft / 20) * 100}%`,
            }}
          ></div>
        </div>

        <div className="quiz-player">
          {nickname}
        </div>

        <div className="quiz-score">
          Score: {score}
        </div>

      </div>

      <div className="quiz-card">

        <div className="question-number">
          Question {currentQuestion + 1}
        </div>

        <h1>{question.question}</h1>

        <div className="answer-grid">

          {question.options.map((option) => (
            <button
              key={option}
              className={`answer-button ${
                selectedAnswer
                  ? option === question.answer
                    ? "correct"
                    : selectedAnswer === option
                    ? "wrong"
                    : ""
                  : ""
              }`}
              onClick={() => handleAnswer(option)}
              disabled={!!selectedAnswer}
            >
              {option}
            </button>
          ))}

        </div>

        {selectedAnswer && (
          <div
            className={`answer-feedback ${
              selectedAnswer === question.answer
                ? "feedback-correct"
                : "feedback-wrong"
            }`}
          >
            {selectedAnswer === question.answer
              ? "🎉 Correct answer!"
              : `❌ Wrong answer! The correct answer is ${question.answer}.`}
          </div>
        )}

        <button
          className="next-button"
          onClick={handleNext}
        >
          {currentQuestion === questions.length - 1
            ? "Finish Quiz"
            : "Next Question"}
        </button>

      </div>

    </div>
  );
}

export default Quiz;