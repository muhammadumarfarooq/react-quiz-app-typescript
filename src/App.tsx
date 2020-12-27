import React, { useState } from 'react';

function App() {
  const [gameOver, setGameOver] = useState(true);
  const [loading, setLoading] = useState(false);
  
  const handleStartQuiz = () => {
    setGameOver(false);
    setLoading(true);
  };
  return (
    <div className="App">
      <h1>Quiz App</h1>
      {gameOver && <button onClick={handleStartQuiz}>Start</button>}
      {!gameOver && <h2>Score: 0</h2>}
      {loading && <p>Loading Questions...</p>}
    </div>
  );
}

export default App;
