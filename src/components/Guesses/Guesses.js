import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import Guess from "../Guess/Guess";

function Guesses({ prevGuesses }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((_, index) => (
        <p className="guess" key={crypto.randomUUID()}>
          <Guess currentGuess={prevGuesses[index]} />
        </p>
      ))}
    </div>
  );
}

export default Guesses;
