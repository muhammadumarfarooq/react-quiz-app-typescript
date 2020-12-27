import React, { useState } from 'react';
import { Difficulty, fetchQuizQuestions } from "./API";
import QuestionCard from "./components/QuestionCard";

const TOTAL_QUESTIONS = 10;

const App: React.FC = () => {
  const [gameOver, setGameOver] = useState(true);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [number, setNumber] = useState(0);
  
  const handleStartQuiz = async () => {
    setGameOver(false);
    setLoading(true);
    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS,
      Difficulty.EASY);
    console.log(newQuestions);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };
  return (
    <div className="App">
      <h1>Quiz App</h1>
      {gameOver && <button onClick={handleStartQuiz}>Start</button>}
      {!gameOver && <h2>Score: 0</h2>}
      {loading && <p>Loading Questions...</p>}
      <QuestionCard totalQuestions={TOTAL_QUESTIONS}/>
    </div>
  );
}

export default App;
