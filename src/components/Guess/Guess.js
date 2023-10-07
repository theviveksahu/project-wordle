import React from "react";
import { range } from "../../utils";

function Guess({ currentGuess }) {
  return (
    <>
      {range(0, 5).map((_, index) => (
        <span
          className={`cell ${
            currentGuess ? currentGuess[index]["status"] : ""
          }`}
          key={crypto.randomUUID()}
        >
          {currentGuess ? currentGuess[index]["letter"] : ""}
        </span>
      ))}
    </>
  );
}

export default Guess;
