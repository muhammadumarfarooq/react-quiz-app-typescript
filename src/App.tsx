import React, { useState } from 'react';
import { Difficulty, fetchQuizQuestions } from "./API";
import QuestionCard from "./components/QuestionCard";

const TOTAL_QUESTIONS = 10;

const App: React.FC = () => {
  const [gameOver, setGameOver] = useState(true);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  
  const handleStartQuiz = async () => {
    setGameOver(false);
    setLoading(true);
    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS,
      Difficulty.EASY);
    console.log(newQuestions);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setQuestionNumber(0);
    setLoading(false);
  };
  
  const handleNextQuestion = () => {
    const nextQuestion = questionNumber + 1;
    if ( nextQuestion === TOTAL_QUESTIONS ) {
      setGameOver(true);
    } else {
      setQuestionNumber(nextQuestion);
    }
  };
  
  
  return (
    <div className="App">
      <h1>Quiz App</h1>
      {gameOver && <button onClick={handleStartQuiz}>Start</button>}
      {!gameOver && <h2>Score: 0</h2>}
      {loading && <p>Loading Questions...</p>}
      {!loading && !gameOver && <QuestionCard
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[ questionNumber ].question}
        answers={questions[questionNumber].answers}
        handleNextQuestion={handleNextQuestion}
      />}
    </div>
  );
}

export default App;
