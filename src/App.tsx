import React, { useState } from 'react';
import { Difficulty, fetchQuizQuestions } from "./API";
import QuestionCard from "./components/QuestionCard";
import QuizSummary from "./components/QuizSummary";

const TOTAL_QUESTIONS = 10;

const App: React.FC = () => {
  const [gameOver, setGameOver] = useState(true);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  
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
  
  const handleCheckAnswer = (answer: string) => {
    const isCorrecrAnswer = questions[ questionNumber ].correct_answer === answer;
    if ( isCorrecrAnswer ) setScore(currentScore => currentScore + 1);
    const answerObject = {
      question: questions[ questionNumber ].question,
      answer,
      isCorrecrAnswer,
      correctAnswer: questions[ questionNumber ].correct_answer,
    };
    setUserAnswers((userAnswers) => [...userAnswers, answerObject]);
  }
  
  return (
    <div className="App">
      <h1>Quiz App</h1>
      {( gameOver || userAnswers.length === TOTAL_QUESTIONS ) && <button onClick={handleStartQuiz}>Start</button>}
      {!gameOver && <h2>Score: {score}</h2>}
      {loading && <p>Loading Questions...</p>}
      {!loading && !gameOver && <QuestionCard
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[ questionNumber ].question}
        answers={questions[ questionNumber ].answers}
        userAnswer={userAnswers[ questionNumber ]}
        questionNumber={questionNumber + 1}
        handleCheckAnswer={handleCheckAnswer}
      />}
      {questionNumber + 1 === TOTAL_QUESTIONS && <QuizSummary userAnswers={userAnswers}/>}
      {!gameOver && !loading && userAnswers[ questionNumber ] && questionNumber !== TOTAL_QUESTIONS - 1 &&
      <button onClick={handleNextQuestion}>Next Question</button>}
    </div>
  );
}

export default App;
