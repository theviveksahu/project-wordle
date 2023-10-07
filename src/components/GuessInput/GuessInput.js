import React, { useState } from "react";

function GuessInput({ setPrevGuesses, gameOver }) {
  const [guess, setGuess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(guess);
    setGuess("");
    setPrevGuesses(guess);
  };

  return (
    <div>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter Guess:</label>
        <input
          type="text"
          id="guess-input"
          value={guess}
          maxLength={5}
          pattern=".{5,5}"
          disabled={gameOver}
          onChange={(e) => {
            setGuess(e.target.value.toUpperCase());
          }}
        />
      </form>
    </div>
  );
}

export default GuessInput;
