import React from 'react';
import './styles/navbar.css';

interface Props {
  gameOver: boolean
  score: number
}

const Navbar: React.FC<Props> = ({ score, gameOver }) => {
  
  return (
    <nav className="navbar">
      <h1 className="navbar--title">Quiz App</h1>
      {!gameOver && <h2 className="navbar--score">Score: {score}</h2>}
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;
