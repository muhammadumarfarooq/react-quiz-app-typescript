import React from 'react';

interface Props {
  userAnswer: AnswerObject
  index: number
}

const UserAnswer: React.FC<Props> = ({ userAnswer, index }) => {
  const { question, answer, isCorrecrAnswer } = userAnswer;
  return (
    <section className="user-answer">
      <p>{index + 1} .</p>
      <p>{question}</p>
      <p>{answer}</p>
      {isCorrecrAnswer ? <p className="correct">Correct</p> : <p className="wrong">Wrong</p>}
    </section>
  );
};

UserAnswer.propTypes = {};

export default UserAnswer;
