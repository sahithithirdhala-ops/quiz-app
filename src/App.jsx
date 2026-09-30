import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Register from "./Register";
import JoinQuiz from "./JoinQuiz";
import QuizLobby from "./QuizLobby";
import Quiz from "./Quiz";
import Results from "./Results";
import ProtectedRoute from "./ProtectedRoute";
import QuizHistory from "./QuizHistory";
import CreateQuiz from "./CreateQuiz";
import { Link } from "react-router-dom";

const occasions = [
  {
    title: "Quiz nights and trivia",
    text: "Host live quiz nights and trivia games that your friends will be talking about long after the night is over.",
    image:
      "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=1200&q=80",
    large: true,
  },
  {
    title: "Family game nights",
    text: "Bring everyone together with ready-to-play games for the whole family to enjoy.",
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80",
    large: true,
  },
  {
    title: "Parties and celebrations",
    text: "From birthday parties to weddings, add an interactive quiz and turn any gathering into an unforgettable experience.",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Learning for kids",
    text: "Boost children's reading, maths and coding skills with fun interactive games and activities.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Lifelong learn",
    text: "Learn a language, explore a hobby, or stay sharp. Create quizzes, browse games, or challenge friends.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
  },
];

const games = [
  {
    title: "Fun with Riddles",
    category: "Brain Games",
    questions: "20 questions",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "World Trivia",
    category: "Trivia",
    questions: "25 questions",
    image:
      "https://images.unsplash.com/photo-1521292270410-a8c4d716d518?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Science Challenge",
    category: "Science",
    questions: "15 questions",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Beautiful Places",
    category: "Geography",
    questions: "20 questions",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
];

const specialEvents = [
  {
    title: "Birthdays",
    image:
      "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Community events",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Sports nights",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Special events",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
  },
];

const faqs = [
  {
    question: "What is Quizly?",
    answer:
      "Quizly is an interactive platform where people can create, discover and play quizzes and games together.",
  },
  {
    question: "Can I use Quizly for free?",
    answer:
      "Yes. You can start creating and playing quizzes for free.",
  },
  {
    question: "Can I create my own quiz?",
    answer:
      "Yes. You can create your own questions and customize your quiz.",
  },
  {
    question: "Can students use Quizly?",
    answer:
      "Yes. Quizly can be used for classroom activities, revision and practice.",
  },
  {
    question: "Can I play with friends and family?",
    answer:
      "Yes. Quizly can be used for parties, family game nights and social events.",
  },
];

function App() {
  const savedUser = JSON.parse(localStorage.getItem("quizlyUser"));
const isLoggedIn = localStorage.getItem("quizlyLoggedIn") === "true";
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="app">

      {/* =====================================================
          NAVBAR - KEEPING THE SAME FIRST SECTION
      ====================================================== */}

      <header className="navbar">
        <div className="navbar-inner">

          <a className="brand" href="#">
            <span className="brand-mark">Q</span>
            <span>Quizly</span>
          </a>

          <nav className="main-nav">
            <a className="nav-active" href="#">
              HOME
            </a>

            <a href="#occasions">
              Social Gatherings
            </a>

            <a href="#occasions">
              Learning for Kids
            </a>

            <a href="#games">
              Study
            </a>

            <a href="#plans">
              Plans & Pricing
            </a>
          </nav>

          <div className="right-nav">
            <a href="#games">Explore Content</a>

            <a href="/join" className="join">Join</a>
          <a href="/create-quiz" className="join">
  Create Quiz
</a>
            <button className="nav-free">
              Start for FREE
            </button>

            {isLoggedIn ? (
  <div className="logged-in-user">
  <span className="nav-user">
    Hi, {savedUser?.name}
  </span>

  <a href="/history" className="nav-history">
    History
  </a>

  <button
    className="nav-logout"
    onClick={() => {
      localStorage.removeItem("quizlyLoggedIn");
      window.location.href = "/";
    }}
  >
    Log out
  </button>
</div>
) : (
  <a href="/login" className="nav-login">
    Log in
  </a>
)}

            <button className="language">
              ◉ EN-GB
            </button>
          </div>

        </div>
      </header>


      {/* =====================================================
          HERO - DO NOT CHANGE
      ====================================================== */}

      <section className="hero">

        <div className="hero-text">

          <h1>
            The best way to learn and play
          </h1>

          <p>
            From fun get-togethers with friends and family to engaging
            learning games and quizzes that keep you curious.
          </p>

          <div className="hero-offer">
            Enjoy interactive games and quizzes for every occasion with Quizly.
          </div>

          <div className="hero-buttons">

            <button className="hero-start">
              Get Started
            </button>

            <button className="hero-try">
              Try for free
            </button>

          </div>

        </div>


        <div className="hero-visual">

          <div className="game-screen">

            <div className="screen-frame">

              <div className="screen-header">

                <div className="screen-logo">
                  Quizly
                </div>

                <div className="screen-title">
                  Trivia night
                </div>

              </div>

              <div className="screen-body">

                <div className="background-window"></div>

                <div className="quiz-title">
                  Quiz Champions
                </div>

                <div className="podium-area">

                  <div className="podium-column second">

                    <div className="player-avatar avatar-blue">
                      ★
                    </div>

                    <div className="player-number">
                      2
                    </div>

                    <div className="player-name">
                      Alex
                    </div>

                    <div className="player-score">
                      8,420
                    </div>

                  </div>

                  <div className="podium-column first">

                    <div className="player-avatar avatar-yellow">
                      ★
                    </div>

                    <div className="player-number">
                      1
                    </div>

                    <div className="player-name">
                      Sam
                    </div>

                    <div className="player-score">
                      9,850
                    </div>

                  </div>

                  <div className="podium-column third">

                    <div className="player-avatar avatar-orange">
                      ★
                    </div>

                    <div className="player-number">
                      3
                    </div>

                    <div className="player-name">
                      Riya
                    </div>

                    <div className="player-score">
                      7,910
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>


          <div className="winner-phone">

            <div className="camera"></div>

            <div className="phone-inner">

              <div className="phone-brand">
                Quizly
              </div>

              <div className="phone-label">
                Trivia night
              </div>

              <div className="phone-name">
                Sam
              </div>

              <div className="medal">
                <span>1</span>
              </div>

              <div className="highest">
                Highest score!
              </div>

              <div className="phone-score">
                9,850 points
              </div>

              <div className="score-line">
                <span></span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          OCCASIONS - CHANGED TO MATCH YOUR SCREENSHOT
      ====================================================== */}

      <section className="occasions" id="occasions">

        <div className="section-intro">

          <div className="small-title">
            QUIZLY FOR EVERY OCCASION
          </div>

          <h2>
            For every occasion
          </h2>

          <p>
            Discover interactive games and quizzes for every moment,
            from parties and family nights to learning and study.
          </p>

        </div>


        <div className="occasion-grid">

          {occasions.map((item, index) => (

            <article
              className={`occasion-card ${
                item.large ? "occasion-large" : "occasion-small"
              }`}
              key={item.title}
            >

              <div className="occasion-card-content">

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

              </div>

              <div className="occasion-image">
                <img
                  src={item.image}
                  alt={item.title}
                />
              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================================
          PROMO BAR
      ====================================================== */}

      <div className="promo-bar">

        <div className="promo-message">
          <strong>
            Get Quizly+ from ₹299/mo. Save 20%.
          </strong>

          <span>
            Offer available for a limited time.
          </span>
        </div>

        <button>
          Buy now
        </button>

      </div>


      {/* =====================================================
          FREE VS PAID
      ====================================================== */}

      <section className="plans" id="plans">

        <div className="section-intro">

          <div className="small-title">
            PLANS & PRICING
          </div>

          <h2>
            Choose the experience that works for you
          </h2>

          <p>
            Start with Quizly for free or unlock more tools with Quizly+.
          </p>

        </div>


        <div className="plans-container">

          <div className="plan-card">

            <div className="plan-top">
              FREE
            </div>

            <h3>
              Quizly Free
            </h3>

            <div className="plan-price">
              ₹0
            </div>

            <p>
              Everything you need to start creating and playing quizzes.
            </p>

            <ul>
              <li>✓ Create quizzes</li>
              <li>✓ Join live games</li>
              <li>✓ Basic templates</li>
              <li>✓ Share with friends</li>
            </ul>

            <button>
              Start for free
            </button>

          </div>


          <div className="plan-card plan-plus">

            <div className="recommended">
              MOST POPULAR
            </div>

            <div className="plan-top">
              PLUS
            </div>

            <h3>
              Quizly+
            </h3>

            <div className="plan-price">
              ₹299
              <small>/month</small>
            </div>

            <p>
              More creative tools and customization for your quizzes.
            </p>

            <ul>
              <li>✓ Everything in Free</li>
              <li>✓ Advanced quiz tools</li>
              <li>✓ More customization</li>
              <li>✓ Detailed results</li>
            </ul>

            <button>
              Try Quizly+
            </button>

          </div>

        </div>

      </section>


      {/* =====================================================
          READY TO PLAY
      ====================================================== */}

      <section className="games" id="games">

        <div className="section-intro">

          <div className="small-title">
            READY-TO-PLAY
          </div>

          <h2>
            Discover ready-to-play games
          </h2>

          <p>
            Explore quizzes and games made for every interest.
          </p>

        </div>


        <div className="game-grid">

          {games.map((game) => (

            <article className="game-card" key={game.title}>

              <div className="game-image">

                <img
                  src={game.image}
                  alt={game.title}
                />

                <span>
                  {game.category}
                </span>

              </div>

              <div className="game-info">

                <h3>
                  {game.title}
                </h3>

                <p>
                  {game.questions}
                </p>

                <button>
                  Play now →
                </button>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================================
          APP SECTION
      ====================================================== */}

      <section className="app-section">

        <div className="app-copy">

          <div className="small-title">
            QUIZLY APP
          </div>

          <h2>
            One app,
            <br />
            unlimited fun
          </h2>

          <p>
            Create, discover and join games wherever you are.
          </p>

          <div className="stores">

            <button>
               App Store
            </button>

            <button>
              ▶ Google Play
            </button>

          </div>

        </div>


        <div className="app-phones">

          <div className="app-phone back-phone">

            <div className="app-screen">

              <div className="app-q">
                Q
              </div>

              <div className="fake-line"></div>
              <div className="fake-line small"></div>

              <div className="fake-box"></div>

            </div>

          </div>


          <div className="app-phone front-phone">

            <div className="app-screen">

              <div className="app-title">
                Your Quiz
              </div>

              <h3>
                Let's play!
              </h3>

              <div className="option">
                Science
              </div>

              <div className="option">
                History
              </div>

              <div className="option">
                Sports
              </div>

              <button>
                Start
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FAQ
      ====================================================== */}

      <section className="faq" id="faq">

        <div className="section-intro">

          <div className="small-title">
            QUESTIONS?
          </div>

          <h2>
            Frequently asked questions
          </h2>

        </div>


        <div className="faq-container">

          {faqs.map((faq, index) => (

            <div className="faq-item" key={faq.question}>

              <button
                onClick={() =>
                  setOpenFaq(
                    openFaq === index ? null : index
                  )
                }
              >

                <span>
                  {faq.question}
                </span>

                <strong>
                  {openFaq === index ? "−" : "+"}
                </strong>

              </button>

              {openFaq === index && (

                <div className="faq-answer">
                  {faq.answer}
                </div>

              )}

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          SPECIAL OCCASIONS
      ====================================================== */}

      <section className="special">

        <div className="section-intro">

          <div className="small-title">
            SPECIAL OCCASIONS
          </div>

          <h2>
            Bring fun to special moments
          </h2>

          <p>
            Make celebrations more interactive with Quizly.
          </p>

        </div>


        <div className="special-grid">

          {specialEvents.map((event) => (

            <article
              className="special-card"
              key={event.title}
            >

              <img
                src={event.image}
                alt={event.title}
              />

              <div className="special-card-content">

                <h3>
                  {event.title}
                </h3>

                <span>
                  Explore →
                </span>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer>

        <div className="footer-container">

          <div className="footer-brand">

            <div className="footer-logo">
              <span>Q</span>
              Quizly
            </div>

            <p>
              Learn, play and connect through interactive experiences.
            </p>

          </div>


          <div className="footer-column">

            <h4>
              Explore
            </h4>

            <a href="#games">
              Games
            </a>

            <a href="#occasions">
              Occasions
            </a>

            <a href="#plans">
              Plans
            </a>

            <a href="#faq">
              Help
            </a>

          </div>


          <div className="footer-column">

            <h4>
              Product
            </h4>

            <a href="#">
              Create
            </a>

            <a href="#">
              Discover
            </a>

            <a href="#">
              Join
            </a>

            <a href="#">
              Mobile app
            </a>

          </div>


          <div className="footer-column">

            <h4>
              Company
            </h4>

            <a href="#">
              About
            </a>

            <a href="#">
              Contact
            </a>

            <a href="#">
              Privacy
            </a>

            <a href="#">
              Terms
            </a>

          </div>

        </div>


        <div className="footer-bottom">

          <span>
            © 2026 Quizly. All rights reserved.
          </span>

          <span>
            Instagram&nbsp;&nbsp;&nbsp; Facebook&nbsp;&nbsp;&nbsp; YouTube
          </span>

        </div>

      </footer>

    </div>
  );
}

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<App />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/join" element={<JoinQuiz />} />

        <Route path="/lobby" element={<QuizLobby />} />

        <Route
          path="/quiz"
          element={
            <ProtectedRoute>
              <Quiz />
            </ProtectedRoute>
          }
        />

        <Route
          path="/results"
          element={
            <ProtectedRoute>
              <Results />
            </ProtectedRoute>
          }
        />

        <Route
          path="/history"
          element={
            <ProtectedRoute>
              <QuizHistory />
            </ProtectedRoute>
          }
        />

        <Route
          path="/create-quiz"
          element={
            <ProtectedRoute>
              <CreateQuiz />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;