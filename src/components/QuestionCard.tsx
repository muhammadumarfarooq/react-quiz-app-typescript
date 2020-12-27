import React from 'react';
import './styles/question-card.css';

interface Props {
  totalQuestions: number
}

const QuestionCard: React.FC<Props> = () => {
  return (
    <div className="question-card">
      <div className="question-card--btn-wrappers">
        <button className="answer-btn">Question 1</button>
        <button className="answer-btn">Question 2</button>
        <button className="answer-btn">Question 3</button>
        <button className="answer-btn">Question 4</button>
      </div>
      
      <button>Next Question</button>
    
    </div>
  );
}

export default QuestionCard;
