import React from 'react';
import './styles/question-card.css';

interface Props {
  totalQuestions: number
  question: string
  answers: string[]
  questionNumber: number
  handleCheckAnswer: HandleCheckAnswer
  userAnswer: AnswerObject
}

const QuestionCard: React.FC<Props> = ({ totalQuestions, question, answers, questionNumber, handleCheckAnswer, userAnswer }) => {
  return (
    <div className="question-card">
      <p className="question-card--question-count">{`${questionNumber}/${totalQuestions}`}</p>
      <p className="question-card--question">{question}</p>
      <div className="question-card--btn-wrappers">
        {answers.map(answer =>
          <button
            disabled={Boolean(userAnswer)}
            key={answer}
            onClick={() => handleCheckAnswer(answer)}
            className={userAnswer?.correctAnswer === answer ? "answer-btn correct" : userAnswer?.answer === answer ? "answer-btn incorrect" : "answer-btn"}
          >
            {answer}
          </button>)}
      </div>
    </div>
  );
}

export default QuestionCard;
