import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput/GuessInput";
import Guesses from "../Guesses/Guesses";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import CorrectBanner from "../CorrectBanner/CorrectBanner";
import InCorrectBanner from "../InCorrectBanner/InCorrectBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [prevGuesses, setPrevGuesses] = useState([]);
  const [correctGuess, setCorrectGuess] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const addPrevGuesses = (guess) => {
    if (guess === answer) {
      setCorrectGuess(true);
      setGameOver(true);
    }
    const answerMap = checkGuess(guess, answer);
    setPrevGuesses([...prevGuesses, answerMap]);
  };

  return (
    <>
      <Guesses prevGuesses={prevGuesses} />
      <GuessInput setPrevGuesses={addPrevGuesses} gameOver={gameOver} />
      {correctGuess ? (
        <CorrectBanner noOfGuesses={prevGuesses.length} />
      ) : (
        prevGuesses.length === NUM_OF_GUESSES_ALLOWED && (
          <InCorrectBanner correctAnswer={answer} />
        )
      )}
    </>
  );
}

export default Game;
