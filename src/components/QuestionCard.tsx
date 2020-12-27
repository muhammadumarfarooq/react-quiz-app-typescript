import React from 'react';
import './styles/question-card.css';

interface Props {
  totalQuestions: number
  question: string
  handleNextQuestion: HandleNextQuestion
  answers: string[]
}

const QuestionCard: React.FC<Props> = ({ totalQuestions, question, handleNextQuestion, answers }) => {
  console.log(answers);
  return (
    <div className="question-card">
      <p>{`${1}/${totalQuestions}`}</p>
      <p>{question}</p>
      <div className="question-card--btn-wrappers">
        {
          answers.map(answer =>
            <button key={answer} className="answer-btn">{answer}</button>
          )
        }
      
      </div>
      
      <button onClick={handleNextQuestion}>Next Question</button>
    
    </div>
  );
}

export default QuestionCard;
