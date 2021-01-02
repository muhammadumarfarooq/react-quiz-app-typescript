import React from 'react';
import UserAnswer from "./UserAnswer";
import './styles/user-answer.css';

interface Props {
  userAnswers: AnswerObject[]
}

const QuizSummary: React.FC<Props> = ({ userAnswers }) => {
  return (
    <div className="quiz-summary">
      <p className="question-summary">Summary</p>
      {userAnswers.map((answer, index) => <UserAnswer key={answer.question} index={index} userAnswer={answer}/>)}
    </div>
  );
}

export default QuizSummary;
